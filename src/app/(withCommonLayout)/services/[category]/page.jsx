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
import { notFound } from "next/navigation";

async function getServices(category, page = 1, limit = 12) {
  const response = await fetch(
    `http://localhost:5000/api/v1/service/category-wise?category=${encodeURIComponent(
      category
    )}&page=${page}&limit=${limit}`,
    { cache: "no-store" }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch services");
  }
  return await response.json();
}

export default async function Page({ params, searchParams }) {
  const decodedCategory = decodeURIComponent(params.category);
  const page = parseInt(searchParams.page) || 1;
  const limit = 12; // Changed to 12 items per page

  let result = { data: [], metadata: { totalPages: 0, currentPage: 1 } };
  try {
    result = await getServices(decodedCategory, page, limit);
  } catch (error) {
    notFound();
  }

  const { data: services, metadata } = result;
  const { totalPages, currentPage } = metadata;

  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Services", url: "/services" },
    { label: decodedCategory, url: `/services/${decodedCategory}` },
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
        {services.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <ServiceCard key={service._id || index} data={service} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No services found for this category.
          </p>
        )}

        <div className="mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href={
                    currentPage > 1 ? `?page=${currentPage - 1}` : undefined
                  }
                  aria-disabled={currentPage === 1}
                />
              </PaginationItem>
              {[...Array(Math.max(totalPages, 1))].map((_, i) => {
                if (
                  i === 0 ||
                  i === totalPages - 1 ||
                  (i >= currentPage - 2 && i <= currentPage + 2)
                ) {
                  return (
                    <PaginationItem key={i}>
                      <PaginationLink
                        href={`?page=${i + 1}`}
                        isActive={currentPage === i + 1}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  );
                } else if (i === currentPage - 3 || i === currentPage + 3) {
                  return <PaginationEllipsis key={i} />;
                }
                return null;
              })}
              <PaginationItem>
                <PaginationNext
                  href={
                    currentPage < totalPages
                      ? `?page=${currentPage + 1}`
                      : undefined
                  }
                  aria-disabled={currentPage === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
