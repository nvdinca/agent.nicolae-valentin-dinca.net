import { PortfolioBanner } from "@/components/PortfolioBanner";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Listings } from "@/components/Listings";
import { Areas } from "@/components/Areas";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <PortfolioBanner />
      <Header />
      <main className="w-full min-w-0 overflow-x-hidden">
        <Hero />
        <About />
        <Services />
        <Listings />
        <Areas />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
