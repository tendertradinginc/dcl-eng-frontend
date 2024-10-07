import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import AboutUs from "@/components/FrontendComponent/AboutUs/AboutUs";
import CEO from "@/components/FrontendComponent/CEO/CEO";
import MD from "@/components/FrontendComponent/MD/MD";
import OurPromise from "@/components/FrontendComponent/OurPromise/OurPromise";
import Team from "@/components/FrontendComponent/Team/Team";
import PageBanner from "@/components/shared/PageBanner/PageBanner";

const page = () => {
  return (
    <div>
      <div className="mt-16">
        <PageBanner
          title="ABOUT US"
          banner="https://i.postimg.cc/brpvDpgn/Frame-76521.png"
        />
      </div>
      <MaxWidthWrapper className="min-h-[100vh]">
        <AboutUs />
        <CEO />
        <MD />
        <Team />
      </MaxWidthWrapper>
      <OurPromise />
    </div>
  );
};

export default page;
