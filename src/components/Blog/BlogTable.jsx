"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AiFillDatabase } from "react-icons/ai";
import { toast } from "sonner";
// import PaginationBlog from "../../shared/pagination/PaginationShadcn";
import BlogCreateButton from "./BlogCreateButton";
import SingleBlog from "./SingleBlog";
import useAllblogs from "@/hooks/useAllBlogs";

const BlogTable = () => {
  const searchParams = useSearchParams();
  // const [loading, setLoading] = useState(true);
  // const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(searchParams.get("page") || 1);
  const [limit, setLimit] = useState(searchParams.get("limit") || 10);
  // const [totalBlog, setTolatBlog] = useState(0);
  // const [reload, setReload] = useState(0);

  const { blogs, reload, setLoading, setReload, blogsCount, loading } =
    useAllblogs();

  // useEffect(() => {
  //   fetch(
  //     `http://localhost:5000/api/v1/blogs?page=${page}&limit=${limit}`,
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setBlogs(data?.data?.allBlogs);
  //       setTolatBlog(data?.data?.totlaBlogs);
  //       setLoading(false);
  //     })
  //     .catch((err) => toast.error(err.message));
  // }, [page, limit, loading, reload]);

  const totalPage = Math.ceil(blogsCount / limit);

  return (
    <div>
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
                <BlogCreateButton setReload={setReload} />
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
                    {blogs?.length > 0
                      ? blogs?.map((blog, index) => (
                          <SingleBlog
                            key={index}
                            index={index}
                            data={blog}
                            setReload={setReload}
                          ></SingleBlog>
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
                <PaginationBlog data={{ setPage, page, limit, totalPage }} />
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTable;
