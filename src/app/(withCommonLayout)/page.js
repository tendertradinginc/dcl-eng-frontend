import BannerSection from "@/components/FrontendComponent/BannerSection/BannerSection";
import Clients from "@/components/FrontendComponent/Clients/Clients";
import ProjectShowcase from "@/components/FrontendComponent/ProjectShowcase/ProjectShowcase";
import Review from "@/components/FrontendComponent/Review/Review";
import Services from "@/components/FrontendComponent/Services/Services";
import Vision from "@/components/Vision/Vision";

export default function Home() {
  return (
    <div>
      <BannerSection></BannerSection>
      <Services />
      <Vision />
      <ProjectShowcase />
      <Review />
      <Clients />
    </div>
  );
}
