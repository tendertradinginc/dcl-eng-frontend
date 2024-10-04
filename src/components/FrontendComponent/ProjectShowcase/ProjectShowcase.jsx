import SectionHeadingCenter from "@/components/shared/SectionHeading/SectionHeadingCenter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import ProjectSlide from "./ProjectSlide";

const ProjectShowcase = async () => {
  const res = await fetch("http://localhost:5000/api/v1/projects");
  const data = await res.json();
  const projects = data?.data?.allProjects;
  const onGoing = projects?.filter((item) => item?.category == "on-going");
  const upConming = projects?.filter((item) => item?.category == "up-coming");
  const completed = projects?.filter((item) => item?.category == "completed");

  return (
    <MaxWidthWrapper>
      <div className="pb-8 ">
      <SectionHeadingCenter
        imageUrl="https://i.postimg.cc/q7L1JF7N/SHOWCASE.png"
        subTitle="Explore Features"
        title="Project Showcase"
        description=""
      />
      </div>
      <div className=" mb-20 ">
        <Tabs defaultValue="Upcoming" className="">
          <TabsList className="grid grid-cols-1 md:grid-cols-2 max-w-max lg:grid-cols-3 justify-center mb-24  gap-3 rounded-full lg:border-2 border-[#F2DAB24D] py-2 h-max mx-auto">
            <TabsTrigger
              className="data-[state=active]:bg-[#F78C40] data-[state=active]:text-white text-xl rounded-full py-2.5 px-6"
              value="Upcoming"
            >
              Upcoming Projects
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-[#F78C40] data-[state=active]:text-white text-xl rounded-full py-2.5 px-6 "
              value="Completed"
            >
              Completed Projects
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-[#F78C40] data-[state=active]:text-white text-xl rounded-full py-2.5 px-6 "
              value="ongoing"
            >
              Ongoing Projects
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Upcoming">
          <ProjectSlide />
          </TabsContent>
          <TabsContent value="Completed"><ProjectSlide /></TabsContent>
          <TabsContent value="ongoing"><ProjectSlide /></TabsContent>
        </Tabs>
        {/* <ProjectSlide />  */}
      </div>
    </MaxWidthWrapper>
  );
};

export default ProjectShowcase;
