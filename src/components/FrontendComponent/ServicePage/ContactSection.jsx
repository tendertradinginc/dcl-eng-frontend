"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import SectionHeadingLeft from "@/components/shared/SectionHeading/SectionHeadingLeft";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectGroup } from "@radix-ui/react-select";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [countryCode, setCountryCode] = useState("+880");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/message",
        {
          ...formData,
          phone: `${countryCode}${formData.phone}`,
        }
      );

      if (response.data.status === "success") {
        toast.success("Message sent successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        toast.error("Error sending message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/servicePage7.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row md:gap-8">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 text-white">
            <SectionHeadingLeft
              subTitle="Feel free to contact"
              title="CONTACT US"
              description="Focusing on medium to large-scale commercial construction projects, we work with both investors and developers to create landmarks that make an impact."
              descriptionClassname="text-white "
            />
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-black mb-4">GET IN TOUCH</h2>
            <p className="text-gray-900 mb-6">
              Focusing on medium to large-scale commercial construction
              projects.
            </p>
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name..."
                className="w-full mb-4 p-2 border rounded bg-white bg-opacity-50 h-12"
                required
              />
              <div className="flex mb-4 gap-2">
                <Select value={countryCode} onValueChange={setCountryCode}>
                  <SelectTrigger className="w-20 border rounded-l bg-white bg-opacity-50 text-gray-800 h-12">
                    <SelectValue placeholder={countryCode} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Country Codes</SelectLabel>
                      <SelectItem value="+880">+880</SelectItem>
                      <SelectItem value="+1">+1</SelectItem>
                      <SelectItem value="+44">+44</SelectItem>
                      <SelectItem value="+91">+91</SelectItem>
                      <SelectItem value="+86">+86</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your number..."
                  className="flex-grow p-2 border rounded-r bg-white bg-opacity-50 h-12"
                  required
                />
              </div>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email..."
                className="w-full mb-4 p-2 border rounded bg-white bg-opacity-50 h-12"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="How can I help you?"
                className="w-full mb-4 p-2 border rounded h-32 bg-white bg-opacity-50"
                required
              ></textarea>
              <div>
                <div className="w-full flex justify-center items-center">
                  <Button
                    className="duration-200 mx-auto py-2.5 pl-6 pr-0 gap-4 justify-between rounded-full items-center border-2 border-[#0A2F4D] flex text-[#0A2F4D] font-semibold text-base border-r-0 mt-24 bg-white bg-opacity-80"
                    variant="tti"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Now"}
                    <div className="p-2 rounded-full bg-[#0A2F4D] my-0.5">
                      <FaArrowRightLong className="text-lg text-white -rotate-45" />
                    </div>
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
