"use client";
import BlogTable from "@/components/Dashboard/Blog/BlogTable";
import { Suspense } from "react";
const blogPage = () => {
  return (
    <div className="w-full p-5 md:p-10">
      <Suspense fallback={<div>Loading...</div>}>
        <BlogTable />
      </Suspense>
    </div>
  );
};

export default blogPage;
