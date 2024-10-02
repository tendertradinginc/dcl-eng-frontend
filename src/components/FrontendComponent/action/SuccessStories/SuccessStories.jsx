"use client"

import MaxWidthWrapper from '@/components/custom/MaxWidthWrapper';
import PageBanner from '@/components/shared/PageBanner/PageBanner';
import PaginationBlog from '@/components/shared/pagination/PaginationShadcn';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import Link from 'next/link';
import SuccessStoryCard from './SuccessStoryCard';
import { CgSpinnerAlt } from 'react-icons/cg';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const SuccessStories = () => {

    const searchParams = useSearchParams();
    const [successStory, setSuccessStory] = useState([]);
    const [page, setPage] = useState(searchParams.get("page") || 1);
    const [limit, setLimit] = useState(searchParams.get("limit") || 5);
    const [totalSuccessStory, setTotalSuccessStory] = useState(0);
    const [reload, setReload] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSuccessStory = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `http://localhost:5000/api/v1/successStory?page=${page}&limit=${limit}`
                );
                const data = await response.json();

                setSuccessStory(data?.data.result);
                setTotalSuccessStory(data?.data?.total);
            } catch (error) {
                console.error("Error fetching :", error);
            } finally {
                setLoading(false);
            }
        };
        fetchSuccessStory();
    }, [reload, page, limit]);

    const totalPage = Math.ceil(totalSuccessStory / limit);

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
                    <div className="flex flex-col">
                        {loading ? (
                            <div className="flex min-h-[50vh] items-center justify-center">
                                <span className="animate-spin text-si-primary">
                                    <CgSpinnerAlt className="h-10 w-10" />
                                </span>
                            </div>
                        )
                            : successStory.length > 0 ? (
                                successStory?.map((story, index) => (
                                    <SuccessStoryCard
                                        key={successStory?._id}
                                        index={index}
                                        successStoryData={story}
                                        setReload={setReload}
                                    />
                                )))
                                : (
                                    <p className="text center">No Success Story Available.</p>
                                )}
                    </div>
                    {!loading && (
                        <div className="mt-8">
                            <PaginationBlog data={{ page, limit, totalPage }} />
                        </div>
                    )}
                </div>
            </MaxWidthWrapper>
        </div>
    );
};

export default SuccessStories;