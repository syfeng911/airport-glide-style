import { Car, Bus } from "lucide-react";

const airportPrices = [
  { city: "基隆", sedan5Send: 1300, sedan5Pick: 1400, van9Send: 1700, van9Pick: 1800 },
  { city: "雙北", sedan5Send: 900, sedan5Pick: 1000, van9Send: 1400, van9Pick: 1500 },
  { city: "桃園", sedan5Send: 700, sedan5Pick: 800, van9Send: 1000, van9Pick: 1100 },
  { city: "新竹", sedan5Send: 1100, sedan5Pick: 1200, van9Send: 1600, van9Pick: 1700 },
  { city: "苗栗", sedan5Send: 1800, sedan5Pick: 1900, van9Send: 2500, van9Pick: 2600 },
  { city: "台中", sedan5Send: 2600, sedan5Pick: 2700, van9Send: 3000, van9Pick: 3100 },
  { city: "宜蘭", sedan5Send: 2200, sedan5Pick: 2300, van9Send: 2800, van9Pick: 2900 },
];

const charterPrices = [
  { type: "五人座", hourly: 500, h3: 2500, h8: 4500, h10: 5000 },
  { type: "九人座", hourly: 600, h3: 3500, h8: 5500, h10: 6000 },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-28 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <p className="section-subtitle">PRICING</p>
        <h2 className="section-title">機場接送報價表</h2>
        <div className="gold-divider" />
        <p className="text-center text-xs text-muted-foreground -mt-6 mb-10">桃園機場接送 · 以下報價皆為基本報價，進口車另報價</p>

        {/* Airport Pricing Table */}
        <div className="card-glass rounded-2xl overflow-hidden mb-10">
          <div className="p-6 border-b border-border">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-gold)" }}>
                <Car size={16} className="text-black" />
              </span>
              機場接送報價
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-6 text-muted-foreground font-medium w-24">地區</th>
                  <th className="py-4 px-3 text-center" colSpan={2}>
                    <div className="flex items-center justify-center gap-2 text-foreground font-semibold">
                      <Car size={16} className="text-primary" />
                      五人座
                    </div>
                    <div className="text-xs text-muted-foreground font-normal mt-0.5">最多4人4行李</div>
                  </th>
                  <th className="py-4 px-3 text-center" colSpan={2}>
                    <div className="flex items-center justify-center gap-2 text-foreground font-semibold">
                      <Bus size={16} className="text-primary" />
                      九人座
                    </div>
                    <div className="text-xs text-muted-foreground font-normal mt-0.5">最多8人8行李</div>
                  </th>
                </tr>
                <tr className="border-b border-border bg-secondary/30">
                  <th className="py-3 px-6"></th>
                  <th className="py-3 px-3 text-center text-xs text-muted-foreground font-medium">送機</th>
                  <th className="py-3 px-3 text-center text-xs text-muted-foreground font-medium">接機</th>
                  <th className="py-3 px-3 text-center text-xs text-muted-foreground font-medium">送機</th>
                  <th className="py-3 px-3 text-center text-xs text-muted-foreground font-medium">接機</th>
                </tr>
              </thead>
              <tbody>
                {airportPrices.map((row, i) => (
                  <tr
                    key={row.city}
                    className={`border-b border-border/50 hover:bg-secondary/30 transition-colors ${i % 2 === 0 ? "" : "bg-secondary/10"}`}
                  >
                    <td className="py-4 px-6 font-semibold text-foreground">{row.city}</td>
                    <td className="py-4 px-3 text-center price-tag font-bold">${row.sedan5Send.toLocaleString()}</td>
                    <td className="py-4 px-3 text-center price-tag font-bold">${row.sedan5Pick.toLocaleString()}</td>
                    <td className="py-4 px-3 text-center price-tag font-bold">${row.van9Send.toLocaleString()}</td>
                    <td className="py-4 px-3 text-center price-tag font-bold">${row.van9Pick.toLocaleString()}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={5} className="py-4 px-6 text-center text-xs text-muted-foreground italic">
                    其他地區及較偏遠地區，請加入官方帳號詢問
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Charter Pricing */}
        <div className="card-glass rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-border">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-gold)" }}>
                <Bus size={16} className="text-black" />
              </span>
              包車旅遊價目表
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary/30">
                  <th className="text-left py-4 px-6 text-muted-foreground font-medium">車型</th>
                  <th className="py-4 px-4 text-center text-muted-foreground font-medium">時薪</th>
                  <th className="py-4 px-4 text-center text-muted-foreground font-medium">3小時</th>
                  <th className="py-4 px-4 text-center text-muted-foreground font-medium">8小時</th>
                  <th className="py-4 px-4 text-center text-muted-foreground font-medium">10小時</th>
                </tr>
              </thead>
              <tbody>
                {charterPrices.map((row, i) => (
                  <tr key={row.type} className={`border-b border-border/50 hover:bg-secondary/30 transition-colors ${i % 2 === 0 ? "" : "bg-secondary/10"}`}>
                    <td className="py-4 px-6 font-semibold text-foreground">{row.type}</td>
                    <td className="py-4 px-4 text-center text-muted-foreground">${row.hourly}/hr</td>
                    <td className="py-4 px-4 text-center price-tag font-bold">${row.h3.toLocaleString()}</td>
                    <td className="py-4 px-4 text-center price-tag font-bold">${row.h8.toLocaleString()}</td>
                    <td className="py-4 px-4 text-center price-tag font-bold">${row.h10.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
