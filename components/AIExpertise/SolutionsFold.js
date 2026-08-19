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

const SolutionsFold = () => {
  return (
    <section className="sf">
      <span className="sf-glow sf-glow--a" aria-hidden="true" />
      <span className="sf-glow sf-glow--b" aria-hidden="true" />

      <div className="container">
        <div className="sf-inner">

          {/* ---------- header ---------- */}
          <header className="sf-head">
            <span className="sf-eyebrow">
              <span className="sf-eyebrow-dot" />
              What we build
            </span>
            <h2 className="sf-title">All of this is possible today.</h2>
            <p className="sf-sub">
              Three pillars, nine solution areas. Below is scope — what each covers, and on what stack.
            </p>
            <div className="sf-stats">
              <span className="sf-stat"><b>3</b> pillars</span>
              <span className="sf-stat-sep" aria-hidden="true" />
              <span className="sf-stat"><b>9</b> solution areas</span>
            </div>
          </header>

          {/* ---------- pillars ---------- */}
          <div className="sf-pillars">
            {categoriesData.map((cat, catIdx) => (
              <section key={catIdx} className="sf-pillar">
                <div className="sf-pillar-head">
                  <span className="sf-node" aria-hidden="true">
                    {String(catIdx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="sf-pillar-title">{cat.title}</h3>
                  <span className="sf-pillar-rule" aria-hidden="true" />
                  <span className="sf-pillar-count">{cat.cards.length} solution areas</span>
                </div>

                <div className="sf-cards">
                  {cat.cards.map((card, idx) => (
                    <article key={idx} className="sf-card">
                      <span className="sf-card-idx" aria-hidden="true">
                        {String(catIdx * 3 + idx + 1).padStart(2, '0')}
                      </span>

                      <h4 className="sf-card-title">{card.title}</h4>

                      {card.subtitle && (
                        <p className="sf-card-sub">{card.subtitle}</p>
                      )}

                      <ul className="sf-points">
                        {card.points.map((pt, i) => (
                          <li key={i}>
                            <span className="sf-tick" aria-hidden="true">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="m5 13 4 4L19 7"/></svg>
                            </span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        .sf {
          position: relative;
          padding: 100px 0;
          background: #041b1f;
          font-family: 'Montserrat', sans-serif;
          color: #e7f4f3;
          overflow: hidden;
        }
        .sf::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: radial-gradient(circle at 50% 22%, #000 0%, transparent 72%);
          -webkit-mask-image: radial-gradient(circle at 50% 22%, #000 0%, transparent 72%);
          pointer-events: none;
        }
        .sf-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
        }
        .sf-glow--a { width: 620px; height: 620px; top: -260px; left: -180px; background: rgba(1,131,129,0.30); }
        .sf-glow--b { width: 520px; height: 520px; bottom: -240px; right: -160px; background: rgba(45,212,191,0.14); }
        .sf-inner { position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; }

        /* ---------- header ---------- */
        .sf-head { max-width: 720px; margin: 0 auto 76px; text-align: center; }
        .sf-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #5fd4cf;
          background: rgba(95,212,207,0.08);
          border: 1px solid rgba(95,212,207,0.22);
          border-radius: 999px;
          padding: 7px 15px;
          margin-bottom: 24px;
        }
        .sf-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: #5fd4cf; }
        .sf-title {
          font-size: 46px;
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.16;
          margin: 0 0 18px;
          color: #ffffff;
        }
        .sf-sub {
          margin: 0;
          font-size: 17px;
          line-height: 1.7;
          font-weight: 500;
          color: rgba(231,244,243,0.62);
        }
        .sf-stats {
          display: inline-flex;
          align-items: center;
          gap: 18px;
          margin-top: 28px;
          padding: 12px 22px;
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 999px;
          background: rgba(255,255,255,0.03);
        }
        .sf-stat {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(231,244,243,0.6);
        }
        .sf-stat b { color: #5fd4cf; font-size: 15px; font-weight: 800; margin-right: 5px; }
        .sf-stat-sep { width: 1px; height: 16px; background: rgba(255,255,255,0.12); }

        /* ---------- pillars ---------- */
        .sf-pillars {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 68px;
          padding-left: 74px;
        }
        .sf-pillars::before {
          content: '';
          position: absolute;
          left: 21px;
          top: 22px;
          bottom: 40px;
          width: 2px;
          border-radius: 2px;
          background: linear-gradient(180deg, rgba(95,212,207,0.55), rgba(95,212,207,0.18) 55%, rgba(95,212,207,0));
        }
        .sf-pillar-head {
          position: relative;
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 26px;
        }
        .sf-node {
          position: absolute;
          left: -74px;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: #041b1f;
          background: linear-gradient(140deg, #5fd4cf, #018381);
          box-shadow: 0 0 0 6px rgba(1,131,129,0.16), 0 10px 26px -12px rgba(95,212,207,0.9);
        }
        .sf-pillar-title {
          margin: 0;
          font-size: 24px;
          font-weight: 800;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #ffffff;
          white-space: nowrap;
        }
        .sf-pillar-rule {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, rgba(95,212,207,0.4), rgba(95,212,207,0));
        }
        .sf-pillar-count {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(231,244,243,0.42);
          white-space: nowrap;
        }

        /* ---------- cards ---------- */
        .sf-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .sf-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 30px 28px 28px;
          border-radius: 20px;
          background: linear-gradient(160deg, rgba(255,255,255,0.055), rgba(255,255,255,0.018));
          border: 1px solid rgba(255,255,255,0.08);
          overflow: hidden;
          transition: transform .35s cubic-bezier(.22,1,.36,1), border-color .35s ease, box-shadow .35s ease, background .35s ease;
        }
        .sf-card::before {
          content: '';
          position: absolute;
          left: 0; top: 0;
          width: 3px; height: 100%;
          background: linear-gradient(180deg, #5fd4cf, #018381);
          transform: scaleY(0);
          transform-origin: top;
          transition: transform .4s cubic-bezier(.22,1,.36,1);
        }
        .sf-card:hover {
          transform: translateY(-6px);
          border-color: rgba(95,212,207,0.34);
          background: linear-gradient(160deg, rgba(95,212,207,0.10), rgba(255,255,255,0.02));
          box-shadow: 0 30px 60px -34px rgba(0,0,0,0.9);
        }
        .sf-card:hover::before { transform: scaleY(1); }
        .sf-card-idx {
          position: absolute;
          top: 20px; right: 22px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: rgba(95,212,207,0.35);
        }
        .sf-card-title {
          margin: 0 0 12px;
          padding-right: 34px;
          font-size: 19px;
          font-weight: 700;
          line-height: 1.38;
          color: #ffffff;
        }
        .sf-card-sub {
          margin: 0 0 18px;
          padding: 10px 12px;
          border-left: 2px solid rgba(95,212,207,0.35);
          border-radius: 0 8px 8px 0;
          background: rgba(95,212,207,0.06);
          font-size: 12.5px;
          font-weight: 600;
          line-height: 1.55;
          color: #9fe2de;
        }
        .sf-points {
          list-style: none;
          margin: 0;
          padding: 0;
          padding-top: 18px;
          border-top: 1px solid rgba(255,255,255,0.07);
        }
        .sf-points li {
          display: flex;
          gap: 11px;
          align-items: flex-start;
          margin-bottom: 13px;
          font-size: 14.5px;
          line-height: 1.62;
          font-weight: 500;
          color: rgba(231,244,243,0.7);
        }
        .sf-points li:last-child { margin-bottom: 0; }
        .sf-tick {
          flex: 0 0 auto;
          width: 18px; height: 18px;
          margin-top: 3px;
          border-radius: 6px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(95,212,207,0.14);
          color: #5fd4cf;
        }

        /* ---------- responsive ---------- */
        @media (max-width: 1100px) {
          .sf-cards { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 991px) {
          .sf-title { font-size: 36px; }
          .sf-pillars { padding-left: 0; gap: 56px; }
          .sf-pillars::before { display: none; }
          .sf-pillar-head { flex-wrap: wrap; gap: 12px; }
          .sf-node { position: static; transform: none; width: 38px; height: 38px; font-size: 12px; box-shadow: 0 10px 26px -14px rgba(95,212,207,0.9); }
          .sf-pillar-title { font-size: 20px; white-space: normal; }
        }
        @media (max-width: 767px) {
          .sf { padding: 64px 0; }
          .sf-head { margin-bottom: 48px; }
          .sf-title { font-size: 28px; }
          .sf-sub { font-size: 15px; }
          .sf-stats { gap: 14px; padding: 10px 18px; }
          .sf-cards { grid-template-columns: 1fr; }
          .sf-card { padding: 24px 22px; border-radius: 16px; }
          .sf-pillar-rule { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .sf-card, .sf-card::before { transition: none; }
          .sf-card:hover { transform: none; }
        }
      `}</style>
    </section>
  );
};

export default SolutionsFold;
