import ContactForm from "@/components/FrontendComponent/ContactUsPage/ContactForm";
import PageBanner from "@/components/shared/PageBanner/PageBanner";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="">
      <div>
        <PageBanner
          title="Contact Us"
          description=""
          banner="/contact.png"
        ></PageBanner>
      </div>

      <section class="bg-white relative py-32 w-full rounded-lg overflow-hidden">
        <div class="absolute bottom-[-50%] left-[-50%] md:left-[-20%] lg:left-[-20%] xl:left-[-10%] w-[450px] h-[450px] bg-gradient-to-tr from-red-200 to-transparent rounded-full blur-md"></div>

        <div class="absolute top-[-50%] right-[-50%] md:right-[-30%] lg:right-[-20%] xl:right-[-10%] w-[450px] h-[450px] bg-gradient-to-tr from-transparent to-red-200 rounded-full blur-md"></div>

        <div className="flex flex-col items-center mb-8">
          <div className="mb-5 z-10 ">
            <Image
              alt="our vision imave"
              height={64}
              width={637}
              className="w-[300px] md:w-[637px]"
              src="/COUNTACT.png"
            ></Image>
          </div>
          <div className="flex items-center gap-3 -mt-14 ml-4">
            {" "}
            <p className="text-[#F78C40] inline-block text-center">
              What We Do
            </p>
            <p className="h-1 w-16 bg-gradient-to-tr from-[#ffc1957e] to-[#F78C40]"></p>
          </div>
        </div>
        <div className="text-5xl font-bold mb-2 text-center">
          <h2> WE'D LOVE TO HEAR FROM</h2>
          <div className="inline-block mt-2">
            <span className="">YOU</span>
            <hr className="border-t-8 border-t-[#F78C40] mt-[-8px]" />
          </div>
        </div>

        <p className="text-gray-500 text-lg max-w-4xl mx-auto text-center">
          Focusing on medium to large-scale commercial construction projects, we
          work with both investors and developers to create landmarks that make
          an impact.
        </p>
      </section>
      <section className="bg-white">
        <ContactForm />
      </section>
    </div>
  );
};

export default Contact;
