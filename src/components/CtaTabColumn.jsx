const tabs = [
  {
    id: "cta-pdf",
    label: "PDF Slides",
    shortLabel: "PDF",
  },
  {
    id: "cta-github",
    label: "Github",
    shortLabel: "GH",
  },
];

export default function CtaTabColumn() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <aside className="cta-tab-column" aria-label="ลิงก์ไปยังปุ่มใน Footer">
      <div className="cta-tab-column__track" aria-hidden="true" />
      {tabs.map((tab, index) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => scrollTo(tab.id)}
          className="cta-tab-column__tab"
          aria-label={`เลื่อนไปยัง ${tab.label}`}
          style={{ "--tab-index": index }}
        >
          <span className="cta-tab-column__pointer" aria-hidden="true" />
          <span className="cta-tab-column__label">{tab.shortLabel}</span>
          <span className="cta-tab-column__full">{tab.label}</span>
        </button>
      ))}
    </aside>
  );
}
