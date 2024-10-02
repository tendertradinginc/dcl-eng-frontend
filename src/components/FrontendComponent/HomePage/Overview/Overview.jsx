import { customLoader } from "@/app/utils/customLoader";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import Image from "next/image";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Overview = () => {
  return (
    <section class="bg-[url('/overviewBg.jpeg')] bg-cover bg-no-repeat bg-bottom  relative py-32 w-full rounded-lg overflow-hidden">
      <div class="absolute bottom-[-50%] left-[-50%] md:left-[-20%] lg:left-[-20%] xl:left-[-10%] w-[450px] h-[450px] bg-gradient-to-tr from-red-200 to-transparent rounded-full blur-md"></div>

      <div class="absolute top-[-50%] right-[-50%] md:right-[-30%] lg:right-[-20%] xl:right-[-10%] w-[450px] h-[450px] bg-gradient-to-tr from-transparent to-red-200 rounded-full blur-md"></div>
      <div>
        <div>
          <SectionTitle
            title={"Contact Us"}
            imageLink={"/WELCOME.png"}
            position={"items-left"}
            width={610}
            height={64}
          ></SectionTitle>

          <div className="text-5xl font-bold mb-2 text-left">
            <h2>
              {" "}
              We Are Best Company In <br />
            </h2>
            <div className="inline-block mt-2">
              <span className="">Constrcution</span>
              <hr className="border-t-8 border-t-[#F78C40] mt-[-8px]" />
            </div>
          </div>
          <h3>Release of Letraset sheets containing Lorem Ipsum passages.</h3>
          <p className="text-gray-500 text-lg max-w-4xl mx-auto text-center">
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for ‘lorem ipsum’
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
            <div className="">
              <BsBoxArrowUpRight />
              <p>100% Satisfaction</p>
            </div>
            <div className="">
              <BsBoxArrowUpRight />
              <p>100% Satisfaction</p>
            </div>
            <div className="">
              <BsBoxArrowUpRight />
              <p>100% Satisfaction</p>
            </div>
            <div className="">
              <BsBoxArrowUpRight />
              <p>100% Satisfaction</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <Image
              loader={customLoader}
              width={300}
              height={306}
              src="Frame 76554.png"
              alt="Office"
              class="object-contain "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
