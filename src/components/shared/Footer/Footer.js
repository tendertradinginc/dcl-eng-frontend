import { customLoader } from "@/app/utils/customLoader";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaHome, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import MaxWidthWrapper from "../../custom/MaxWidthWrapper";

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: "url('https://i.postimg.cc/xdsS0MDy/dna-Footer.png')",
      }}
      className="w-full bg-cover bg-no-repeat"
    >
      <div className="bg-[#0c0d0df6]">
        <MaxWidthWrapper>
          <div className="flex flex-wrap gap-x-28 gap-y-10 py-10">
            {/* First Column */}
            <ul className="flex flex-col gap-3">
              <li className="flex gap-2 text-3xl font-bold text-gray-300">
                {/* <Image
                  loader={customLoader}
                  height={50}
                  width={100}
                  alt="Twin Trade Int. logo footer"
                  src="https://i.ibb.co/MZfwXL1/7-removebg-preview.png"
                />{" "} */}
                Twin Trade Int
              </li>
              <li className="max-w-80">
                <p className="mt-5 font-medium leading-7 text-gray-300">
                  We remain true to the same principles on which our company was
                  founded over four years ago: providing superior service to our
                  clients, prioritizing safety, and creating opportunities for
                  people.
                </p>
              </li>
            </ul>

            {/* Second Column */}
            <ul className="flex flex-col gap-y-3">
              <li className="text-2xl font-bold text-gray-300">Links</li>
              <li className="mt-5">
                <Link href="/login" className="text-secondary">
                  Login
                </Link>
              </li>
              {/* <li className="mt-5">
                <Link href="/registration" className="text-secondary">
                  Registration
                </Link>
              </li> */}
              <li className="">
                <Link href="/AboutUs" className="text-secondary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-secondary">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-secondary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-secondary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/medical-equipment" className="text-secondary">
                  Products
                </Link>
              </li>
            </ul>

            {/* Third Column */}
            <ul className="grid gap-y-3">
              <li className="text-2xl font-bold text-gray-300">
                Contact Information
              </li>
              <li className="max-w-80">
                {" "}
                <p className="mt-5 font-medium leading-7 text-secondary">
                  You Can Always contact with us via email or phone. Get in
                  touch with contact and get a quote form
                </p>
              </li>
              <li className="mt-5 flex gap-x-3 text-secondary">
                <FaHome className="mt-1 text-xl text-gray-300" />
                HM Plaza, (13th Floor) Sector-03 <br /> Uttara, Dhaka-1230
              </li>
              <li className="flex gap-x-3 text-secondary">
                <IoCall className="mt-1 text-xl text-gray-300" />
                +880 1700978687
              </li>
              <li className="flex gap-x-3 text-secondary">
                <IoMdMail className="mt-1 text-xl text-gray-300" />
                twintradeinternational@gmail.com
              </li>
            </ul>

            {/* Socials */}
            <ul className="flex flex-col gap-y-3">
              <li className="text-2xl font-bold text-gray-300">Socials</li>
              <Image
                loader={customLoader}
                className="mt-2"
                height={50}
                width={220}
                alt="Twin Trade Int. logo footer"
                src="https://i.postimg.cc/Pfbh7MmL/download-removebg-preview.png"
              />
              <li className="mt-5 flex gap-4">
                <Link href="https://www.facebook.com/" target="_blank">
                  {" "}
                  <div className="rounded-sm bg-white p-1">
                    <FaFacebook className="text-2xl text-primary" />
                  </div>
                </Link>
                <Link href="https://www.linkedin.com/" target="_blank">
                  {" "}
                  <div className="rounded-sm bg-white p-1">
                    <FaLinkedinIn className="text-2xl text-primary" />
                  </div>
                </Link>
                <Link href="https://www.instagram.com/" target="_blank">
                  {" "}
                  <div className="rounded-sm bg-white p-1">
                    <FaInstagram className="text-2xl text-primary" />
                  </div>
                </Link>
                <Link href="https://x.com/" target="_blank">
                  {" "}
                  <div className="rounded-sm bg-white p-1">
                    <FaXTwitter className="text-2xl text-primary" />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </MaxWidthWrapper>
        <div className="border-t bg-[#000000] border-secondary p-5">
          <h1 className="text-center font-semibold text-gray-300">
            {" "}
            twintradeinternational.com &copy; Designed & Developed by
            Tender-Trading-Inc.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
