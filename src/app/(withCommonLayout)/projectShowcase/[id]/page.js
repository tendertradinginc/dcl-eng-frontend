import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import PageBanner from "@/components/shared/PageBanner/PageBanner";
import SectionHeadingCenter from "@/components/shared/SectionHeading/SectionHeadingCenter";
import { customLoader } from "@/utils/customLoader";
import Image from "next/image";
import { BsBuildings } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

const page = async ({ params }) => {
  const res = await fetch(
    `http://localhost:5000/api/v1/projects/${params?.id}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  const project = data?.data;

  const decodedCategory = decodeURIComponent(params.category);

  const breadcrumbs = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Project",
      url: "/projects",
    },
    {
      label: decodedCategory,
      url: `/projectShowcase/${decodedCategory}`,
    },
  ];

  return (
    <div className="mt-16">
      <PageBanner
        title="OUR SUCCESS"
        banner="https://i.postimg.cc/cCj8fKHH/Frame-3.png"
        breadcrumbs={breadcrumbs}
      />
      <div className="my-20 pt-10">
        <SectionHeadingCenter
          className=""
          subTitle={<p className="text-sm sm:text-lg ">Project name</p>}
          title={
            <div className="text-center">
              <h2 className="text-xl lg:text-4xl">{project?.name}</h2>
            </div>
          }
        />

        <MaxWidthWrapper className="min-h-[100vh]">
          <div className="text-justify mt-28">
            <p>{project?.shortDescription}</p>
            <br />
            <br />

            <Image
              src={project?.image}
              alt="project details"
              loader={customLoader}
              width={600}
              height={400}
              className="shadow-md w-full h-[80vh] object-cover"
            />

            <div>
              <div className="rounded-none mt-2 border-0 ">
                <div className="flex justify-start gap-6">
                  <div className="flex justify-start font-medium py-2">
                    <span className="font-semibold text-black flex">
                      <IoLocationOutline className="mr-1 text-orange-500 text-lg" />
                      {project?.location}
                    </span>
                  </div>
                  <div className="flex justify-start font-medium py-2">
                    <span className="font-semibold text-black flex">
                      <BsBuildings className="mr-1 text-orange-500" />
                      {project?.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <p>{project?.description}</p>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default page;
