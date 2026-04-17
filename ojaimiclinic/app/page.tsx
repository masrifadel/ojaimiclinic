import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <About />
      <ContactSection />
    </div>
  );
}
