"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutMe() {
    return (
        <section id="sobre" className="py-24 bg-brand-peach relative overflow-hidden">
            {/* Import da fonte Great Vibes para a assinatura */}
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
            `}</style>

            <div className="max-w-7xl mx-auto px-6 sm:px-10">
                <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-24">

                    {/* COLUNA ESQUERDA: IMAGEM DESKTOP */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="hidden lg:flex flex-1 w-full relative justify-center"
                    >
                        {/* Container da Imagem para computador */}
                        <div className="relative w-full max-w-[480px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border-[8px] border-white/40 bg-white/10">
                            <Image
                                src="/foto-sobre.png"
                                alt="Dra. Alessandra Begatti Victorino"
                                fill
                                sizes="(min-width: 1024px) 50vw"
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </motion.div>

                    {/* COLUNA DIREITA: TEXTO E TRAJETÓRIA */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 lg:max-w-xl flex flex-col"
                    >
                        <h2 className="font-serif text-3xl md:text-5xl text-brand-text mb-6 lg:mb-6 leading-tight">
                            Sobre <span className="italic font-normal text-[#D95B6A]">Mim</span>
                        </h2>

                        {/* IMAGEM MOBILE: Aparece apenas no celular, entre o título e o texto */}
                        <div className="block lg:hidden w-full mb-10">
                            <div className="relative w-full max-w-[420px] mx-auto aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border-[8px] border-white/40 bg-white/10">
                                <Image
                                    src="/foto-sobre.png"
                                    alt="Dra. Alessandra Begatti Victorino"
                                    fill
                                    sizes="(max-width: 768px) 100vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="font-sans text-brand-text/70 text-lg leading-relaxed space-y-6 mb-10">
                            <p>
                                Sou Psicóloga e Neuropsicóloga com mais de 22 anos de atuação. Ao longo dessa jornada, construí minha prática clínica com o compromisso de oferecer um cuidado técnico e seguro, respeitando sempre o tempo e a singularidade de cada paciente.
                            </p>
                            <p>
                                Como especialista em Terapia Cognitivo-Comportamental (TCC) e Avaliação Neuropsicológica, dedico meu trabalho a ajudar pessoas a compreenderem seu funcionamento emocional e cognitivo, promovendo autonomia para uma vida com mais qualidade.
                            </p>
                            <p>
                                Vejo a terapia como um processo colaborativo e de confiança. Meu papel é caminhar ao seu lado, oferecendo ferramentas práticas e uma escuta acolhedora para que você possa lidar com seus desafios de forma mais leve e assertiva.
                            </p>
                        </div>

                        {/* Assinatura em Great Vibes e CRP */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="mt-2"
                        >
                            <p className="font-['Great_Vibes'] text-4xl md:text-5xl text-[#D95B6A] opacity-80">
                                Alessandra Begatti Victorino
                            </p>
                            <p className="font-sans text-sm font-medium text-brand-text/60 tracking-[0.2em] uppercase mt-4">
                                CRP 06/75694
                            </p>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}