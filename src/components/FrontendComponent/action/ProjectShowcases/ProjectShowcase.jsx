"use client";

import MaxWidthWrapper from '@/components/custom/MaxWidthWrapper';
import PageBanner from '@/components/shared/PageBanner/PageBanner';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import Link from 'next/link';
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from 'react';
import Image from 'next/image';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { customLoader } from '@/utils/customLoader';

const ProjectShowcases = () => {
    const [loading, setLoading] = useState(true);

    return (
        <div>
            <PageBanner
                title="Project Showcase"
                banner="https://i.postimg.cc/15chdz9x/Frame-76591.png"
                description={(
                    <Breadcrumb className="flex justify-center mt-5">
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
                    </Breadcrumb>
                )}
            />

            <MaxWidthWrapper>
                <div className="relative z-10 text-center mt-6 mb-8 py-12">
                    <div className="absolute inset-0 flex justify-center items-center z-0 -mt-24">
                        <p className="text-8xl font-bold text-gray-300 opacity-30">Showcase</p>
                    </div>
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

                {/* Tabs Section */}
                <div className='mb-10 flex justify-center'>
                    <Tabs defaultValue="Construction" className="w-full">
                        {/* Rounded TabsList */}
                        <TabsList className="flex justify-center rounded-full bg-gray-100 border p-2 py-6 gap-6 max-w-xl mx-auto">
                            <TabsTrigger value="Construction" className="rounded-full px-6 py-2 text-sm font-semibold focus:outline-none transition duration-300 ease-in-out hover:bg-orange-200 data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                                All Projects
                            </TabsTrigger>
                            <TabsTrigger value="Commercial" className="rounded-full px-6 py-2 text-sm font-semibold focus:outline-none transition duration-300 ease-in-out hover:bg-orange-200 data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                                Commercial
                            </TabsTrigger>
                            <TabsTrigger value="Medical" className="rounded-full px-6 py-2 text-sm font-semibold focus:outline-none transition duration-300 ease-in-out hover:bg-orange-200 data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                                New Build
                            </TabsTrigger>
                            <TabsTrigger value="Roads" className="rounded-full px-6 py-2 text-sm font-semibold focus:outline-none transition duration-300 ease-in-out hover:bg-orange-200 data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                                Renovation
                            </TabsTrigger>
                        </TabsList>

                        {/* Content for All Projects */}
                        <TabsContent value="Construction">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                                {/* Construction (All Projects) Card */}
                                <Card className="relative w-full bg-white shadow-lg rounded overflow-hidden group">
                                    <div className="relative w-full aspect-square">
                                        <Image
                                            src="https://i.postimg.cc/x8KzVmCV/Frame-76592.png"
                                            alt="Architecture"
                                            layout="fill"
                                            objectFit="cover"
                                            loader={customLoader}
                                            className="transition-opacity duration-300 group-hover:opacity-80"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50 flex flex-col justify-end items-start p-4">
                                            <h2 className="text-white text-xl font-semibold flex items-center transition-transform duration-700 group-hover:-translate-y-6">
                                                Architecture & builders
                                                <AiOutlineArrowRight className="ml-2 h-6 w-6 text-white" />
                                            </h2>
                                            <Link href="#">
                                                <p className="text-white font-semibold py-2 px-4 border-2 border-white rounded-full hover:bg-black hover:text-white transition transform duration-700 group-hover:-translate-y-6">
                                                    commercial
                                                </p>
                                            </Link>
                                        </div>
                                    </div>
                                </Card>

                                {/* Commercial Card */}
                                <Card className="relative w-full bg-white shadow-lg rounded overflow-hidden group">
                                    <div className="relative w-full aspect-square">
                                        <Image
                                            src="https://i.postimg.cc/QdTygxVX/Frame-1.png"
                                            alt="Commercial"
                                            layout="fill"
                                            objectFit="cover"
                                            loader={customLoader}
                                            className="transition-opacity duration-300 group-hover:opacity-80"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50 flex flex-col justify-end items-start p-4">
                                            <h2 className="text-white text-xl font-semibold flex items-center transition-transform duration-700 group-hover:-translate-y-6">
                                                Commercial & Industry
                                                <AiOutlineArrowRight className="ml-2 h-6 w-6 text-white" />
                                            </h2>
                                            <Link href="#">
                                                <p className="text-white font-semibold py-2 px-4 border-2 border-white rounded-full hover:bg-black hover:text-white transition transform duration-700 group-hover:-translate-y-6">
                                                    commercial
                                                </p>
                                            </Link>
                                        </div>
                                    </div>
                                </Card>

                                {/* Medical Card */}
                                <Card className="relative w-full bg-white shadow-lg rounded overflow-hidden group">
                                    <div className="relative w-full aspect-square">
                                        <Image
                                            src="https://i.postimg.cc/CMr2S7YG/Frame-2.png"
                                            alt="Medical"
                                            layout="fill"
                                            objectFit="cover"
                                            loader={customLoader}
                                            className="transition-opacity duration-300 group-hover:opacity-80"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50 flex flex-col justify-end items-start p-4">
                                            <h2 className="text-white text-xl font-semibold flex items-center transition-transform duration-700 group-hover:-translate-y-6">
                                                Medical Facilities
                                                <AiOutlineArrowRight className="ml-2 h-6 w-6 text-white" />
                                            </h2>
                                            <Link href="#">
                                                <p className="text-white font-semibold py-2 px-4 border-2 border-white rounded-full hover:bg-black hover:text-white transition transform duration-700 group-hover:-translate-y-6">
                                                    medical
                                                </p>
                                            </Link>
                                        </div>
                                    </div>
                                </Card>

                                {/* Roads Card */}
                                <Card className="relative w-full bg-white shadow-lg rounded overflow-hidden group">
                                    <div className="relative w-full aspect-square">
                                        <Image
                                            src="https://i.postimg.cc/yd9bYVVZ/Frame-3.png"
                                            alt="Roads"
                                            layout="fill"
                                            objectFit="cover"
                                            loader={customLoader}
                                            className="transition-opacity duration-300 group-hover:opacity-80"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50 flex flex-col justify-end items-start p-4">
                                            <h2 className="text-white text-xl font-semibold flex items-center transition-transform duration-700 group-hover:-translate-y-6">
                                                Road Construction
                                                <AiOutlineArrowRight className="ml-2 h-6 w-6 text-white" />
                                            </h2>
                                            <Link href="#">
                                                <p className="text-white font-semibold py-2 px-4 border-2 border-white rounded-full hover:bg-black hover:text-white transition transform duration-700 group-hover:-translate-y-6">
                                                    roads
                                                </p>
                                            </Link>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </TabsContent>

                        {/* Content for Commercial */}
                        <TabsContent value="Commercial">
                            {/* Commercial Card */}
                            <div className="grid grid-cols-1">
                                <Card className="relative w-full max-w-sm mx-auto bg-white shadow-lg rounded overflow-hidden group">
                                    <div className="relative w-full aspect-square">
                                        <Image
                                            src="https://i.postimg.cc/QdTygxVX/Frame-1.png"
                                            alt="Commercial"
                                            layout="fill"
                                            objectFit="cover"
                                            loader={customLoader}
                                            className="transition-opacity duration-300 group-hover:opacity-80"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50 flex flex-col justify-end items-start p-4">
                                            <h2 className="text-white text-xl font-semibold flex items-center transition-transform duration-700 group-hover:-translate-y-6">
                                                Commercial & Industry
                                                <AiOutlineArrowRight className="ml-2 h-6 w-6 text-white" />
                                            </h2>
                                            <Link href="#">
                                                <p className="text-white font-semibold py-2 px-4 border-2 border-white rounded-full hover:bg-black hover:text-white transition transform duration-700 group-hover:-translate-y-6">
                                                    commercial
                                                </p>
                                            </Link>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </TabsContent>

                        {/* Content for Medical */}
                        <TabsContent value="Medical">
                            {/* Medical Card */}
                            <Card className="relative w-full max-w-sm mx-auto bg-white shadow-lg rounded overflow-hidden group">
                                <div className="relative w-full aspect-square">
                                    <Image
                                        src="https://i.postimg.cc/CMr2S7YG/Frame-2.png"
                                        alt="Medical"
                                        layout="fill"
                                        objectFit="cover"
                                        loader={customLoader}
                                        className="transition-opacity duration-300 group-hover:opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50 flex flex-col justify-end items-start p-4">
                                        <h2 className="text-white text-xl font-semibold flex items-center transition-transform duration-700 group-hover:-translate-y-6">
                                            Medical Facilities
                                            <AiOutlineArrowRight className="ml-2 h-6 w-6 text-white" />
                                        </h2>
                                        <Link href="#">
                                            <p className="text-white font-semibold py-2 px-4 border-2 border-white rounded-full hover:bg-black hover:text-white transition transform duration-700 group-hover:-translate-y-6">
                                                medical
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                        </TabsContent>

                        {/* Content for Roads */}
                        <TabsContent value="Roads">
                            {/* Roads Card */}
                            <Card className="relative w-full max-w-sm mx-auto bg-white shadow-lg rounded overflow-hidden group">
                                <div className="relative w-full aspect-square">
                                    <Image
                                        src="https://i.postimg.cc/yd9bYVVZ/Frame-3.png"
                                        alt="Roads"
                                        layout="fill"
                                        objectFit="cover"
                                        loader={customLoader}
                                        className="transition-opacity duration-300 group-hover:opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50 flex flex-col justify-end items-start p-4">
                                        <h2 className="text-white text-xl font-semibold flex items-center transition-transform duration-700 group-hover:-translate-y-6">
                                            Road Construction
                                            <AiOutlineArrowRight className="ml-2 h-6 w-6 text-white" />
                                        </h2>
                                        <Link href="#">
                                            <p className="text-white font-semibold py-2 px-4 border-2 border-white rounded-full hover:bg-black hover:text-white transition transform duration-700 group-hover:-translate-y-6">
                                                roads
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>


            </MaxWidthWrapper>
        </div>
    );
};

export default ProjectShowcases;
