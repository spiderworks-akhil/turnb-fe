import Image from 'next/image'
import { ArrowRightIcon } from '../common/Button'
import StageImg from '../../public/img/ai/stage.png'

const AiStages = ({data}) => {
  const staticStages = [
    {
      title: "Decipher",
      subheading: "Find the opportunity",
      description: "We learn how your business actually runs before anyone mentions a model. Every AI candidate is scored on value, data readiness and risk — including the ones that do not survive scoring. What you get - A scored shortlist of where AI would pay in your operation, with the weak candidates named as plainly as the strong ones.",
      image: "/img/stage/decipher.png"
    },
    {
      title: "Define",
      subheading: "Agree what good looks like",
      description: "One use case, scoped tightly. We write down what success means before anything is built, and name every data source it depends on. What you get - A scoped use case with signed success criteria, named data sources, and a clear line around what the agent will not do.",
      image: "/img/stage/define.png"
    },
    {
      title: "Design",
      subheading: "Design the solution",
      description: "Architecture, data flow and controls, settled before a line of code. This is where we mark every point a person has to sign off, and where the reasoning will be visible. What you get - Solution architecture, data flow, and a written control map marking each decision a human owns.",
      image: "/img/stage/design.png"
    },
    {
      title: "Do",
      subheading: "Build and launch",
      description: "Built inside your tenant, on your stack, against your real data. Not a pilot that cannot scale. What you get - A working agent in your environment, tested against the criteria you signed at Define.",
      image: "/img/stage/do.png"
    },
    {
      title: "Deliver",
      subheading: "Drive adoption",
      description: "Adoption is a stage, not a hope. Your team is trained, the documentation is written, and the system can run without us in the room. What you get - A trained team, full documentation, and the option to operate it yourselves.",
      image: "/img/stage/deliver.png"
    }
  ];

  return (
     <section className="ai-stage-sec">
      <div className="container">
        <div className="ai-stage-head">
          <span className="ai-stage-eyebrow">{data?.content?.title_3 || "How We Bring AI to Life"}</span>
          <h3 className="ai-stage-title">Your AI runs on Consult D5&trade;</h3>
          <p className="ai-stage-desc">
            Five stages, built over years of delivery and applied to every engagement we take
            on. Here is what each one produces.
          </p>
        </div>

        <div className="row">
          {/* Left side: Nav Pills */}
          <div className="col-md-4">
            <div
              className="nav flex-column nav-pills flex flex-col flex-nowrap"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              {staticStages.map((tab, index) => {
                const tabId = `tab-${index + 1}`;
                return (
                  <button
                    key={tabId}
                    className={`nav-link ${index === 0 ? "active" : ""}`}
                    id={`${tabId}-tab`}
                    data-bs-toggle="pill"
                    data-bs-target={`#${tabId}`}
                    type="button"
                    role="tab"
                    aria-controls={tabId}
                    aria-selected={index === 0 ? "true" : "false"}
                    style={{ textAlign: 'left' }}
                  >
                    <span>{tab?.title}</span>
                    {tab?.subheading && (
                      <>
                        <br />
                        <span style={{ fontStyle: 'italic', fontSize: '14px', opacity: 0.8 }}>
                          {tab.subheading}
                        </span>
                      </>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right side: Tab Content */}
          <div className="col-md-8">
            <div className="tab-content h-[100%]" id="v-pills-tabContent">
              {staticStages.map((tab, index) => {
                const tabId = `tab-${index + 1}`;
                return (
                  <div
                    key={tabId}
                    className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
                    id={tabId}
                    role="tabpanel"
                    aria-labelledby={`${tabId}-tab`}
                    tabIndex="0"
                  >
                    <div className="tab-data">
                      {
                        tab?.image &&

                        <Image width={750} height={450} src={tab.image} alt="Stage"  />

                      }
                      
                      <h4>{tab?.title}</h4>
                      {tab?.subheading && (
                        <p style={{ fontStyle: 'italic', opacity: 0.8, marginBottom: '10px', marginTop: '-3px' }}>
                          {tab.subheading}
                        </p>
                      )}
                      <p className="mb-2">{tab?.description}</p>
                      
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <hr className='m-0' style={{borderColor: '#c8c8c8ff'}} />

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .ai-stage-sec .ai-stage-head {
          max-width: 900px;
          margin-bottom: 40px;
        }
        .ai-stage-sec .ai-stage-eyebrow {
          display: inline-block;
          color: #01847E;
          font-family: Montserrat;
          font-size: 12px;
          font-weight: 600;
          line-height: 20px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: rgba(1,132,126,0.08);
          border: 1px solid rgba(1,132,126,0.16);
          border-radius: 999px;
          padding: 7px 16px;
        }
        .ai-stage-sec .ai-stage-title {
          color: #212121;
          font-family: Montserrat;
          font-size: 40px;
          font-weight: 700;
          line-height: 1.15;
          margin: 14px 0 0;
        }
        .ai-stage-sec .ai-stage-desc {
          margin: 16px 0 0;
          color: #5b7371;
          font-family: Montserrat;
          font-size: 16.5px;
          font-weight: 500;
          line-height: 1.7;
        }
        @media (max-width: 767px) {
          .ai-stage-sec .ai-stage-head { margin-bottom: 30px; }
          .ai-stage-sec .ai-stage-title { font-size: 30px; }
          .ai-stage-sec .ai-stage-desc { font-size: 15px; }
        }
      ` }} />
    </section>
  )
}

export default AiStages
