import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";

import { customLoader } from "@/utils/customLoader";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
  const res = await fetch("http://localhost:5000/api/v1/blogs", {
    cache: "no-store",
  });
  const data = await res.json();
  const blogs = data?.data?.allBlogs;

  return (
    <section>
      <div className="min-h-[100vh]">
        <MaxWidthWrapper className="py-10">
          <div className="mt-12 grid grid-cols-1 gap-5 gap-y-20 lg:grid-cols-2">
            <div className="bg-secondary">
              <Image
                loader={customLoader}
                alt="Blog Image 1"
                height={500}
                width={500}
                src={blogs[0]?.image}
                className="w-fit md:w-full"
              />
              <div className="p-3">
                <h1 className="my-4 text-2xl md:text-4xl font-semibold text-[#090909]">
                  {blogs[0]?.title}
                </h1>
                <p className="line-clamp-4 text-justify font-medium text-[#454545] lg:mb-7">
                  {blogs[0]?.description}
                </p>
                <Link href={`/blogs/${blogs[0]._id}`}>
                  {" "}
                  <button className="mt-4 rounded-sm py-2 px-8 font-semibold text-white duration-200 bg-[#0A2F4D]  hover:bg-[#F78C40]">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-y-8">
              {blogs?.slice(1, 4).map((item, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 gap-2 bg-[#166cb315] md:grid-cols-2"
                >
                  <div>
                    <Image
                      loader={customLoader}
                      alt="Blog Image 2"
                      height={500}
                      width={500}
                      src={item?.image}
                      className="h-full w-fit object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h1 className="line-clamp-2 text-2xl font-semibold text-[#090909]">
                      {item?.title}
                    </h1>
                    <p className="my-2 line-clamp-3 text-justify font-medium text-[#454545]">
                      {item?.description}
                    </p>
                    <Link href={`/blogs/${item?._id}`}>
                      {" "}
                      <button className="mt-4 rounded-sm bg-[#0A2F4D]  hover:bg-[#F78C40] py-2 px-8 font-semibold text-white duration-200  ">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-5 gap-y-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
            {blogs?.slice(4, blogs.length).map((item, idx) => (
              <div key={idx} className="bg-secondary">
                <Image
                  loader={customLoader}
                  alt="Blog Image 1"
                  height={500}
                  width={500}
                  src={item?.image}
                  className="h-80 w-fit object-cover md:w-full"
                />
                <div className="p-3">
                  <h1 className="line-clamp-2 p-0 text-2xl font-semibold text-[#090909]">
                    {item?.title}
                  </h1>
                  <p className="my-2 line-clamp-3 text-justify font-medium text-[#454545]">
                    {item?.description}
                  </p>
                  <Link href={`/blogs/${item?._id}`}>
                    {" "}
                    <button className="mt-4 rounded-sm  py-2 px-8 font-semibold text-white duration-200 bg-[#0A2F4D]  hover:bg-[#F78C40]">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default page;
