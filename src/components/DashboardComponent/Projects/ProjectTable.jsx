"use client";
import { useSearchParams } from "next/navigation";
import {  useState } from "react";
import { AiFillDatabase } from "react-icons/ai";
import { toast } from "sonner";
// import PaginationBlog from "../../shared/pagination/PaginationShadcn";
// import BlogCreateButton from "./BlogCreateButton";
// import SingleBlog from "./SingleBlog";

import PaginationRaw from "@/components/shared/pagination/PaginationRaw";
import useAllProjects from "@/hooks/useAllProjects";
import SingleProject from "./SingleProject";

const ProjectTable = () => {
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(searchParams.get("page") || 1);
  const [pageLimit, setPageLimit] = useState(searchParams.get("limit") || 10);




  const { projects, reload, setLoading, setReload, projectsCount, loading } =
    useAllProjects();
    console.log(projects)

  const totalPage = Math.ceil(projectsCount / pageLimit);

  return (
    <div className="min-h-[80vh]">
    <div className="container mx-auto px-10">
      <br />
      <div className="mx-auto w-full max-w-screen-lg bg-white pb-10">
        <div className="overflow-x-auto sm:px-1">
          <div className="flex items-center justify-between pb-6">
            <h2 className="text-2xl font-semibold text-si-primary">
              <AiFillDatabase className="mb-1 inline"></AiFillDatabase>
              Blog List
            </h2>
            {/* <BlogCreateButton setReload={setReload} /> */}
          </div>
          <hr />

          {
            <table className="w-full table-auto">
              <thead className="border-2 border-si-primary bg-si-primary text-white">
                <tr className="">
                  <th className="px-4 py-2">No</th>
                  <th className="px-4 py-2 text-left">Title</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>

              <tbody className="border text-center">
                {projects?.length > 0
                  ? projects?.map((project, index) => (
                      <SingleProject
                        key={index}
                        index={index}
                        data={project}
                        setReload={setReload}
                      ></SingleProject>
                    ))
                  : Array.from({ length: 10 }).map((_, idx) => (
                      <tr
                        key={idx}
                        className={`h-10 w-full ${
                          idx % 2 == 0 ? "bg-secondary" : ""
                        } `}
                      >
                        <td className="col" colSpan={4}></td>
                      </tr>
                    ))}
              </tbody>
            </table>
          }
        </div>
        {/* {!loading && (
          <div className="mt-5">
            <PaginationRaw
              data={{
                setCurrentPage,
                dataCount:blogsCount,
                currentPage,
                pageLimit,
                setPageLimit,
                defaultPageLimit:10,
              }}
            />
          </div>
        )} */}
      </div>
    </div>
  </div>
  );
};

export default ProjectTable;
