import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import SectionHeadingLeft from "@/components/shared/SectionHeading/SectionHeadingLeft";
import ReviewSlider from "./ReviewSlider";

const Review = () => {
  return (
    <div
      style={{
        backgroundImage: "url('https://i.postimg.cc/90wmHKh9/Frame-76447.png')",
      }}
      className="bg-cover bg-no-repeat bg-center my-16"
    >
      <MaxWidthWrapper className="py-12 md:py-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-14 items-center">
          <div className="lg:col-span-1">
            <SectionHeadingLeft
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              subTitle="Testimonials"
              imageUrl="https://i.postimg.cc/k49X8fW3/REVIEW-1.png"
              title={
                <span className="inline-block font-bold leading-normal">
                  WHAT OUR <br className="hidden md:block" /> CUSTOMERS{" "}
                  <br className="hidden md:block" /> SAY
                </span>
              }
            />
          </div>

          <div className="lg:col-span-2">
            <ReviewSlider />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Review;
