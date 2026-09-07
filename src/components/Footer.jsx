import { motion } from "framer-motion";

function PdfSlidesButton() {
  const pdfUrl = "/pdf/prompt-slides.pdf";

  return (
    <div className="flex justify-center items-center p-2 min-h-40">
      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          /* Layout */
          inline-flex items-center gap-6 px-12 py-5 
          
          /* Shape & Border */
          rounded-full border-2 border-[#ff3e3e] 
          
          /* Colors & Background */
          bg-[#0c0c0c] text-emerald-200 
          
          /* Typography */
          font-sans font-bold text-3xl uppercase tracking-tight
          
          /* Glow Effect (Neon Red) */
          shadow-[0_0_20px_2px_rgba(255,62,62,0.6)]
          
          /* Interaction (Transitions) */
          transition-all duration-300 ease-out
          
          /* Hover States */
          hover:scale-105 
          hover:shadow-[0_0_30px_5px_rgba(255,62,62,0.8)]
          hover:border-[#ff5e5e]
          
          /* Focus State for Accessibility */
          focus:outline-none focus:ring-4 focus:ring-[#ff3e3e]/50
        "
      >
        <span>PDF Slides</span>

        {/* --- Custom Integrated PDF & Download Icon --- */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          {/* แสงเรืองแสงสีแดงหลังไอคอน */}
          {/* <div className="absolute inset-0 bg-[#ff3e3e] rounded-full blur-md opacity-70"></div> */}

          {/* SVG ไอคอน (ทำตามแบบในภาพ) */}
          <svg
            viewBox="0 0 100 100"
            className="relative w-full h-full text-[#ff3e3e]"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* เส้นขอบรูปเอกสาร */}
            <path d="M30 15 H70 L85 30 V85 H30 Z" />
            {/* เส้นมุมพับเอกสาร */}
            <path d="M70 15 V30 H85" />

            {/* ข้อความ "PDF" (จำลองด้วยเส้น) */}
            <text x="57" y="75" fontSize="16" fontWeight="bold" fill="currentColor" stroke="none" textAnchor="middle">
              PDF
            </text>

            {/* ลูกศรชี้ลง (Download Icon) */}
          </svg>
        </div>
      </a>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative pt-20 md:pt-24 pb-8 overflow-hidden" style={{ background: "#0a1a18" }}>
      {/* Marquee */}
      <div className="overflow-hidden mb-16 md:mb-20 py-2">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="font-display font-extrabold text-[8vw] leading-none mx-4"
              style={{
                color: "rgba(134, 239, 172, 0.06)",
                fontFamily: "Syne, sans-serif",
              }}
            >
              PRESENTATION SLIDES • PROMPT ENGINEERING •
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-[8vw] text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[10px] md:text-sm font-mono  tracking-[0.3em] mb-4 md:mb-6" style={{ color: "#4D7C76" }}>
            Official Submission for
          </p>
          <h3
            className="font-display font-extrabold mb-8"
            style={{
              color: "#F0FDF4",
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
            }}
          >
            APIMUK MUANGKASEM
          </h3>
          <PdfSlidesButton />
        </motion.div>

        {/* Credits */}
        <div
          className="mt-16 md:mt-20 pt-8 border-t flex flex-col md:flex-row justify-between gap-6"
          style={{ borderColor: "rgba(77, 124, 118, 0.2)" }}
        >
          <div className="text-left">
            <p className="text-[10px] md:text-xs font-mono uppercase tracking-wider mb-1" style={{ color: "#4D7C76" }}>
              Student
            </p>
            <p className="text-sm font-mono" style={{ color: "#F0FDF4" }}>
              นาย พงศ์อมร วงศ์เฉลิมทานต์
            </p>
            <p className="text-xs font-mono" style={{ color: "#4D7C76" }}>
              2610711302015
            </p>
          </div>
          <div className="text-left md:text-right">
            <p className="text-[10px] md:text-xs font-mono uppercase tracking-wider mb-1" style={{ color: "#4D7C76" }}>
              Instructor
            </p>
            <p className="text-sm font-mono" style={{ color: "#F0FDF4" }}>
              อภิมุข เมืองเกษม
            </p>
            <p className="text-xs font-mono" style={{ color: "#86EFAC" }}>
              APIMUK MUANGKASEM
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
