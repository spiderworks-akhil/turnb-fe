import { useState } from "react";

const FAQAccordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Collapse if the same index is clicked
  };

  const faqData = [
    { question: "Can competitive marketing analytics enhance my business strategy?", answer: "Analyzing competitors’ marketing helps identify gaps and seize untapped opportunities. This can result in better marketing, customer experiences, and product positioning." },

    { question: "Does competitive marketing analytics assist with pricing strategies?", answer: "By evaluating competitor pricing and market trends, you can discover opportunities for premium pricing by leveraging your unique value proposition." },

    { question: "Does competitive marketing analytics enhance customer acquisition?", answer: "By understanding how your competitors attract and retain customers, you can enhance your marketing campaigns, target more efficiently, and deliver personalized experiences. This will boost your customer acquisition rates." },

    { question: "Is competitive marketing analytics useful for small businesses?", answer: "Small businesses can gain valuable insights and refine marketing strategies without needing big budgets by learning from successful tactics used by larger competitors." },

  ];

  return (
    <div>

      <div className="row justify-content-center">
        <div className="col-lg-12 col-md-12 col-12">
          <div className="text-center position-relative aos-init aos-animate" data-aos="fade-down">
            <h1 className="title-ak2 ft-wt2 text-center mb-lg-2 mb-md-2 mb-2 mt-lg-0 mt-md-0 mt-0">
              <span className="text-dark home-title"
                dangerouslySetInnerHTML={{ __html: 'FAQs' }} />
            </h1>
          </div>
        </div>
      </div>


      <div className="row justify-content-center mt-10 faq_sec">
        <div className="col-lg-10 col-md-12 col-12">
          {data.map((item, index) => (
            <div key={index} className="accordion-item">
              <div onClick={() => handleToggle(index)} className="accordion-question">
                <h3>{item.question}</h3>
                <span className="icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
              <div
                className={`accordion-answer ${activeIndex === index ? "active" : ""}`}
                style={{ display: activeIndex === index ? "block" : "none" }}
                dangerouslySetInnerHTML={{__html:item.answer}}
              >
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
