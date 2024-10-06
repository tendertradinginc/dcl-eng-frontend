import MaxWidthWrapper from "@/components/custom/MaxWidthWrapper";
import PageBanner from "@/components/shared/PageBanner/PageBanner";
import SectionHeadingCenter from "@/components/shared/SectionHeading/SectionHeadingCenter";
import { Card, CardContent } from "@/components/ui/card";
import { customLoader } from "@/utils/customLoader";
import Image from "next/image";
import { MdOutlineCameraAlt } from "react-icons/md";

const page = async () => {


    // const decodedCategory = decodeURIComponent(params.category);

    const breadcrumbs = [
        {
            label: "Home",
            url: "/",
        },
        {
            label: "Project",
            url: "/projects",
        },
        // {
        //     label: decodedCategory,
        //     url: `/projects/${decodedCategory}`,
        // },
    ];



    const projectData = {
        completionDate: "May 2019",
        clients: "Quantum LTD.",
        location: "Dhanmondi 32, Dhaka, Bangladesh",
        category: "Commercial",
        budget: "$16 Million",
    };

    const captureDateTime = "22/10/2023";
    const captureTime = "10:15 AM";

    return (
        <div className="mt-16">
            <PageBanner title="OUR SUCCESS" banner="https://i.postimg.cc/cCj8fKHH/Frame-3.png" breadcrumbs={breadcrumbs} />
            <div className="my-20 pt-10">

                <SectionHeadingCenter
                    className=""
                    subTitle={<p className="text-sm sm:text-lg ">Project Name</p>}
                    title={
                        <div className="text-center">
                            <h2 className="text-xl lg:text-4xl">
                                ROAD CONSTRUCTION AND HIGHWAY
                            </h2>
                        </div>
                    }
                />


                <MaxWidthWrapper className="min-h-[100vh]">
                    <div className="text-justify mt-28">

                        <h1 className="text-2xl font-semibold text-black mb-8"> Road Construction and Highway Development: Navigating Complex Infrastructure</h1>
                        <p>
                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <br />
                        <p>
                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <br />
                        <br />

                        <Image
                            src="https://i.postimg.cc/25r6gdLv/Frame-76573.png"
                            alt="project details"
                            loader={customLoader}
                            width={600}
                            height={400}
                            className="shadow-md w-full h-full object-cover"
                        />

                        <div>
                            <div className="rounded-none mt-10 border-0 ">
                                <CardContent className="space-y-4 p-0">
                                    <div className="flex justify-start border-b-[2px] border-[#8b8c9e] gap-x-[28%] font-medium py-2">
                                        <span className="text-gray-500 pl-2 font-medium">Completion Date</span>
                                        <span className="font-semibold">{projectData.completionDate}</span>
                                    </div>
                                    <div className="flex justify-start border-b-[2px] border-[#8b8c9e] gap-x-[33.3%] font-medium py-2">
                                        <span className="text-gray-500 pl-2 font-medium">Clients</span>
                                        <span className="font-semibold">{projectData.clients}</span>
                                    </div>
                                    <div className="flex justify-start border-b-[2px] border-[#8b8c9e] gap-x-[32.5%] font-medium py-2">
                                        <span className="text-gray-500 pl-2 font-medium">Location</span>
                                        <span className="font-semibold">{projectData.location}</span>
                                    </div>
                                    <div className="flex justify-start border-b-[2px] border-[#8b8c9e] gap-x-[32.1%] font-medium py-2">
                                        <span className="text-gray-500 pl-2 font-medium">Category</span>
                                        <span className="font-semibold">{projectData.category}</span>
                                    </div>
                                    <div className="flex justify-start border-b-[2px] border-[#8b8c9e] gap-x-[33.3%] font-medium py-2">
                                        <span className="text-gray-500 pl-2 font-medium">Budget</span>
                                        <span className="font-semibold">{projectData.budget}</span>
                                    </div>
                                </CardContent>
                            </div>
                            <div className="mt-10">
                                <p>
                                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                                <br />
                                <p>

                                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                            </div>

                        </div>
                        <div>
                            <div className="grid grid-cols-2 gap-10 mt-10">
                                <div className="">

                                    <Image
                                        src="https://i.postimg.cc/GhTRcXWY/Frame-76582.png"
                                        alt="project details"
                                        loader={customLoader}
                                        width={600}
                                        height={400}
                                        className="shadow-md w-full h-full object-cover"
                                    />

                                    {/* Capture date and time with camera icon */}
                                    <div className="flex items-center space-x-2 mt-2  text-black ">
                                        <MdOutlineCameraAlt className="text-lg font-semibold text-[#F78C40]" />
                                        <span>Photo Capture: <span className="font-semibold">{captureDateTime}</span>.
                                            Time:<span className="font-semibold">{captureTime}</span></span>
                                    </div>
                                </div>
                                <div className="">

                                    <Image
                                        src="https://i.postimg.cc/hvFkhnWd/Frame-76586.png"
                                        alt="project details"
                                        loader={customLoader}
                                        width={600}
                                        height={400}
                                        className="shadow-md w-full h-full object-cover"
                                    />

                                    {/* Capture date and time with camera icon */}
                                    <div className="flex items-center space-x-2 mt-2  text-black ">
                                        <MdOutlineCameraAlt className="text-lg font-semibold text-[#F78C40]" />
                                        <span>Photo Capture: <span className="font-semibold">{captureDateTime}</span>.
                                            Time:<span className="font-semibold">{captureTime}</span></span>
                                    </div>
                                </div>
                                <div className="">

                                    <Image
                                        src="https://i.postimg.cc/NF1WHnBP/Frame-76588.png"
                                        alt="project details"
                                        loader={customLoader}
                                        width={600}
                                        height={400}
                                        className="shadow-md w-full h-full object-cover"
                                    />

                                    {/* Capture date and time with camera icon */}
                                    <div className="flex items-center space-x-2 mt-2  text-black ">
                                        <MdOutlineCameraAlt className="text-lg font-semibold text-[#F78C40]" />
                                        <span>Photo Capture: <span className="font-semibold">{captureDateTime}</span>.
                                            Time:<span className="font-semibold">{captureTime}</span></span>
                                    </div>
                                </div>
                                <div className="">

                                    <Image
                                        src="https://i.postimg.cc/ZKHQzpR3/Frame-76590.png"
                                        alt="project details"
                                        loader={customLoader}
                                        width={600}
                                        height={400}
                                        className="shadow-md w-full h-full object-cover"
                                    />

                                    {/* Capture date and time with camera icon */}
                                    <div className="flex items-center space-x-2 mt-2  text-black ">
                                        <MdOutlineCameraAlt className="text-lg font-semibold text-[#F78C40]" />
                                        <span>Photo Capture: <span className="font-semibold">{captureDateTime}</span>.
                                            Time:<span className="font-semibold">{captureTime}</span></span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-20">
                                <h1 className="font-semibold text-gray-700 text-xl">

                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </h1>
                                <br />
                                <div className="text-[#636363]">
                                    <p>

                                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    </p>
                                    <br />
                                    <p>

                                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    </p>
                                    <br />
                                    <p>

                                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>


                </MaxWidthWrapper>
            </div>

        </div>
    );
};

export default page;