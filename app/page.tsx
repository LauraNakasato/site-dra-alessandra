"use client";

import Header from "@/components/Header";
import WhyChoose from "@/components/WhyChoose";
import OnlineService from "@/components/OnlineTherapy";
import InPersonTherapy from "@/components/InPersonTherapy";
import AboutMe from "@/components/AboutMe";
import Testimonials from "@/components/Testimonials";
import InstagramCarousel from "@/components/InstagramCarousel";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut", delay: 0.6 }
    },
  };

  return (
    <main className="min-h-screen bg-brand-peach overflow-hidden">
      <Header />

      {/* HERO SECTION - Aumento do espaçamento superior no mobile (pt-48) */}
      <section className="relative pt-48 pb-16 md:pt-48 md:pb-24 lg:pt-52 lg:pb-32">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-brand-rose/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-brand-mauve/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* COLUNA ESQUERDA - Adicionado mt-8 para empurrar o texto um pouco mais para baixo no mobile */}
            <motion.div
              className="flex-1 flex flex-col items-center text-center z-10 w-full mt-8 md:mt-0"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                variants={itemVariants}
                className="font-serif text-4xl sm:text-5xl lg:text-7xl text-brand-text leading-[1.1] mb-8"
              >
                Excelência clínica <br />
                <span className="italic font-normal text-[#D95B6A] relative">
                  com um olhar humano.
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="font-sans text-brand-text/70 text-base md:text-lg lg:text-xl max-w-xl mx-auto mb-12 leading-relaxed"
              >
                Avaliação Neuropsicológica e Terapia Cognitivo-Comportamental (TCC). Um espaço seguro, guiado pela ciência, para cuidar da sua saúde mental.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex w-full items-center justify-center"
              >
                <a
                  href="https://wa.me/5511964879227?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
                  target="_blank"
                  className="group relative px-12 py-6 bg-[#D95B6A] text-white font-sans uppercase tracking-[0.15em] text-sm md:text-base font-bold rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(217,91,106,0.5)] w-full sm:w-auto text-center"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Agendar Consulta
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </motion.div>
            </motion.div>

            {/* COLUNA DIREITA */}
            <motion.div
              className="flex-1 relative w-full max-w-[500px] lg:max-w-none flex flex-col items-center lg:items-end"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="relative w-full aspect-[4/5] max-w-[420px] rounded-t-full overflow-hidden border-[12px] border-white/40 shadow-2xl z-10 backdrop-blur-sm bg-brand-mauve/10">
                <Image
                  src="/foto-hero.png"
                  alt="Dra. Alessandra Begatti"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Assinatura Profissional */}
              <div className="mt-6 text-center lg:text-right">
                <p className="font-sans text-sm font-medium text-brand-text/60 tracking-[0.2em] uppercase">
                  CRP 06/75694
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* TODAS AS SEÇÕES RESTAURADAS */}
      <WhyChoose />
      <OnlineService />
      <InPersonTherapy />
      <AboutMe />
      <Testimonials />
      <InstagramCarousel />
      <ContactSection />
      <Footer />

    </main>
  );
}