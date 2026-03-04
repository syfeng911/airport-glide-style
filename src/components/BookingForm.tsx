import { useState } from "react";
import { ChevronRight, ChevronLeft, MapPin, User, Star } from "lucide-react";

const cities = ["臺北市", "基隆市", "新北市", "宜蘭縣", "新竹市", "新竹縣", "桃園市", "苗栗縣", "臺中市"];

const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    type: "送機",
    date: "",
    time: "",
    passengers: "1",
    luggage: "1",
    city: "",
    district: "",
    flightNo: "",
    name: "",
    phone: "",
    signBoard: false,
    childSeat: "0",
    notes: "",
  });

  const update = (field: string, val: string | boolean) =>
    setFormData((p) => ({ ...p, [field]: val }));

  const steps = [
    { num: 1, label: "行程資訊", icon: MapPin },
    { num: 2, label: "基本資料", icon: User },
    { num: 3, label: "額外服務", icon: Star },
  ];

  const inputClass =
    "w-full bg-input border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition";

  const selectClass =
    "w-full bg-input border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/60 transition appearance-none";

  return (
    <section id="booking" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="section-subtitle">BOOKING</p>
        <h2 className="section-title">立即預約</h2>
        <div className="gold-divider" />

        {/* Step indicator */}
        <div className="flex items-center justify-center mb-10 gap-0">
          {steps.map((s, i) => (
            <div key={s.num} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    step >= s.num
                      ? "text-black font-bold"
                      : "bg-secondary text-muted-foreground"
                  }`}
                  style={step >= s.num ? { background: "var(--gradient-gold)" } : {}}
                >
                  {step > s.num ? "✓" : s.num}
                </div>
                <span className={`text-xs mt-1 ${step >= s.num ? "text-primary" : "text-muted-foreground"}`}>
                  {s.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className="w-20 h-px mx-3 mb-4 transition-all duration-300"
                  style={{ background: step > s.num ? "var(--gradient-gold)" : "hsl(var(--border))" }}
                />
              )}
            </div>
          ))}
        </div>

        <div className="card-glass rounded-2xl p-8">
          {/* Step 1 */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-xs text-muted-foreground mb-2 tracking-wide">服務類型</label>
                <div className="flex gap-3">
                  {["送機", "接機"].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => update("type", t)}
                      className={`flex-1 py-3 rounded-xl text-sm font-semibold border transition-all ${
                        formData.type === t
                          ? "border-primary text-primary bg-primary/10"
                          : "border-border text-muted-foreground hover:border-primary/40"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                {formData.type === "送機" && (
                  <p className="text-xs text-muted-foreground mt-2 pl-1">請填寫住家出發時間（登機前2H + 車程時間）</p>
                )}
                {formData.type === "接機" && (
                  <p className="text-xs text-muted-foreground mt-2 pl-1">請填班機落地時間，正確班機號碼方可追蹤</p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-muted-foreground mb-2 tracking-wide">日期</label>
                  <input type="date" className={inputClass} value={formData.date} onChange={(e) => update("date", e.target.value)} />
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground mb-2 tracking-wide">時間</label>
                  <input type="time" className={inputClass} value={formData.time} onChange={(e) => update("time", e.target.value)} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-muted-foreground mb-2 tracking-wide">人數</label>
                  <select className={selectClass} value={formData.passengers} onChange={(e) => update("passengers", e.target.value)}>
                    {Array.from({ length: 8 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n}>{n} 人</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground mb-2 tracking-wide">行李件數</label>
                  <select className={selectClass} value={formData.luggage} onChange={(e) => update("luggage", e.target.value)}>
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n}>{n} 件</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-2 tracking-wide">乘車縣市</label>
                <select className={selectClass} value={formData.city} onChange={(e) => update("city", e.target.value)}>
                  <option value="">請選擇縣市</option>
                  {cities.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-2 tracking-wide">詳細地址</label>
                <input type="text" placeholder="請輸入詳細地址" className={inputClass} value={formData.district} onChange={(e) => update("district", e.target.value)} />
              </div>
              {formData.type === "接機" && (
                <div>
                  <label className="block text-xs text-muted-foreground mb-2 tracking-wide">班機號碼</label>
                  <input type="text" placeholder="例：CI-100" className={inputClass} value={formData.flightNo} onChange={(e) => update("flightNo", e.target.value)} />
                </div>
              )}
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-xs text-muted-foreground mb-2 tracking-wide">旅客姓名</label>
                <input type="text" placeholder="請輸入姓名" className={inputClass} value={formData.name} onChange={(e) => update("name", e.target.value)} />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-2 tracking-wide">聯絡電話</label>
                <input type="tel" placeholder="請輸入手機號碼" className={inputClass} value={formData.phone} onChange={(e) => update("phone", e.target.value)} />
              </div>
              <div className="card-glass rounded-xl p-5 border border-border">
                <h4 className="text-sm font-semibold text-foreground mb-3">行程確認</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">服務類型</span>
                    <span className="text-foreground font-medium">{formData.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">日期時間</span>
                    <span className="text-foreground font-medium">{formData.date} {formData.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">人數 / 行李</span>
                    <span className="text-foreground font-medium">{formData.passengers}人 / {formData.luggage}件</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">乘車地點</span>
                    <span className="text-foreground font-medium">{formData.city} {formData.district}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="space-y-6">
              <div
                className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                  formData.signBoard ? "border-primary/60 bg-primary/5" : "border-border"
                }`}
                onClick={() => update("signBoard", !formData.signBoard)}
              >
                <div>
                  <p className="text-sm font-semibold text-foreground">專業代客舉牌接機</p>
                  <p className="text-xs text-muted-foreground mt-0.5">2300–0600 加收 $200，其他時段 +$100</p>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    formData.signBoard ? "border-primary" : "border-border"
                  }`}
                  style={formData.signBoard ? { background: "var(--gradient-gold)", borderColor: "transparent" } : {}}
                >
                  {formData.signBoard && <span className="text-black text-xs font-bold">✓</span>}
                </div>
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-2 tracking-wide">兒童安全座椅</label>
                <select className={selectClass} value={formData.childSeat} onChange={(e) => update("childSeat", e.target.value)}>
                  {[0, 1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>{n === 0 ? "不需要" : `${n} 件（每件加 $100）`}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-2 tracking-wide">備註</label>
                <textarea
                  className={`${inputClass} resize-none`}
                  rows={4}
                  placeholder="其他需求或特殊說明..."
                  value={formData.notes}
                  onChange={(e) => update("notes", e.target.value)}
                />
              </div>
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                <p className="text-xs text-primary text-center">
                  完成後請加入 LINE 官方帳號 <strong>@200ycrlk</strong> 完成預約確認
                </p>
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-3 mt-8">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground transition text-sm"
              >
                <ChevronLeft size={16} />
                上一步
              </button>
            )}
            {step < 3 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="btn-gold flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold"
              >
                下一步
                <ChevronRight size={16} />
              </button>
            ) : (
              <a
                href="https://line.me/R/ti/p/@200ycrlk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold"
              >
                加入 LINE 完成預約
                <ChevronRight size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
