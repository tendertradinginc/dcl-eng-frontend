"use client";

import PaginationSSR from "@/components/shared/PaginationSSR/PaginationSSR";
import { useRouter } from "next/navigation";
import SuccessStoryCard from "./SuccessStoryCard";

const SuccessStories = ({ successStories, totalPages, currentPage, limit }) => {
  const router = useRouter();

  const handlePageChange = (newPage) => {
    router.push(`?page=${newPage}&limit=${limit}`, undefined, {
      shallow: true,
    });
  };

  return (
    <div>
      <div>
        <div className="flex flex-col">
          {successStories.length > 0 ? (
            successStories.map((story, index) => (
              <SuccessStoryCard
                key={story._id}
                index={index}
                successStoryData={story}
              />
            ))
          ) : (
            <p className="text-center">No Success Story Available.</p>
          )}
        </div>
        <div className="mt-8">
          <PaginationSSR
            page={currentPage}
            limit={limit}
            totalPage={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
