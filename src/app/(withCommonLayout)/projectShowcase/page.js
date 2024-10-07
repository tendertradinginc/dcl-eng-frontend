import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import ProjectShowcases from "@/components/FrontendComponent/action/ProjectShowcases/ProjectShowcase";
import PageBanner from "@/components/shared/PageBanner/PageBanner";
import SectionHeadingCenter from "@/components/shared/SectionHeading/SectionHeadingCenter";

export default function page() {
  return (
    <div className="mt-16">
      <PageBanner title="PROJECTS SHOWCASE" banner="/projectshowcase.png" />
      <div className="my-20">
        <SectionHeadingCenter
          imageUrl="https://i.postimg.cc/q7L1JF7N/SHOWCASE.png"
          title={
            <div className="text-center">
              <h2 className="text-xl lg:text-4xl">
                PROJECTS
                <span className="border-b-4 ml-2 border-[#F78C40]">
                  SHOWCASE
                </span>
              </h2>
            </div>
          }
          subTitle={<p className="text-sm sm:text-lg">Show our project</p>}
        />

        <MaxWidthWrapper className="min-h-[100vh]">
          <ProjectShowcases />
        </MaxWidthWrapper>
      </div>
    </div>
  );
}
