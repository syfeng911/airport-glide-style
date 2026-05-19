import { Plane, Shield, Users, Clock } from "lucide-react";
import travelBg from "@/assets/service-travel.jpg";
import safeBg from "@/assets/service-safe.jpg";
import professionalBg from "@/assets/service-professional.jpg";
import h24Bg from "@/assets/service-24h.jpg";

const services = [
  {
    icon: Plane,
    title: "出國旅遊",
    desc: "出國旅遊擔心交通？商務出差害怕找不到停車位？讓我們免除您的交通煩惱，GoHome 是您出國旅遊、商務差旅的最佳夥伴。",
    bg: travelBg,
  },
  {
    icon: Shield,
    title: "溫馨接送",
    desc: "司機皆有職業駕照、良民證，無肇事紀錄。合法租賃車輛，乘客全程投保乘客險，最專業的車隊以不同車型服務每一位客人。",
    bg: safeBg,
  },
  {
    icon: Users,
    title: "專業服務",
    desc: "自有經驗豐富的專業司機，服務態度誠懇有禮。通訊軟體一對一對談讓溝通無障礙，滿足客戶需求，客戶資料絕不外流。",
    bg: professionalBg,
  },
  {
    icon: Clock,
    title: "全年無休",
    desc: "無論早晚深夜，飛機誤點皆不額外收費。24小時隨時待命，節假日不加價，讓您的每一趟旅程都無後顧之憂。",
    bg: h24Bg,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-subtitle">OUR SERVICES</p>
        <h2 className="section-title">服務特色</h2>
        <div className="gold-divider" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="card-glass rounded-2xl p-8 group hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
              style={{ transition: "border-color 0.3s, transform 0.3s", transform: "translateY(0)" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <div
                aria-hidden
                className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                style={{ backgroundImage: `url(${s.bg})` }}
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40"
              />
              <div className="relative">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ background: "var(--gradient-gold)" }}
              >
                <s.icon size={24} className="text-black" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
