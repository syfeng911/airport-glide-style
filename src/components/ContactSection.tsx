import { CheckCircle } from "lucide-react";

const notices = [
  "無論早晚，深夜接送以及飛機誤點皆不額外收費。",
  "車輛皆為合法租賃車輛，並享有乘客意外險，司機領有職業駕照、品行良好並有良民證。",
  "完成預約，以軟體或簡訊通知客戶。一對一回覆、客戶資料皆不外流。",
  "臨時更改返國航班，請於第一時間通知，本公司有權利派車輛或取消服務。",
  "專業代客舉牌接機服務加收 $200 元。",
  "市區共乘加點每點是車程距離加收 $100 起，歡迎詢問多加利用。",
  "取消訂車請於用車前三小時通知，否則將收取 1/2 車資。",
  "目前暫無刷卡功能，如需其他付費需求請先詢問。",
  "若有孩童12歲以下搭乘需安全座椅，請事先告知（加收 $200）。",
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact */}
          <div>
            <p className="section-subtitle text-left mb-1 ml-0" style={{ textAlign: "left" }}>CONTACT US</p>
            <h2 className="section-title text-left mb-3" style={{ textAlign: "left", WebkitTextFillColor: "unset", background: "none" }}>
              <span className="price-tag">聯絡我們</span>
            </h2>
            <div className="h-0.5 w-14 mb-8" style={{ background: "var(--gradient-gold)" }} />
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              歡迎加入 LINE 官方帳號，我們將一對一為您服務，<br />
              提供即時報價與預約確認。
            </p>
            <div className="card-glass rounded-2xl p-8 text-center inline-block">
              <div
                className="w-48 h-48 rounded-2xl mx-auto mb-4 flex items-center justify-center text-black font-bold text-4xl"
                style={{ background: "var(--gradient-gold)" }}
              >
                LINE
              </div>
              <p className="text-sm text-muted-foreground">官方帳號</p>
              <p className="text-lg font-bold text-primary mt-1">@200ycrlk</p>
              <a
                href="https://line.me/R/ti/p/@200ycrlk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-4 px-8 py-3 rounded-xl text-sm font-bold inline-block"
              >
                立即加入 LINE
              </a>
            </div>
          </div>

          {/* Notices */}
          <div>
            <p className="section-subtitle text-left mb-1" style={{ textAlign: "left" }}>IMPORTANT NOTES</p>
            <h2 className="section-title text-left mb-3" style={{ textAlign: "left", WebkitTextFillColor: "unset", background: "none" }}>
              <span className="price-tag">注意事項</span>
            </h2>
            <div className="h-0.5 w-14 mb-8" style={{ background: "var(--gradient-gold)" }} />
            <div className="space-y-4">
              {notices.map((notice, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={16} className="mt-0.5 shrink-0 text-primary" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{notice}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
