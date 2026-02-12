"use client";

import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { Category } from "@/lib/types";
import { cn } from "@/lib/utils";

interface SwipeCardProps {
    category: Category;
    onSwipe: (direction: "left" | "right") => void;
    className?: string;
    exitDirection?: "left" | "right";
    isActive?: boolean;
}

export function SwipeCard({ category, onSwipe, className, exitDirection, isActive = true }: SwipeCardProps) {
    const x = useMotionValue(0);
    const rotate = useTransform(x, [-200, 200], [-12, 12]);
    const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0.5, 1, 1, 1, 0.5]);

    // Smooth background color interpolation for swipe feedback
    const background = useTransform(
        x,
        [-150, 0, 150],
        ["rgba(255, 107, 122, 0.15)", "rgba(255, 255, 255, 0)", "rgba(107, 203, 119, 0.15)"]
    );

    // Like/Nope indicators
    const likeOpacity = useTransform(x, [50, 100, 150], [0, 0.8, 1]);
    const nopeOpacity = useTransform(x, [-150, -100, -50], [1, 0.8, 0]);

    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;
        
        if (offset > 80 || velocity > 500) {
            onSwipe("right");
        } else if (offset < -80 || velocity < -500) {
            onSwipe("left");
        }
    };

    const variants = {
        initial: { 
            scale: 0.9, 
            opacity: 0,
            y: 20 
        },
        animate: { 
            scale: 1, 
            opacity: 1, 
            y: 0,
            x: 0,
            transition: {
                type: "spring" as const,
                stiffness: 300,
                damping: 25
            }
        },
        exit: (custom: "left" | "right") => ({
            x: custom === "left" ? -400 : 400,
            opacity: 0,
            rotate: custom === "left" ? -20 : 20,
            transition: { 
                duration: 0.25,
                ease: "easeInOut" as const
            }
        })
    };

    return (
        <motion.div
            style={{ x, rotate, opacity, background }}
            layout
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={exitDirection}
            whileTap={{ cursor: "grabbing" }}
            drag={isActive ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.9}
            onDragEnd={handleDragEnd}
            className={cn(
                "absolute w-full h-full rounded-[32px] overflow-hidden cursor-grab touch-none bg-white shadow-2xl shadow-black/10",
                !isActive && "pointer-events-none",
                className
            )}
        >
            {/* Apenas imagem em tela cheia - SEM texto */}
            <div className="relative w-full h-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={category.imageUrl}
                    alt={category.name}
                    className="h-full w-full object-cover pointer-events-none"
                />

                {/* Swipe Indicators - Apenas no card ativo */}
                {isActive && (
                    <>
                        <motion.div 
                            style={{ opacity: likeOpacity }}
                            className="absolute top-6 right-6 bg-[#6BCB77] px-4 py-2 rounded-full border-4 border-[#6BCB77] rotate-12 z-10"
                        >
                            <span className="text-white font-black text-xl tracking-wider">Curti!</span>
                        </motion.div>
                        
                        <motion.div 
                            style={{ opacity: nopeOpacity }}
                            className="absolute top-6 left-6 bg-[#FF6B7A] px-4 py-2 rounded-full border-4 border-[#FF6B7A] -rotate-12 z-10"
                        >
                            <span className="text-white font-black text-xl tracking-wider">Nope</span>
                        </motion.div>
                    </>
                )}
            </div>
        </motion.div>
    );
}
