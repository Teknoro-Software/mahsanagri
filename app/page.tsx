import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Features from "@/components/landing/Features";
import Stats from "@/components/landing/Stats";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import LeafDivider from "@/components/LeafDivider";

export default function Home() {
  return (
    <>
      <Navbar/>

      <Hero />

      <LeafDivider />

      <About />

      <LeafDivider flip />

      <Features />

      <LeafDivider />

      <Stats />

      <LeafDivider flip />

      <CTA />

      <Footer />

    </>
  );
}
