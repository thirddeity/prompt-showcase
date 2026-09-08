import { motion } from "framer-motion";

const cornerPath = "M32,32C14.355,32,0,17.645,0,0h.985c0,17.102,13.913,31.015,31.015,31.015v.985Z";

function DrawerCta({ href, label, ariaLabel, top, bottom }) {
  return (
    <div className="btn-container scroll-mt-32">
      <div className="btn-drawer transition-top">{top}</div>
      <div className="btn-drawer transition-bottom">{bottom}</div>

      <a href={href} target="_blank" rel="noopener noreferrer" className="btn" aria-label={ariaLabel}>
        <span className="btn-text">{label}</span>
      </a>

      {[0, 1, 2, 3].map((index) => (
        <svg
          key={index}
          className="btn-corner"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-1 1 32 32"
          aria-hidden="true"
        >
          <path d={cornerPath} />
        </svg>
      ))}
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
          <div className="footer-cta-row">
            <DrawerCta
              href={`${import.meta.env.BASE_URL}pdf/prompt-slides.pdf`}
              label="PDF Slides"
              ariaLabel="เปิด PDF Slides"
              top="Open"
              bottom="slides"
            />
            <DrawerCta
              href="https://github.com/thirddeity/prompt-showcase"
              label="Github"
              ariaLabel="ดูโปรเจกต์บน GitHub"
              top="Redirect"
              bottom="to..."
            />
          </div>
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
