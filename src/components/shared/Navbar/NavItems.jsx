"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { CaretDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = ({ className }) => {
  const pathname = usePathname();

  const navLinks = [
    { id: 1, url: "/", label: "Services" },
    { id: 2, url: "/", label: "Gallery" },
    { id: 3, url: "/", label: "About Us" },
    { id: 4, url: "/", label: "Blog" },
  ];

  return (
    <div className="flex flex-col items-center md:flex-row">
      <Button
        asChild
        variant="link"
        className={cn(pathname === "/" ? "underline" : "")}
      >
        <Link href={"/"} className="font-semibold">
          Home
        </Link>
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="link"
            className={cn(
              pathname === "/hospital-furniture" ||
                pathname === "/medical-equipment"
                ? "underline"
                : ""
            )}
          >
            Products <CaretDownIcon className="ml-1 size-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem asChild>
            <Link href="/hospital-furniture">Hospital Furniture</Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link href="/medical-equipment">Medical Equipment</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex flex-col items-center md:flex-row">
        {navLinks.map((link) => (
          <Button
            asChild
            variant="link"
            key={link.id}
            className={cn(pathname === link.url ? "underline" : "")}
          >
            <Link href={link.url} className="font-semibold">
              {link.label}
            </Link>
          </Button>
        ))}
      </div>

      <div className="mt-2 block md:hidden">
        <Link href="/AboutUs#contact-section">
          {" "}
          <Button>Contact Us</Button>
        </Link>
      </div>
    </div>
  );
};

export default NavItems;
