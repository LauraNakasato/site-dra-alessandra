"use client";

import React, { useCallback, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Star, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
    {
        id: 1,
        author: "Erika Leite",
        subject: "Psicoterapia",
        text: "Alessandra é uma excelente profissional, atenciosa, acolhedora, uma pessoa realmente disposta a te ajudar e orientar, na medida que o paciente se abre e está envolvido com o processo. Indico e recomendo!"
    },
    {
        id: 2,
        author: "Nathalia Cavalcante",
        subject: "Psicoterapia",
        text: "A Alessandra é uma profissional incrível! Muito acolhedora, com uma escuta atenta e sensível. Demonstra grande conhecimento e passa muita confiança no atendimento."
    },
    {
        id: 3,
        author: "Daniele Pezzatto",
        subject: "Terapia Infantil",
        text: "Alessandra é incrível, nos ajudou a compreender melhor nosso filho. Conseguiu se conectar com ele e conosco de uma forma ímpar. Atualmente ele consegue controlar melhor seus sentimentos e expor de forma clara o que sente. Melhorando a comunicação principalmente na escola, que era o maior desafio."
    },
    {
        id: 4,
        author: "Priscila Coimbra",
        subject: "Terapia Infantil",
        text: "Quero agradecer a psicóloga Alessandra Begatti, por estar nos auxiliando nos ajustes emocionais do nosso filho de 06 anos."
    },
    {
        id: 5,
        author: "Giselle Souza",
        subject: "Terapia Infantil",
        text: "A Alessandra é uma excelente profissional, vem fazendo um ótimo trabalho com meu filho. Com muita empatia e muita dedicação!! Super recomendado"
    },
    {
        id: 6,
        author: "Alan Chicarelli",
        subject: "Psicoterapia",
        text: "Excelente profissional. Além de ser extremamente atenciosa e ética, demonstra um preparo que passa muita segurança desde a primeira sessão. O ambiente é acolhedor e sinto que meu processo terapêutico tem evoluído de forma muito consistente. Recomendo fortemente!"
    },
    {
        id: 7,
        author: "Nathalia Rocha",
        subject: "Psicoterapia",
        text: "Alessandra é uma profissional incrível! Muito humana, empática e dedicada ao que faz. O cuidado e a escuta atenta fazem toda a diferença. Recomendo para quem busca uma psicóloga competente e realmente comprometida com o bem-estar dos pacientes."
    },
    {
        id: 8,
        author: "Cris Borges",
        subject: "Psicoterapia",
        text: "A Alessandra é a profissional me acolhe, que me escuta e me ajuda a encontrar minhas respostas, não importa o quão tortuoso seja o caminho que tenha que percorrer até elas. Cresci muito no processo terapeutico com ela. Vai sem medo, é uma profissional incrivel."
    },
    {
        id: 9,
        author: "Katia Mazzi",
        subject: "Avaliação Neuropsicológica",
        text: "Sou grata à neuropsicóloga Alessandra que me pediu a avaliação neuropsicológica e, graças a ela, pude ter um diagnóstico libertador. Já são 4 anos de cuidado."
    }
];

export default function Testimonials() {
    // Definindo o plugin separado para garantir a referência estável
    const autoScrollPlugin = useMemo(() =>
        AutoScroll({
            speed: 1,
            stopOnMouseEnter: true,
            stopOnInteraction: true, // Mudança importante: para o auto-scroll no clique
        }),
        []);

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            align: "start",
            loop: true,
            dragFree: false, // Recomendado alterar para false ao usar setas
        },
        [autoScrollPlugin]
    );

    const scrollPrev = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section id="avaliacoes" className="py-24 bg-brand-peach relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-10">

                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-serif text-3xl md:text-5xl text-brand-text mb-4">
                            Histórias de <span className="italic font-normal text-[#D95B6A]">transformação</span>
                        </h2>
                        <p className="font-sans text-brand-text/70 text-lg">
                            O impacto de um acompanhamento humano e guiado pela ciência.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative mb-12"
                >
                    <button
                        onClick={scrollPrev}
                        className="absolute left-0 md:-left-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 hidden md:flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-[#D95B6A]/30 text-[#D95B6A] hover:bg-[#D95B6A] hover:text-white transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
                        aria-label="Anterior"
                    >
                        <ChevronLeft size={24} strokeWidth={1.5} />
                    </button>

                    <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
                        <div className="flex -ml-6 items-stretch">
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6 min-w-0"
                                >
                                    <div className="bg-white/40 backdrop-blur-md border border-white/60 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col justify-between h-full">
                                        <div>
                                            <div className="flex gap-1 mb-6">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={18}
                                                        className="text-[#D95B6A]"
                                                        fill="currentColor"
                                                        strokeWidth={1}
                                                    />
                                                ))}
                                            </div>
                                            <p className="font-sans italic text-brand-text/80 text-base leading-relaxed mb-8">
                                                &quot;{testimonial.text}&quot;
                                            </p>
                                        </div>
                                        <div className="mt-auto">
                                            <p className="font-sans font-bold text-sm text-brand-text uppercase tracking-widest">
                                                {testimonial.author}
                                            </p>
                                            <p className="font-sans text-xs text-brand-text/50 mt-1 font-medium">
                                                Avaliação no Google • <span className="text-[#D95B6A]/80">{testimonial.subject}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={scrollNext}
                        className="absolute right-0 md:-right-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 hidden md:flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-[#D95B6A]/30 text-[#D95B6A] hover:bg-[#D95B6A] hover:text-white transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
                        aria-label="Próximo"
                    >
                        <ChevronRight size={24} strokeWidth={1.5} />
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex justify-center"
                >
                    <a
                        href="https://share.google/AXiZqCncwrD8Z5Aoi"
                        target="_blank"
                        rel="noreferrer"
                        className="group relative px-8 py-4 bg-transparent border border-[#D95B6A] text-[#D95B6A] hover:bg-[#D95B6A] hover:text-white font-sans uppercase tracking-[0.15em] text-xs font-bold rounded-full overflow-hidden transition-all duration-500 flex items-center gap-3"
                    >
                        Ler mais avaliações no Google
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}