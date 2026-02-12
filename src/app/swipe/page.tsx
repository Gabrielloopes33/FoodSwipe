"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Category, CategoryLevel } from "@/lib/types";
import { CATEGORIES } from "@/lib/categories";
import { SwipeCard } from "@/components/SwipeCard";
import { ActionButtons } from "@/components/ActionButtons";
import { AnimatePresence, motion } from "framer-motion";
import { 
    ChevronLeft, 
    SlidersHorizontal, 
    Sparkles,
    Star
} from "lucide-react";

export default function SwipePage() {
    const router = useRouter();
    const [currentLevel, setCurrentLevel] = useState<CategoryLevel>(1);
    const [cards, setCards] = useState<Category[]>([]);
    const [path, setPath] = useState<string[]>([]);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [history, setHistory] = useState<Category[]>([]);
    const [lastDirection, setLastDirection] = useState<"left" | "right">("right");
    const [isLoading, setIsLoading] = useState(true);

    // Load initial cards with loading animation
    useEffect(() => {
        const timer = setTimeout(() => {
            loadLevel(1, null);
            setIsLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    const loadLevel = (level: CategoryLevel, parentId: string | null) => {
        const levelCards = CATEGORIES.filter(
            (c) => c.level === level && c.parentId === parentId
        );
        // Shuffle cards
        const shuffled = levelCards.sort(() => Math.random() - 0.5);
        setCards(shuffled);
        setCurrentLevel(level);
    };

    const handleSwipe = (direction: "left" | "right") => {
        if (cards.length === 0) return;

        setLastDirection(direction);
        const currentCard = cards[0];
        const remainingCards = cards.slice(1);

        setCards(remainingCards);

        if (direction === "right") {
            // Like!
            const newPath = [...path, currentCard.name];
            setPath(newPath);
            setHistory((prev) => [...prev, currentCard]);

            if (currentLevel === 3) {
                // Final choice!
                const query = new URLSearchParams({
                    choice: currentCard.name,
                    id: currentCard.id,
                }).toString();
                router.push(`/result?${query}`);
            } else {
                // Go to next level
                const nextLevel = (currentLevel + 1) as CategoryLevel;

                // Check if there are cards for the next level
                const nextLevelCards = CATEGORIES.filter(
                    (c) => c.level === nextLevel && c.parentId === currentCard.id
                );

                if (nextLevelCards.length === 0) {
                    // No more sub-options? Use the current selection as final!
                    const query = new URLSearchParams({
                        choice: currentCard.name,
                        id: currentCard.id,
                    }).toString();
                    router.push(`/result?${query}`);
                } else {
                    loadLevel(nextLevel, currentCard.id);
                }
            }
        } else {
            // Nope
            if (remainingCards.length === 0) {
                // Show empty state instead of alert
                setTimeout(() => {
                    loadLevel(1, null);
                    setPath([]);
                    setHistory([]);
                }, 500);
            }
        }
    };

    // Get progress indicator text
    const getProgressText = () => {
        if (path.length === 0) return "Escolha uma categoria";
        return path.join(" → ");
    };

    // Get current active card
    const currentCard = cards.length > 0 ? cards[0] : null;

    return (
        <div className="flex flex-col items-center min-h-[100dvh] bg-[#F5F7FA] overflow-hidden relative">
            {/* Header */}
            <header className="w-full pt-4 pb-2 px-5 flex items-center justify-between z-50 bg-gradient-to-b from-[#F5F7FA] to-transparent shrink-0">
                {/* Back Button */}
                <button 
                    onClick={() => router.push("/")}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm shadow-black/5 text-[#6B7280] hover:text-[#1A1A2E] hover:shadow-md transition-all duration-200 active:scale-95"
                >
                    <ChevronLeft size={22} strokeWidth={2.5} />
                </button>

                {/* Progress Indicator */}
                <div className="flex-1 mx-4">
                    <div className="flex items-center justify-center gap-2">
                        {[1, 2, 3].map((level) => (
                            <div
                                key={level}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    level <= currentLevel
                                        ? "w-8 bg-gradient-to-r from-[#FF6B7A] to-[#FF4757]"
                                        : "w-2 bg-[#E5E7EB]"
                                }`}
                            />
                        ))}
                    </div>
                    <p className="text-center text-xs text-[#6B7280] mt-1.5 font-medium">
                        {getProgressText()}
                    </p>
                </div>

                {/* Settings Button */}
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm shadow-black/5 text-[#6B7280] hover:text-[#1A1A2E] hover:shadow-md transition-all duration-200 active:scale-95">
                    <SlidersHorizontal size={18} strokeWidth={2} />
                </button>
            </header>

            {/* Main Card Area */}
            <div className="w-full max-w-[380px] flex items-start justify-center relative px-5 py-2">
                <div className="relative w-full aspect-[3/4] max-h-[50vh]">
                    {/* Background Card Stack Effect */}
                    <div className="absolute inset-0 bg-white rounded-[32px] shadow-xl translate-y-2 scale-[0.97] opacity-40"></div>
                    <div className="absolute inset-0 bg-white rounded-[32px] shadow-xl translate-y-4 scale-[0.94] opacity-20"></div>
                    
                    <AnimatePresence custom={lastDirection} mode="popLayout">
                        {cards.map((card, index) => {
                            // Render top 2 cards.
                            if (index > 1) return null;
                            const isTopCard = index === 0;
                            return (
                                <SwipeCard
                                    key={card.id}
                                    category={card}
                                    onSwipe={(dir) => handleSwipe(dir)}
                                    className={isTopCard ? "z-20" : "z-10 scale-[0.97] translate-y-2 opacity-50"}
                                    exitDirection={lastDirection}
                                    isActive={isTopCard}
                                />
                            );
                        })}
                    </AnimatePresence>

                    {/* Loading State */}
                    {isLoading && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-[32px] shadow-xl z-30">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#FF6B7A] rounded-full blur-xl opacity-30 animate-pulse"></div>
                                <div className="relative h-12 w-12 rounded-full border-4 border-[#FF6B7A]/20 border-t-[#FF6B7A] animate-spin"></div>
                            </div>
                            <p className="mt-3 text-[#6B7280] font-medium text-sm animate-pulse-soft">
                                Preparando opções...
                            </p>
                        </div>
                    )}

                    {/* Empty State */}
                    {!isLoading && cards.length === 0 && (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-[32px] shadow-xl z-30 p-8 text-center"
                        >
                            <div className="w-16 h-16 bg-[#F5F7FA] rounded-full flex items-center justify-center mb-3">
                                <Sparkles size={28} className="text-[#FFD93D]" />
                            </div>
                            <h3 className="text-lg font-bold text-[#1A1A2E] mb-1">
                                Sem mais opções
                            </h3>
                            <p className="text-[#6B7280] text-sm mb-4">
                                Vamos começar de novo?
                            </p>
                            <button
                                onClick={() => {
                                    loadLevel(1, null);
                                    setPath([]);
                                    setHistory([]);
                                }}
                                className="px-5 py-2.5 bg-gradient-to-r from-[#FF6B7A] to-[#FF4757] text-white font-semibold rounded-full shadow-lg shadow-[#FF6B7A]/30 hover:shadow-xl transition-all active:scale-95 text-sm"
                            >
                                Recomeçar
                            </button>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Card Info - Abaixo do card na área branca */}
            {currentCard && !isLoading && (
                <motion.div 
                    key={currentCard.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-[380px] px-5 mt-4"
                >
                    <div className="bg-white rounded-2xl p-5 shadow-sm">
                        {/* Title */}
                        <h2 className="text-2xl font-black text-[#1A1A2E] leading-tight mb-2">
                            {currentCard.name}
                        </h2>

                        {/* Info Row */}
                        <div className="flex items-center gap-2 mb-3">
                            {/* Level Badge */}
                            <div className="flex items-center gap-1 px-2.5 py-1 bg-[#FF6B7A]/10 rounded-full">
                                <span className="text-[#FF6B7A] text-xs font-bold">
                                    Nível {currentCard.level}
                                </span>
                            </div>
                            
                            {/* Rating Stars (mock) */}
                            <div className="flex items-center gap-1 px-2.5 py-1 bg-[#FFD93D]/10 rounded-full">
                                <Star size={12} className="text-[#FFD93D]" fill="#FFD93D" />
                                <span className="text-[#1A1A2E] text-xs font-bold">
                                    {(4 + Math.random()).toFixed(1)}
                                </span>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-[#6B7280] text-sm font-medium leading-relaxed line-clamp-2">
                            {currentCard.description || "Uma escolha deliciosa que vai surpreender seu paladar."}
                        </p>
                    </div>
                </motion.div>
            )}

            {/* Footer Controls */}
            <div className="w-full pb-6 pt-4 px-5 shrink-0 mt-auto">
                <ActionButtons
                    onLike={() => handleSwipe("right")}
                    onNope={() => handleSwipe("left")}
                    disabled={cards.length === 0 || isLoading}
                />
                
                {/* Hint text */}
                <p className="text-center text-xs text-[#6B7280]/60 mt-3">
                    Arraste para os lados ou use os botões
                </p>
            </div>
        </div>
    );
}
