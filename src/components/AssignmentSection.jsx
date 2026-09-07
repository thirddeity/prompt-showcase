import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

function PromptBlock({ content, type }) {
  const isFew = type === "few";
  return (
    <div
      className="relative rounded-lg p-5 md:p-6 backdrop-blur-md"
      style={{
        background: isFew ? "rgba(134, 239, 172, 0.05)" : "rgba(15, 37, 35, 0.5)",
        border: `1px solid ${isFew ? "rgba(134, 239, 172, 0.3)" : "rgba(77, 124, 118, 0.3)"}`,
      }}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full" style={{ background: isFew ? "#86EFAC" : "#4D7C76" }} />
        <span
          className="font-mono text-[10px] md:text-xs uppercase tracking-wider"
          style={{ color: isFew ? "#86EFAC" : "#4D7C76" }}
        >
          {isFew ? "few-shot prompt" : "zero-shot prompt"}
        </span>
      </div>
      <p className="font-body text-sm md:text-base leading-relaxed" style={{ color: "#F0FDF4" }}>
        {content}
      </p>
    </div>
  );
}

function ResultImage({ src, blur }) {
  return (
    <div
      className="relative rounded-lg overflow-hidden aspect-[4/3]"
      style={{ border: "1px solid rgba(77, 124, 118, 0.3)" }}
    >
      <img src={src} alt="result" className={`w-full h-full object-cover ${blur ? "blur-[2px] opacity-90" : ""}`} />
      <div
        className="absolute inset-0"
        style={{
          background: blur
            ? "linear-gradient(to bottom, rgba(15,37,35,0.15), rgba(15,37,35,0.25))"
            : "linear-gradient(to bottom, transparent 60%, rgba(15,37,35,0.4))",
        }}
      />
    </div>
  );
}

function ResultCode({ code, label }) {
  return (
    <div
      className="relative rounded-lg overflow-hidden"
      style={{
        background: "rgba(10, 26, 24, 0.8)",
        border: "1px solid rgba(77, 124, 118, 0.3)",
      }}
    >
      <div className="flex items-center gap-2 px-4 py-2.5 border-b" style={{ borderColor: "rgba(77, 124, 118, 0.2)" }}>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#4D7C76" }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#4D7C76" }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#86EFAC" }} />
        </div>
        <span className="font-mono text-[10px] md:text-xs ml-2" style={{ color: "#4D7C76" }}>
          {label}
        </span>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="font-mono text-[10px] md:text-xs leading-relaxed whitespace-pre" style={{ color: "#F0FDF4" }}>
          {code}
        </code>
      </pre>
    </div>
  );
}

function ResultGraph({ few }) {
  return (
    <div
      className="relative rounded-lg p-4 md:p-6"
      style={{
        background: "rgba(10, 26, 24, 0.8)",
        border: "1px solid rgba(77, 124, 118, 0.3)",
      }}
    >
      <svg viewBox="0 0 400 250" className="w-full">
        {[0, 50, 100, 150, 200, 250, 300, 350, 400].map((x) => (
          <line key={`v${x}`} x1={x} y1={0} x2={x} y2={250} stroke="rgba(77, 124, 118, 0.12)" strokeWidth="1" />
        ))}
        {[0, 50, 100, 150, 200, 250].map((y) => (
          <line key={`h${y}`} x1={0} y1={y} x2={400} y2={y} stroke="rgba(77, 124, 118, 0.12)" strokeWidth="1" />
        ))}
        <line x1="0" y1="125" x2="400" y2="125" stroke="#4D7C76" strokeWidth="1.5" />
        <line x1="200" y1="0" x2="200" y2="250" stroke="#4D7C76" strokeWidth="1.5" />
        <path d="M 80 30 Q 200 250 320 30" fill="none" stroke="#86EFAC" strokeWidth="2.5" />
        {few && (
          <>
            <line
              x1="200"
              y1="0"
              x2="200"
              y2="250"
              stroke="#86EFAC"
              strokeWidth="1"
              strokeDasharray="4 4"
              opacity="0.5"
            />
            <circle cx="200" cy="220" r="5" fill="#86EFAC" />
            <text x="210" y="225" fill="#F0FDF4" fontSize="10" fontFamily="monospace">
              Vertex
            </text>
            <rect x="20" y="200" width="80" height="4" rx="2" fill="rgba(134, 239, 172, 0.2)" />
            <circle cx="40" cy="202" r="6" fill="#86EFAC" />
            <rect x="20" y="215" width="80" height="4" rx="2" fill="rgba(134, 239, 172, 0.2)" />
            <circle cx="60" cy="217" r="6" fill="#86EFAC" />
            <rect x="20" y="230" width="80" height="4" rx="2" fill="rgba(134, 239, 172, 0.2)" />
            <circle cx="50" cy="232" r="6" fill="#86EFAC" />
            <text x="110" y="205" fill="#4D7C76" fontSize="9" fontFamily="monospace">
              a
            </text>
            <text x="110" y="220" fill="#4D7C76" fontSize="9" fontFamily="monospace">
              b
            </text>
            <text x="110" y="235" fill="#4D7C76" fontSize="9" fontFamily="monospace">
              c
            </text>
          </>
        )}
      </svg>
    </div>
  );
}

