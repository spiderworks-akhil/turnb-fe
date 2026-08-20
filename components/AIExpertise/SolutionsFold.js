import React from 'react';

const solutionsData = [
  {
    title: "AI Strategy & Transformation Roadmaps",
    points: [
      "Opportunities scored on value, data readiness and risk",
      "Sequenced roadmap with dependencies mapped",
      "Business case and operating model per candidate"
    ],
    ctaText: "AI to Consult"
  },
  {
    title: "Digitization & Document Risk Review",
    subtitle: "Includes Intelligent OCR · Document Compliance & Risk Review",
    points: [
      "Paper, PDFs and scans become machine-readable records",
      "Contracts and filings checked against your own policy",
      "Exceptions routed with reviewer assignment and SLA tracking"
    ],
    ctaText: "AI to Consult"
  },
  {
    title: "Workflow Automation & Conversational AI",
    subtitle: "Includes Workflow Automation with AI Agents · Conversational AI for Operations",
    points: [
      "Multi-step processes run end to end, human authority at control points",
      "Chat, email and voice resolved without a queue",
      "Integrated into ERP, SharePoint, Teams and WhatsApp"
    ],
    ctaText: "AI to Consult"
  },
  {
    title: "Custom GenAI Agents & Copilots",
    subtitle: "Includes Productivity Enhancement · Recommendation & Decision Engines",
    points: [
      "Built around your process, not a template",
      "Copilots inside Microsoft 365 — nothing sends without your say",
      "Next best action per customer, with measured lift"
    ],
    ctaText: "AI to Scale"
  },
  {
    title: "Enterprise Knowledge Platforms",
    points: [
      "Policies, manuals and archives answer directly",
      "Bilingual English and Arabic, text and voice",
      "Access inherited from your existing directory"
    ],
    ctaText: "AI to Scale"
  },
  {
    title: "Computer Vision",
    points: [
      "Existing IP cameras, no new hardware",
      "Footfall, dwell and repeat visits, de-duplicated",
      "Edge or cloud, depending on privacy constraints"
    ],
    ctaText: "AI to Scale"
  },
  {
    title: "AI-Ready Data & Enterprise Ontology",
    points: [
      "Documents, core systems and feeds pulled into one governed layer",
      "Entities, relationships and terms defined once, used everywhere",
      "Built in your tenant, reused by every model and report after"
    ],
    ctaText: "Data to Drive"
  },
  {
    title: "Real-Time AI-Powered Dashboards",
    points: [
      "Ask why a number moved, get a written answer",
      "Narrative summaries generated on every refresh",
      "Built around the decision, not the data source"
    ],
    ctaText: "Data to Drive"
  },
  {
    title: "Decision Intelligence, Risk & Value Optimisation",
    subtitle: "Includes Predictive Analytics · Risk & Anomaly Detection · Performance & Value Analytics · Optimize vs Maximize",
    points: [
      "Demand, revenue and churn forecast with the drivers shown",
      "Fraud, leakage and anomalies detected as they form",
      "Price, mix and spend tuned together, trade-offs quantified"
    ],
    ctaText: "Data to Drive"
  }
];

const categoriesData = [
  { title: "AI to Consult", cards: solutionsData.slice(0, 3) },
  { title: "AI to Scale", cards: solutionsData.slice(3, 6) },
  { title: "Data to Drive", cards: solutionsData.slice(6, 9) }
];


const CARD_GAP = 32;      // matches the flex gap between stacked cards
const STICKY_TOP = 150;   // first card's sticky offset
const STICKY_STEP = 20;   // each subsequent card sits this much lower

