import { Inter } from "next/font/google";
import Layout from "@/components/common/Layout";
import { MenuApi } from "@/Datas/Endpoints/Menu";
import AiBanner from "@/components/AIExpertise/banner";
import AiAnalytics from "@/components/AIExpertise/analytics";
import AiStages from "@/components/AIExpertise/stages";
import AiFeatures from "@/components/AIExpertise/features";
import AiIn from "@/components/AIExpertise/aiin";
import AiVision from "@/components/AIExpertise/vision";
import AiBenefits from "@/components/AIExpertise/benefit";
import AiCase from "@/components/AIExpertise/case";
import { AIexpertiseApi } from "@/Datas/Endpoints/AI-expertise";
 
 
 

export default function Career({general,data}) {
    return (
        <Layout general={general} data={data}>


            <AiBanner data={data}/>
            <AiAnalytics data={data}/>
            <AiStages data={data}/>
            <div>
            <AiFeatures data={data}/>
            <AiIn data={data}/>
            </div>
            <AiVision data={data}/>
            <AiBenefits data={data}/>
            <AiCase data={data}/>
        </Layout>
    );
}

 
 export async function getStaticProps() {
     try {
       const general = await MenuApi.genralSettings()
      const data = await AIexpertiseApi.index()
    //    const list = await BlogApi.list({limit:100})
       return {
         props: {
           general:general?.data,
             data: data?.data?.data,
        //    list: list?.data
         },
         revalidate: 10,
       };
     } catch (error) {
       console.error('Error fetching header data contact:', error);
   
       return {
         props: {
           header: null, // or handle the error in a way that makes sense for your application
         },
         revalidate: 10,
       };
     }
   }