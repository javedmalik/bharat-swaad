import HeroSlider from "@/components/home/hero-slider";
import AboutSection from "@/components/home/about-section";
import ProductsSection from "@/components/home/products-section";
import WhyChooseUs from "@/components/home/why-choose-us";
import ProcessSection from "@/components/home/process-section";
import TestimonialsSection from "@/components/home/testimonials-section";
import ContactCta from "@/components/home/contact-cta";
import CertificationsSection from "@/components/home/certifications-section";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <ProductsSection />
      <WhyChooseUs />
      <CertificationsSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactCta />
    </>
  );
}