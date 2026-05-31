"use client";

import { MapPin, Sofa, Puzzle } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function InPersonTherapy() {
    return (
        <section id="presencial" className="py-24 bg-brand-mauve/10">
            <div className="max-w-7xl mx-auto px-6 sm:px-10">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">

                    {/* COLUNA DIREITA: TEXTO E CAIXAS FLUTUANTES */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 lg:max-w-xl"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <MapPin className="text-[#D95B6A]" size={20} />
                            <span className="font-sans uppercase tracking-[0.15em] text-xs font-bold text-[#D95B6A]">
                                Nosso Espaço
                            </span>
                        </div>

                        <h2 className="font-serif text-3xl md:text-5xl text-brand-text mb-6 leading-tight">
                            Atendimento <span className="italic font-normal text-[#D95B6A]">Presencial</span>
                        </h2>
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

                    {/* COLUNA ESQUERDA: IMAGEM */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full relative"
                    >
                        <div className="relative w-full aspect-[4/5] max-w-[480px] mx-auto rounded-[2rem] overflow-hidden shadow-2xl border-[8px] border-white/50">
                            <Image
                                src="/foto-consultorio.png"
                                alt="Janela do consultório"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}