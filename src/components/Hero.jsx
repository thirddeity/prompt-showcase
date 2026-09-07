import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [position, setPosition] = useState(50);
  const sectionRef = useRef(null);

  const handleMove = (clientX) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = (x / rect.width) * 100;
    setPosition(Math.max(5, Math.min(95, pct)));
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={(e) => handleMove(e.clientX)}
      onTouchMove={(e) => e.touches[0] && handleMove(e.touches[0].clientX)}
      className="relative h-screen min-h-[640px] w-full overflow-hidden cursor-ew-resize select-none"
      style={{ background: "#0F2523" }}
    >
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://media.base44.com/images/public/6a9e24676e88d47238134f4a/01ca80c09_generated_image.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Zero-shot side (full background, blurry) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4">
          <div
            className="mb-4 md:mb-6 text-[10px] md:text-sm tracking-[0.4em] uppercase font-mono"
            style={{ color: "#4D7C76" }}
          >
            Initial Attempt
          </div>
          <h1
            className="font-display font-extrabold leading-none tracking-tighter blur-[1px] opacity-50"
            style={{
              color: "#F0FDF4",
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(4rem, 18vw, 16rem)",
            }}
          >
            ZERO
          </h1>
          <p className="mt-4 md:mt-6 text-sm md:text-lg font-body max-w-md mx-auto" style={{ color: "#ffff" }}>
            คำสั่งกว้างๆ → ผลลัพธ์ทั่วไป
          </p>
        </div>
      </div>

      {/* Few-shot side (clipped, clear) */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0F2523 0%, #0a1a18 100%)" }} />
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://media.base44.com/images/public/6a9e24676e88d47238134f4a/cb5e0cd18_generated_image.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative text-center px-4">
          <div
            className="mb-4 md:mb-6 text-[10px] md:text-sm tracking-[0.4em] uppercase font-mono"
            style={{ color: "#86EFAC" }}
          >
            Refined Result
          </div>
          <h1
            className="font-display font-extrabold leading-none tracking-tighter"
            style={{
              color: "#86EFAC",
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(4rem, 18vw, 16rem)",
            }}
          >
            FEW
          </h1>
          <p className="mt-4 md:mt-6 text-sm md:text-lg font-body max-w-md mx-auto" style={{ color: "#F0FDF4" }}>
            คำสั่งเฉพาะเจาะจง → ผลลัพธ์ที่ซับซ้อน
          </p>
        </div>
      </div>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-px pointer-events-none"
        style={{
          left: `${position}%`,
          background: "#86EFAC",
          boxShadow: "0 0 30px #86EFAC, 0 0 60px rgba(134, 239, 172, 0.3)",
        }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 flex items-center justify-center"
          style={{
            borderColor: "#86EFAC",
            background: "rgba(15, 37, 35, 0.9)",
            boxShadow: "0 0 20px rgba(134, 239, 172, 0.5)",
          }}
        >
          <div className="flex gap-0.5">
            <div className="w-0.5 h-3" style={{ background: "#86EFAC" }} />
            <div className="w-0.5 h-3" style={{ background: "#86EFAC" }} />
          </div>
        </div>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-6 md:bottom-10 left-0 right-0 z-10 px-[8vw]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4"
        >
          <div>
            <h2 className="text-xs md:text-base tracking-[0.3em] uppercase font-mono mb-1" style={{ color: "#F0FDF4" }}>
              The Evolution of Prompting
            </h2>
            <p className="text-[10px] md:text-xs font-mono" style={{ color: "#4D7C76" }}>
              เลื่อนเพื่อเปรียบเทียบ ← →
            </p>
          </div>
          <div className="text-left md:text-right">
            <p className="text-[10px] md:text-xs font-mono uppercase tracking-wider" style={{ color: "#4D7C76" }}>
              Presented to
            </p>
            <p className="text-xs md:text-sm font-mono" style={{ color: "#86EFAC" }}>
              APIMUK MUANGKASEM
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
