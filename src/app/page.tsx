import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <Header />
      <main>
        <Hero />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
