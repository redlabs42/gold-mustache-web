import { ContactSection } from "@/components/sections/ContactSection";
import { EventsSection } from "@/components/custom/EventsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SponsorsSection } from "@/components/sections/SponsorsSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <InstagramSection />
      <EventsSection />
      <SponsorsSection />
      <ContactSection />
    </div>
  );
}
