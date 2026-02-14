import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Problems from "@/components/landing/Problems";
import Solution from "@/components/landing/Solution";
import VideoSection from "@/components/landing/VideoSection";
import Results from "@/components/landing/Results";
import GlobalTrust from "@/components/landing/GlobalTrust";
import HowItWorks from "@/components/landing/HowItWorks";
import FinalCTA from "@/components/landing/FinalCTA";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Problems />
      <Solution />
      <VideoSection />
      <Results />
      <GlobalTrust />
      <HowItWorks />
      <FinalCTA />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
