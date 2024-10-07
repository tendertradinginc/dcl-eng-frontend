// Remove 'use client'; since this will be a server component
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { customLoader } from "@/utils/customLoader";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

// Fetch projects data from the server
const fetchProjects = async () => {
  const res = await fetch("http://localhost:5000/api/v1/projects");
  const data = await res.json();
  return data?.data?.allProjects || [];
};

const ProjectShowcases = async () => {
  // Fetching the projects directly in the component
  const allProjects = await fetchProjects();

  const ongoing = allProjects.filter((item) => item?.category === "on-going");
  const upcoming = allProjects.filter((item) => item?.category === "up-coming");
  const completed = allProjects.filter(
    (item) => item?.category === "completed"
  );

  return (
    <div>
      {/* Tabs Section */}
      <div className="mb-10 flex justify-center">
        <Tabs defaultValue="Construction" className="w-full">
          <TabsList className="grid grid-cols-3 rounded-full gap-x-1 bg-gray-100 border max-w-lg h-14 mx-auto px-4 ">
            <TabsTrigger
              value="Commercial"
              className="rounded-full px-4 py-2 text-sm font-semibold focus:outline-none transition duration-300 ease-in-out hover:bg-orange-200 data-[state=active]:bg-[#F78C40] data-[state=active]:text-white uppercase"
            >
              Upcoming
            </TabsTrigger>
            <TabsTrigger
              value="Construction"
              className="rounded-full px-4 py-2 text-sm font-semibold focus:outline-none transition duration-300 ease-in-out hover:bg-orange-200 data-[state=active]:bg-[#F78C40] data-[state=active]:text-white uppercase"
            >
              Completed
            </TabsTrigger>
            <TabsTrigger
              value="Medical"
              className="rounded-full px-4 py-2 text-sm font-semibold focus:outline-none transition duration-300 ease-in-out hover:bg-orange-200 data-[state=active]:bg-[#F78C40] data-[state=active]:text-white uppercase"
            >
              Ongoing
            </TabsTrigger>
          </TabsList>

          {/* Completed Projects */}
          <TabsContent value="Construction" className="mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {completed.map((project) => (
                <Card
                  key={project.id}
                  className="relative w-full bg-white shadow-lg overflow-hidden group rounded-none"
                >
                  <div className="relative w-full aspect-square">
                    <Image
                      src={project.image}
                      alt={project.name}
                      layout="fill"
                      objectFit="cover"
                      loader={customLoader}
                      className="transition-opacity duration-300 group-hover:opacity-80"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50 flex flex-col justify-end items-start p-4 px-10">
                      <h2 className="text-white text-xl font-semibold flex items-center transition-transform duration-700 group-hover:-translate-y-6 uppercase">
                        {project.name}
                        <MdArrowOutward className="lg:ml-10 ml-2 h-6 w-6 text-white" />
                      </h2>
                      <h4 className="my-2 text-white transition-transform duration-700 group-hover:-translate-y-6 group-hover:opacity-100 opacity-0 line-clamp-2">
                        {project.description}
                      </h4>
                      <Link href={`/projectShowcase/${project._id}`}>
                        <p className="text-white font-semibold py-2 px-4 border-2 border-white rounded-full transition-all duration-700 group-hover:-translate-y-6 hover:bg-[#F78C40]">
                          Commercial
                        </p>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Upcoming Projects */}
          <TabsContent value="Commercial" className="mt-16">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
              {upcoming.map((project) => (
                <Card
                  key={project.id}
                  className="relative w-full bg-white shadow-lg overflow-hidden group rounded-none"
                >
                  <div className="relative w-full aspect-square">
                    <Image
                      src={project.image}
                      alt={project.name}
                      layout="fill"
                      objectFit="cover"
                      loader={customLoader}
                      className="transition-opacity duration-300 group-hover:opacity-80"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50 flex flex-col justify-end items-start p-4 px-10">
                      <h2 className="text-white text-xl font-semibold flex items-center transition-transform duration-700 group-hover:-translate-y-6 uppercase">
                        {project.name}
                        <MdArrowOutward className="lg:ml-10 ml-2 h-6 w-6 text-white" />
                      </h2>
                      <h4 className="my-2 text-white transition-transform duration-700 group-hover:-translate-y-6 group-hover:opacity-100 opacity-0 line-clamp-2">
                        {project.description}
                      </h4>
                      <Link href={`/projectShowcase/${project._id}`}>
                        <p className="text-white font-semibold py-2 px-4 border-2 border-white rounded-full transition-all duration-700 group-hover:-translate-y-6 hover:bg-[#F78C40]">
                          Commercial
                        </p>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Ongoing Projects */}
          <TabsContent value="Medical" className="mt-16">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
              {ongoing.map((project) => (
                <Card
                  key={project.id}
                  className="relative w-full bg-white shadow-lg overflow-hidden group rounded-none"
                >
                  <div className="relative w-full aspect-square">
                    <Image
                      src={project.image}
                      alt={project.name}
                      layout="fill"
                      objectFit="cover"
                      loader={customLoader}
                      className="transition-opacity duration-300 group-hover:opacity-80"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50 flex flex-col justify-end items-start p-4 px-10">
                      <h2 className="text-white text-xl font-semibold flex items-center transition-transform duration-700 group-hover:-translate-y-6 uppercase">
                        {project.name}
                        <MdArrowOutward className="lg:ml-10 ml-2 h-6 w-6 text-white" />
                      </h2>
                      <h4 className="my-2 text-white transition-transform duration-700 group-hover:-translate-y-6 group-hover:opacity-100 opacity-0 line-clamp-2">
                        {project.description}
                      </h4>
                      <Link href={`/projectShowcase/${project._id}`}>
                        <p className="text-white font-semibold py-2 px-4 border-2 border-white rounded-full transition-all duration-700 group-hover:-translate-y-6 hover:bg-[#F78C40]">
                          Commercial
                        </p>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProjectShowcases;
