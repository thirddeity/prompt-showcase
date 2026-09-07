import { useEffect, useState } from 'react';

const navItems = [
  { id: 'canva', label: 'Canva' },
  { id: 'desmos', label: 'Desmos' },
  { id: 'mermaid', label: 'Mermaid' },
  { id: 'latex', label: 'LaTeX' },
  { id: 'notebooklm', label: 'NotebookLM' },
];

export default function SectionNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 overflow-hidden max-w-[100vw]"
      style={{
        paddingTop: scrolled ? '0.75rem' : '1.5rem',
        paddingBottom: scrolled ? '0.75rem' : '1.5rem',
        background: scrolled ? 'rgba(15, 37, 35, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(77, 124, 118, 0.2)' : '1px solid transparent',
      }}
    >
      <div className="flex items-center justify-between px-4 md:px-[8vw] overflow-hidden">
        <div className="font-mono text-[10px] md:text-sm truncate" style={{ color: '#F0FDF4' }}>
          พงศ์อมร วงศ์เฉลิมทานต์
        </div>
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="font-mono text-xs lg:text-sm transition-colors duration-300 hover:text-[#86EFAC]"
              style={{ color: '#4D7C76' }}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="hidden md:block font-mono text-xs uppercase tracking-[0.2em]" style={{ color: '#86EFAC' }}>
          Prompt Engineering
        </div>
      </div>
    </nav>
  );
}