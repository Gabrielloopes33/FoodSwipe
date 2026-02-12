"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { CATEGORIES } from "@/lib/categories";
import { Suspense, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
    PartyPopper, 
    MapPin, 
    ExternalLink, 
    RefreshCw,
    ChevronLeft,
    UtensilsCrossed,
    Clock,
    Star
} from "lucide-react";

function ResultContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const choiceId = searchParams.get("id");
    const choiceName = searchParams.get("choice");

    const category = CATEGORIES.find((c) => c.id === choiceId);
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        // Trigger confetti animation
        setShowConfetti(true);
        const timer = setTimeout(() => setShowConfetti(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    const handleRestart = () => {
        router.push("/swipe");
    };

    const handleIfood = () => {
        window.open(`https://www.ifood.com.br/busca?q=${choiceName}`, "_blank");
    };

    const handleGoogle = () => {
        window.open(`https://www.google.com/search?q=${choiceName}+delivery+perto+de+mim`, "_blank");
    };

    if (!choiceName) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-[#F5F7FA] p-6">
                <div className="text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <UtensilsCrossed size={32} className="text-[#6B7280]" />
                    </div>
                    <h2 className="text-xl font-bold text-[#1A1A2E] mb-2">
                        Ops! Algo deu errado
                    </h2>
                    <p className="text-[#6B7280] mb-6">
                        Não conseguimos encontrar sua escolha
                    </p>
                    <button
                        onClick={() => router.push("/")}
                        className="px-8 py-4 bg-gradient-to-r from-[#FF6B7A] to-[#FF4757] text-white font-bold rounded-2xl shadow-xl shadow-[#FF6B7A]/30 hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-[0.98]"
                    >
                        Voltar ao início
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-[#F5F7FA] relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#6BCB77]/10 to-transparent"></div>
                <div className="absolute top-[-10%] right-[-10%] w-80 h-80 bg-[#FFD93D]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[20%] left-[-10%] w-60 h-60 bg-[#FF6B7A]/5 rounded-full blur-3xl"></div>
            </div>

            {/* Header */}
            <header className="relative z-10 pt-6 pb-4 px-5">
                <button 
                    onClick={() => router.push("/swipe")}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm text-[#6B7280] hover:text-[#1A1A2E] hover:shadow-md transition-all duration-200"
                >
                    <ChevronLeft size={24} strokeWidth={2.5} />
                </button>
            </header>

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 pb-8 relative z-10">
                {/* Success Icon */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="mb-6"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#6BCB77] rounded-full blur-xl opacity-30 animate-pulse"></div>
                        <div className="relative w-24 h-24 bg-gradient-to-br from-[#6BCB77] to-[#4ECDC4] rounded-full flex items-center justify-center shadow-xl shadow-[#6BCB77]/30">
                            <PartyPopper size={48} className="text-white" />
                        </div>
                        
                        {/* Floating elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="absolute -top-2 -right-2 w-8 h-8 bg-[#FFD93D] rounded-full flex items-center justify-center shadow-lg"
                        >
                            <Star size={16} className="text-white" fill="white" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-3xl font-black text-[#1A1A2E] mb-2">
                        Bom Apetite!
                    </h1>
                    <p className="text-[#6B7280] font-medium">
                        Você escolheu:
                    </p>
                </motion.div>

                {/* Result Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    className="w-full max-w-sm bg-white rounded-[32px] shadow-xl shadow-black/5 overflow-hidden mb-8"
                >
                    {/* Image */}
                    {category?.imageUrl && (
                        <div className="relative h-48 w-full">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img 
                                src={category.imageUrl} 
                                alt={choiceName} 
                                className="w-full h-full object-cover" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            
                            {/* Rating badge */}
                            <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                                <Star size={14} className="text-[#FFD93D]" fill="#FFD93D" />
                                <span className="text-sm font-bold text-[#1A1A2E]">
                                    {(4.5 + Math.random() * 0.5).toFixed(1)}
                                </span>
                            </div>
                        </div>
                    )}
                    
                    {/* Content */}
                    <div className="p-6">
                        <h2 className="text-3xl font-black text-[#1A1A2E] mb-3">
                            {choiceName}
                        </h2>
                        
                        {/* Info row */}
                        <div className="flex items-center gap-4 text-sm text-[#6B7280]">
                            <div className="flex items-center gap-1.5">
                                <Clock size={16} />
                                <span>30-45 min</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <MapPin size={16} />
                                <span>{Math.floor(Math.random() * 3 + 1)}km</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Action Buttons - Estilizados e espaçados */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="w-full max-w-sm space-y-4"
                >
                    {/* iFood Button - Destaque máximo */}
                    <button
                        onClick={handleIfood}
                        className="group relative w-full flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-[#EA1D2C] to-[#D31820] text-white font-bold text-lg rounded-2xl shadow-xl shadow-[#EA1D2C]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#EA1D2C]/40 hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] overflow-hidden"
                    >
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        <span className="relative z-10">Pedir no iFood</span>
                        <ExternalLink size={20} className="relative z-10 transition-transform group-hover:translate-x-1" />
                    </button>

                    {/* Google Button - Estilo secundário elegante */}
                    <button
                        onClick={handleGoogle}
                        className="group w-full flex items-center justify-center gap-3 px-8 py-5 bg-white text-[#1A1A2E] font-bold text-lg rounded-2xl shadow-lg shadow-black/5 border-2 border-[#E5E7EB] transition-all duration-300 hover:shadow-xl hover:border-[#4285F4]/30 hover:-translate-y-1 active:translate-y-0 active:scale-[0.98]"
                    >
                        <span>Buscar no Google</span>
                        <ExternalLink size={20} className="text-[#6B7280] transition-transform group-hover:translate-x-1" />
                    </button>

                    {/* Restart Button - Estilo terciário */}
                    <button
                        onClick={handleRestart}
                        className="w-full flex items-center justify-center gap-2 px-8 py-4 text-[#6B7280] font-semibold text-base rounded-2xl hover:bg-white/80 transition-all duration-200 active:scale-[0.98] mt-2"
                    >
                        <RefreshCw size={18} className="transition-transform group-hover:rotate-180" />
                        <span>Escolher Outra Coisa</span>
                    </button>
                </motion.div>
            </div>

            {/* Confetti Effect */}
            <AnimatePresence>
                {showConfetti && (
                    <>
                        {[...Array(12)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ 
                                    opacity: 1, 
                                    y: -100, 
                                    x: Math.random() * window.innerWidth,
                                    rotate: 0,
                                    scale: 1
                                }}
                                animate={{ 
                                    opacity: 0, 
                                    y: window.innerHeight + 100,
                                    rotate: 720,
                                    scale: 0.5
                                }}
                                exit={{ opacity: 0 }}
                                transition={{ 
                                    duration: 2 + Math.random() * 1,
                                    ease: "easeOut"
                                }}
                                className="fixed top-0 w-3 h-3 rounded-full z-50 pointer-events-none"
                                style={{
                                    backgroundColor: ['#FF6B7A', '#6BCB77', '#FFD93D', '#4ECDC4'][i % 4],
                                    left: `${Math.random() * 100}%`
                                }}
                            />
                        ))}
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function ResultPage() {
    return (
        <Suspense fallback={
            <div className="flex items-center justify-center min-h-screen bg-[#F5F7FA]">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-[#FF6B7A]/20 border-t-[#FF6B7A] rounded-full animate-spin"></div>
                    <p className="text-[#6B7280] font-medium">Carregando...</p>
                </div>
            </div>
        }>
            <ResultContent />
        </Suspense>
    )
}
