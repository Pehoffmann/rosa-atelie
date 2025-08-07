import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F2F1ED]">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
