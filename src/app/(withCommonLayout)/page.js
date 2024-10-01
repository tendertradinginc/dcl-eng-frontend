import Clients from "@/components/FrontendComponent/Clients/Clients";
import ProjectShowcase from "@/components/FrontendComponent/ProjectShowcase/ProjectShowcase";
import Vision from "@/components/Vision/Vision";

export default function Home() {
  return (
    <div>
      <Vision />
      <ProjectShowcase />
      <Clients />
    </div>
  );
}
