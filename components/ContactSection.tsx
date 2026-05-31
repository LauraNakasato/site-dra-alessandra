"use client";

import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contato" className="py-24 bg-brand-peach">
            <div className="max-w-7xl mx-auto px-6 sm:px-10">

                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* COLUNA DE INFORMAÇÕES */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 space-y-8"
                    >
                        <h2 className="font-serif text-3xl md:text-5xl text-brand-text">
                            Onde <span className="italic font-normal text-[#D95B6A]">nos encontrar</span>
                        </h2>

                        <div className="space-y-6">
                            {/* ENDEREÇO */}
                            <div className="flex items-start gap-4">
                                <MapPin className="text-[#D95B6A] shrink-0 mt-1" size={24} />
                                <div>
                                    <h4 className="font-bold text-brand-text">Endereço</h4>
                                    <p className="font-sans text-brand-text/70">
                                        R. Itapura, 239 - Vila Gomes Cardim<br />
                                        São Paulo - SP, 03310-000
                                    </p>
                                </div>
                            </div>

                            {/* HORÁRIO */}
                            <div className="flex items-start gap-4">
                                <Clock className="text-[#D95B6A] shrink-0 mt-1" size={24} />
                                <div>
                                    <h4 className="font-bold text-brand-text">Horário de funcionamento</h4>
                                    <p className="font-sans text-brand-text/70">
                                        Segunda a sexta, das 08h às 20h.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* COLUNA DO MAPA CORRIGIDA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full h-[400px] rounded-[2rem] overflow-hidden shadow-xl border border-white/50 relative transition-transform duration-500 hover:scale-[1.02] cursor-pointer"
                    >
                        <iframe
                            src="https://maps.google.com/maps?q=Rua%20Itapura,%20239%20-%20Vila%20Gomes%20Cardim,%20S%C3%A3o%20Paulo&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Localização Dra. Alessandra Begatti"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}