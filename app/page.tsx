"use client";

import { useEffect, useRef, useState } from "react";

type Section = { id: string; label: string; heading: string; preview: string; content: React.ReactNode };

const sections: Section[] = [
  { id:"education", label:"01 / Education", heading:"Purdue University, College of Science", preview:"B.S. Computer Science and Artificial Intelligence · May 2029", content:<div className="resume-row"><div><strong>Purdue University, College of Science</strong><em>B.S. Computer Science and Artificial Intelligence</em></div><div className="resume-meta"><strong>Indianapolis, Indiana</strong><em>May 2029</em></div></div> },
  { id:"skills", label:"02 / Skills", heading:"Technical Skills & Languages", preview:"Python · Java · JavaScript · React · Graphic Design", content:<ul><li>Programming: Python, Java, JavaScript, React (in progress)</li><li>Graphic design</li><li>Fluent in English; native proficiency in Tamil</li></ul> },
  { id:"experience", label:"03 / Experience", heading:"Professional Experience", preview:"Health technology and scientific research experience in Dubai", content:<><div className="resume-row"><div><strong>Avanee Polyclinic</strong><em>Patient Data & Technology Intern</em></div><div className="resume-meta"><strong>Dubai, UAE</strong><em>Oct 2023 - Nov 2023</em></div></div><ul><li>Collaborated with health care technicians to aid the implementation of EHR software, streamlining patient data organization throughout the clinic.</li></ul><div className="resume-row sub-entry"><div><strong>Gulf Medical University</strong><em>Future Scientist of UAE Research Mentee</em></div><div className="resume-meta"><strong>Dubai, UAE</strong><em>Nov 2023 - June 2024</em></div></div><ul><li>Worked with experts and 10 peers to develop laboratory concepts and the skills needed to write a high-level scientific research paper.</li><li>Conducted literature reviews, strengthening critical thinking and evidence-based analysis.</li></ul></> },
  { id:"campus", label:"04 / Campus", heading:"Campus Involvement", preview:"Secretary, Purdue University CS Club in Indianapolis", content:<><div className="resume-row"><div><strong>Purdue University, CS Club in Indianapolis</strong><em>Secretary</em></div><div className="resume-meta"><strong>Indianapolis, Indiana</strong><em>Sept 2025 - Present</em></div></div><ul><li>Organize agendas, record meeting minutes, and manage communications for 50+ members.</li><li>Improved record-keeping and communication to make club operations more efficient.</li><li>Co-organized Hack Indy, a 150+ participant hackathon, coordinating logistics, volunteers, and event programming.</li></ul><div className="resume-row sub-entry"><div><strong>GEMS Founders Al Mizhar School</strong><em>Computer Science Club Co-Founder</em></div><div className="resume-meta"><strong>Dubai, UAE</strong><em>Sept 2024 - May 2025</em></div></div><ul><li>Founded the school&apos;s first Computer Science Club, growing it to 30+ members and the school&apos;s largest student organization.</li><li>Organized weekly coding workshops that developed programming foundations and collaboration.</li></ul></> },
  { id:"projects", label:"05 / Projects", heading:"Property Finder for D’code Properties", preview:"Responsive real-estate listing platform · 2025 · In progress", content:<><div className="resume-row"><div><strong>Property Finder Website for D’code Properties</strong><em>In progress</em></div><div className="resume-meta"><strong>2025</strong></div></div><ul><li>Designed and built a responsive listing platform with HTML, CSS, and JavaScript for an interactive, intuitive property-search experience.</li><li>Planning a React interface and backend integration so brokers can add, edit, and manage listings dynamically.</li></ul></> },
  { id:"awards", label:"06 / Honors", heading:"Golden Hammer Award", preview:"Outstanding Club Event · Hack Indy · 2026", content:<><div className="resume-row"><div><strong>Golden Hammer Award for Outstanding Club Event</strong><em>Hack Indy</em></div><div className="resume-meta"><strong>2026</strong></div></div><p className="detail-line">Recognized for Hack Indy&apos;s exceptional impact and execution.</p></> },
];

function ResumeSection({ section, open, onToggle }: { section:Section; open:boolean; onToggle:()=>void }) {
  return <section className={`resume-section ${open ? "is-open" : ""}`}>
    <button className="section-toggle" onClick={onToggle} aria-expanded={open} aria-controls={`${section.id}-content`}>
      <span className="section-label">{section.label}</span>
      <span className="section-summary"><strong>{section.heading}</strong><span>{section.preview}</span></span>
      <span className="section-plus" aria-hidden="true">{open ? "−" : "+"}</span>
    </button>
    <div className="section-content" id={`${section.id}-content`} aria-hidden={!open}><div className="section-content-inner">{section.content}</div></div>
  </section>;
}

const stickers = [
  { id:"bio", text:"BIO × CODE", note:"bioinformatics", className:"sticker-bio", x:"-7%", y:"21%" },
  { id:"cs", text:"{ CS }", note:"computer science", className:"sticker-cs", x:"94%", y:"35%" },
  { id:"ai", text:"AI / ML", note:"curious mind", className:"sticker-ai", x:"-7%", y:"62%" },
  { id:"india", text:"INDIAN", note:"roots & identity", className:"sticker-india", x:"91%", y:"77%" },
];

