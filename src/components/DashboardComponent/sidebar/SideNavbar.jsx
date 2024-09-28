"use client";
import { logOut } from "@/app/(withCommonLayout)/action/authAction";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { usePathname } from "next/navigation";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoIosLogOut } from "react-icons/io";

const SideNavbar = () => {
  // const pathname = usePathname();
  const router = useRouter();
  let user;
  const isDropdownItemActive = (dropdownItems) => {
    return dropdownItems.some((item) => location.pathname === item.href);
  };

  const handleLogOut = async () => {
    await logOut();
    // setUser(null);
    router.push("/");
  };

  const links = [
    { id: 1, href: "/", label: "Home" },
    { id: 2, href: "/dashboard", label: "Dashboard" },
    {
      id: 3,
      href: "/dashboard/hospital-furniture-table",
      label: "Hospital Furniture",
    },

    // {
    //   id: 4,
    //   href: "/dashboard/add-hospital-furniture",
    //   label: "Add Hospital Furniture",
    // },
    {
      id: 5,
      href: "/dashboard/medical-equipment-table",
      label: "Medical Equipment",
    },
    // {
    //   id: 6,
    //   href: "/dashboard/add-medical-equipment",
    //   label: "Add Medical Equipment",
    // },
    {
      id: 34,
      href: "/dashboard/archived-equipment-table",
      label: "Archived Equipment",
    },
    { id: 7, href: "/dashboard/blog-page", label: "Blog" },
    {
      id: 8,
      href: "/dashboard/medical-category-page",
      label: "Medical Category",
    },
    {
      id: 9,
      href: "/dashboard/hospital-furniture-category-page",
      label: "Hospital Furniture Category",
    },
    {
      id: 10,
      href: "/dashboard/clients-page",
      label: "Clients",
    },
  ];

  return (
    <>
      <section className="sticky top-0 z-50 hidden min-h-screen w-[250px] min-w-[250px] border-r px-2.5 py-5 md:min-h-screen lg:block">
        <div className="my-5 flex items-center justify-between gap-2 rounded-lg border bg-background p-2">
          <Avatar>
            <AvatarImage src={user?.profile || ""} alt="profile-picture" />
            <AvatarFallback className="bg-blue-600 font-semibold text-white">
              {user?.fullName?.split("")[0]}
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Mapping over links */}
        <div className="flex flex-col gap-2">
          {links.map((link) => (
            <Button
              key={link.id}
              variant="secondary"
              asChild
              className="justify-start"
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </div>

        <Button
          className="mt-5 w-full gap-2"
          variant="destructive"
          onClick={handleLogOut}
        >
          Logout <IoIosLogOut size={25} />
        </Button>
      </section>

      {/* //* For Smaller Devices */}
      <section className="sticky top-0 z-50 flex w-full items-center justify-between border-b bg-background px-2.5 py-4 lg:hidden">
        {/* //* Slider */}
        <div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <HiMenuAlt1 size={30} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="mt-5 flex flex-col gap-2">
                {/* Map over routes and generate links */}
              </div>

              <Button
                className="my-5 w-full gap-2"
                variant="destructive"
                onClick={handleLogOut}
              >
                Logout <IoIosLogOut size={25} />
              </Button>
            </SheetContent>
          </Sheet>
        </div>

        {/* //* LOGO */}
        {/* <Link to={"/"}>
          <div className="flex items-center gap-1">
            <img src={logo} alt="tti logo" className="size-10" />
            <h4 className="font-semibold">Tender Trading Inc.</h4>
          </div>
        </Link> */}

        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src={user?.profile || ""} alt="profile-picture" />
                <AvatarFallback className="bg-blue-600 font-semibold text-white">
                  {user?.fullName?.split("")[0]}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-1.5">
              <DropdownMenuLabel>
                {user?.fullName || "Not Available"}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link to={"/"}>
                <DropdownMenuItem asChild>
                  <Button className="my-1 w-full">Home</Button>
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem asChild>
                <Button
                  className="my-1 w-full gap-2"
                  variant="destructive"
                  onClick={handleLogOut}
                >
                  Logout <IoIosLogOut size={25} />
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>
    </>
  );
};

export default SideNavbar;
