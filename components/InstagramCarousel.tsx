"use client";

import React, { useCallback, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

// Ícone customizado do Instagram
const InstagramIcon = ({ size = 24, className = "", strokeWidth = 1.5 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

// ALTERAÇÃO AQUI: Trocamos .jfif para .jpg
const instagramPosts = [
    { id: 1, image: "/insta-1.jpg", link: "https://www.instagram.com/p/DY4p5Eavspp/" },
    { id: 2, image: "/insta-2.jpg", link: "https://www.instagram.com/p/DYATDsalTFS/" },
    { id: 3, image: "/insta-3.jpg", link: "https://www.instagram.com/p/DYP9BmOPzVv/" },
    { id: 4, image: "/insta-4.jpg", link: "https://www.instagram.com/p/DYMwLaMj5IJ/" },
    { id: 5, image: "/insta-5.jpg", link: "https://www.instagram.com/reel/DYCxTImPwrE/" },
];

export default function InstagramCarousel() {
    // Definindo o plugin para garantir a referência estável e controle na interação
    const autoScrollPlugin = useMemo(() =>
        AutoScroll({
            speed: 1,
            stopOnMouseEnter: true,
            stopOnInteraction: true, // Para o auto-scroll ao clicar nas setas
        }),
        []);

    // Configuração com dragFree: false para melhor precisão nos cliques
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            align: "start",
            loop: true,
            dragFree: false,
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
        <section id="instagram" className="py-24 bg-brand-mauve/10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-10">

                {/* CABEÇALHO DA SEÇÃO */}
                <div className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-serif text-3xl md:text-5xl text-brand-text mb-3">
                            Acompanhe nossos <span className="italic font-normal text-[#D95B6A]">conteúdos</span>
                        </h2>
                        <p className="font-sans text-brand-text/70 text-lg">
                            Acompanhe o perfil <a href="https://instagram.com/abvneuropsi" target="_blank" rel="noreferrer" className="text-[#D95B6A] font-medium hover:underline">@abvneuropsi</a> para conteúdos sobre psicologia, neuropsicologia e saúde mental.
                        </p>
                    </motion.div>
                </div>

                {/* CONTAINER DO CARROSSEL COM SETAS FLUTUANTES */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    {/* SETA ESQUERDA */}
                    <button
                        onClick={scrollPrev}
                        className="absolute left-0 md:-left-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 hidden md:flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-[#D95B6A]/30 text-[#D95B6A] hover:bg-[#D95B6A] hover:text-white transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
                        aria-label="Anterior"
                    >
                        <ChevronLeft size={24} strokeWidth={1.5} />
                    </button>

                    <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
                        <div className="flex -ml-6">
                            {instagramPosts.map((post) => (
                                <div
                                    key={post.id}
                                    className="flex-[0_0_80%] sm:flex-[0_0_40%] lg:flex-[0_0_25%] pl-6 min-w-0"
                                >
                                    <a
                                        href={post.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="block relative aspect-square rounded-2xl overflow-hidden group transition-shadow duration-500 hover:shadow-[0_10px_40px_rgba(217,91,106,0.3)] bg-white/50"
                                    >
                                        <Image
                                            src={post.image}
                                            alt={`Postagem do Instagram ${post.id}`}
                                            fill
                                            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 25vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />

                                        {/* OVERLAY DE HOVER */}
                                        <div className="absolute inset-0 bg-brand-text/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                                            <InstagramIcon size={40} className="text-white" strokeWidth={1.5} />
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SETA DIREITA */}
                    <button
                        onClick={scrollNext}
                        className="absolute right-0 md:-right-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 hidden md:flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-[#D95B6A]/30 text-[#D95B6A] hover:bg-[#D95B6A] hover:text-white transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
                        aria-label="Próximo"
                    >
                        <ChevronRight size={24} strokeWidth={1.5} />
                    </button>
                </motion.div>

            </div>
        </section>
    );
}