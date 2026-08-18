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
    <section className="solutions-fold" style={{ padding: '80px 0', background: 'linear-gradient(135deg, #334155 0%, #020617 100%)', fontFamily: "'Montserrat', sans-serif" }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
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
                  gap: '32px'
                }}>
                  {cat.cards.map((card, idx) => {
                    const isScale = cat.title === "AI to Scale";
                    const bgColors = isScale 
                      ? ['#018381', '#017674', '#016867'] 
                      : ['#ffffff', '#f8fafc', '#f1f5f9'];
                    const titleColor = isScale ? '#ffffff' : '#1f2937';
                    const subColor = isScale ? '#ccfbf1' : '#018381';
                    const bodyColor = isScale ? '#f3f4f6' : '#4b5563';
                    
                    return (
                      <div key={idx} className="solution-card" style={{ 
                        position: 'sticky',
                        top: `${150 + idx * 20}px`,
                        zIndex: idx + 1,
                        background: bgColors[idx % 3], 
                        borderRadius: '16px', 
                        padding: '40px', 
                        boxShadow: isScale ? '0 -8px 30px rgba(1, 131, 129, 0.15)' : '0 -8px 30px rgba(0,0,0,0.06)', 
                        border: isScale ? '1px solid #017674' : '1px solid #e5e7eb',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        display: 'flex',
                        flexDirection: 'column'
                      }}>
                        <span style={{ color: subColor, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '12px', display: 'block', marginBottom: '12px' }}>
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
      <style>{`
        @media (max-width: 991px) {
          .category-title-left {
            position: static !important;
            padding-bottom: 20px !important;
          }
        }
        .solution-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 50px rgba(1, 131, 129, 0.1) !important;
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
      `}</style>
    </section>
  );
};

export default SolutionsFold;
