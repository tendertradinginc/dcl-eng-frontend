"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PaginationBlog = ({ data }) => {
  const { page, limit, totalPage } = data;
  const pageNumber = Number(page);

   return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={`${pageNumber <= 1 ? "bg-secondary" : "bg-si-primary text-white"}`}
            href={`?page=${page > 1 ? page - 1 : 1}&limit=${limit}`}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            className={`${pageNumber == 1 && "border"}`}
            href={`?page=${1}&limit=${limit}`}
          >
            1
          </PaginationLink>
        </PaginationItem>
        {totalPage >= 2 && (
          <PaginationItem>
            <PaginationLink
              className={`${pageNumber == 2 && "border"}`}
              href={`?page=${2}&limit=${limit}`}
            >
              2
            </PaginationLink>
          </PaginationItem>
        )}
        {totalPage >= 3 && (
          <PaginationItem>
            <PaginationLink
              className={`${pageNumber == 3 && "border"}`}
              href={`?page=${3}&limit=${limit}`}
            >
              3
            </PaginationLink>
          </PaginationItem>
        )}
        {
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        }
        <PaginationItem>
          <PaginationNext
            className={`${totalPage <= pageNumber ? "bg-secondary" : "bg-si-primary text-white"}`}
            href={`?page=${totalPage <= Number(page) ? page : Number(page) + 1}&limit=${limit}`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationBlog;
