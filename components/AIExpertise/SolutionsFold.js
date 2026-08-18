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

const SolutionsFold = () => {
  return (
    <section className="solutions-fold" style={{ padding: '80px 0', background: '#f8ffff', fontFamily: "'Montserrat', sans-serif" }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
        <div className="solutions-layout" style={{ 
          display: 'flex', 
          gap: '60px', 
          alignItems: 'flex-start',
          flexWrap: 'wrap'
        }}>
          {/* Left sticky column */}
          <div className="solutions-sticky-left" style={{ 
            flex: '1 1 350px', 
            position: 'sticky', 
            top: '120px',
            paddingBottom: '40px'
          }}>
            <span style={{ color: '#018381', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '14px', display: 'block', marginBottom: '16px' }}>
              What we build
            </span>
            <h2 style={{ fontSize: '42px', fontWeight: '800', margin: '0 0 24px 0', color: '#1f2937', lineHeight: '1.2' }}>
              All of this is possible today.
            </h2>
            <p style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.6', margin: 0 }}>
              Three pillars, nine solution areas. Below is scope — what each covers, and on what stack.
            </p>
          </div>

          {/* Right scrolling column */}
          <div className="solutions-scroll-right" style={{ 
            flex: '2 1 600px', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '32px' 
          }}>
            {solutionsData.map((card, idx) => (
              <div key={idx} className="solution-card" style={{ 
                position: 'sticky',
                top: `${120 + idx * 20}px`,
                zIndex: idx + 1,
                background: '#ffffff', 
                borderRadius: '16px', 
                padding: '40px', 
                boxShadow: '0 -8px 30px rgba(0,0,0,0.08)', 
                border: '1px solid #e5e7eb',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}>
                <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: card.subtitle ? '12px' : '24px', color: '#1f2937' }}>
                  {card.title}
                </h3>
                {card.subtitle && (
                  <p style={{ fontSize: '15px', color: '#018381', fontWeight: '600', marginBottom: '24px', lineHeight: '1.5' }}>
                    {card.subtitle}
                  </p>
                )}
                <ul style={{ paddingLeft: '24px', margin: '0 0 32px 0', color: '#4b5563', lineHeight: '1.8', fontSize: '16px' }}>
                  {card.points.map((pt, i) => (
                    <li key={i} style={{ marginBottom: '12px' }}>{pt}</li>
                  ))}
                </ul>
                <button className="solution-btn" style={{ 
                  background: '#ffffff', 
                  color: '#018381', 
                  border: '2px solid #018381', 
                  padding: '12px 28px', 
                  borderRadius: '8px', 
                  fontWeight: '600', 
                  fontSize: '15px',
                  cursor: 'pointer', 
                  transition: 'all 0.3s',
                  display: 'inline-block'
                }}>
                  {card.ctaText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 991px) {
          .solutions-sticky-left {
            position: static !important;
            padding-bottom: 20px !important;
          }
        }
        .solution-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 50px rgba(1, 131, 129, 0.1) !important;
        }
        .solution-btn:hover {
          background: #018381 !important;
          color: #ffffff !important;
        }
      `}</style>
    </section>
  );
};

export default SolutionsFold;
