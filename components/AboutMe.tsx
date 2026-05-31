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
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* COLUNA ESQUERDA: FOTO */}
                    <div className="flex-1 relative order-2 lg:order-1 flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full max-w-[600px] h-[400px] lg:h-[525px] rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/foto-sobre.png"
                                alt="Alessandra Begatti Victorino"
                                fill
                                className="object-cover object-center"
                            />
                        </motion.div>
                    </div>

                    {/* COLUNA DIREITA: TEXTO TRAJETÓRIA */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 order-1 lg:order-2"
                    >
                        <h2 className="font-serif text-3xl md:text-5xl text-brand-text mb-8 leading-tight">
                            Sobre <span className="italic font-normal text-[#D95B6A]">Mim</span>
                        </h2>

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
                            className="mt-8"
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