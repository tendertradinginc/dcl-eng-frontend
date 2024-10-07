import ConstructionTimeline from "@/components/FrontendComponent/ServicePage/ConstructionTimeline";
import ContactSection from "@/components/FrontendComponent/ServicePage/ContactSection";
import FeaturedServices from "@/components/FrontendComponent/ServicePage/FeaturedServices";
import ServiceCategory from "@/components/FrontendComponent/ServicePage/ServiceCategory";
import SectionBanner from "@/components/shared/SectionBanner/SectionBanner";
import SectionHeadingCenter from "@/components/shared/SectionHeading/SectionHeadingCenter";
export default function page() {
  const breadcrumbs = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Services",
      url: "/services",
    },
  ];

  return (
    <div className="mt-16">
      <SectionBanner
        title="OUR SERVICES"
        breadcrumbs={breadcrumbs}
        imgUrl="/servicePageBanner.jpg"
      />
      <div className="mb-20 relative  px-2 md:px-0">
        <div className="absolute inset-0 bg-[url('/servicePageBg.png')] bg-cover bg-center bg-no-repeat opacity-20 z-0"></div>
        <div className="relative z-10 py-20">
          <SectionHeadingCenter
            imageUrl="https://i.postimg.cc/k588y1ZT/SERVICE.png"
            title={
              <>
                PROVIDING SOLUTIONS FOR CONSTRUCTION,
                <br />
                <span className="border-b-4 border-[#F78C40]">
                  MANAGEMENT, AND RESTORATION.
                </span>
              </>
            }
            subTitle="What we do"
            className="text-black"
          />

          <ServiceCategory />
        </div>
      </div>
      <div className="mb-20">
        <SectionHeadingCenter
          title="OUR WORKING PROCESS"
          subTitle="Working Process"
          description="Focusing on medium to large-scale commercial construction projects, we work with both investors and developers to create landmarks that make an impact."
          className="my-10"
        />

        <ConstructionTimeline />
      </div>

      <FeaturedServices />

      <ContactSection />
    </div>
  );
}
