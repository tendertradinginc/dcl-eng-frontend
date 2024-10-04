import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import ProjectShowcases from "@/components/FrontendComponent/action/ProjectShowcases/ProjectShowcase";
import PageBanner from "@/components/shared/PageBanner/PageBanner";
import SectionHeadingCenter from "@/components/shared/SectionHeading/SectionHeadingCenter";

export default function page() {

    return (
        <div className="mt-16">
            <PageBanner title="ABOUT US" banner="https://i.postimg.cc/15chdz9x/Frame-76591.png" />
            <div className="my-20">
                <SectionHeadingCenter
                    imageUrl="https://i.postimg.cc/k588y1ZT/SERVICE.png"
                    title={
                        <>
                            PROJECTS
                            <span className="border-b-4 border-[#F78C40]">
                                SHOWCASE
                            </span>
                        </>
                    }
                    subTitle="Show our project"
                />

                <MaxWidthWrapper className="min-h-[100vh]">

                    <ProjectShowcases />

                </MaxWidthWrapper>
            </div>

        </div>
    );
}
