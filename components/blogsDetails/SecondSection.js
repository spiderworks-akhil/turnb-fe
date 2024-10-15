import React from 'react';

const SecondSection = () => {
  return (
    <div className="container mt-lg-5 mt-md-5 mt-3">
      <div className="row justify-content-center">
        <div className="col-lg-11 col-md-11 col-12">
          <div className="row justify-content-center text-center">
            {/* Section 1 */}
            <div
              className="col-lg-6 col-md-6 col-12"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="box-bynd box-ethicl-ht takingstep-b p-5 bg-white mb-lg-4 mb-md-4 mb-3 clearfix">
                <h5 className="m-0 text-left mb-3 clrethhi">1. What is ethics?</h5>
                <p className="m-0 mt-1 text-left text-bch">
                  Ethics is a branch of philosophy that deals with questions about what is morally right and wrong, good
                  and evil, just and unjust. It explores principles and guidelines that govern human behavior and
                  interactions, aiming to provide frameworks for making moral decisions and evaluating actions and their
                  consequences. Ethics examines concepts such as justice, fairness, honesty, integrity, and
                  responsibility, and it often involves reasoning, debate, and reflection on how individuals and
                  societies ought to behave in various situations.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div
              className="col-lg-6 col-md-6 col-12"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="box-bynd box-ethicl-ht takingstep-b p-5 bg-white mb-lg-4 mb-md-4 mb-3 clearfix">
                <h5 className="m-0 mb-3 clrethhi text-left">
                  2. How is ethics related to data analytics?
                </h5>
                <p className="m-0 mt-1 text-left text-bch">
                  Data analytics holds immense power to drive innovation and decision-making in today&apos;s digital age.
                  However, with this power comes a pressing need for ethical considerations to guide its use responsibly.
                  Ethical considerations in data analytics encompass key principles such as privacy, fairness,
                  transparency, consent, security, and social responsibility. In our exploration of this vital topic,
                  we&apos;ll delve into how these principles shape the ethical landscape of data analytics, ensuring that it
                  serves not only organizational objectives but also upholds the rights and well-being of individuals and
                  society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
