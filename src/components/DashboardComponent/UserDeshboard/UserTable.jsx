import useAllClients from "@/hooks/useAllClients";
import { useSearchParams } from "next/navigation";
import { AiFillDatabase } from "react-icons/ai";

const UserTable = () => {
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(searchParams.get("page") || 1);
  const [pageLimit, setPageLimit] = useState(searchParams.get("limit") || 10);
  const { user, reload, setReload, userCount } = useAllClients();

  const totalPage = Math.ceil(blogsCount / pageLimit);

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
            {!loading && (
              <div className="mt-5">
                <PaginationRaw
                  data={{
                    setCurrentPage,
                    dataCount: blogsCount,
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

export default UserTable;
