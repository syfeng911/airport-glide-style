import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import BookingForm from "@/components/BookingForm";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <BookingForm />
      <ContactSection />
      <footer className="py-8 text-center border-t border-border">
        <p className="text-xs text-muted-foreground tracking-wide">
          © 2024 GoHome 機場接送 · 24小時全年無休 · 桃園機場接送專家
        </p>
      </footer>
    </main>
  );
};

export default Index;
