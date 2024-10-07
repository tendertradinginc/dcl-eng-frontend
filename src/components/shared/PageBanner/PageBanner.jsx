"use client";
import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import Link from "next/link";
import { usePathname } from "next/navigation";
const PageBanner = ({ title, description, banner }) => {
  const pathname = usePathname();
  const pathArray = pathname.split("/").filter((segment) => segment);
  const breadcrumb = pathArray.map((segment, index) => {
    const href = "/" + pathArray.slice(0, index + 1).join("/");
    return { label: segment.charAt(0).toUpperCase() + segment.slice(1), href };
  });

  return (
    <div
      className=" h-[300px]  md:h-[400px] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <MaxWidthWrapper>
        <div className="py-20 md:py-32 lg:pb-10">
          <h1 className="my-8 text-center lg:text-6xl text-3xl font-bold text-white">
            {title}
          </h1>

          <nav className="flex justify-center text-sm text-white mb-4">
            <ol className="inline-flex space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/">
                  <p className="text-white hover:text-[#F78C40]">Home</p>
                </Link>
                <span className="mx-2">/</span>
              </li>
              {breadcrumb.map((crumb, index) => (
                <li key={index} className="inline-flex items-center">
                  {index !== breadcrumb.length - 1 ? (
                    <Link
                      href={crumb.href}
                      className="text-white hover:text-[#F78C40]"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white">{crumb.label}</span>
                  )}
                  {index !== breadcrumb.length - 1 && (
                    <span className="mx-2">/</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="mx-auto w-2/3 text-center font-semibold mt-2">
            {description}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default PageBanner;
