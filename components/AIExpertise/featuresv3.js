import React, { useRef, useState } from 'react';
import Slider from 'react-slick';

const FeaturesV3 = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const panelRef = useRef(null);

  const headingText = data?.content?.subtitle_2 || "Six blockers. One way through.";

  /* Arrows live in the section head, so slick's own pair stays off. */
  const outcomeSliderRef = useRef(null);
  const outcomeSliderSettings = {
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1100, settings: { slidesToShow: 2 } },
      { breakpoint: 767, settings: { slidesToShow: 1 } }
    ]
  };

  const accordionData = [
    {
      title: "Nobody agrees where to start",
      todaySteps: [
        "Every function arrives with a different AI wish list",
        "The business case is built on vendor claims",
        "Twelve months on, pilots that never shipped"
      ],
      todayCostLine: "A budget spent proving AI works, not making it pay.",
      turnbSteps: [
        "We map where AI actually pays in your operation",
        "Each candidate scored on value, data readiness and risk",
        "You get a sequenced roadmap, not a wish list"
      ],
      turnbResultLine: "A clear, actionable roadmap optimized for business ROI."
    },
    {
      title: "Your data is not ready, and everyone knows it",
      todaySteps: [
        "The conversation stops at “our data is a mess”",
        "What matters sits in PDFs, scans and email attachments",
        "Every project rebuilds the same pipeline from scratch"
      ],
      todayCostLine: "Eighteen months of AI ambition, still stuck at the data.",
      turnbSteps: [
        "Documents, scans and forms turned into structured data",
        "One governed layer your agents and dashboards both read",
        "Built once, in your tenant, reused by everything after"
      ],
      turnbResultLine: "A single, governed data layer ready for enterprise-wide scale."
    },
    {
      title: "Every decision waits on someone reading something",
      todaySteps: [
        "Contracts, invoices, applications, reports — read one at a time",
        "What was found stays with whoever found it",
        "Every function queues behind the same few readers"
      ],
      todayCostLine: "Decisions paced by reading speed, in every department.",
      turnbSteps: [
        "Every document read, understood, and turned into usable data",
        "What matters is extracted, checked against your rules, and routed",
        "Legal, finance, procurement and operations draw on one engine"
      ],
      turnbResultLine: "Faster, automated extraction that scales across all operations."
    },
    {
      title: "You hear about it after it becomes a problem",
      todaySteps: [
        "Renewals, limits and thresholds live in someone’s calendar",
        "Nobody was watching that particular signal",
        "It reaches you as an escalation, not a flag"
      ],
      todayCostLine: "An outcome you had every chance to prevent.",
      turnbSteps: [
        "Dates, limits and anomalies watched continuously",
        "Routed to the team that owns it, before it matters",
        "Escalates only if it is not handled"
      ],
      turnbResultLine: "Proactive, continuous oversight that stops issues before they arise."
    },
    {
      title: "Every question routes through the same three people",
      todaySteps: [
        "The answer exists — in a policy, a report, or someone’s head",
        "New staff ask the same questions for six months",
        "Your experts become a queue"
      ],
      todayCostLine: "Time spent rediscovering what the organisation already paid to learn.",
      turnbSteps: [
        "One place to ask, in plain language, by text or by voice",
        "Every answer cites the document and section behind it",
        "Access follows your existing permissions, not a new set"
      ],
      turnbResultLine: "Instant, verified answers empowering your entire workforce."
    },
    {
      title: "The tool you need does not exist",
      todaySteps: [
        "The product on the market covers most of your process",
        "You bend the process to fit the software",
        "What is left stays manual, permanently"
      ],
      todayCostLine: "A licence fee, and the work you needed done still done by hand.",
      turnbSteps: [
        "Built around your process, not the other way round",
        "Sits inside Teams, Excel or wherever your team works",
        "Your data stays in your tenant, your IP stays yours"
      ],
      turnbResultLine: "Custom tools that fit your unique workflows, securing your IP."
    }
  ];

  const railLabels = [
    "Where to start",
    "Data readiness",
    "Document backlog",
    "Early warning",
    "Expert bottleneck",
    "Custom tooling"
  ];

  const outcomes = [
    {
      title: "Decisions in hours, not weeks.",
      description: "The gap between a question forming and an answer landing collapses. Across every function, that compounds.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
      )
    },
    {
      title: "Capacity released.",
      description: "Work that consumed a morning takes minutes. What your people do with the morning is the whole point.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9.5" cy="6.5" r="3.5" /><path d="M2.5 21v-1.5A6 6 0 0 1 8.5 13.5h1.8" /><circle cx="17" cy="17" r="4.6" /><path d="m15.1 17 1.4 1.4 2.5-2.6" /></svg>
      )
    },
    {
      title: "Nobody queues for an answer.",
      description: "Your experts stop running a service desk. The question goes to the system; the judgement stays with them.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
      )
    },
    {
      title: "The same answer, whoever asks.",
      description: "Decisions stop depending on who was on shift, how long they have been here, or which spreadsheet they opened.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
      )
    },
    {
      title: "Volume grows. The team does not have to.",
      description: "Twice the contracts, twice the claims, twice the customers — without twice the people.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
      )
    },
    {
      title: "What the company knows, stays.",
      description: "Institutional knowledge outlives the people who built it. Nothing walks out with a resignation letter.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M10.2 11.3V9.9a1.8 1.8 0 0 1 3.6 0v1.4" /><rect x="9.1" y="11.3" width="5.8" height="4.4" rx="1.1" /></svg>
      )
    }
  ];

  /* Tab click: swap the panel, and on small screens bring it into view. */
  const selectBlocker = (index) => {
    setActiveIndex(index);
    if (typeof window !== 'undefined' && window.innerWidth < 992 && panelRef.current) {
      panelRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="fx">
      <div className="fx-orb fx-orb--a" aria-hidden="true" />
      <div className="fx-orb fx-orb--b" aria-hidden="true" />

      <div className="container">
        <div className="fx-inner">

          {/* ---------- header ---------- */}
          <header className="fx-head">
            <h2 className="fx-title">
             How AI creates <em>value</em>
            </h2>
            <p className="fx-subtitle">
              {headingText}
            </p>
            <p className="fx-sub">
              Every organisation hits the same six walls. Here is what each one costs today —
              and what it looks like once AI is running.
            </p>
          </header>

          {/* ---------- rail + story ---------- */}
          <div className="fx-grid">
            <aside className="fx-rail">
              <span className="fx-rail-cap">Six areas of impact</span>
              <div className="fx-rail-body">
                <span className="fx-rail-track" aria-hidden="true">
                  <span
                    className="fx-rail-fill"
                    style={{ height: `${((activeIndex + 1) / accordionData.length) * 100}%` }}
                  />
                </span>
                <ul className="fx-rail-list">
                  {accordionData.map((item, index) => (
                    <li key={index}>
                      <button
                        type="button"
                        onClick={() => selectBlocker(index)}
                        aria-current={activeIndex === index}
                        className={`fx-rail-item${activeIndex === index ? ' is-active' : ''}`}
                      >
                        <span className="fx-rail-num">{String(index + 1).padStart(2, '0')}</span>
                        <span className="fx-rail-label">{railLabels[index]}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="fx-stream" ref={panelRef}>
              <article key={activeIndex} className="fx-block">
                <div className="fx-block-head">
                  <div className="fx-block-meta">
                    <span className="fx-tag">Blocker</span>
                    <span className="fx-count" aria-hidden="true">
                      <span className="fx-count-now">{String(activeIndex + 1).padStart(2, '0')}</span>
                      <span className="fx-count-sep" />
                      <span className="fx-count-all">{String(accordionData.length).padStart(2, '0')}</span>
                    </span>
                  </div>
                  <h3 className="fx-block-title">{accordionData[activeIndex].title}</h3>
                </div>

                <div className="fx-tracks">
                  {/* today */}
                  <div className="fx-track fx-track--today">
                    <div className="fx-track-head">
                      <span className="fx-chip fx-chip--today">Today</span>
                    </div>
                    <ul className="fx-steps">
                      {accordionData[activeIndex].todaySteps.map((step, i) => (
                        <li key={i}>
                          <span className="fx-bullet fx-bullet--x" aria-hidden="true">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="fx-note fx-note--cost">
                      <span className="fx-note-label">The cost</span>
                      {accordionData[activeIndex].todayCostLine}
                    </div>
                  </div>

                  {/* shift */}
                  <div className="fx-shift" aria-hidden="true">
                    <span className="fx-shift-line" />
                    <span className="fx-shift-badge">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13" /><path d="m12 5 7 7-7 7" /></svg>
                    </span>
                    <span className="fx-shift-line" />
                  </div>

                  {/* with turnb */}
                  <div className="fx-track fx-track--turnb">
                    <div className="fx-track-head">
                      <span className="fx-chip fx-chip--turnb">WITH TurnB</span>
                    </div>
                    <ul className="fx-steps">
                      {accordionData[activeIndex].turnbSteps.map((step, i) => (
                        <li key={i}>
                          <span className="fx-bullet fx-bullet--check" aria-hidden="true">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="m5 13 4 4L19 7" /></svg>
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="fx-note fx-note--result">
                      <span className="fx-note-label">The result</span>
                      {accordionData[activeIndex].turnbResultLine}
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* ---------- outcomes ---------- */}
          <div className="fx-outcomes">
            <div className="fx-outcomes-head">
              <div className="fx-outcomes-headings">
                <h3 className="fx-outcomes-title">The outcomes</h3>
              </div>

              <div className="fx-outcome-nav">
                <button
                  type="button"
                  className="fx-nav-btn"
                  aria-label="Previous outcome"
                  onClick={() => outcomeSliderRef.current?.slickPrev()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
                </button>
                <button
                  type="button"
                  className="fx-nav-btn"
                  aria-label="Next outcome"
                  onClick={() => outcomeSliderRef.current?.slickNext()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </button>
              </div>
            </div>

            <div className="fx-outcome-slider">
              <Slider ref={outcomeSliderRef} {...outcomeSliderSettings}>
                {outcomes.map((outcome, index) => (
                  <div key={index}>
                    <div className="fx-outcome">
                      <div className="fx-outcome-top">
                        <span className="fx-outcome-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                        <span className="fx-outcome-icon">{outcome.icon}</span>
                      </div>
                      <h4 className="fx-outcome-title">{outcome.title}</h4>
                      <p className="fx-outcome-desc">{outcome.description}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .fx {
          position: relative;
          padding: 100px 0;
          background: #f6fbfb;
          font-family: 'Montserrat', sans-serif;
          color: #12312f;
          overflow: hidden;
        }
        .fx-inner { max-width: 1180px; margin: 0 auto; position: relative; z-index: 1; }

        .fx-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          z-index: 0;
        }
        .fx-orb--a { width: 520px; height: 520px; top: -160px; left: -160px; background: rgba(1,131,129,0.16); }
        .fx-orb--b { width: 460px; height: 460px; bottom: -180px; right: -140px; background: rgba(1,131,129,0.10); }

        /* ---------- header ---------- */
        .fx-head { max-width: 900px; margin-bottom: 64px; }
        .fx-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #018381;
          background: rgba(1,131,129,0.08);
          border: 1px solid rgba(1,131,129,0.16);
          border-radius: 999px;
          padding: 7px 14px;
          margin-bottom: 22px;
        }
        .fx-dot { width: 6px; height: 6px; border-radius: 50%; background: #018381; }
        .fx-title {
          font-size: 46px;
          line-height: 1.14;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin: 0 0 18px;
          color: #0b2422;
        }
        .fx-title em {
          font-style: normal;
          background: linear-gradient(100deg, #018381, #37b3ad);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .fx-subtitle {
          margin: 0 0 14px;
          font-size: 20px;
          line-height: 1.4;
          font-weight: 600;
          color: #0b2422;
        }
        .fx-sub {
          margin: 0;
          font-size: 16.5px;
          line-height: 1.7;
          font-weight: 500;
          color: #5b7371;
        }

        /* ---------- layout ---------- */
        .fx-grid {
          display: grid;
          grid-template-columns: 230px 1fr;
          gap: 56px;
          align-items: start;
        }

        /* ---------- sticky rail ---------- */
        .fx-rail { position: sticky; top: 110px; }
        .fx-rail-cap {
          display: block;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #9db3b1;
          margin-bottom: 18px;
        }
        .fx-rail-body { position: relative; padding-left: 18px; }
        .fx-rail-track {
          position: absolute;
          left: 0; top: 6px; bottom: 6px;
          width: 2px;
          border-radius: 2px;
          background: rgba(1,131,129,0.14);
          overflow: hidden;
        }
        .fx-rail-fill {
          display: block;
          width: 100%;
          border-radius: 2px;
          background: linear-gradient(180deg, #37b3ad, #018381);
          transition: height .45s cubic-bezier(.4,0,.2,1);
        }
        .fx-rail-list { list-style: none; margin: 0; padding: 0; }
        .fx-rail-item {
          display: flex;
          align-items: baseline;
          gap: 10px;
          width: 100%;
          text-align: left;
          background: none;
          border: 0;
          padding: 9px 0;
          cursor: pointer;
          font-family: inherit;
          font-size: 14px;
          font-weight: 600;
          color: #8ba5a3;
          transition: color .25s ease, transform .25s ease;
        }
        .fx-rail-item:hover { color: #12312f; }
        .fx-rail-item.is-active { color: #018381; transform: translateX(3px); }
        .fx-rail-num { font-size: 11px; font-weight: 700; letter-spacing: .06em; opacity: .55; }
        .fx-rail-item.is-active .fx-rail-num { opacity: 1; }

        /* ---------- story blocks ---------- */
        .fx-stream { scroll-margin-top: 90px; }
        .fx-block {
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 470px;
          background: #ffffff;
          border: 1px solid #e4f1f0;
          border-radius: 24px;
          padding: 38px 38px 34px;
          box-shadow: 0 18px 50px -30px rgba(1,131,129,0.45);
          overflow: hidden;
          animation: fxSwap .45s cubic-bezier(.22,1,.36,1) both;
        }
        @keyframes fxSwap {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: none; }
        }
        .fx-block-head { position: relative; margin-bottom: 28px; }
        .fx-block-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 12px;
        }
        .fx-tag {
          display: inline-block;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #018381;
        }
        .fx-count {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: -0.02em;
          pointer-events: none;
        }
        .fx-count-now { font-size: 26px; color: #018381; }
        .fx-count-sep {
          width: 14px;
          height: 1px;
          background: rgba(1,131,129,0.28);
          transform: rotate(-60deg);
        }
        .fx-count-all { font-size: 14px; font-weight: 700; color: rgba(1,131,129,0.42); }
        .fx-block-title {
          margin: 0;
          font-size: 25px;
          line-height: 1.32;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: #0b2422;
          max-width: 620px;
        }

        .fx-tracks {
          flex: 1;
          display: grid;
          grid-template-columns: 1fr 56px 1fr;
          align-items: stretch;
        }
        .fx-track { display: flex; flex-direction: column; border-radius: 18px; padding: 22px; }
        .fx-track--today { background: #fbfbfc; border: 1px dashed #e2e5ea; }
        .fx-track--turnb {
          background: linear-gradient(150deg, #f2fbfa 0%, #e6f7f6 100%);
          border: 1px solid #cfeeec;
        }
        .fx-track-head { margin-bottom: 16px; }
        .fx-chip {
          display: inline-block;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          padding: 6px 12px;
          border-radius: 999px;
        }
        .fx-chip--today { background: #eef0f3; color: #6b7280; }
        .fx-chip--turnb { background: #018381; color: #ffffff; box-shadow: 0 6px 16px -6px rgba(1,131,129,0.7); text-transform: none; }

        .fx-steps { list-style: none; margin: 0 0 20px; padding: 0; flex: 1; }
        .fx-steps li {
          display: flex;
          gap: 11px;
          align-items: flex-start;
          font-size: 14.5px;
          line-height: 1.6;
          font-weight: 500;
          margin-bottom: 13px;
        }
        .fx-steps li:last-child { margin-bottom: 0; }
        .fx-track--today .fx-steps li { color: #7a8794; }
        .fx-track--turnb .fx-steps li { color: #234b48; }
        .fx-bullet {
          flex: 0 0 auto;
          width: 18px; height: 18px;
          border-radius: 6px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 2px;
        }
        .fx-bullet--x { background: #f3f4f6; color: #a3adb9; }
        .fx-bullet--check { background: #018381; color: #ffffff; }

        .fx-note {
          border-radius: 14px;
          padding: 16px 18px;
          font-size: 14.5px;
          font-weight: 600;
          line-height: 1.5;
        }
        .fx-note-label {
          display: block;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 7px;
        }
        .fx-note--cost { background: #ffffff; border: 1px solid #f0d3d3; color: #8a4a4a; }
        .fx-note--cost .fx-note-label { color: #d06a6a; }
        .fx-note--result {
          background: linear-gradient(135deg, #018381, #046f6b);
          color: #ffffff;
          box-shadow: 0 14px 30px -18px rgba(1,131,129,0.9);
        }
        .fx-note--result .fx-note-label { color: rgba(255,255,255,0.7); }

        .fx-shift {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }
        .fx-shift-line { flex: 1; width: 1px; background: linear-gradient(180deg, rgba(1,131,129,0), rgba(1,131,129,0.22)); }
        .fx-shift-line:last-child { background: linear-gradient(180deg, rgba(1,131,129,0.22), rgba(1,131,129,0)); }
        .fx-shift-badge {
          width: 34px; height: 34px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid #d6eeec;
          color: #018381;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 18px -8px rgba(1,131,129,0.6);
        }

        /* ---------- outcomes ---------- */
        .fx-outcomes { margin-top: 100px; }
        .fx-outcomes-head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 40px;
        }
        .fx-outcomes-headings { max-width: 620px; }
        .fx-outcome-nav {
          display: flex;
          gap: 10px;
          flex-shrink: 0;
        }
        .fx-nav-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid #cfeeec;
          background: #ffffff;
          color: #018381;
          cursor: pointer;
          padding: 0;
          transition: background .25s ease, color .25s ease, border-color .25s ease, transform .25s ease;
        }
        .fx-nav-btn:hover {
          background: #018381;
          border-color: #018381;
          color: #ffffff;
          transform: translateY(-2px);
        }
        .fx-nav-btn:focus-visible { outline: 2px solid #018381; outline-offset: 2px; }
        .fx-outcomes-title {
          font-size: 34px;
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.22;
          margin: 0;
          color: #0b2422;
        }
        .fx-outcome-slider { margin: 0 -10px; }
        /* equal-height cards regardless of copy length */
        .fx-outcome-slider .slick-track {
          display: flex;
          align-items: stretch;
        }
        .fx-outcome-slider .slick-slide {
          height: auto;
          float: none;
        }
        .fx-outcome-slider .slick-slide > div {
          height: 100%;
          padding: 0 10px;
        }
        /* the lift on hover needs room, otherwise slick clips it */
        .fx-outcome-slider .slick-list { padding: 6px 0 14px; }
        .fx-outcome-slider .slick-dots { position: static; margin-top: 18px; }
        .fx-outcome-slider .slick-dots li button:before {
          font-size: 9px;
          color: #018381;
          opacity: 0.25;
        }
        .fx-outcome-slider .slick-dots li.slick-active button:before { opacity: 1; }
        .fx-outcome {
          height: 100%;
          position: relative;
          background: #ffffff;
          border: 1px solid #e4f1f0;
          border-radius: 20px;
          padding: 30px 26px 28px;
          overflow: hidden;
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .fx-outcome::after {
          content: '';
          position: absolute;
          inset: 0 auto auto 0;
          width: 100%; height: 3px;
          background: linear-gradient(90deg, #018381, #37b3ad);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .4s cubic-bezier(.22,1,.36,1);
        }
        .fx-outcome:hover {
          transform: translateY(-5px);
          border-color: #cfeeec;
          box-shadow: 0 24px 50px -30px rgba(1,131,129,0.6);
        }
        .fx-outcome:hover::after { transform: scaleX(1); }
        .fx-outcome-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 18px;
        }
        .fx-outcome-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px; height: 44px;
          border-radius: 13px;
          background: linear-gradient(140deg, #e8f8f7, #d7f0ef);
          color: #018381;
          flex-shrink: 0;
        }
        .fx-outcome-title {
          font-size: 17px;
          font-weight: 700;
          line-height: 1.4;
          margin: 0 0 10px;
          color: #0b2422;
        }
        .fx-outcome-desc {
          margin: 0;
          font-size: 14.5px;
          line-height: 1.65;
          font-weight: 500;
          color: #6b807e;
        }
        .fx-outcome-index {
          font-size: 32px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: rgba(1,131,129,0.11);
          line-height: 1;
          pointer-events: none;
          transition: color .3s ease;
        }
        .fx-outcome:hover .fx-outcome-index { color: rgba(1,131,129,0.2); }

        /* ---------- responsive ---------- */
        @media (max-width: 1100px) {
          .fx-grid { grid-template-columns: 190px 1fr; gap: 36px; }
        }
        @media (max-width: 991px) {
          .fx-grid { grid-template-columns: 1fr; gap: 34px; }
          .fx-rail { position: static; }
          .fx-rail-body { padding-left: 0; }
          .fx-rail-track { display: none; }
          .fx-rail-list { display: flex; flex-wrap: wrap; gap: 8px; }
          .fx-rail-item {
            width: auto;
            padding: 9px 14px;
            border: 1px solid #dcecea;
            border-radius: 999px;
            background: #ffffff;
          }
          .fx-rail-item.is-active {
            transform: none;
            background: #018381;
            border-color: #018381;
            color: #ffffff;
          }
          .fx-rail-item.is-active .fx-rail-num { color: rgba(255,255,255,0.75); }
          .fx-title { font-size: 38px; }
        }
        @media (max-width: 767px) {
          .fx { padding: 64px 0; }
          .fx-head { margin-bottom: 40px; }
          .fx-title { font-size: 30px; }
          .fx-subtitle { font-size: 18px; }
          .fx-sub { font-size: 15px; }
          .fx-block { padding: 26px 22px; border-radius: 20px; min-height: 0; }
          .fx-block-title { font-size: 20px; }
          .fx-count-now { font-size: 22px; }
          .fx-count-all { font-size: 13px; }
          .fx-tracks { grid-template-columns: 1fr; gap: 0; }
          .fx-shift { flex-direction: row; padding: 12px 0; }
          .fx-shift-line { flex: 1; width: auto; height: 1px; background: linear-gradient(90deg, rgba(1,131,129,0), rgba(1,131,129,0.22)); }
          .fx-shift-line:last-child { background: linear-gradient(90deg, rgba(1,131,129,0.22), rgba(1,131,129,0)); }
          .fx-shift-badge { transform: rotate(90deg); }
          .fx-outcomes { margin-top: 64px; }
          .fx-outcomes-title { font-size: 26px; }
          .fx-outcomes-head { align-items: flex-start; flex-direction: column; gap: 20px; }
          .fx-nav-btn { width: 40px; height: 40px; }
          .fx-outcome-slider { margin: 0 -8px; }
          .fx-outcome-slider .slick-slide > div { padding: 0 8px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .fx-block { animation: none; }
          .fx-rail-fill { transition: none; }
        }
      ` }} />
    </section>
  );
};

export default FeaturesV3;
