import { X, Heart, RotateCcw } from "lucide-react";

interface ActionButtonsProps {
    onLike: () => void;
    onNope: () => void;
    disabled?: boolean;
}

export function ActionButtons({ onLike, onNope, disabled }: ActionButtonsProps) {
    return (
        <div className="flex justify-center items-center gap-6">
            {/* Nope Button - Gray/White */}
            <button
                onClick={onNope}
                disabled={disabled}
                className="group relative flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white border-2 border-[#E5E7EB] text-[#6B7280] transition-all duration-300 ease-out hover:border-[#FF6B7A] hover:text-[#FF6B7A] hover:shadow-lg hover:shadow-[#FF6B7A]/10 active:scale-90 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-[#E5E7EB] disabled:hover:text-[#6B7280]"
                aria-label="Nope"
            >
                {/* Inner glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <X 
                    size={32} 
                    strokeWidth={2.5} 
                    className="relative z-10 transition-transform duration-200 group-hover:scale-110" 
                />
            </button>

            {/* Like Button - Pink/Coral */}
            <button
                onClick={onLike}
                disabled={disabled}
                className="group relative flex h-[88px] w-[88px] items-center justify-center rounded-full bg-gradient-to-br from-[#FF6B7A] to-[#FF4757] text-white shadow-xl shadow-[#FF6B7A]/40 transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-[#FF6B7A]/50 hover:scale-105 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-xl"
                aria-label="Like"
            >
                {/* Shine effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Pulse animation ring */}
                <div className="absolute inset-0 rounded-full border-2 border-[#FF6B7A] animate-ping opacity-0 group-hover:opacity-20"></div>
                
                <Heart 
                    size={42} 
                    fill="white" 
                    strokeWidth={0}
                    className="relative z-10 drop-shadow-md transition-all duration-200 group-hover:scale-110" 
                />
            </button>
        </div>
    );
}
