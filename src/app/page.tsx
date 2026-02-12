"use client";

import { useRouter } from "next/navigation";
import { Sparkles, UtensilsCrossed, ChevronRight } from "lucide-react";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#FFF5F5] via-white to-[#F0FDFA]">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft gradient orbs */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-[#FF6B7A]/20 to-[#FF8E9A]/10 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-gradient-to-tr from-[#4ECDC4]/20 to-[#6BCB77]/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[40%] left-[20%] w-[200px] h-[200px] bg-gradient-to-br from-[#FFD93D]/15 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="z-10 flex flex-col items-center text-center gap-8 max-w-md px-6 py-12">
        {/* Logo Icon */}
        <div className="relative animate-bounce-in">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B7A] to-[#FF4757] rounded-[32px] blur-xl opacity-30 scale-110"></div>
          <div className="relative bg-white p-6 rounded-[28px] shadow-2xl shadow-[#FF6B7A]/20">
            <div className="relative">
              <UtensilsCrossed size={56} className="text-[#FF6B7A]" strokeWidth={1.5} />
              <Sparkles size={20} className="absolute -top-1 -right-1 text-[#FFD93D] animate-pulse-soft" />
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-3 animate-slide-up stagger-1 opacity-0" style={{ animationFillMode: 'forwards' }}>
          <h1 className="text-5xl font-black tracking-tight">
            <span className="text-[#1A1A2E]">Food</span>
            <span className="bg-gradient-to-r from-[#FF6B7A] to-[#FF4757] bg-clip-text text-transparent">Swipe</span>
          </h1>
          <p className="text-lg text-[#6B7280] font-medium">
            Descubra o que comer em 3 swipes
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-3 gap-3 w-full animate-slide-up stagger-2 opacity-0" style={{ animationFillMode: 'forwards' }}>
          {[
            { icon: "🍔", label: "Categoria", desc: "Escolha o tipo" },
            { icon: "✨", label: "Estilo", desc: "Defina o sabor" },
            { icon: "🎯", label: "Pronto!", desc: "Descubra agora" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#FF6B7A]/10 shadow-sm">
              <span className="text-2xl">{item.icon}</span>
              <span className="text-xs font-semibold text-[#1A1A2E]">{item.label}</span>
              <span className="text-[10px] text-[#6B7280]">{item.desc}</span>
            </div>
          ))}
        </div>

        {/* CTA Button - Mais espaçamento e estilo premium */}
        <div className="w-full mt-6 animate-slide-up stagger-3 opacity-0" style={{ animationFillMode: 'forwards' }}>
          <button
            onClick={() => router.push("/swipe")}
            className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-6 text-xl font-black text-white overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-[#FF6B7A]/40 hover:-translate-y-2 active:translate-y-0 active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #FF6B7A 0%, #FF4757 100%)",
              boxShadow: "0 10px 40px -10px rgba(255, 107, 122, 0.5)",
            }}
          >
            {/* Animated shine effect */}
            <div 
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
              style={{
                background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
              }}
            />
            
            {/* Glow effect on hover */}
            <div 
              className="absolute -inset-2 opacity-0 group-hover:opacity-70 transition-opacity duration-500 blur-2xl -z-10"
              style={{
                background: "linear-gradient(135deg, #FF8E9A 0%, #FF6B7A 50%, #FF4757 100%)",
              }}
            />
            
            {/* Inner gradient shift */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
              style={{
                background: "linear-gradient(135deg, #FF8E9A 0%, #FF6B7A 50%, #FF4757 100%)",
              }}
            />
            
            {/* Button content */}
            <span className="relative z-10 tracking-wide">Começar Agora</span>
            <ChevronRight size={24} className="relative z-10 transition-transform duration-300 group-hover:translate-x-2" />
          </button>
        </div>

        {/* Bottom text - Mais espaçamento */}
        <p className="text-sm text-[#6B7280]/70 mt-4 animate-slide-up stagger-4 opacity-0" style={{ animationFillMode: 'forwards' }}>
          Rápido, divertido e sem complicação
        </p>
      </div>
    </main>
  );
}
