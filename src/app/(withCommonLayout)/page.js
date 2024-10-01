import Clients from "@/components/FrontendComponent/Clients/Clients";
import ProjectShowcase from "@/components/FrontendComponent/ProjectShowcase/ProjectShowcase";
import Review from "@/components/FrontendComponent/Review/Review";
import Vision from "@/components/Vision/Vision";

export default function Home() {
  return (
    <div>
      <Vision />
      <ProjectShowcase />
      <Review />
      <Clients />
    </div>
  );
}
