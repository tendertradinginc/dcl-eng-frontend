import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import SectionBanner from "@/components/shared/SectionBanner/SectionBanner";
import SectionHeadingCenter from "@/components/shared/SectionHeading/SectionHeadingCenter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mail, MessageCircleMore, Phone } from "lucide-react";
import Image from "next/image";

// Add this function for data fetching
async function getServiceById(id) {
  const response = await fetch(`http://localhost:5000/api/v1/service/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch service data");
  }
  const data = await response.json();
  return data.data;
}

export default async function Page({ params }) {
  // Decode the id name
  const decodedId = decodeURIComponent(params.id);

  // Fetch service data
  const serviceData = await getServiceById(decodedId);

  const breadcrumbs = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Services",
      url: "/services",
    },
    {
      label: serviceData.category,
      url: `/services/${serviceData.category
        .toLowerCase()
        .replace(/\s+/g, "-")}`,
    },
    {
      label: serviceData.name,
      url: `/services/${decodedId}`,
    },
  ];

  const faqItems = Array.from({ length: 6 }, (_, index) => ({
    question: `Lorem Ipsum is simply dummy text of the printing?`,
    answer: `Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  }));

  return (
    <div className="mt-16">
      <SectionBanner
        title="OUR SERVICES"
        breadcrumbs={breadcrumbs}
        imgUrl="/servicePageBanner.jpg"
      />

      <SectionHeadingCenter
        imageUrl="https://i.postimg.cc/k588y1ZT/SERVICE.png"
        title={<span className="capitalize">{serviceData.name}</span>}
        subTitle={serviceData.category}
        className="my-20"
      />

      {/* Details section */}
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="md:w-1/2">
            <Image
              src={serviceData.image}
              alt={serviceData.name}
              width={500}
              height={300}
              layout="responsive"
              className="rounded-lg h-64 md:h-80"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">
              {serviceData.shortDescription}
            </h2>
            <p className="text-gray-600 mb-4">{serviceData.fullDescription}</p>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Features section */}
      <MaxWidthWrapper className="my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6">
            <p className="text-[#F78C40] text-xl font-bold mb-2">01</p>
            <h3 className="text-2xl font-bold mb-4">Quality & Reliable</h3>
            <p className="text-gray-600 max-w-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="p-6">
            <p className="text-[#F78C40] text-xl font-bold mb-2">02</p>
            <h3 className="text-2xl font-bold mb-4">Licensed & Insured</h3>
            <p className="text-gray-600 max-w-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="p-6">
            <p className="text-[#F78C40] text-xl font-bold mb-2">03</p>
            <h3 className="text-2xl font-bold mb-4">Skilled Architect</h3>
            <p className="text-gray-600 max-w-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="p-6">
            <p className="text-[#F78C40] text-xl font-bold mb-2">04</p>
            <h3 className="text-2xl font-bold mb-4">Available 24 Hours</h3>
            <p className="text-gray-600 max-w-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* FAQ section */}
      <MaxWidthWrapper className="my-20">
        <div className="flex flex-col lg:flex-row gap-8">
          <section className="w-full lg:w-2/3">
            <h2 className="text-3xl font-bold mb-8">
              Frequently asked question
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className="border"
                >
                  <AccordionTrigger className="text-lg font-semibold px-4 py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base px-4 py-2">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
          <section className="w-full lg:w-1/3">
            <div className="bg-[#1E293B] text-white p-6 rounded-lg h-full">
              <h3 className="text-2xl font-bold mb-4">How Can We Help?</h3>
              <p className="mb-6">
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-2 text-[#F78C40]" />
                  <span>Call us</span>
                </div>
                <p className="text-[#F78C40] font-bold">+8801705 236365</p>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-2 text-[#F78C40]" />
                  <span>Email us</span>
                </div>
                <p className="text-[#F78C40] font-bold">+8801705 236365</p>
                <div className="flex items-center">
                  <MessageCircleMore className="w-6 h-6 mr-2 text-[#F78C40]" />
                  <span>Chat with us</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
