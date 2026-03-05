import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LINE_CHANNEL_ACCESS_TOKEN = Deno.env.get("LINE_CHANNEL_ACCESS_TOKEN");
    const LINE_USER_ID = Deno.env.get("LINE_USER_ID");

    if (!LINE_CHANNEL_ACCESS_TOKEN) {
      throw new Error("LINE_CHANNEL_ACCESS_TOKEN is not configured");
    }
    if (!LINE_USER_ID) {
      throw new Error("LINE_USER_ID is not configured");
    }

    const booking = await req.json();

    // Save to database
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { error: dbError } = await supabase.from("bookings").insert({
      type: booking.type,
      date: booking.date,
      time: booking.time,
      passengers: booking.passengers,
      luggage: booking.luggage,
      city: booking.city,
      district: booking.district,
      flight_no: booking.flightNo || null,
      name: booking.name,
      phone: booking.phone,
      sign_board: booking.signBoard,
      child_seat: booking.childSeat,
      notes: booking.notes || null,
    });

    if (dbError) {
      console.error("DB insert error:", dbError);
      throw new Error(`Database error: ${dbError.message}`);
    }

    // Build LINE push message
    const signBoardText = booking.signBoard
      ? `✅ 舉牌接機：是\n`
      : `舉牌接機：否\n`;
    const childSeatText =
      booking.childSeat !== "0"
        ? `🪑 兒童座椅：${booking.childSeat} 件\n`
        : "";
    const flightText = booking.flightNo ? `✈️ 班機號碼：${booking.flightNo}\n` : "";
    const notesText = booking.notes ? `📝 備註：${booking.notes}\n` : "";

    const messageText =
      `🚗 新預約通知\n` +
      `━━━━━━━━━━━━━━\n` +
      `📋 服務類型：${booking.type}\n` +
      `📅 日期：${booking.date}\n` +
      `⏰ 時間：${booking.time}\n` +
      `👥 人數：${booking.passengers} 人\n` +
      `🧳 行李：${booking.luggage} 件\n` +
      `📍 縣市：${booking.city}\n` +
      `🏠 地址：${booking.district}\n` +
      flightText +
      `━━━━━━━━━━━━━━\n` +
      `👤 姓名：${booking.name}\n` +
      `📞 電話：${booking.phone}\n` +
      `━━━━━━━━━━━━━━\n` +
      signBoardText +
      childSeatText +
      notesText;

    const lineResponse = await fetch("https://api.line.me/v2/bot/message/push", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LINE_CHANNEL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        to: LINE_USER_ID,
        messages: [{ type: "text", text: messageText }],
      }),
    });

    if (!lineResponse.ok) {
      const errBody = await lineResponse.text();
      throw new Error(`LINE API error [${lineResponse.status}]: ${errBody}`);
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("send-line-notification error:", message);
    return new Response(
      JSON.stringify({ success: false, error: message }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
    );
  }
});