function ResultSlides({ few }) {
  return (
    <div
      className="relative rounded-lg p-3 md:p-4"
      style={{
        background: "rgba(10, 26, 24, 0.8)",
        border: "1px solid rgba(77, 124, 118, 0.3)",
      }}
    >
      <div className="aspect-video rounded p-3 md:p-4" style={{ background: "rgba(15, 37, 35, 0.9)" }}>
        {few ? (
          <>
            <div className="text-[10px] font-mono mb-2" style={{ color: "#86EFAC" }}>
              KEY MESSAGE
            </div>
            <div
              className="text-sm md:text-base font-bold mb-3"
              style={{ color: "#F0FDF4", fontFamily: "Syne, sans-serif" }}
            >
              การเรียนรู้จาก Prompt Engineering
            </div>
            <div className="space-y-1.5">
              <div className="h-1.5 w-3/4 rounded" style={{ background: "rgba(134, 239, 172, 0.3)" }} />
              <div className="h-1.5 w-2/3 rounded" style={{ background: "rgba(134, 239, 172, 0.2)" }} />
              <div className="h-1.5 w-1/2 rounded" style={{ background: "rgba(134, 239, 172, 0.15)" }} />
            </div>
            <div className="mt-3 flex gap-1">
              {[1, 2, 3, 4, 5].map((n) => (
                <div
                  key={n}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: n === 1 ? "#86EFAC" : "rgba(77, 124, 118, 0.3)" }}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="text-[10px] font-mono mb-2" style={{ color: "#4D7C76" }}>
              SUMMARY
            </div>
            <div className="space-y-1">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="h-1.5 rounded"
                  style={{ background: "rgba(77, 124, 118, 0.3)", width: `${90 - i * 5}%` }}
                />
              ))}
            </div>
            <div className="mt-3 space-y-1">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="h-1.5 rounded"
                  style={{ background: "rgba(77, 124, 118, 0.2)", width: `${80 - i * 10}%` }}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function ResultDisplay({ assignment, type }) {
  if (type === "zero") {
    switch (assignment.resultType) {
      case "image":
        return <ResultImage src={"/images/leaf.jpeg"} blur={false} />;
      case "graph":
        return <ResultGraph few={false} />;
      case "code":
        return <ResultCode code={assignment.zeroShotCode} label={assignment.zeroShotLabel || "code"} />;
      case "slides":
        return <ResultSlides few={false} />;
      default:
        return null;
    }
  } else {
    switch (assignment.resultType) {
      case "image":
        return <ResultImage src={assignment.image} blur={false} />;
      case "graph":
        return <ResultGraph few={true} />;
      case "code":
        return <ResultCode code={assignment.fewShotCode} label={assignment.fewShotLabel || "code"} />;
      case "slides":
        return <ResultSlides few={true} />;
      default:
        return null;
    }
  }
}

function StepLabel({ number, label, side }) {
  const align = side === "left" ? "md:justify-end" : side === "right" ? "md:justify-start" : "justify-center";
  return (
    <div className={`flex items-center gap-3 mb-4 ${align}`}>
      <span className="font-mono text-xs" style={{ color: "#86EFAC" }}>
        {number}
      </span>
      <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em]" style={{ color: "#4D7C76" }}>
        {label}
      </span>
    </div>
  );
}

export default function AssignmentSection({ assignment }) {
  const { id, number, title, subtitle, category, zeroShotPrompt, fewShotPrompt, reflection, image } = assignment;

  return (
    <article id={id} className="relative py-20 md:py-32 px-[8vw]">
      {/* Ambient image */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Section header */}
      <motion.div {...fadeUp} className="relative mb-16 md:mb-24">
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-sm" style={{ color: "#86EFAC" }}>
            {number}
          </span>
          <span className="h-px flex-1 max-w-[200px]" style={{ background: "rgba(77, 124, 118, 0.3)" }} />
          <span
            className="px-3 py-1 rounded-full text-[10px] md:text-xs font-mono uppercase tracking-wider"
            style={{
              background: "rgba(134, 239, 172, 0.08)",
              color: "#86EFAC",
              border: "1px solid rgba(134, 239, 172, 0.25)",
            }}
          >
            {category}
          </span>
        </div>
        <h2
          className="font-display font-extrabold tracking-tight"
          style={{
            color: "#F0FDF4",
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            lineHeight: 1,
          }}
        >
          {title}
        </h2>
        <p className="mt-3 text-base md:text-lg font-body" style={{ color: "#4D7C76" }}>
          {subtitle}
        </p>
      </motion.div>

      {/* Vertical lineage grid */}
      <div className="relative">
        {/* Center line */}
        <div
          className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(77, 124, 118, 0.4) 10%, rgba(77, 124, 118, 0.4) 90%, transparent)",
          }}
        />

        {/* Step 1: Zero-shot Prompt (left) */}
        <motion.div {...fadeUp} className="relative md:w-[calc(50%-1.5rem)] md:mr-auto md:pr-0 mb-12 md:mb-20">
          <div className="md:text-right">
            <StepLabel number="01" label="Zero-shot Prompt" side="left" />
            <PromptBlock content={zeroShotPrompt} type="zero" />
          </div>
        </motion.div>

        {/* Step 2: First Result (right) */}
        <motion.div {...fadeUp} className="relative md:w-[calc(50%-1.5rem)] md:ml-auto md:pl-0 mb-12 md:mb-20">
          <StepLabel number="02" label="First Result" side="right" />
          <ResultDisplay assignment={assignment} type="zero" />
        </motion.div>

        {/* Step 3: Few-shot Prompt (left) */}
        <motion.div {...fadeUp} className="relative md:w-[calc(50%-1.5rem)] md:mr-auto md:pr-0 mb-12 md:mb-20">
          <div className="md:text-right">
            <StepLabel number="03" label="Few-shot Prompt" side="left" />
            <PromptBlock content={fewShotPrompt} type="few" />
          </div>
        </motion.div>

        {/* Step 4: Refined Result (right) */}
        <motion.div {...fadeUp} className="relative md:w-[calc(50%-1.5rem)] md:ml-auto md:pl-0 mb-12 md:mb-20">
          <StepLabel number="04" label="Refined Result" side="right" />
          <ResultDisplay assignment={assignment} type="few" />
        </motion.div>

        {/* Step 5: Reflection (full width) */}
        <motion.div {...fadeUp} className="relative mt-16 md:mt-20">
          <StepLabel number="05" label="Reflection" side="center" />
          <div
            className="rounded-lg p-6 md:p-10 backdrop-blur-md"
            style={{
              background: "rgba(134, 239, 172, 0.03)",
              border: "1px solid rgba(134, 239, 172, 0.15)",
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span
                className="px-3 py-1 rounded-full text-[10px] md:text-xs font-mono uppercase tracking-wider"
                style={{
                  background: "rgba(134, 239, 172, 0.1)",
                  color: "#86EFAC",
                  border: "1px solid rgba(134, 239, 172, 0.3)",
                }}
              >
                Key Learning
              </span>
            </div>
            <p className="font-body text-base md:text-lg leading-relaxed max-w-3xl" style={{ color: "#F0FDF4" }}>
              {reflection}
            </p>
          </div>
        </motion.div>
      </div>
    </article>
  );
}
