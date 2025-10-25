"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface LoadingElevatorProps {
  readonly open: boolean;
  readonly onAnimationComplete?: () => void;
}

export function LoadingElevator({
  open,
  onAnimationComplete,
}: Readonly<LoadingElevatorProps>) {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Left Door */}
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: open ? "-100%" : "0%" }}
        transition={{
          duration: 1,
          ease: [0.65, 0, 0.35, 1], // Custom ease for smooth premium feel
        }}
        className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37]"
        style={{
          boxShadow: "4px 0 32px rgba(212, 175, 55, 0.5)",
        }}
      />

      {/* Right Door */}
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: open ? "100%" : "0%" }}
        transition={{
          duration: 1,
          ease: [0.65, 0, 0.35, 1],
        }}
        onAnimationComplete={() => {
          if (open && onAnimationComplete) {
            onAnimationComplete();
          }
        }}
        className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#D4AF37] via-[#E5C158] to-[#D4AF37]"
        style={{
          boxShadow: "-4px 0 32px rgba(212, 175, 55, 0.5)",
        }}
      />

      {/* Center Logo */}
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={{
          opacity: open ? 0 : 1,
          scale: open ? 0.8 : 1,
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
          <Image
            src="/logo.png"
            alt="Gold Mustache"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </motion.div>

      {/* Dark Glow Effect for contrast */}
      <motion.div
        initial={{ opacity: 0.6 }}
        animate={{ opacity: open ? 0 : 0.6 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div
          className="w-96 h-96 md:w-[600px] md:h-[600px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(11, 11, 11, 0.8) 0%, transparent 60%)",
          }}
        />
      </motion.div>
    </div>
  );
}
