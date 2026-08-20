import React, { useState } from 'react';

const FeaturesV2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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

  // Two-tone outcome icons: navy line work with a single lime accent element,
  // matching the reference sheet. Swap these two values to re-tint the whole set.
  const ICON_INK = '#2f4453';
  const ICON_ACCENT = '#93bd3c';

  const iconProps = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 30,
    height: 30,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: ICON_INK,
    strokeWidth: 1.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  };

  const outcomes = [
    {
      title: "Decisions in hours, not weeks.",
      description: "The gap between a question forming and an answer landing collapses. Across every function, that compounds.",
      icon: (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="9" />
          <path className="ic-accent" d="M12 6.8V12l3.6 1.9" stroke={ICON_ACCENT} strokeWidth="1.7" />
        </svg>
      )
    },
    {
      title: "Capacity released.",
      description: "Work that consumed a morning takes minutes. What your people do with the morning is the whole point.",
      icon: (
        <svg {...iconProps}>
          <circle cx="10.4" cy="6.9" r="3.6" />
          <path d="M3.6 20.6a6.8 6.8 0 0 1 11.1-5.3" />
          <circle className="ic-accent" cx="17.4" cy="17.4" r="3.6" stroke={ICON_ACCENT} strokeWidth="1.7" />
          <path className="ic-accent" d="m15.8 17.4 1.1 1.1 2.2-2.3" stroke={ICON_ACCENT} strokeWidth="1.7" />
        </svg>
      )
    },
    {
      title: "Nobody queues for an answer.",
      description: "Your experts stop running a service desk. The question goes to the system; the judgement stays with them.",
      icon: (
        <svg {...iconProps}>
          <path d="M20 9.9c0 3.1-3.3 5.7-7.4 5.7-.95 0-1.87-.14-2.7-.4L5.6 17l1.15-2.6C5.1 13.4 4.2 11.75 4.2 9.9 4.2 6.8 7.5 4.2 11.6 4.2S20 6.8 20 9.9z" />
          <circle className="ic-accent" cx="8.6" cy="9.9" r="0.95" fill={ICON_ACCENT} stroke="none" />
          <circle className="ic-accent" cx="11.6" cy="9.9" r="0.95" fill={ICON_ACCENT} stroke="none" />
          <circle className="ic-accent" cx="14.6" cy="9.9" r="0.95" fill={ICON_ACCENT} stroke="none" />
          <circle cx="18.5" cy="16.5" r="2.1" />
          <path d="M15.3 21.6a3.5 3.5 0 0 1 6.4 0" />
        </svg>
      )
    },
    {
      title: "The same answer, whoever asks.",
      description: "Decisions stop depending on who was on shift, how long they have been here, or which spreadsheet they opened.",
      icon: (
        <svg {...iconProps}>
          <path d="M17.6 5.7c0 1.9-2.2 3.5-4.9 3.5-.66 0-1.3-.1-1.88-.27L8.1 10.2l.87-1.92C8.1 7.6 7.7 6.7 7.7 5.7c0-1.9 2.2-3.5 4.9-3.5s5 1.6 5 3.5z" />
          <path className="ic-accent" d="m10.6 5.6 1.35 1.35 2.65-2.75" stroke={ICON_ACCENT} strokeWidth="1.7" />
          <circle cx="6.6" cy="14.4" r="2.4" />
          <path d="M2.8 21a3.8 3.8 0 0 1 7.6 0" />
          <circle cx="17.4" cy="14.4" r="2.4" />
          <path d="M13.6 21a3.8 3.8 0 0 1 7.6 0" />
        </svg>
      )
    },
    {
      title: "Volume grows. The team does not have to.",
      description: "Twice the contracts, twice the claims, twice the customers — without twice the people.",
      icon: (
        <svg {...iconProps}>
          <rect x="4.4" y="14.6" width="3.9" height="6" rx="0.7" />
          <rect x="10.05" y="11.4" width="3.9" height="9.2" rx="0.7" />
          <rect x="15.7" y="8.2" width="3.9" height="12.4" rx="0.7" />
          <path className="ic-accent" d="M4.2 12.9c2.8-.5 5.2-3.3 7.3-5.5 1.8-1.9 3.6-3 5.9-3.4" stroke={ICON_ACCENT} strokeWidth="1.7" />
          <polyline className="ic-accent" points="14.4 3.1 17.8 3.9 17 7.3" stroke={ICON_ACCENT} strokeWidth="1.7" />
        </svg>
      )
    },
    {
      title: "What the company knows, stays.",
      description: "Institutional knowledge outlives the people who built it. Nothing walks out with a resignation letter.",
      icon: (
        <svg {...iconProps}>
          <path d="M12 21.4s7.1-3.4 7.1-8.6V5.5L12 2.8 4.9 5.5v7.3c0 5.2 7.1 8.6 7.1 8.6z" />
          <rect className="ic-accent" x="9.3" y="11.6" width="5.4" height="4.7" rx="1.1" stroke={ICON_ACCENT} strokeWidth="1.7" />
          <path className="ic-accent" d="M10.4 11.6v-1.3a1.6 1.6 0 0 1 3.2 0v1.3" stroke={ICON_ACCENT} strokeWidth="1.7" />
          <circle className="ic-accent" cx="12" cy="13.9" r="0.62" fill={ICON_ACCENT} stroke="none" />
        </svg>
      )
    }
  ];

  return (
    <section className="features-v2-sec" style={{ padding: '80px 0', background: 'linear-gradient(135deg, #f8ffff 0%, #e8f8f7 100%)', fontFamily: "'Montserrat', sans-serif" }}>
      <div className="container">
        
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          
          {/* Tiles Row */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            gap: '16px', 
            marginBottom: '40px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            {accordionData.map((item, index) => {
              const isActive = activeIndex === index;
              
              return (
                <div 
                  key={index}
                  onClick={() => setActiveIndex(isActive ? -1 : index)}
                  className="tile-header"
                  style={{
                    background: isActive ? 'linear-gradient(135deg, #018381 0%, #016c66 100%)' : '#ffffff',
                    color: isActive ? '#ffffff' : '#374151',
                    border: isActive ? '1px solid transparent' : '1px solid #d1d5db',
                    borderRadius: '12px',
                    padding: '16px 24px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '15px',
                    flex: '1 1 300px', 
                    transition: 'all 0.3s ease',
                    boxShadow: isActive ? '0 8px 24px rgba(1, 131, 129, 0.35)' : '0 4px 10px rgba(0,0,0,0.03)',
                    transform: isActive ? 'translateY(-2px)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={{flex: 1, textAlign: 'left', lineHeight: '1.4'}}>{item.title}</span>
                  <span style={{ fontSize: '20px', marginLeft: '10px', fontWeight: 'bold' }}>{isActive ? '−' : '+'}</span>
                </div>
              );
            })}
          </div>

          {/* Active Content Area */}
          {activeIndex !== -1 && (
            <div 
              className="accordion-content"
              style={{
                animation: 'fadeIn 0.4s ease-in-out',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}
            >
              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'stretch' }}>
                {/* Today Card */}
                <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', background: '#ffffff', border: '1px solid #e5f5f5', borderRadius: '16px', padding: '32px', boxShadow: '0 8px 40px rgba(1, 131, 129, 0.08)' }}>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '20px', color: '#018381' }}>Today steps</h4>
                    <ul style={{ paddingLeft: '20px', margin: 0, color: '#6b7280', lineHeight: '1.8', fontSize: '15px', fontWeight: '500' }}>
                      {accordionData[activeIndex].todaySteps.map((step, i) => (
                        <li key={i} style={{ marginBottom: '14px', paddingLeft: '8px' }}>{step}</li>
                      ))}
                    </ul>
                  </div>
                  {/* Highlighted Today Cost Line */}
                  <div style={{ marginTop: '24px', background: '#fff5f5', border: '1px solid #fca5a5', borderRadius: '12px', padding: '20px' }}>
                    <h5 style={{ margin: '0 0 8px 0', fontSize: '15px', color: '#dc2626', fontWeight: '700' }}>Today cost line</h5>
                    <p style={{ margin: 0, color: '#9b2c2c', fontSize: '15px', fontWeight: '500', lineHeight: '1.5' }}>{accordionData[activeIndex].todayCostLine}</p>
                  </div>
                </div>

                {/* With TurnB Card */}
                <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', background: '#ffffff', border: '1px solid #e5f5f5', borderRadius: '16px', padding: '32px', boxShadow: '0 8px 40px rgba(1, 131, 129, 0.08)' }}>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '20px', color: '#018381' }}>With TurnB steps</h4>
                    <ul style={{ paddingLeft: '20px', margin: 0, color: '#6b7280', lineHeight: '1.8', fontSize: '15px', fontWeight: '500' }}>
                      {accordionData[activeIndex].turnbSteps.map((step, i) => (
                        <li key={i} style={{ marginBottom: '14px', paddingLeft: '8px' }}>{step}</li>
                      ))}
                    </ul>
                  </div>
                  {/* Highlighted TurnB Result Line */}
                  <div style={{ marginTop: '24px', background: '#e8f8f7', border: '1px solid #c2eeec', borderRadius: '12px', padding: '20px' }}>
                    <h5 style={{ margin: '0 0 8px 0', fontSize: '15px', color: '#018381', fontWeight: '700' }}>TurnB result</h5>
                    <p style={{ margin: 0, color: '#016c66', fontSize: '15px', fontWeight: '600', lineHeight: '1.5' }}>{accordionData[activeIndex].turnbResultLine}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Outcomes Cards Section */}
          <div className="outcomes">
            <div className="outcomes__head">
              <h3 className="outcomes__title">The Outcomes</h3>
              <span className="outcomes__rule" aria-hidden="true" />
            </div>

            <div className="outcomes__grid">
              {outcomes.map((outcome, index) => (
                <article key={index} className="outcome-card">
                  <div className="outcome-card__top">
                    <span className="outcome-card__num">{String(index + 1).padStart(2, '0')}</span>
                    <span className="outcome-card__icon" aria-hidden="true">{outcome.icon}</span>
                  </div>
                  <h4 className="outcome-card__title">{outcome.title}</h4>
                  <span className="outcome-card__dash" aria-hidden="true" />
                  <p className="outcome-card__desc">{outcome.description}</p>
                </article>
              ))}
            </div>
          </div>

        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        /* ---------- outcomes ---------- */
        .outcomes { margin-top: 80px; }
        .outcomes__head { margin-bottom: 34px; }
        .outcomes__title {
          margin: 0 0 12px;
          font-size: 30px;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: #0f3339;
        }
        .outcomes__rule {
          display: block;
          width: 54px;
          height: 3px;
          border-radius: 3px;
          background: linear-gradient(90deg, #018381, #5fd4cf);
        }
        .outcomes__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .outcome-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 26px 26px 28px;
          background: #ffffff;
          border: 1px solid #e3edec;
          border-radius: 14px;
          overflow: hidden;
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .outcome-card::before {
          content: '';
          position: absolute;
          left: 0; right: 0; top: 0;
          height: 3px;
          background: linear-gradient(90deg, #018381, #5fd4cf);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .4s cubic-bezier(.22,1,.36,1);
        }
        .outcome-card:hover {
          transform: translateY(-5px);
          border-color: #bfe3e0;
          box-shadow: 0 18px 40px -20px rgba(1, 131, 129, 0.35);
        }
        .outcome-card:hover::before { transform: scaleX(1); }

        .outcome-card__top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .outcome-card__num {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #eef6f5;
          color: #018381;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.04em;
          transition: background .3s ease, color .3s ease, transform .3s ease;
        }
        .outcome-card:hover .outcome-card__num {
          background: #018381;
          color: #ffffff;
          transform: translateY(-1px);
        }
        .outcome-card__icon {
          display: inline-flex;
          transition: transform .35s cubic-bezier(.22,1,.36,1);
        }
        .outcome-card__icon .ic-accent {
          transform-box: fill-box;
          transform-origin: center;
          transition: opacity .3s ease, transform .35s cubic-bezier(.22,1,.36,1);
        }
        .outcome-card:hover .outcome-card__icon { transform: translateY(-3px) scale(1.05); }
        .outcome-card:hover .outcome-card__icon .ic-accent { transform: scale(1.1); }

        .outcome-card__title {
          margin: 0 0 14px;
          font-size: 19px;
          font-weight: 700;
          line-height: 1.35;
          color: #0f3339;
        }
        .outcome-card__dash {
          display: block;
          width: 26px;
          height: 2px;
          border-radius: 2px;
          background: #9ed3cf;
          margin-bottom: 16px;
          transition: width .35s ease, background .35s ease;
        }
        .outcome-card:hover .outcome-card__dash { width: 44px; background: #018381; }
        .outcome-card__desc {
          margin: 0;
          color: #5b6b6a;
          font-size: 14.5px;
          line-height: 1.75;
          font-weight: 500;
        }

        @media (max-width: 991px) {
          .outcomes__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .outcomes { margin-top: 56px; }
          .outcomes__title { font-size: 24px; }
          .outcomes__grid { grid-template-columns: 1fr; }
        }
        @media (prefers-reduced-motion: reduce) {
          .outcome-card, .outcome-card::before, .outcome-card__num,
          .outcome-card__icon, .outcome-card__dash,
          .outcome-card__icon .ic-accent { transition: none; }
          .outcome-card:hover { transform: none; }
        }
      ` }} />
    </section>
  );
};

export default FeaturesV2;
