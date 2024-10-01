import SectionHeadingCenter from "@/components/shared/SectionHeading/SectionHeadingCenter";
import ProjectSlide from "./ProjectSlide";

const ProjectShowcase = async () => {
  const res = await fetch("http://localhost:5000/api/v1/projects");
  const data = await res.json();
  const projects = data?.data?.allProjects;
  const onGoing = projects?.filter((item) => item?.category == "on-going");
  const upConming = projects?.filter((item) => item?.category == "up-coming");
  const completed = projects?.filter((item) => item?.category == "completed");
  console.log(completed);

  return (
    <div>
      <SectionHeadingCenter
        imageUrl="https://i.postimg.cc/q7L1JF7N/SHOWCASE.png"
        subTitle="Explore Features"
        title="Project Showcase"
        description=""
      />
      <div className="flex justify-center flex-wrap mb-20">
        <div className="w-max rounded-full border p-2 flex gap-2">
          <button className="border-2 text-[#A5A5A5] py-2.5 px-6 rounded-full">
            Upcoming Projects
          </button>
          <button className="bg-[#F78C40] text-white py-2.5 px-6 rounded-full">
            Complited Projects
          </button>
          <button className="border-2 text-[#A5A5A5] py-2.5 px-6 rounded-full">
            Ongoing Projects
          </button>
        </div>
      </div>
      <ProjectSlide />
    </div>
  );
};

export default ProjectShowcase;
