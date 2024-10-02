import MaxWidthWrapper from '@/components/custom/MaxWidthWrapper';
import PageBanner from '@/components/shared/PageBanner/PageBanner';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';


const SuccessStories = () => {
    return (
        <div>
            <div>
                {/* <PageBanner
                    title={"Our Success"}
                    description={
                        "At DCE Engineering, we deliver innovative, sustainable construction solutions with precision and excellence"
                    }
                    banner={"https://i.postimg.cc/mksvNfyj/Frame-76521-1.png"}
                ></PageBanner>  */}


                <PageBanner title="Our Success" banner="https://i.postimg.cc/mksvNfyj/Frame-76521-1.png" description={<> <Breadcrumb className="flex justify-center mt-5">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link className='text-white' href="/">Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-white" />
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link className='text-white' href="/successStory">Our Success</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb></>} />
            </div>


            <MaxWidthWrapper>
                <div className="w-full py-8 relative">
                    {/* Section Heading with background */}
                    <div className="relative z-10 text-center mb-8 py-12">
                        {/* Background with "success" watermark behind the heading only */}
                        <div className="absolute inset-0 flex justify-center items-center z-0 -mt-28"> {/* Adjusted margin to -28 */}
                            <p className="text-8xl font-bold text-gray-300 opacity-30">Success</p>
                        </div>

                        {/* Section Heading */}
                        <div className="relative z-10 mt-4 ">
                            <p className="text-base text-orange-500">Our Success -</p>
                            <h2 className="lg:text-3xl text-xl font-bold mt-2 text-black inline-block relative text-center">
                                We Are Happy to Share Our <br />
                                <span className="relative inline-block">
                                    <span className="font-bold text-black">Success Story</span>
                                    <span className="block h-1 w-full bg-orange-500 absolute bottom-0 left-0"></span>
                                </span>
                            </h2>
                        </div>
                    </div>

                    {/* Main Section  */}
                    {/* section one */}
                    <div className="flex flex-wrap w-full relative z-10 bg-white">
                        {/* Image Div */}
                        <div className="w-full md:w-3/5 p-4 flex flex-col">
                            <div className="relative h-full border-[6px] border-orange-500 p-2">
                                <Image
                                    src="https://i.postimg.cc/W4SNxdzd/Frame-76522.png"
                                    alt="Client House"
                                    width={800}
                                    height={600}
                                    className="shadow-md h-full object-cover"
                                />
                            </div>

                            {/* Location and Handover Date */}
                            <div className="w-full  flex lg:flex-row flex-col justify-between text-start bg-white bg-opacity-80 p-2 mt-2">
                                <p className="text-sm font-semibold flex items-center">
                                    <FaMapMarkerAlt className="mr-2 text-orange-500" />
                                    Location: Example Location
                                </p>
                                <p className="text-sm font-semibold flex items-center mt-1">
                                    <FaCalendarAlt className="mr-2 text-orange-500" />
                                    Handover: 12th September 2024
                                </p>
                            </div>
                        </div>

                        {/* Text Content Div */}
                        <div className="w-full md:w-2/5 p-4">
                            <p className="text-orange-500 text-base">Happy Client -</p>
                            <h2 className="text-xl font-semibold text-black mt-4">Ana Frank</h2>
                            <h3 className="text-sm font-medium text-gray-600">Homeowner</h3>
                            <h1 className="text-base font-semibold text-black mt-2">Project: Creative living house</h1>
                            <h4 className="mt-4 text-black text-sm font-semibold font inline-block border-b-2 border-orange-500">
                                Their Story
                            </h4>
                            <p className="mt-2 text-gray-600 leading-relaxed">
                                Working with DCL Engineering Limited was a seamless experience. They took my ideas and made them a reality, ensuring
                                every detail was perfect. Their expertise and commitment made building my home a dream come true. I was particularly
                                impressed by their innovative approach and dedication to customer satisfaction.
                                <br /> <br />
                                DCL Engineering Limited not only delivered the project on time but also exceeded my expectations in quality. The
                                team was professional and transparent throughout the process.
                                DCL Engineering Limited not only delivered the project on time but also exceeded my expectations in quality. The
                                team was professional and transparent throughout the process.
                                <br /> <br />
                                DCL Engineering Limited not only delivered the project on time but also exceeded my expectations in quality. The
                                team was professional and transparent throughout the process.
                            </p>
                            <p className='text-base font-semibold italic mt-6'>Thank you so much DCL Engineering team</p>
                        </div>
                    </div>

                    {/* section two */}
                    <div className="flex flex-wrap w-full relative z-10 bg-white ">
                        {/* Image Div */}
                        <div className="w-full md:w-3/5 p-4 flex flex-col lg:order-last">
                            <div className="relative h-full border-[6px] border-orange-500 p-2">
                                <Image
                                    src="https://i.postimg.cc/Hn0pmz99/Frame-76522-1.png"
                                    alt="Client House"
                                    width={800}
                                    height={600}
                                    className="shadow-md h-full object-cover"
                                />
                            </div>

                            {/* Location and Handover Date */}
                            <div className="w-full  flex lg:flex-row flex-col justify-between text-start bg-white bg-opacity-80 p-2 mt-2">
                                <p className="text-sm font-semibold flex items-center">
                                    <FaMapMarkerAlt className="mr-2 text-orange-500" />
                                    Location: Example Location
                                </p>
                                <p className="text-sm font-semibold flex items-center mt-1">
                                    <FaCalendarAlt className="mr-2 text-orange-500" />
                                    Handover: 12th September 2024
                                </p>
                            </div>
                        </div>

                        {/* Text Content Div */}
                        <div className="w-full md:w-2/5 p-4">
                            <p className="text-orange-500 text-base">Happy Client -</p>
                            <h2 className="text-xl font-semibold text-black mt-4">Ana Frank</h2>
                            <h3 className="text-sm font-medium text-gray-600">Homeowner</h3>
                            <h1 className="text-base font-semibold text-black mt-2">Project: Creative living house</h1>
                            <h4 className="mt-4 text-black text-sm font-semibold font inline-block border-b-2 border-orange-500">
                                Their Story
                            </h4>
                            <p className="mt-2 text-gray-600 leading-relaxed">
                                Working with DCL Engineering Limited was a seamless experience. They took my ideas and made them a reality, ensuring
                                every detail was perfect. Their expertise and commitment made building my home a dream come true. I was particularly
                                impressed by their innovative approach and dedication to customer satisfaction.
                                <br /> <br />
                                DCL Engineering Limited not only delivered the project on time but also exceeded my expectations in quality. The
                                team was professional and transparent throughout the process.
                                DCL Engineering Limited not only delivered the project on time but also exceeded my expectations in quality. The
                                team was professional and transparent throughout the process.
                                <br /> <br />
                                DCL Engineering Limited not only delivered the project on time but also exceeded my expectations in quality. The
                                team was professional and transparent throughout the process.
                            </p>
                            <p className='text-base font-semibold italic mt-6'>Thank you so much DCL Engineering team</p>
                        </div>
                    </div>

                    {/* section three */}
                    <div className="flex flex-wrap w-full relative z-10 bg-white">
                        {/* Image Div */}
                        <div className="w-full md:w-3/5 p-4 flex flex-col">
                            <div className="relative h-full border-[6px] border-orange-500 p-2">
                                <Image
                                    src="https://i.postimg.cc/tJpK3jFF/Frame-76522.png"
                                    alt="Client House"
                                    width={800}
                                    height={600}
                                    className="shadow-md h-full object-cover"
                                />
                            </div>

                            {/* Location and Handover Date */}
                            <div className="w-full  flex lg:flex-row flex-col justify-between text-start bg-white bg-opacity-80 p-2 mt-2">
                                <p className="text-sm font-semibold flex items-center">
                                    <FaMapMarkerAlt className="mr-2 text-orange-500" />
                                    Location: Example Location
                                </p>
                                <p className="text-sm font-semibold flex items-center mt-1">
                                    <FaCalendarAlt className="mr-2 text-orange-500" />
                                    Handover: 12th September 2024
                                </p>
                            </div>
                        </div>

                        {/* Text Content Div */}
                        <div className="w-full md:w-2/5 p-4">
                            <p className="text-orange-500 text-base">Happy Client -</p>
                            <h2 className="text-xl font-semibold text-black mt-4">Ana Frank</h2>
                            <h3 className="text-sm font-medium text-gray-600">Homeowner</h3>
                            <h1 className="text-base font-semibold text-black mt-2">Project: Creative living house</h1>
                            <h4 className="mt-4 text-black text-sm font-semibold font inline-block border-b-2 border-orange-500">
                                Their Story
                            </h4>
                            <p className="mt-2 text-gray-600 leading-relaxed">
                                Working with DCL Engineering Limited was a seamless experience. They took my ideas and made them a reality, ensuring
                                every detail was perfect. Their expertise and commitment made building my home a dream come true. I was particularly
                                impressed by their innovative approach and dedication to customer satisfaction.
                                <br /> <br />
                                DCL Engineering Limited not only delivered the project on time but also exceeded my expectations in quality. The
                                team was professional and transparent throughout the process.
                                DCL Engineering Limited not only delivered the project on time but also exceeded my expectations in quality. The
                                team was professional and transparent throughout the process.
                                <br /> <br />
                                DCL Engineering Limited not only delivered the project on time but also exceeded my expectations in quality. The
                                team was professional and transparent throughout the process.
                            </p>
                            <p className='text-base font-semibold italic mt-6'>Thank you so much DCL Engineering team</p>
                        </div>
                    </div>
                    {/* section four */}
                    <div className="flex flex-wrap w-full relative z-10 bg-white">
                        {/* Image Div */}
                        <div className="w-full md:w-3/5 p-4 flex flex-col">
                            <div className="relative h-full border-[6px] border-orange-500 p-2">
                                <Image
                                    src="https://i.postimg.cc/nrFWs1tk/Frame-76522-1.png"
                                    alt="Client House"
                                    width={800}
                                    height={600}
                                    className="shadow-md h-full object-cover"
                                />
                            </div>

                            {/* Location and Handover Date */}
                            <div className="w-full  flex lg:flex-row flex-col justify-between text-start bg-white bg-opacity-80 p-2 mt-2">
                                <p className="text-sm font-semibold flex items-center">
                                    <FaMapMarkerAlt className="mr-2 text-orange-500" />
                                    Location: Example Location
                                </p>
                                <p className="text-sm font-semibold flex items-center mt-1">
                                    <FaCalendarAlt className="mr-2 text-orange-500" />
                                    Handover: 12th September 2024
                                </p>
                            </div>
                        </div>

                        {/* Text Content Div */}
                        <div className="w-full md:w-2/5 p-4">
                            <p className="text-orange-500 text-base">Happy Client -</p>
                            <h2 className="text-xl font-semibold text-black mt-4">Ana Frank</h2>
                            <h3 className="text-sm font-medium text-gray-600">Homeowner</h3>
                            <h1 className="text-base font-semibold text-black mt-2">Project: Creative living house</h1>
                            <h4 className="mt-4 text-black text-sm font-semibold font inline-block border-b-2 border-orange-500">
                                Their Story
                            </h4>
                            <p className="mt-2 text-gray-600 leading-relaxed">
                                Working with DCL Engineering Limited was a seamless experience. They took my ideas and made them a reality, ensuring
                                every detail was perfect. Their expertise and commitment made building my home a dream come true. I was particularly
                                impressed by their innovative approach and dedication to customer satisfaction.
                                <br /> <br />
                                DCL Engineering Limited not only delivered the project on time but also exceeded my expectations in quality. The
                                team was professional and transparent throughout the process.
                                DCL Engineering Limited not only delivered the project on time but also exceeded my expectations in quality. The
                                team was professional and transparent throughout the process.
                                <br /> <br />
                                DCL Engineering Limited not only delivered the project on time but also exceeded my expectations in quality. The
                                team was professional and transparent throughout the process.
                            </p>
                            <p className='text-base font-semibold italic mt-6'>Thank you so much DCL Engineering team</p>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    );
};

export default SuccessStories;