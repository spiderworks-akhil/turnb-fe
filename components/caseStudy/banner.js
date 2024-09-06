import React from 'react'

function CaseBanner() {
    return (
        <div>
            <div class="carousel slide mr-topinnerpage-n" data-bs-ride="carousel" id="carouselExampleIndicators">
                {/* <!-- Uncomment and use the carousel indicators if needed --> */}

                <div class="carousel-inner">
                    <div class="carousel-item active" data-aos="fade-up">
                        <img alt="..." class="d-block text-center m-auto img-height img-fluid d-lg-block d-md-block d-none"
                            src="img/banners/case-studiesbanner.jpg" data-aos="fade-right" />
                        <img alt="..." class="d-block w-100 img-fluid d-lg-none d-md-none d-block"
                            src="img/banners/case-studiesbanner-mob.jpg" data-aos="fade-left" />
                        {/* <!-- Uncomment and use the carousel caption if needed --> */}
                        <div class="carousel-caption">
                            {/* <h5 class="text-white text-left" data-aos="fade-up" data-aos-delay="1000">Data Drives <br /> Business</h5> */}
                        </div>
                    </div>
                    {/* <!-- Add more carousel items here if needed --> */}
                </div>
            </div>

        </div>
    )
}

export default CaseBanner
