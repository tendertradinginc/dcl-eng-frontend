import SectionBanner from "@/components/shared/SectionBanner/SectionBanner";
import SectionHeadingCenter from "@/components/shared/SectionHeading/SectionHeadingCenter";
import ServiceCard from "@/components/shared/ServiceCard/ServiceCard";
import React from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";

export default function page({ params }) {
  // Decode the category name
  const decodedCategory = decodeURIComponent(params.category);

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
      label: decodedCategory,
      url: `/services/${decodedCategory}`,
    },
  ];
  return (
    <div className="mt-16">
      <SectionBanner
        title="OUR SERVICES"
        breadcrumbs={breadcrumbs}
        imgUrl="/servicePageBanner.jpg"
      />

      <SectionHeadingCenter
        imageUrl="https://i.postimg.cc/k588y1ZT/SERVICE.png"
        title={<span className="capitalize">{decodedCategory}</span>}
        subTitle="Explore our services"
        className="my-20"
      />

      <MaxWidthWrapper className="my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from({ length: 12 }, (_, index) => (
            <ServiceCard key={index} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
