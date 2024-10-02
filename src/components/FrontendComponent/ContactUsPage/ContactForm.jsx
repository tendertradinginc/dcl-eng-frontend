"use client";
import { customLoader } from "@/app/utils/customLoader";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/v1/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      if (data?.status === "success") {
        toast.success("Message submitted successfully");
        e.target.reset();
      }
    } catch (error) {
      toast.error(error.message || "An unexpected error occurred");
      console.error("Error:", error);
      toast.error(error?.message);
    }
  };

  return (
    <section className=" ">
      <div className="static lg:relative">
        {/* Contact Form */}
        <div className=" bg-[#E7EAED] lg:pr-32 xl:p-32 rounded-lg shadow-md  lg:w-4/5 px-2 py-12">
          <div className="w-full lg:w-4/5 text-center md:text-left">
            <h3 className="text-3xl font-semibold mb-6 text-gray-800 ">
              INFORMATION REQUEST
            </h3>
            <p className="text-gray-600 mb-24">
              Focusing on medium to large-scale commercial construction
              projects, we work with both investors and developers to create
              landmarks that make an impact.
            </p>
            <form className="space-y-6 " onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <input
                  type="text"
                  placeholder="Name *"
                  required
                  className="w-full md:w-1/2 px-4 py-3 border border-b-black text-black placeholder:text-black  focus:outline-1 bg-transparent"
                  name="name"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Number *"
                  required
                  className="w-full md:w-1/2 px-4 py-3 border  border-b-black text-black placeholder:text-black  focus:outline-none bg-transparent"
                  name="phone"
                  onChange={handleInputChange}
                />
              </div>
              <input
                type="email"
                placeholder="Email *"
                required
                className="w-full px-4 py-3 border  border-b-black text-black placeholder:text-black  focus:outline-none bg-transparent"
                name="email"
                onChange={handleInputChange}
              />
              <textarea
                placeholder="Say something...."
                required
                className="w-full px-4 py-3 border  border-b-black text-black placeholder:text-black  focus:outline-none bg-transparent h-32"
                name="message"
                onChange={handleInputChange}
              ></textarea>
              <Button type="submit" variant="dashboard">
                Submit now
              </Button>
            </form>
          </div>
        </div>
        <div className="static lg:absolute top-0 right-0 h-full  bg-transparent flex flex-col justify-center">
          {/* Office Location */}
          <div className="w-full lg:w-[450px] max-h-full ">
            <div className=" bg-white p-8  rounded-lg shadow-md">
              <h3 className="text-3xl font-semibold mb-6 text-gray-800">
                OFFICE LOCATIONS
              </h3>
              <p>
                We usually respond within 24 hours. Alternateively you’re
                welcome to call our offices.
              </p>
              <div className="my-8 ">
                <Image
                  loader={customLoader}
                  width={300}
                  height={306}
                  src="Frame 76554.png"
                  alt="Office"
                  class="object-contain "
                />
                <p className="text-gray-700 font-medium mt-4 flex items-center gap-x-2">
                  <IoLocationOutline className="text-[#F78C40]" />
                  Dhanmondi 32, Dhaka-1205, Bangladesh
                </p>
                <p className="text-gray-600 flex items-center gap-x-2 my-2">
                  <MdOutlineForwardToInbox className="text-[#F78C40]" />

                  <a
                    href="mailto:hellodclengbd@gmail.com"
                    className="underline"
                  >
                    hellodclengbd@gmail.com
                  </a>
                </p>
                <p className="text-gray-600 flex items-center gap-x-2">
                  <LuPhone className="text-[#F78C40]" />
                  <a href="tel:+8801705000000" className="underline">
                    +8801705-000000
                  </a>
                  ,{" "}
                  <a href="tel:+8801805222222" className="underline">
                    +8801805-222222
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
