import React from 'react';
import Image from 'next/image';

const ListingSections = () => {
  return (
    <>
      {/* Heading Section */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11 col-md-11 col-12">
            <div className="heading-blg mt-lg-5 mt-md-5 mt-3 mb-lg-4 mb-md-4 mb-3">
              <h1 className="mb-0">Ethical considerations in data analytics</h1>
              <p className="mt-1" style={{ fontSize: '15px' }}>
                Ethical considerations in data analytics encompass the moral and societal implications arising from the
                collection, processing, and utilization of data in diverse contexts. As data analytics becomes
                increasingly pervasive, it brings to the forefront a multitude of ethical quandaries that warrant careful
                examination and mitigation. Here, we dissect the ethical dimensions surrounding data analytics, addressing key concerns such as privacy, bias, transparency, security, consent, and accountability.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11 col-md-11 col-12">
            
            {/* Section 1 */}
            <div className="choice-box ethiboxm p-0 mb-lg-4 mb-md-4 mb-3 clearfix" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
              <div className="row">
                <div className="col-lg-2 col-md-2 col-12">
                  <div className="choi-imbbx">
                    <Image src="/img/eth-1.png" alt="Privacy Challenges" className="img-fluid" width={150} height={150} />
                  </div>
                </div>
                <div className="col-lg-10 col-md-10 col-12">
                  <div className="ethtctextb">
                    <p className="m-0">
                      <span className="clr-b">Privacy Challenges:</span> At the core of ethical deliberations in data analytics
                      lies the issue of privacy infringement. The extensive gathering of personal data, often without
                      explicit consent, raises concerns about an individual&apos;s right to privacy and the ethical boundaries of
                      data utilization.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="choice-box ethiboxm p-0 mb-lg-4 mb-md-4 mb-3 clearfix" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
              <div className="row">
                <div className="col-lg-2 col-md-2 col-12">
                  <div className="choi-imbbx">
                    <Image src="/img/eth-2.png" alt="Bias and Fairness" className="img-fluid" width={150} height={300} />
                  </div>
                </div>
                <div className="col-lg-10 col-md-10 col-12">
                  <div className="ethtctextb">
                    <p className="m-0">
                      <span className="clr-b">Bias and Fairness:</span> Data analytics algorithms are only as good as the data they are trained on. If the data is biased, the algorithms will be biased as well. This can lead to discriminatory outcomes in areas such as loan approvals, hiring decisions, and even criminal justice.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="choice-box ethiboxm p-0 mb-lg-4 mb-md-4 mb-3 clearfix" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
              <div className="row">
                <div className="col-lg-2 col-md-2 col-12">
                  <div className="choi-imbbx">
                    <Image src="/img/eth-3.png" alt="Transparency and Accountability" className="img-fluid" width={150} height={230} />
                  </div>
                </div>
                <div className="col-lg-10 col-md-10 col-12">
                  <div className="ethtctextb">
                    <p className="m-0">
                      <span className="clr-b">Transparency and Accountability:</span> The opacity surrounding algorithms poses ethical concerns regarding accountability and transparency.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="choice-box ethiboxm p-0 mb-lg-4 mb-md-4 mb-3 clearfix" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
              <div className="row">
                <div className="col-lg-2 col-md-2 col-12">
                  <div className="choi-imbbx">
                    <Image src="/img/eth-4.png" alt="Data Security" className="img-fluid" width={150} height={150} />
                  </div>
                </div>
                <div className="col-lg-10 col-md-10 col-12">
                  <div className="ethtctextb">
                    <p className="m-0">
                      <span className="clr-b">Data Security:</span> Ethical dilemmas also arise from the imperative to safeguard data against breaches and cybersecurity threats.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="choice-box ethiboxm p-0 mb-lg-4 mb-md-4 mb-3 clearfix" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
              <div className="row">
                <div className="col-lg-2 col-md-2 col-12">
                  <div className="choi-imbbx">
                    <Image src="/img/eth-5.png" alt="Consent and Control" className="img-fluid" width={150} height={150} />
                  </div>
                </div>
                <div className="col-lg-10 col-md-10 col-12">
                  <div className="ethtctextb">
                    <p className="m-0">
                      <span className="clr-b">Consent and Control:</span> Ethical data practices necessitate ensuring informed consent and empowering individuals to exercise control over their personal information.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div className="choice-box ethiboxm p-0 mb-lg-4 mb-md-4 mb-3 clearfix" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
              <div className="row">
                <div className="col-lg-2 col-md-2 col-12">
                  <div className="choi-imbbx">
                    <Image src="/img/eth-6.png" alt="Accountability for Outcomes" className="img-fluid" width={150} height={150} />
                  </div>
                </div>
                <div className="col-lg-10 col-md-10 col-12">
                  <div className="ethtctextb">
                    <p className="m-0">
                      <span className="clr-b">Accountability for Outcomes:</span> Ethical responsibility entails acknowledging and addressing the repercussions of data analytics decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ListingSections;
