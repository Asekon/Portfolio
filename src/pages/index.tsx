import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { Inter } from "next/font/google";
import Head from "next/head";

import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [csr, setCSR] = useState(false);
  useEffect(() => {
    setCSR(typeof window !== "undefined");
  }, []);

  if (csr)
    return (
      <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <Head>
          <title>Omars Portofolio</title>
        </Head>

        <Header />

        <section id="hero" className="snap-start">
          <Hero />
        </section>

        <section id="about" className="snap-center">
          <About />
        </section>

        <section id="experience" className="snap-center">
          <Experience />
        </section>

        <section id="skills" className="snap-start">
          <Skills />
        </section>

        <section id="projects" className="snap-start">
          <Projects />
        </section>

        <section id="contact" className="snap-start">
          <ContactMe />
        </section>
      </div>
    );
}