function DraggableSticker({ sticker }: { sticker:(typeof stickers)[number] }) {
  const [position,setPosition] = useState({x:0,y:0});
  const drag = useRef({active:false,x:0,y:0,startX:0,startY:0});

  const onPointerDown = (event:React.PointerEvent<HTMLButtonElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current={active:true,x:event.clientX,y:event.clientY,startX:position.x,startY:position.y};
  };
  const onPointerMove = (event:React.PointerEvent<HTMLButtonElement>) => {
    if(!drag.current.active) return;
    setPosition({x:drag.current.startX+event.clientX-drag.current.x,y:drag.current.startY+event.clientY-drag.current.y});
  };
  const stopDragging = () => { drag.current.active=false; };
  const onKeyDown = (event:React.KeyboardEvent<HTMLButtonElement>) => {
    const amount=event.shiftKey?20:5;
    const moves:Record<string,[number,number]>={ArrowLeft:[-amount,0],ArrowRight:[amount,0],ArrowUp:[0,-amount],ArrowDown:[0,amount]};
    if(moves[event.key]){ event.preventDefault(); const [x,y]=moves[event.key]; setPosition(current=>({x:current.x+x,y:current.y+y})); }
    if(event.key==="Home"){ event.preventDefault(); setPosition({x:0,y:0}); }
  };

  return <button
    className={`drag-sticker ${sticker.className}`}
    style={{left:sticker.x,top:sticker.y,transform:`translate3d(${position.x}px,${position.y}px,0)`}}
    onPointerDown={onPointerDown}
    onPointerMove={onPointerMove}
    onPointerUp={stopDragging}
    onPointerCancel={stopDragging}
    onKeyDown={onKeyDown}
    aria-label={`${sticker.text} sticker. Drag to move, or use arrow keys. Press Home to reset.`}
  >
    <strong>{sticker.text}</strong><span>{sticker.note}</span>
  </button>;
}

export default function Home() {
  const assetBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const [openSection,setOpenSection] = useState("education");
  const [scrollProgress,setScrollProgress] = useState(0);
  const [stickerReset,setStickerReset] = useState(0);
  useEffect(()=>{
    let frame=0;
    const update=()=>{ cancelAnimationFrame(frame); frame=requestAnimationFrame(()=>setScrollProgress(Math.min(1,window.scrollY/(window.innerHeight*.95)))); };
    update(); window.addEventListener("scroll",update,{passive:true});
    return()=>{ cancelAnimationFrame(frame); window.removeEventListener("scroll",update); };
  },[]);

  return <main style={{"--scroll-progress":scrollProgress} as React.CSSProperties}>
    <section className="photo-hero" aria-labelledby="hero-title">
      <div className="photo-stage" aria-hidden="true"><img src={`${assetBase}/assets/indy.jpg`} alt="" /></div>
      <div className="photo-shade" aria-hidden="true" />
      <nav className="hero-nav" aria-label="Primary navigation"><a className="logo" href="#" aria-label="Ashwati Palanivel, home">AP</a><a href="#resume">Resume ↓</a></nav>
      <div className="hero-content"><p className="hero-kicker">Computer Science · Purdue Indianapolis</p><h1 id="hero-title">Hi, I&apos;m <em>Ashwati.</em></h1><p>I&apos;m a Computer Science and Artificial Intelligence student learning and building technology in the heart of Indianapolis.</p></div>
      <a className="scroll-indicator" href="#resume"><span>Open my résumé</span><i aria-hidden="true" /></a>
    </section>
    <section className="writing-desk" id="resume" aria-labelledby="resume-title">
      <div className="desk-note"><span>Ashwati Palanivel / Résumé</span><span>Drag the stickers · select a section to read more</span><button onClick={()=>setStickerReset(value=>value+1)}>Reset stickers</button></div>
      <div className="paper-scene">
        <article className="resume-paper">
          <header className="resume-header">
            <div><p className="paper-overline">Computer Science + AI</p><h2 id="resume-title">Ashwati Palanivel</h2><p className="resume-title">Purdue University Indianapolis</p></div>
            <address><a href="mailto:ashwati.in@gmail.com">ashwati.in@gmail.com</a><a href="tel:+14633143810">463-314-3810</a><a href="https://www.linkedin.com/in/ashwatipalanivel" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/ashwatip" target="_blank" rel="noreferrer">GitHub</a><a className="resume-download" href={`${assetBase}/assets/Ashwati-Palanivel-Resume.pdf`} download>Download résumé PDF ↓</a></address>
          </header>
          <p className="paper-introduction">CS and AI student interested in useful technology, research, and the communities that bring good ideas to life.</p>
          <div className="resume-sections">{sections.map(section=><ResumeSection key={section.id} section={section} open={openSection===section.id} onToggle={()=>setOpenSection(openSection===section.id?"":section.id)} />)}</div>
          <footer className="resume-footer"><span>Indianapolis, Indiana</span><a href="mailto:ashwati.in@gmail.com">Get in touch →</a></footer>
        </article>
        <div className="sticker-layer" aria-label="Draggable interest stickers">
          {stickers.map(sticker=><DraggableSticker key={`${sticker.id}-${stickerReset}`} sticker={sticker} />)}
        </div>
        <div className="fountain-pen" aria-hidden="true"><span className="fp-finial" /><span className="fp-cap" /><span className="fp-band" /><span className="fp-barrel" /><span className="fp-section" /><span className="fp-nib"><i /></span></div>
      </div>
    </section>
  </main>;
}
