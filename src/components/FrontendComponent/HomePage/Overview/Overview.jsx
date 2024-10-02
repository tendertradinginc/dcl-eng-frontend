import { customLoader } from "@/app/utils/customLoader";
import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import Image from "next/image";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Overview = () => {
  return (
    <section class="bg-[url('/overviewBg.jpeg')] bg-cover bg-no-repeat bg-bottom  relative py-32 w-full rounded-lg overflow-hidden">
      <div class="absolute top-[-50%] left-[-50%] md:left-[-20%] lg:left-[-20%] xl:left-[-10%] w-[500px] h-[500px] md:w-[600px] md:h-[600px] xl:w-[700px] xl:h-[700px] bg-gradient-to-tr from-red-200 to-transparent rounded-full blur-2xl"></div>

      <div class="absolute bottom-[-50%] right-[-50%] md:right-[-30%] lg:right-[-20%] xl:right-[-10%] w-[500px] h-[500px] md:h-[600px] lg:w-[600px] xl:w-[700px] xl:h-[700px] bg-gradient-to-tr from-transparent to-red-200 rounded-full blur-2xl"></div>
      <MaxWidthWrapper>
        <SectionTitle
          title={"Contact Us"}
          imageLink={"/WELCOME.png"}
          position={"items-left"}
          width={610}
          height={64}
        ></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="text-4xl font-bold mb-2 text-left">
              <h2 className="uppercase">
                {" "}
                We Are Best Company In <br />
              </h2>
              <div className="inline-block mt-2">
                <span className="uppercase">Constrcution</span>
                <hr className="border-t-8 border-t-[#F78C40] mt-[-8px]" />
              </div>
            </div>
            <h3 className="text-xl font-bold">
              Release of Letraset sheets containing Lorem Ipsum passages.
            </h3>
            <p className="text-[##454545] text-lg my-8">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for ‘lorem
              ipsum’ will uncover many web sites still in their infancy. Various
              versions have evolved over the years, sometimes by accident,
              sometimes on purpose.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 font-bold">
              <div className="flex  gap-4  items-center">
                <BsBoxArrowUpRight className="text-[#F78C40] text-xl" />
                <p>100% Satisfaction</p>
              </div>
              <div className="flex  gap-4  items-center">
                <BsBoxArrowUpRight className="text-[#F78C40] text-xl" />
                <p>Flexible and Cost-Effective</p>
              </div>
              <div className="flex  gap-4  items-center">
                <BsBoxArrowUpRight className="text-[#F78C40] text-xl" />
                <p>Annual Pass Programs</p>
              </div>
              <div className="flex  gap-4  items-center">
                <BsBoxArrowUpRight className="text-[#F78C40] text-xl" />
                <p>Trained Emploies</p>
              </div>
            </div>
          </div>
          <div className=" lg:flex gap-8 mt-[-32px]">
            <div className=" mt-16 ">
              <Image
                loader={customLoader}
                width={300}
                height={306}
                src="overview3.png"
                alt="Office"
                class="object-contain w-full lg:w-dvw "
              />
            </div>
            <div className="hidden lg:block">
              <Image
                loader={customLoader}
                width={300}
                height={306}
                src="overview1.png"
                alt="Office"
                class="object-contain w-full lg:w-dvw "
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Overview;
