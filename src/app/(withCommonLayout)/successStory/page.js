import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import SuccessStories from "@/components/FrontendComponent/action/SuccessStories/SuccessStories";
import PageBanner from "@/components/shared/PageBanner/PageBanner";
import SectionHeadingCenter from "@/components/shared/SectionHeading/SectionHeadingCenter";


const page = () => {
    return (
        <div className="mt-16">
            <PageBanner title="OUR SUCCESS" banner="https://i.postimg.cc/mksvNfyj/Frame-76521-1.png" />
            <div className="my-20">



                <SectionHeadingCenter
                    imageUrl="https://i.postimg.cc/vHGc5Sms/SUCCESS.png"
                    title={
                        <div className="text-center">
                            <h2 className="text-xl lg:text-4xl">
                                WE ARE HAPPY TO SHARE OUR
                                <br />
                                <span className="border-b-4 ml-2 border-[#F78C40]">
                                    SUCCESS STORY
                                </span>
                            </h2>
                        </div>
                    }
                    subTitle={<p className="text-sm sm:text-lg">Our Success</p>}
                />


                <MaxWidthWrapper className="min-h-[100vh] mt-16">

                    <SuccessStories />

                </MaxWidthWrapper>
            </div>

        </div>

    );
};

export default page;