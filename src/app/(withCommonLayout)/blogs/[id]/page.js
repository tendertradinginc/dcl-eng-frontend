
import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import { customLoader } from "@/utils/customLoader";
import Image from "next/image";

const page = async ({ params }) => {
  const res = await fetch(
    `http://localhost:5000/api/v1/blogs/${params?.id}`,
    {
      cache: "no-store",
    },
  );
  const data = await res.json();
  const blog = data?.data;

  return (
    <div>
      <title>{blog?.title}</title>
      <meta
        name="description"
        content={`${blog.description.slice(0, 100)} ...`}
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <meta property="og:title" content={blog?.title} />
      <meta
        property="og:description"
        content={`${blog.description.slice(0, 100)} ...`}
      />
      <meta property="og:image" content={blog.image} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`https://www.twintradeint.com/blog/${params.id}`}
      />
      <MaxWidthWrapper className="mt-16 p-5 py-16 md:p-20">
        <div className="mx-auto min-h-[80vh]">
          <div className="pb-10">
            <Image
              loader={customLoader}
              src={blog?.image}
              alt="Blog Details Thumbnail"
              height={500}
              width={500}
              className="float-left mb-5 mr-10 w-full shadow-2xl lg:w-1/2"
            />
            <div className="flex-1">
              <h2
                style={{ lineHeight: "1.2" }}
                className="text-3xl font-semibold leading-normal text-[#0A2F4D] md:text-4xl"
              >
                {blog?.title}
              </h2>

              <div className="mt-5">
                <p className="whitespace-break-spaces text-[#454545] text-justify text-lg font-medium">
                  {blog?.description}
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default page;