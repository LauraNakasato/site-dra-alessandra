"use client";

import { MapPin, Sofa, Puzzle } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function InPersonTherapy() {
    return (
        <section id="presencial" className="py-24 bg-brand-mauve/10">
            <div className="max-w-7xl mx-auto px-6 sm:px-10">
                <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-10 lg:gap-24">

                    {/* COLUNA TEXTO E CAIXAS FLUTUANTES */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 lg:max-w-xl flex flex-col"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <MapPin className="text-[#D95B6A]" size={20} />
                            <span className="font-sans uppercase tracking-[0.15em] text-xs font-bold text-[#D95B6A]">
                                Nosso Espaço
                            </span>
                        </div>

                        <h2 className="font-serif text-3xl md:text-5xl text-brand-text mb-6 lg:mb-6 leading-tight">
                            Atendimento <span className="italic font-normal text-[#D95B6A]">Presencial</span>
                        </h2>

                        {/* IMAGEM MOBILE: Aparece apenas no celular, entre o título e o texto */}
                        <div className="block lg:hidden w-full mb-10">
                            <div className="relative w-full max-w-[420px] mx-auto aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border-[8px] border-white/50 bg-white/10">
                                <Image
                                    src="/foto-consultorio.png"
                                    alt="Janela do consultório presencial"
                                    fill
                                    sizes="(max-width: 768px) 100vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <p className="font-sans text-brand-text/70 text-lg leading-relaxed mb-10">
                            Um espaço de acolhimento pensado em cada detalhe para oferecer conforto, segurança e a infraestrutura necessária para todas as idades.
                        </p>

                        {/* Caixas Detalhadas (Estilo Instagram/Glassmorphism) */}
                        <div className="space-y-5">
                            {/* Card Adolescentes e Adultos */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white shadow-sm flex gap-5 items-start hover:bg-white/80 transition-colors"
                            >
                                <div className="w-12 h-12 bg-brand-peach rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
                                    <Sofa className="text-brand-text" size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="font-serif text-lg text-brand-text mb-1">Para Adolescentes e Adultos</h3>
                                    <p className="font-sans text-sm text-brand-text/70 leading-relaxed">
                                        Um ambiente privativo e tranquilo, pensado para oferecer o máximo de conforto durante os atendimentos.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Card Crianças */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white shadow-sm flex gap-5 items-start hover:bg-white/80 transition-colors"
                            >
                                <div className="w-12 h-12 bg-brand-peach rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
                                    <Puzzle className="text-brand-text" size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="font-serif text-lg text-brand-text mb-1">Para Crianças</h3>
                                    <p className="font-sans text-sm text-brand-text/70 leading-relaxed">
                                        Espaço lúdico e adaptado para que os pequenos se sintam totalmente seguros nas terapias e avaliações.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* COLUNA IMAGEM DESKTOP */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="hidden lg:flex flex-1 w-full relative justify-center"
                    >
                        <div className="relative w-full aspect-[4/5] max-w-[480px] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border-[8px] border-white/50 bg-white/10">
                            <Image
                                src="/foto-consultorio.png"
                                alt="Janela do consultório presencial"
                                fill
                                sizes="(min-width: 1024px) 50vw"
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}