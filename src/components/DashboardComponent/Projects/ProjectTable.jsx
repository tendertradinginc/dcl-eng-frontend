"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { AiFillDatabase } from "react-icons/ai";
import { toast } from "sonner";
// import PaginationBlog from "../../shared/pagination/PaginationShadcn";
// import BlogCreateButton from "./BlogCreateButton";
// import SingleBlog from "./SingleBlog";

import PaginationRaw from "@/components/shared/pagination/PaginationRaw";
import useAllProjects from "@/hooks/useAllProjects";
import SingleProject from "./SingleProject";
import ProjectCreateModal from "./ProjectCreateModal";

const ProjectTable = () => {
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(searchParams.get("page") || 1);
  const [pageLimit, setPageLimit] = useState(searchParams.get("limit") || 10);
  const [searchValue, setSearchValue] = useState("");

  const { projects,  setReload, projectsCount, loading } = useAllProjects(currentPage, pageLimit, searchValue);
  



  return (
    <div className="min-h-[80vh]">
      <div className="container mx-auto px-10">
        <br />
        <div className="mx-auto w-full max-w-screen-lg bg-white pb-10">
          <div className="overflow-x-auto sm:px-1">
            <div className="flex items-center justify-between p-6">
              <h2 className="text-2xl font-semibold text-si-primary">
                <AiFillDatabase className="mb-1 inline"></AiFillDatabase>
                Project List
              </h2>
              <div className="flex flex-wrap gap-3 text-center">
                {" "}
                <input
                  type="text"
                  placeholder="search"
                  className="border rounded-md"
                  onChange={(e) => setSearchValue(e.target.value)}
                />{" "}
                <ProjectCreateModal setReload={setReload} />
              </div>
            </div>
            <hr />

            {
              <table className="w-full table-auto">
                <thead className="border-2 border-gray-700 text-white bg-gray-700">
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
          {!loading && (
          <div className="mt-5">
            <PaginationRaw
              data={{
                setCurrentPage,
                dataCount:projectsCount,
                currentPage,
                pageLimit,
                setPageLimit,
                defaultPageLimit:10,
              }}
            />
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default ProjectTable;