const SolutionsFold = () => {
  const sectionRef = React.useRef(null);

  /* Scroll dynamics for the stacked cards:
     each card reports how far the next one has covered it as `--cover` (0 → 1),
     which the CSS below turns into a scale-down + dim, so the deck reads as a
     deliberate stack instead of cards clipping each other. */
  React.useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const groups = Array.from(root.querySelectorAll('.category-cards-right'));
    let frame = null;

    const measure = () => {
      frame = null;
      groups.forEach((group) => {
        const cards = Array.from(group.children);
        cards.forEach((card, i) => {
          const next = cards[i + 1];
          if (!next) return;
          const gap = next.getBoundingClientRect().top - card.getBoundingClientRect().top;
          const travel = card.offsetHeight + CARD_GAP - STICKY_STEP;
          const cover = travel > 0
            ? Math.min(1, Math.max(0, 1 - (gap - STICKY_STEP) / travel))
            : 0;
          card.style.setProperty('--cover', cover.toFixed(3));
        });
      });
    };

    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(measure);
    };

    const cards = Array.from(root.querySelectorAll('.solution-card'));

    /* Only hide-then-reveal once JS is running, so the cards are never
       stuck invisible if the script never executes. */
    if (typeof IntersectionObserver === 'undefined') {
      cards.forEach((c) => c.classList.add('is-in'));
    }
    root.classList.add('sf-ready');

    /* Reveal each card as it enters the viewport. */
    const observer = typeof IntersectionObserver === 'undefined' ? null : new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );
    if (observer) cards.forEach((c) => observer.observe(c));

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="solutions-fold" style={{ position: 'relative', padding: '80px 0', fontFamily: "'Montserrat', sans-serif" }}>
      {/* background layer — kept from the previous design, lightened a step.
          Isolated in its own absolutely-positioned box so `overflow: hidden`
          here does not break the sticky cards below. */}
      <div className="sf-bg" aria-hidden="true">
        <span className="sf-glow sf-glow--a" />
        <span className="sf-glow sf-glow--b" />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
        <div className="solutions-layout" style={{ 
          display: 'flex', 
          flexDirection: 'column',
          gap: '80px', 
          alignItems: 'center',
        }}>
          {/* Top Header section */}
          <div className="solutions-header" style={{ 
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <span style={{ color: '#2dd4bf', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '14px', display: 'block', marginBottom: '16px' }}>
              What we build
            </span>
            <h2 className="custom-teal-title" style={{ fontSize: '42px', fontWeight: '800', margin: '0 0 24px 0', lineHeight: '1.2' }}>
              All of this is possible today.
            </h2>
            <p style={{ fontSize: '18px', color: '#bac2d1ff', lineHeight: '1.6', margin: 0 }}>
              Three pillars, nine solution areas. Below is scope — what each covers, and on what stack.
            </p>
          </div>

          {/* Categories loop */}
          <div className="solutions-categories" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '100px' }}>
            {categoriesData.map((cat, catIdx) => (
              <div key={catIdx} className="category-section" style={{
                display: 'flex',
                gap: '60px',
                alignItems: 'flex-start',
                flexWrap: 'wrap'
              }}>
                {/* Left side title */}
                <div className="category-title-left" style={{
                  flex: '1 1 300px',
                  position: 'sticky',
                  top: '150px',
                  paddingBottom: '40px'
                }}>
                  <h3 className="custom-teal-title" style={{ fontSize: '32px', fontWeight: '800', textTransform: 'uppercase', margin: 0, lineHeight: '1.3' }}>
                    {cat.title}
                  </h3>
                </div>

                {/* Right side cards with scroll effect */}
                <div className="category-cards-right" style={{
                  flex: '2 1 600px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: `${CARD_GAP}px`
                }}>
                  {cat.cards.map((card, idx) => {
                    const isScale = cat.title === "AI to Scale";
                    const bgColors = isScale 
                      ? ['#018381', '#017674', '#016867'] 
                      : ['#ffffff', '#f8fafc', '#f1f5f9'];
                    const subColor = isScale ? '#ccfbf1' : '#018381';
                    const bodyColor = isScale ? '#f3f4f6' : '#4b5563';
                    
                    return (
                      <div key={idx} className={`solution-card${isScale ? ' solution-card--dark' : ''}`} style={{ 
                        position: 'sticky',
                        top: `${STICKY_TOP + idx * STICKY_STEP}px`,
                        zIndex: idx + 1,
                        background: bgColors[idx % 3], 
                        borderRadius: '16px', 
                        padding: '40px', 
                        boxShadow: isScale ? '0 -8px 30px rgba(1, 131, 129, 0.15)' : '0 -8px 30px rgba(0,0,0,0.06)', 
                        border: isScale ? '1px solid #017674' : '1px solid #e5e7eb',
                        display: 'flex',
                        flexDirection: 'column'
                      }}>
                        <span className="solution-card__eyebrow" style={{ color: subColor, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                          <i className="solution-card__pulse" aria-hidden="true" />
                          {card.ctaText}
                        </span>
                        <h3 className={isScale ? "card-title-white" : "card-title-dark"} style={{ fontSize: '24px', fontWeight: '700', marginBottom: card.subtitle ? '12px' : '24px' }}>
                          {card.title}
                        </h3>
                        {card.subtitle && (
                          <p style={{ fontSize: '15px', color: subColor, fontWeight: '600', marginBottom: '24px', lineHeight: '1.5' }}>
                            {card.subtitle}
                          </p>
                        )}
                        <ul style={{ paddingLeft: '24px', margin: '0', color: bodyColor, lineHeight: '1.8', fontSize: '16px' }}>
                          {card.points.map((pt, i) => (
                            <li key={i} style={{ marginBottom: '12px' }}>{pt}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .solutions-fold {
          background: #0a343a;
          color: #e7f4f3;
          isolation: isolate;
        }
        .sf-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
        }
        .sf-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.032) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.032) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: radial-gradient(circle at 50% 18%, #000 0%, transparent 72%);
          -webkit-mask-image: radial-gradient(circle at 50% 18%, #000 0%, transparent 72%);
        }
        .sf-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
        }
        .sf-glow--a { width: 620px; height: 620px; top: -260px; left: -180px; background: rgba(1,131,129,0.34); }
        .sf-glow--b { width: 520px; height: 520px; bottom: -240px; right: -160px; background: rgba(45,212,191,0.16); }

        /* ---------- card dynamics ---------- */
        .solution-card {
          --cover: 0;    /* how far the next card has covered this one, 0 → 1 */
          --lift: 0px;   /* hover lift */
          --enter: 0px;  /* entrance offset, set once JS takes over */
          overflow: hidden;
          transform:
            translateY(calc(var(--enter) + var(--lift) + var(--cover) * -10px))
            scale(calc(1 - var(--cover) * 0.055));
          transform-origin: top center;
          filter: brightness(calc(1 - var(--cover) * 0.14));
          transition:
            transform .55s cubic-bezier(.22,1,.36,1),
            opacity .55s ease,
            filter .25s linear,
            box-shadow .35s ease,
            border-color .35s ease;
          will-change: transform;
        }
        .sf-ready .solution-card { opacity: 0; --enter: 34px; }
        .sf-ready .solution-card.is-in { opacity: 1; --enter: 0px; }

        /* accent rail, drawn on hover */
        .solution-card::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, #5fd4cf, #018381);
          transform: scaleY(0);
          transform-origin: top;
          transition: transform .45s cubic-bezier(.22,1,.36,1);
        }
        .solution-card--dark::before { background: linear-gradient(180deg, #ffffff, #ccfbf1); }
        .solution-card:hover::before { transform: scaleY(1); }

        /* light sweep across the surface on hover */
        .solution-card::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(115deg, transparent 34%, rgba(45,212,191,0.16) 48%, transparent 62%);
          transform: translateX(-130%);
          opacity: 0;
        }
        .solution-card:hover::after {
          transform: translateX(130%);
          opacity: 1;
          transition: transform 1s cubic-bezier(.22,1,.36,1), opacity .25s ease;
        }

        .solution-card:hover {
          --lift: -6px;
          border-color: rgba(1,131,129,0.45) !important;
          box-shadow: 0 24px 50px -24px rgba(1, 131, 129, 0.55) !important;
        }
        .solution-card--dark:hover {
          border-color: rgba(204,251,241,0.55) !important;
          box-shadow: 0 24px 50px -22px rgba(0, 0, 0, 0.6) !important;
        }

        /* live dot on the pillar label */
        .solution-card__pulse {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: currentColor;
          flex: 0 0 auto;
          box-shadow: 0 0 0 0 currentColor;
          animation: sf-pulse 2.6s ease-out infinite;
        }
        @keyframes sf-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(1,131,129,0.55); }
          70%  { box-shadow: 0 0 0 9px rgba(1,131,129,0); }
          100% { box-shadow: 0 0 0 0 rgba(1,131,129,0); }
        }

        /* bullets stagger in behind the card */
        .solution-card li {
          transition: opacity .5s ease, transform .5s cubic-bezier(.22,1,.36,1);
        }
        .sf-ready .solution-card li { opacity: 0; transform: translateX(-10px); }
        .sf-ready .solution-card.is-in li { opacity: 1; transform: none; }
        .solution-card.is-in li:nth-child(1) { transition-delay: .18s; }
        .solution-card.is-in li:nth-child(2) { transition-delay: .28s; }
        .solution-card.is-in li:nth-child(3) { transition-delay: .38s; }
        .solution-card.is-in li:nth-child(4) { transition-delay: .48s; }
        .solution-card li::marker { color: #018381; }
        .solution-card--dark li::marker { color: #ccfbf1; }

        @media (max-width: 991px) {
          .category-title-left {
            position: static !important;
            padding-bottom: 20px !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .solution-card,
          .solution-card li,
          .solution-card::before,
          .solution-card::after {
            transition: none !important;
            animation: none !important;
          }
          .solution-card { opacity: 1; --enter: 0px; transform: none; filter: none; }
          .solution-card li { opacity: 1; transform: none; }
        }

        .card-title-white {
          color: #ffffff !important;
        }
        .card-title-dark {
          color: #1f2937 !important;
        }
        .custom-teal-title {
          color: #00b8aeff !important;
        }
      ` }} />
    </section>
  );
};

export default SolutionsFold;
