"use client"

import MaxWidthWrapper from '@/components/custom/MaxWidthWrapper';
import PageBanner from '@/components/shared/PageBanner/PageBanner';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import Link from 'next/link';

const ProjectShowcases = () => {


    return (
        <div>

            <div>
                <PageBanner title="Project Showcase" banner="https://i.postimg.cc/15chdz9x/Frame-76591.png" description={<> <Breadcrumb className="flex justify-center mt-5">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link className='text-white' href="/">Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-white" />
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link className='text-white' href="/projectShowcase">Project Showcase</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb></>} />
            </div>

            <MaxWidthWrapper>
                {/* Section Heading with background */}
                <div className="relative z-10 text-center mt-6 mb-8 py-12">
                    {/* Background with "success" watermark behind the heading only */}
                    <div className="absolute inset-0 flex justify-center items-center z-0 -mt-24"> {/* Adjusted margin to -28 */}
                        <p className="text-8xl font-bold text-gray-300 opacity-30">Showcase</p>
                    </div>

                    {/* Section Heading */}
                    <div className="relative z-10 mt-4 ">
                        <p className="text-base text-orange-500">Show Our Projects -</p>
                        <h2 className="lg:text-3xl text-xl font-bold mt-2 text-black inline-block relative text-center">
                            PROJECT
                            <span className="relative inline-block ml-2">
                                <span className="font-bold text-black">SHOWCASE</span>
                                <span className="block h-1 w-full bg-orange-500 absolute bottom-0 left-0"></span>
                            </span>
                        </h2>
                    </div>
                </div>
            </MaxWidthWrapper>

        </div>
    );
};

export default ProjectShowcases;