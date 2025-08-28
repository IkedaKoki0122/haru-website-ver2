import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import CTASection from "../components/CTASection";
import AboutSection from "../components/AboutSection";
import FeaturesSection from "../components/FeaturesSection";
import CoursesSection from "../components/CoursesSection";
import SchoolsSection from "../components/SchoolsSection";
import NewsSection from "../components/NewsSection";
import FinalCTASection from "../components/FinalCTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <TestimonialsCarousel />
        <CTASection />
        <AboutSection />
        <FeaturesSection />
        <CoursesSection />
        <CTASection />
        <SchoolsSection />
        <NewsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}