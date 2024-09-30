"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { customLoader } from "@/app/utils/customLoader";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import MaxWidthWrapper from "../../custom/MaxWidthWrapper";
import NavItems from "./NavItems";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // If scrolling down
      setIsVisible(false);
    } else {
      // If scrolling up
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <nav
      className={`fixed z-50 w-full bg-white py-2 shadow-lg backdrop-blur-md duration-300 ${
        isVisible ? "top-0" : "-top-24"
      }`}
    >
      <MaxWidthWrapper className="flex items-center justify-between">
        <Link href="/">
          <Image
            loader={customLoader}
            src="https://i.ibb.co/MZfwXL1/7-removebg-preview.png"
            width={80}
            height={80}
            alt=""
          />
        </Link>

        <div className="hidden md:block  ">
          <NavItems />
        </div>

        <div className="hidden md:block  ">
          <Link href="/AboutUs#contact-section">
            {" "}
            <Button variant="dcl">Contact Us</Button>
          </Link>
        </div>

        <Sheet>
          <SheetTrigger className="md:hidden">
            <RiMenu3Line className="size-5" />
          </SheetTrigger>
          <SheetContent>
            <NavItems />
          </SheetContent>
        </Sheet>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
