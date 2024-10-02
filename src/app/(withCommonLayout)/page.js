import Clients from "@/components/FrontendComponent/Clients/Clients";
import BannerSection from "@/components/FrontendComponent/HomePage/BannerSection/BannerSection";
import Overview from "@/components/FrontendComponent/HomePage/Overview/Overview";
import ProjectShowcase from "@/components/FrontendComponent/ProjectShowcase/ProjectShowcase";
import Review from "@/components/FrontendComponent/Review/Review";
import Services from "@/components/FrontendComponent/Services/Services";
import Vision from "@/components/Vision/Vision";

export default function Home() {
  return (
    <div>
      <BannerSection></BannerSection>
      <Overview></Overview>
      <Services />
      <Vision />
      <ProjectShowcase />
      <Review />
      <Clients />
    </div>
  );
}
