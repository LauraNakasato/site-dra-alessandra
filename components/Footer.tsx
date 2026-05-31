"use client";

import React from "react";
import Image from "next/image";
import { Mail, MessageCircle, ArrowUp, CalendarCheck2 } from "lucide-react";

// Ícone customizado do Instagram
const InstagramIcon = ({ size = 18 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const navLinks = [
        { label: "Início", href: "#", onClick: scrollToTop },
        { label: "Por que escolher a Dra. Alessandra?", href: "#diferenciais" },
        { label: "Atendimento On-line", href: "#online" },
        { label: "Atendimento Presencial", href: "#presencial" },
        { label: "Sobre mim", href: "#sobre" },
        { label: "Avaliações", href: "#avaliacoes" },
        { label: "Conteúdos no Instagram", href: "#instagram" },
        { label: "Onde nos encontrar", href: "#contato" },
    ];

    return (
        <footer className="bg-brand-peach border-t border-[#D95B6A]/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 sm:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* LOGO, TEXTO E CRP */}
                    <div className="col-span-1 lg:col-span-2 space-y-6">
                        <p className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-[#D95B6A]">
                            CRP 06/75694
                        </p>

                        <div className="flex items-center">
                            <Image
                                src="/logo-transparente.png"
                                alt="Logo ABV Neuropsi"
                                width={60}
                                height={60}
                                className="object-contain"
                            />
                            <div className="ml-4 flex flex-col justify-center">
                                <h3 className="font-serif text-xl text-[#D95B6A] leading-tight">ABV NEUROPSI</h3>
                                <p className="font-sans text-[11px] uppercase tracking-[0.1em] text-[#D95B6A]/80">Dra. Alessandra Begatti</p>
                            </div>
                        </div>

                        <p className="font-sans text-sm text-brand-text/60 max-w-sm leading-relaxed">
                            Um espaço de acolhimento, ética e ciência dedicado a transformar trajetórias e promover saúde mental de forma integral.
                        </p>

                        {/* BOTÃO DE AGENDAMENTO (MAIOR) */}
                        <a
                            href="https://wa.me/5511964879227?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-3 bg-[#D95B6A] text-white px-10 py-4 rounded-full hover:bg-brand-mauve transition-all duration-300 font-sans text-base font-bold uppercase tracking-widest shadow-md hover:shadow-lg"
                        >
                            Agendar Consulta
                            <CalendarCheck2 size={20} />
                        </a>
                    </div>

                    {/* NAVEGAÇÃO */}
                    <div>
                        <h4 className="font-bold text-[#D95B6A] mb-6 font-sans uppercase text-sm tracking-widest">Navegação</h4>
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        onClick={link.onClick}
                                        className="font-sans text-brand-text/70 hover:text-black transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CONTATO */}
                    <div>
                        <h4 className="font-bold text-[#D95B6A] mb-6 font-sans uppercase text-sm tracking-widest">Contato</h4>
                        <div className="flex flex-col gap-4">
                            <a href="mailto:contato@abvneuropsi.com.br" className="flex items-center gap-3 text-brand-text/70 hover:text-black transition-colors">
                                <Mail size={18} />
                                <span className="text-sm">contato@abvneuropsi.com.br</span>
                            </a>
                            <a href="https://instagram.com/abvneuropsi" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-brand-text/70 hover:text-black transition-colors">
                                <InstagramIcon size={18} />
                                <span className="text-sm">@abvneuropsi</span>
                            </a>
                            <a href="https://wa.me/5511964879227?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta." target="_blank" rel="noreferrer" className="flex items-center gap-3 text-brand-text/70 hover:text-black transition-colors">
                                <MessageCircle size={18} />
                                <span className="text-sm">WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* BOTÃO VOLTAR AO TOPO */}
                <div className="flex justify-center mb-8">
                    <button
                        onClick={scrollToTop}
                        className="text-[#D95B6A]/40 hover:text-[#D95B6A] transition-all hover:-translate-y-1"
                        aria-label="Voltar ao topo"
                    >
                        <ArrowUp size={24} />
                    </button>
                </div>

                <div className="text-center pt-8 border-t border-[#D95B6A]/10 text-black font-sans text-sm">
                    <p>© {new Date().getFullYear()} ABV Neuropsi - Alessandra Begatti Victorino.</p>
                    <p>Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}