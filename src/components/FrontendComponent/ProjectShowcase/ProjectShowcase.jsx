import SectionHeadingCenter from "@/components/shared/SectionHeading/SectionHeadingCenter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import ProjectSlide from "./ProjectSlide";

const ProjectShowcase = async () => {
  const res = await fetch("http://localhost:5000/api/v1/projects", {
    cache: "no-store",
  });
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
        <Tabs defaultValue="Completed" className="">
          <TabsList className="grid grid-cols-3 justify-center mb-24 max-w-max gap-2  rounded-full lg:border-2 border-[#F2DAB24D] py-2 h-max mx-auto ">
            <TabsTrigger
              className="data-[state=active]:bg-[#F78C40] data-[state=active]:text-white text-sm md:text-xl rounded-full py-2.5 px-3 md:px-6 uppercase"
              value="Upcoming"
            >
              Upcoming
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-[#F78C40] data-[state=active]:text-white text-sm md:text-xl rounded-full py-2.5 px-3 md:px-6 uppercase"
              value="Completed"
            >
              Completed
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-[#F78C40] data-[state=active]:text-white text-sm md:text-xl rounded-full py-2.5 px-3 md:px-6 uppercase"
              value="ongoing"
            >
              Ongoing
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Upcoming">
            <ProjectSlide data={upConming} />
          </TabsContent>
          <TabsContent value="Completed">
            <ProjectSlide data={completed} />
          </TabsContent>
          <TabsContent value="ongoing">
            <ProjectSlide data={onGoing} />
          </TabsContent>
        </Tabs>
        {/* <ProjectSlide />  */}
      </div>
    </MaxWidthWrapper>
  );
};

export default ProjectShowcase;
