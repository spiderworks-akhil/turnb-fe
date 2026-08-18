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

  const outcomes = [
    {
      title: "Decisions in hours, not weeks.",
      description: "The gap between a question forming and an answer landing collapses. Across every function, that compounds.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      )
    },
    {
      title: "Capacity released.",
      description: "Work that consumed a morning takes minutes. What your people do with the morning is the whole point.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
      )
    },
    {
      title: "Nobody queues for an answer.",
      description: "Your experts stop running a service desk. The question goes to the system; the judgement stays with them.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      )
    },
    {
      title: "The same answer, whoever asks.",
      description: "Decisions stop depending on who was on shift, how long they have been here, or which spreadsheet they opened.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
      )
    },
    {
      title: "Volume grows. The team does not have to.",
      description: "Twice the contracts, twice the claims, twice the customers — without twice the people.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
      )
    },
    {
      title: "What the company knows, stays.",
      description: "Institutional knowledge outlives the people who built it. Nothing walks out with a resignation letter.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
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
          <div style={{ marginTop: '80px' }}>
            <h3 style={{ fontSize: '32px', fontWeight: '700', textAlign: 'center', marginBottom: '40px', color: '#018381' }}>
              The Outcomes
            </h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '24px' 
            }}>
              {outcomes.map((outcome, index) => (
                <div key={index} className="outcome-card" style={{
                  background: '#ffffff',
                  border: '1px solid #e5f5f5',
                  borderRadius: '16px',
                  padding: '32px',
                  boxShadow: '0 4px 20px rgba(1, 131, 129, 0.05)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    borderRadius: '12px', 
                    background: '#e8f8f7', 
                    color: '#018381',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}>
                    {outcome.icon}
                  </div>
                  <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px', color: '#1f2937', lineHeight: '1.4' }}>
                    {outcome.title}
                  </h4>
                  <p style={{ margin: 0, color: '#6b7280', fontSize: '15px', lineHeight: '1.6', fontWeight: '500' }}>
                    {outcome.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .outcome-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(1, 131, 129, 0.12) !important;
        }
      `}</style>
    </section>
  );
};

export default FeaturesV2;
