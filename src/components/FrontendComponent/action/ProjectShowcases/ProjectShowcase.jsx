"use client";

import MaxWidthWrapper from '@/components/custom/MaxWidthWrapper';
import PageBanner from '@/components/shared/PageBanner/PageBanner';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import Link from 'next/link';

import {
    Card
} from "@/components/ui/card"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
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

                <div className='mb-10' >
                    <Tabs defaultValue="Construction" className="">
                        <TabsList className="grid w-3xl grid-cols-4 ">
                            <TabsTrigger value="Construction">Construction</TabsTrigger>
                            <TabsTrigger value="Commercial">Commercial</TabsTrigger>
                            <TabsTrigger value="Medical">Medical</TabsTrigger>
                            <TabsTrigger value="Roads">Roads</TabsTrigger>
                        </TabsList>
                        <TabsContent value="Construction">
                            <Card className="relative max-w-sm bg-white shadow-lg rounded overflow-hidden group">
                                <div className="relative w-full aspect-square">
                                    <Image
                                        src="https://i.postimg.cc/x8KzVmCV/Frame-76592.png"
                                        alt="Architcture"
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
                                        <Link href="#" className="">
                                            <p className="text-white font-semibold py-2 px-4 border-2 border-white rounded-full hover:bg-black hover:text-white transition transform duration-700 group-hover:-translate-y-6">
                                                commercial
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                        </TabsContent>
                        <TabsContent value="Commercial">
                            <Card className="relative max-w-sm bg-white shadow-lg rounded overflow-hidden group">
                                <div className="relative w-full aspect-square">
                                    <Image
                                        src="https://i.postimg.cc/MT035qf6/Frame-76593.png"
                                        alt="Architcture"
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
                                        <Link href="#" className="">
                                            <p className="text-white font-semibold py-2 px-4 border-2 border-white rounded-full hover:bg-black hover:text-white transition transform duration-700 group-hover:-translate-y-6">
                                                commercial
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                        </TabsContent>
                        <TabsContent value="Medical">
                            <Card className="relative max-w-sm bg-white shadow-lg rounded overflow-hidden group">
                                <div className="relative w-full aspect-square">
                                    <Image
                                        src="https://i.postimg.cc/NMrrTkFm/Frame-76596.png"
                                        alt="Medical"
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
                                        <Link href="#" className="">
                                            <p className="text-white font-semibold py-2 px-4 border-2 border-white rounded-full hover:bg-black hover:text-white transition transform duration-700 group-hover:-translate-y-6">
                                                Medical
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                        </TabsContent>
                        <TabsContent value="Roads">
                            <Card className="relative max-w-sm bg-white shadow-lg rounded overflow-hidden group">
                                <div className="relative w-full aspect-square">
                                    <Image
                                        src="https://i.postimg.cc/MT035qf6/Frame-76593.png"
                                        alt="Roads"
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
                                        <Link href="#" className="">
                                            <p className="text-white font-semibold py-2 px-4 border-2 border-white rounded-full hover:bg-black hover:text-white transition transform duration-700 group-hover:-translate-y-6">
                                                Roads
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
