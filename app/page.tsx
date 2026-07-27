"use client";

import { useState } from "react";

type ResumeItem = {
  id: string;
  date: string;
  title: string;
  place: string;
  summary: string;
  details: string[];
};

const resumeItems: ResumeItem[] = [
  {
    id: "experience",
    date: "2024 — NOW",
    title: "Your Current Role",
    place: "Company Name · Indianapolis, IN",
    summary: "A one-line description of the work you do and the value you create.",
    details: [
      "Add a specific accomplishment with a measurable result.",
      "Describe a project you led, built, or meaningfully improved.",
      "Name the tools, craft, or perspective you bring to your team.",
    ],
  },
  {
    id: "project",
    date: "2023 — 2024",
    title: "A Project You’re Proud Of",
    place: "Independent / Collaborative",
    summary: "What you made, who it helped, and why it mattered.",
    details: [
      "Explain the problem and the part you personally owned.",
      "Share the most interesting constraint or decision.",
      "Add a link to the finished work when you’re ready.",
    ],
  },
  {
    id: "education",
    date: "2020 — 2024",
    title: "Your Degree or Program",
    place: "School Name · Indiana",
    summary: "Field of study, focus, honors, or the thread that shaped your work.",
    details: [
      "Relevant coursework, studio, thesis, or capstone.",
      "A student organization, leadership role, or award.",
    ],
  },
  {
    id: "skills",
    date: "ALWAYS",
    title: "Tools & Talents",
    place: "What I bring to the table",
    summary: "Strategy · Design · Writing · Research · Technology",
    details: [
      "Replace these with your strongest hard and soft skills.",
      "Keep the list focused on the work you want to do next.",
    ],
  },
];

function ResumeEntry({
  item,
  open,
  onToggle,
}: {
  item: ResumeItem;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <article className={`resume-entry ${open ? "is-open" : ""}`}>
      <button
        className="entry-button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`${item.id}-details`}
      >
        <span className="entry-date">{item.date}</span>
        <span className="entry-main">
          <span className="entry-title">{item.title}</span>
          <span className="entry-place">{item.place}</span>
          <span className="entry-summary">{item.summary}</span>
        </span>
        <span className="entry-mark" aria-hidden="true">
          {open ? "−" : "+"}
        </span>
      </button>
      <div
        className="entry-details"
        id={`${item.id}-details`}
        aria-hidden={!open}
      >
        <div>
          <ul>
            {item.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const [openItem, setOpenItem] = useState<string | null>("experience");

  return (
    <main>
      <section className="hero" aria-labelledby="intro-title">
        <nav className="topbar" aria-label="Primary navigation">
          <a href="#" className="monogram" aria-label="Back to top">
            YN
          </a>
          <a href="#resume" className="nav-link">
            Resume <span aria-hidden="true">↓</span>
          </a>
        </nav>

        <div className="stars" aria-hidden="true" />
        <div className="moon" aria-hidden="true" />

        <div className="hero-copy">
          <p className="eyebrow">Indianapolis, Indiana</p>
          <h1 id="intro-title">
            I make thoughtful things
            <br />
            <em>with people in mind.</em>
          </h1>
          <p className="intro">
            Your Name is a designer, builder, and curious human based in Indy.
          </p>
        </div>

        <div className="skyline skyline-back" aria-hidden="true">
          <i className="bldg b1" />
          <i className="bldg b2" />
          <i className="bldg b3" />
          <i className="bldg b4" />
          <i className="bldg b5" />
          <i className="bldg b6" />
          <i className="bldg b7" />
          <i className="bldg b8" />
        </div>
        <div className="skyline skyline-front" aria-hidden="true">
          <i className="bldg f1" />
          <i className="bldg f2" />
          <i className="bldg f3" />
          <i className="bldg monument">
            <span />
          </i>
          <i className="bldg f5" />
          <i className="bldg f6" />
          <i className="bldg f7" />
        </div>

        <a href="#resume" className="scroll-cue">
          <span>Scroll to the story</span>
          <i aria-hidden="true" />
        </a>
      </section>

      <section className="desk" id="resume" aria-labelledby="resume-title">
        <div className="desk-label">
          <span>02 / THE PAPER TRAIL</span>
          <span>Click any line to read more</span>
        </div>

        <div className="paper-wrap">
          <div className="paper">
            <header className="paper-header">
              <div>
                <p className="paper-kicker">RESUME / SELECTED WORK</p>
                <h2 id="resume-title">Your Name</h2>
                <p className="paper-role">Designer, builder &amp; problem solver</p>
              </div>
              <address>
                Indianapolis, IN
                <br />
                you@email.com
                <br />
                yoursite.com
              </address>
            </header>

            <div className="paper-rule" />

            <p className="paper-intro">
              I care about clear ideas, useful details, and work that earns its
              place in people’s lives.
            </p>

            <div className="resume-list">
              {resumeItems.map((item) => (
                <ResumeEntry
                  key={item.id}
                  item={item}
                  open={openItem === item.id}
                  onToggle={() =>
                    setOpenItem(openItem === item.id ? null : item.id)
                  }
                />
              ))}
            </div>

            <footer className="paper-footer">
              <span>References &amp; a proper PDF available on request.</span>
              <a href="mailto:you@email.com">Let’s make something →</a>
            </footer>
          </div>

          <div className="pen" aria-hidden="true">
            <span className="pen-cap" />
            <span className="pen-body" />
            <span className="pen-grip" />
            <span className="pen-tip" />
          </div>
        </div>
      </section>
    </main>
  );
}
