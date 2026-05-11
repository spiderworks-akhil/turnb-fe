import React, { useState } from "react";
import StaticSEO from "@/components/common/StaticSEO";
import BrochureForm from "@/components/brochure/BrochureForm";
import BrochureViewer from "@/components/brochure/BrochureViewer";
import { MenuApi } from "@/Datas/Endpoints/Menu";

const VALID_SLUGS = [
  "Turn-B-Brochure",
  "Scan-B-Brochure",
];

export default function BrochurePage({ general, slug }) {
  const [submitted, setSubmitted] = useState(false);
  const brochureUrl = `/view/brochure/${slug}`;

  return (
    <>
      <StaticSEO title="Brochure | Turnb" />

      <section className="brochure-page-section clearfix">
        <div className="container ">
          <div className="row justify-content-center">
            <div className={submitted ? "col-12" : "col-lg-6 col-md-8 col-12"}>
              {!submitted ? (
                <BrochureForm slug={slug} brochureUrl={brochureUrl} onSuccess={() => setSubmitted(true)} />
              ) : (
                <BrochureViewer slug={slug} />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { slug } = params;

  // Block any slug not in the allowed list
  if (!VALID_SLUGS.includes(slug)) {
    return { notFound: true };
  }

  try {
    const general = await MenuApi.genralSettings();

    return {
      props: {
        general: general?.data ?? null,
        slug,
      },
    };
  } catch (error) {
    console.error("Brochure page error:", error);
    return {
      props: {
        general: null,
        slug,
      },
    };
  }
}
