import { motion } from "framer-motion";

export default function Footer() {
  const pdfUrl = "/Prompt-Engineering-slides-redesign.pdf";

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
          <p
            className="text-[10px] md:text-sm font-mono uppercase tracking-[0.3em] mb-4 md:mb-6"
            style={{ color: "#4D7C76" }}
          >
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
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full font-mono text-xs md:text-sm uppercase tracking-wider transition-all duration-300"
            style={{
              background: "rgba(134, 239, 172, 0.08)",
              border: "1px solid rgba(134, 239, 172, 0.3)",
              color: "#86EFAC",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#86EFAC";
              e.currentTarget.style.color = "#0F2523";
              e.currentTarget.style.borderColor = "#86EFAC";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(134, 239, 172, 0.08)";
              e.currentTarget.style.color = "#86EFAC";
              e.currentTarget.style.borderColor = "rgba(134, 239, 172, 0.3)";
            }}
          >
            <span>PDF SLIDES</span>
            <span>→</span>
          </a>
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
