import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";

const PageBanner = ({ title, description, banner }) => {
  return (
    <div
      className={`min-h-[364px] w-full bg-cover bg-center`}
      style={{ backgroundImage: `url(${banner})` }}
    >
      <MaxWidthWrapper>
        <div className="py-20  md:py-32 lg:pb-10">
          <h1 className="my-2 text-center lg:text-6xl text-3xl font-bold text-white">
            {title}
          </h1>
          <div className="mx-auto w-2/3 text-center text-white font-semibold mt-2">
            {description}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default PageBanner;
