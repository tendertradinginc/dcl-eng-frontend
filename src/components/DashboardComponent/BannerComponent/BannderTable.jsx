"use client";
import { useEffect, useState } from "react";
import { AiFillDatabase } from "react-icons/ai";
// import PaginationBlog from "../../shared/pagination/PaginationShadcn";
import PaginationRaw from "@/components/shared/pagination/PaginationRaw";

import CreateBanner from "./CreateBanner";
import SingleBanner from "./SingleBanner";

const BannderTable = () => {
  const [banner, setBanner] = useState([]);
  const [bannerCount, setBannerCount] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);
  const [reload, setReload] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const result = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:5000/api/v1/bannerpage?page=${currentPage}&limit=${pageLimit}`
        );
        const data = await response.json();
        setBanner(data?.data?.result);
        setBannerCount(data?.data?.totlaResult);
      } catch (error) {
        console.error("Error fetching :", error);
      } finally {
        setLoading(false);
      }
    };
    result();
  }, [currentPage, pageLimit, reload]);

  return (
    <div>
      <div className="min-h-[80vh]">
        <div className="container mx-auto px-10">
          <br />
          <div className="mx-auto w-full max-w-screen-lg bg-white pb-10">
            <div className="overflow-x-auto sm:px-1">
              <div className="flex items-center justify-between p-6">
                <h2 className="text-2xl font-semibold text-si-primary">
                  <AiFillDatabase className="mb-1 inline"></AiFillDatabase>
                  Banner List -{bannerCount}
                </h2>
                <div className="flex flex-wrap gap-3 text-center ">
                  <CreateBanner setReload={setReload} />
                </div>
              </div>
              <hr />

              {
                <table className="w-full table-auto">
                  <thead className=" bg-blue-950 text-white">
                    <tr className="">
                      <th className="px-4 py-2">No</th>
                      <th className="px-4 py-2 text-left">Title</th>
                      <th className="px-4 py-2">Button</th>
                      <th className="px-4 py-2">Action</th>
                    </tr>
                  </thead>

                  <tbody className="border text-center">
                    {banner?.length > 0
                      ? banner?.map((blog, index) => (
                          <SingleBanner
                            key={index}
                            index={index}
                            data={blog}
                            setReload={setReload}
                          ></SingleBanner>
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
                    dataCount: bannerCount,
                    currentPage,
                    pageLimit,
                    setPageLimit,
                    defaultPageLimit: 10,
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannderTable;
