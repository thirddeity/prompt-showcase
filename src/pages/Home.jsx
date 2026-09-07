import SectionNav from "@/components/SectionNav";
import Hero from "@/components/Hero";
import AssignmentSection from "@/components/AssignmentSection";
import Footer from "@/components/Footer";

const assignments = [
  {
    id: "canva",
    number: "01",
    title: "Canva",
    subtitle: "AI Art Generation",
    category: "Creative AI",
    zeroShotPrompt: "สร้างรูปภาพของใบไม้",
    fewShotPrompt:
      "สร้างรูปภาพใบไม้ในอนาคต 1000 ปีข้างหน้า ที่มีเครื่องกลฟันเฟือง ผสมผสานธรรมชาติกับเทคโนโลยีแบบ biomechanical fusion สไตล์ steampunk/cyberpunk",
    reflection:
      'ยิ่งให้รายละเอียดมาก ยิ่งได้ผลลัพธ์ที่ตรงกับจินตนาการมากขึ้น การระบุ "ความรู้สึก" หรือ "บริบท" ช่วยให้ AI เข้าใจมิติเวลาและสไตล์ การผสมผสานแนวคิด (ธรรมชาติ + เทคโนโลยี) สร้างความเป็นเอกลักษณ์',
    resultType: "image",
    image: "https://media.base44.com/images/public/6a9e24676e88d47238134f4a/01ca80c09_generated_image.png",
  },
  {
    id: "desmos",
    number: "02",
    title: "Desmos",
    subtitle: "Mathematical Relationships",
    category: "Mathematical Visualization",
    zeroShotPrompt: "สร้างกราฟเกี่ยวกับฟังก์ชันกำลังสอง",
    fewShotPrompt:
      "สร้างกราฟฟังก์ชันกำลังสอง y = ax² + bx + c โดยมี Slider สำหรับตัวแปร a, b, และ c แสดงจุดยอด แกนสมมาตร และมีคำอธิบายผลของตัวแปรแต่ละตัว",
    reflection:
      "Prompt ที่ดีไม่จำเป็นต้องเขียนให้ยาวตั้งแต่แรก แต่ควรเริ่มจากเป้าหมายหลัก แล้วตรวจสอบผลลัพธ์ จากนั้นนำข้อบกพร่องมาปรับปรุง Prompt ในรอบถัดไป กระบวนการนี้เป็นแบบ Iterative: Keyword → Prompt → ผลลัพธ์ → วิเคราะห์ → เพิ่มรายละเอียด → Prompt ใหม่ → ผลลัพธ์ที่ดีขึ้น",
    resultType: "graph",
    image: "https://media.base44.com/images/public/6a9e24676e88d47238134f4a/01ca80c09_generated_image.png",
  },
  {
    id: "mermaid",
    number: "03",
    title: "Mermaid",
    subtitle: "Diagrams from Code",
    category: "System Diagrams",
    zeroShotPrompt: "สร้าง Diagram สำหรับระบบ Login",
    fewShotPrompt:
      "สร้าง System Flow Diagram สำหรับระบบ Login โดยแบ่งด้วย Subgraph เป็น Frontend, Backend และ Database แสดงการสื่อสารระหว่างระบบ และเพิ่มกรณี Login สำเร็จ, Password ผิด และ Server Error",
    reflection:
      'การสร้าง Diagram ด้วย AI ไม่ควรบอกเพียงว่า "สร้าง Diagram" แต่ควรกำหนดประเภทของ Diagram โครงสร้างของระบบ ทิศทางของ Flow เงื่อนไข และกรณีผิดพลาดให้ชัดเจน',
    resultType: "code",
    zeroShotCode: `graph TD
    A[Start] --> B[Login]
    B --> C[Success]
    B --> D[Fail]`,
    fewShotCode: `graph TD
    subgraph Frontend
        A[Login Page] --> B[Submit]
    end
    subgraph Backend
        B --> C{Validate}
        C -->|Success| D[Token]
        C -->|Wrong PW| E[Error]
        C -->|Server Error| F[500]
    end
    subgraph Database
        D --> G[Session]
    end`,
    zeroShotLabel: "mermaid — zero-shot",
    fewShotLabel: "mermaid — few-shot",
    image: "https://media.base44.com/images/public/6a9e24676e88d47238134f4a/cb5e0cd18_generated_image.png",
  },
  {
    id: "latex",
    number: "04",
    title: "LaTeX",
    subtitle: "Academic Typesetting",
    category: "Academic Documents",
    zeroShotPrompt: "เขียนบทความเกี่ยวกับ AI ด้วย LaTeX",
    fewShotPrompt:
      "สร้างบทความวิชาการด้วย LaTeX บน Overleaf โดยมีโครงสร้าง Abstract, Keywords, Introduction, Methodology, Results, Conclusion ใช้ระบบ Citation กับไฟล์ .bib รองรับภาษาไทย และกำหนดโครงสร้าง Project ของ Overleaf อย่างชัดเจน",
    reflection:
      'LaTeX เป็นระบบที่แยกเนื้อหาออกจากรูปแบบการนำเสนอ Prompt ที่ดีควรระบุทั้ง "เนื้อหาที่ต้องการ" และ "รูปแบบผลลัพธ์ที่ต้องการ" เพราะการบอกเพียงหัวข้ออาจทำให้ AI สร้างเอกสารที่ใช้งานได้ แต่ไม่ตรงกับรูปแบบที่ผู้ใช้ต้องการ',
    resultType: "code",
    zeroShotCode: `\\documentclass{article}
\\begin{document}
\\title{Artificial Intelligence}
\\maketitle
AI is transforming...
\\end{document}`,
    fewShotCode: `\\documentclass{article}
\\usepackage[utf8]{inputenc}
\\begin{document}
\\title{Artificial Intelligence}
\\author{Author}
\\begin{abstract}
This paper explores...
\\end{abstract}
\\keywords{AI, ML}
\\section{Introduction}
\\section{Methodology}
\\section{Results}
\\section{Conclusion}
\\bibliography{refs}
\\end{document}`,
    zeroShotLabel: "latex — zero-shot",
    fewShotLabel: "latex — few-shot",
    image: "https://media.base44.com/images/public/6a9e24676e88d47238134f4a/cb5e0cd18_generated_image.png",
  },
  {
    id: "notebooklm",
    number: "05",
    title: "NotebookLM",
    subtitle: "AI Presentation Summary",
    category: "AI Presentation",
    zeroShotPrompt: "สรุปเอกสารเป็น Slide",
    fewShotPrompt:
      "สร้าง Presentation จากเอกสารที่กำหนด โดยมี 10 สไลด์ นำเสนอ 15 นาที สำหรับกลุ่มผู้ฟังนักศึกษา แบ่งเนื้อหาเป็นประเด็น จัดลำดับการเล่าเรื่องให้ต่อเนื่อง จำกัดข้อความในแต่ละสไลด์ มี Key Message ชัดเจน และใช้ข้อมูลจาก Source เท่านั้น",
    reflection:
      'การใช้ AI สร้าง Presentation ไม่ควรสั่งเพียงว่า "สรุปเอกสารเป็น Slide" การกำหนดจำนวน Slide ระยะเวลา โครงสร้างการเล่าเรื่อง ปริมาณข้อความ กลุ่มผู้ฟัง และข้อจำกัดด้านแหล่งข้อมูล ช่วยให้ควบคุมผลลัพธ์ได้ดีขึ้น',
    resultType: "slides",
    image: "https://media.base44.com/images/public/6a9e24676e88d47238134f4a/4569ed733_generated_image.png",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#0F2523" }}>
      <SectionNav />
      <Hero />
      <main>
        {assignments.map((assignment) => (
          <AssignmentSection key={assignment.id} assignment={assignment} />
        ))}
      </main>
      <Footer />
    </div>
  );
}
