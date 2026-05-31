"use client";

import { HandHeart, Award, ShieldCheck, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

// Definimos a interface para garantir que o TypeScript entenda a estrutura
interface Reason {
    icon: LucideIcon;
    title: string;
    text: string;
}

const reasons: Reason[] = [
    {
        icon: HandHeart,
        title: "Acolhimento",
        text: "Um olhar profundamente humano que valoriza quem você é, em um ambiente de escuta ativa e empatia.",
    },
    {
        icon: Award,
        title: "Experiência",
        text: "Mais de 22 anos de atuação clínica atendendo crianças, adolescentes e adultos, unindo o rigor da ciência neuropsicológica à prática terapêutica.",
    },
    {
        icon: ShieldCheck,
        title: "Espaço Seguro",
        text: "Consultório preparado para ser um refúgio, garantindo total privacidade e ética em cada etapa do processo.",
    },
];

export default function WhyChoose() {
    return (
        <section id="diferenciais" className="py-24 bg-brand-peach">
            <div className="max-w-7xl mx-auto px-6 sm:px-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-3xl md:text-4xl text-brand-text mb-4">
                        Por que escolher a Dra. Alessandra?
                    </h2>
                    <div className="w-16 h-1 bg-[#D95B6A] mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reasons.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="bg-brand-mauve/20 p-10 rounded-3xl flex flex-col items-center text-center hover:bg-brand-mauve/30 transition-colors duration-500"
                            >
                                <div className="w-16 h-16 bg-white/50 rounded-full flex items-center justify-center mb-8 shadow-sm">
                                    <Icon size={32} className="text-brand-text" strokeWidth={1.5} />
                                </div>
                                <h3 className="font-serif text-xl text-brand-text mb-4">{item.title}</h3>
                                <p className="font-sans text-brand-text/70 leading-relaxed text-sm">
                                    {item.text}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}