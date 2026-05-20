import { useState, useEffect, useCallback } from "react";
import heroCar from "@/assets/hero-car.jpg";
import heroCar2 from "@/assets/hero-car2.jpg";
import heroCar3 from "@/assets/hero-car3.jpg";

const slides = [heroCar, heroCar2, heroCar3];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {slides.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${src})`,
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "var(--gradient-gold)" }}>
            <span className="text-black font-bold text-sm">24H</span>
          </div>
          <span className="text-foreground font-bold text-lg tracking-wider" style={{ fontFamily: "'Noto Serif TC', serif" }}>
            GoHome 機場接送
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-primary transition-colors tracking-wide">服務特色</a>
          <a href="#pricing" className="hover:text-primary transition-colors tracking-wide">價目表</a>
          <a href="#booking" className="hover:text-primary transition-colors tracking-wide">立即預約</a>
          <a href="#contact" className="btn-gold px-5 py-2 rounded-full text-sm">聯絡我們</a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/40 text-xs tracking-[0.3em] text-primary uppercase">
          專業 · 安全 · 舒適
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-foreground">
          桃園機場
          <span className="block price-tag">頂級接送服務</span>
        </h1>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          24小時全年無休，深夜誤點不加價<br />
          合法車輛、職業司機、乘客保險一應俱全
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#booking" className="btn-gold px-10 py-4 rounded-full text-base font-bold inline-block">
            立即預約
          </a>
          <a href="#pricing" className="px-10 py-4 rounded-full text-base font-semibold inline-block border border-primary/50 text-primary hover:bg-primary/10 transition-colors">
            查看價目表
          </a>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row gap-8 justify-center text-center">
          {[
            { num: "24H", label: "全年無休" },
            { num: "100%", label: "合法車輛" },
            { num: "0元", label: "誤點加收" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <span className="text-3xl font-black price-tag">{item.num}</span>
              <span className="text-xs text-muted-foreground tracking-widest mt-1">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="w-2.5 h-2.5 rounded-full transition-all duration-300"
            style={{
              backgroundColor: i === current ? "hsl(var(--primary))" : "rgba(255,255,255,0.3)",
              transform: i === current ? "scale(1.3)" : "scale(1)",
            }}
            aria-label={`切換到第 ${i + 1} 張輪播圖`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground tracking-widest">SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
