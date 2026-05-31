"use client";

import { Menu, X, Heart, MapPin, Mail, Phone, CalendarCheck2 } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
    { name: "Início", href: "#" },
    { name: "Por que escolher a Dra. Alessandra?", href: "#diferenciais" },
    { name: "Atendimento On-line", href: "#online" },
    { name: "Atendimento Presencial", href: "#presencial" },
    { name: "Sobre mim", href: "#sobre" },
    { name: "Avaliações", href: "#avaliacoes" },
    { name: "Conteúdos no Instagram", href: "#instagram" },
    { name: "Onde nos encontrar", href: "#contato" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    return (
        <>
            {/* ESTILOS DA ANIMAÇÃO REFINADA E DELICADA */}
            <style jsx global>{`
                @keyframes russianDollDelicate1 {
                    0%, 100% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
                    20% { opacity: 0.6; }
                    50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.6; }
                    80% { opacity: 0.6; }
                }
                @keyframes russianDollDelicate2 {
                    0%, 100% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
                    20% { opacity: 0.4; }
                    50% { transform: translate(-50%, -50%) scale(1.35); opacity: 0.4; }
                    80% { opacity: 0.4; }
                }
                @keyframes russianDollDelicate3 {
                    0%, 100% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
                    20% { opacity: 0.2; }
                    50% { transform: translate(-50%, -50%) scale(1.6); opacity: 0.2; }
                    80% { opacity: 0.2; }
                }
                .matryoshka-heart {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    pointer-events: none;
                    color: #D95B6A;
                    fill: #D95B6A;
                    filter: blur(1px);
                }
                .layer-1 { animation: russianDollDelicate1 5s ease-in-out infinite; }
                .layer-2 { animation: russianDollDelicate2 5s ease-in-out infinite; }
                .layer-3 { animation: russianDollDelicate3 5s ease-in-out infinite; }
            `}</style>

            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
                    ? "bg-brand-peach/80 backdrop-blur-md shadow-sm py-3.5 border-b border-brand-mauve/10"
                    : "bg-transparent py-6"
                    }`}
            >
                {/* Mudamos para grid com 3 colunas (1fr auto 1fr) para forçar o centro exato */}
                <div className="max-w-7xl w-full mx-auto px-6 sm:px-8 grid grid-cols-[1fr_auto_1fr] items-center">

                    {/* BOTÃO DO MENU (ESQUERDA) */}
                    <div className="flex justify-start z-10">
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            aria-label="Abrir menu"
                            className="text-brand-text hover:text-[#D95B6A] transition-colors duration-300 p-2.5 -ml-2.5 group focus:outline-none"
                        >
                            <Menu strokeWidth={1.2} size={28} className="group-hover:scale-105 transition-transform" />
                        </button>
                    </div>

                    {/* LOGOTIPO (CENTRALIZADO NO FLUXO DA PÁGINA) */}
                    <div className="flex flex-col items-center justify-center select-none z-0">
                        <div className="relative flex flex-col items-center group text-center">
                            <div className="relative w-14 h-14 flex items-center justify-center">
                                <div className="absolute inset-0 overflow-visible pointer-events-none z-0">
                                    <Heart className="matryoshka-heart layer-3 w-8 h-8" strokeWidth={0} />
                                    <Heart className="matryoshka-heart layer-2 w-8 h-8" strokeWidth={0} />
                                    <Heart className="matryoshka-heart layer-1 w-8 h-8" strokeWidth={0} />
                                </div>
                                <Image
                                    src="/logo-transparente.png"
                                    alt="Logo ABV Neuropsi"
                                    width={56}
                                    height={56}
                                    className="relative z-10 drop-shadow-sm transition-transform duration-500"
                                    priority
                                />
                            </div>
                            <div className="text-center mt-1.5 tracking-widest text-brand-text">
                                <span className="font-serif font-bold text-sm sm:text-base uppercase block">
                                    ABV Neuropsi
                                </span>
                                <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-widest text-brand-text/60 block -mt-0.5">
                                    Dra. Alessandra Begatti
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* ESPAÇO DIREITO (PARA MANTER A SIMETRIA DO GRID) */}
                    <div className="flex justify-end"></div>
                </div>
            </header>

            {/* PAINEL DO MENU LATERAL */}
            <div
                className={`fixed inset-0 z-[100] transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
                <div
                    onClick={() => setIsMenuOpen(false)}
                    className={`fixed inset-0 bg-brand-text/30 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
                />

                <nav
                    className={`fixed top-0 left-0 h-full w-full max-w-sm bg-brand-peach/95 backdrop-blur-lg shadow-2xl p-8 flex flex-col justify-between transition-transform duration-500 ease-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
                >
                    <div className="flex flex-col flex-grow overflow-y-auto">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="font-serif text-2xl text-brand-text tracking-tight">Navegação</h2>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                aria-label="Fechar menu"
                                className="text-brand-text/70 hover:text-[#D95B6A] hover:bg-brand-text/5 p-2 rounded-full transition-all duration-300 focus:outline-none"
                            >
                                <X strokeWidth={1.5} size={28} />
                            </button>
                        </div>

                        <ul className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="group font-serif text-lg text-brand-text flex items-center px-4 py-3 rounded-lg hover:bg-[#D95B6A]/10 transition-all duration-300"
                                    >
                                        <Heart className="w-4 h-4 text-[#D95B6A] opacity-0 group-hover:opacity-100 mr-3 transition-opacity duration-300" strokeWidth={2} />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="border-t border-brand-mauve/20 pt-8 flex flex-col gap-6">
                        <div className="flex flex-col gap-4 text-brand-text/70 text-sm">
                            <div className="flex items-center gap-3"><MapPin size={18} className="text-[#D95B6A]" /> R. Itapura, 239 - Vila Gomes Cardim, São Paulo - SP, 03311-000</div>
                            <div className="flex items-center gap-3"><Mail size={18} className="text-[#D95B6A]" /> contato@abvneuropsi.com.br</div>
                            <div className="flex items-center gap-3"><Phone size={18} className="text-[#D95B6A]" /> (11) 96487-9227</div>
                        </div>

                        <a
                            href="https://wa.me/5511964879227?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsMenuOpen(false)}
                            className="w-full bg-[#D95B6A] text-white font-sans uppercase tracking-widest text-center py-4 rounded-xl text-sm transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-[#D95B6A]/30 hover:bg-[#c44f5c] hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Agendar Consulta
                            <CalendarCheck2 size={16} />
                        </a>
                    </div>
                </nav>
            </div>
        </>
    );
}