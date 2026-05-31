"use client";

import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const benefits = [
    "Conforto do seu ambiente",
    "Sigilo absoluto",
    "Flexibilidade de horários"
];

export default function OnlineTherapy() {
    return (
        <section id="online" className="py-24 bg-brand-peach">
            <div className="max-w-7xl mx-auto px-6 sm:px-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* COLUNA ESQUERDA: TEXTO E CHECKLIST */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 lg:max-w-xl"
                    >
                        <h2 className="font-serif text-3xl md:text-5xl text-brand-text mb-6 leading-tight">
                            Atendimento <span className="italic font-normal text-[#D95B6A]">On-line</span>
                        </h2>
                        <p className="font-sans text-brand-text/70 text-lg leading-relaxed mb-10">
                            A mesma excelência clínica e acolhimento do consultório presencial, adaptados para a sua rotina. Uma conexão segura onde quer que você esteja.
                        </p>

                        <ul className="space-y-6">
                            {benefits.map((benefit, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.15 }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="flex-shrink-0">
                                        <CheckCircle2
                                            className="text-[#95C1A3] transition-transform duration-300 group-hover:scale-110"
                                            size={28}
                                            strokeWidth={1.5}
                                        />
                                    </div>
                                    <span className="font-sans text-brand-text font-medium text-lg">
                                        {benefit}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* COLUNA DIREITA: IMAGEM */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full"
                    >
                        {/* Container da Imagem com cantos arredondados suaves e sombra premium */}
                        <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-white/20">
                            <Image
                                src="/foto-online.png"
                                alt="Notebook e livro ilustrando o atendimento online"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}