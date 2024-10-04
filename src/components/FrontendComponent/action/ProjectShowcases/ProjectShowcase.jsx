"use client";

import Link from 'next/link';
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from 'react';
import Image from 'next/image';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { customLoader } from '@/utils/customLoader';
import { MdArrowOutward } from 'react-icons/md';

const ProjectShowcases = () => {
    const [loading, setLoading] = useState(true);



    return (
        <div>

            {/* Tabs Section */}
            <div className='mb-10 flex justify-center'>
                <Tabs defaultValue="Construction" className="w-full">
                    {/* Rounded TabsList */}
                    <TabsList className="grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 rounded-full bg-gray-100 border  gap-4 max-w-2xl h-14 mx-auto">
                        <TabsTrigger value="Construction" className="rounded-full px-3 py-3 text-sm font-semibold focus:outline-none transition duration-300 ease-in-out hover:bg-orange-200 data-[state=active]:bg-[#F78C40] data-[state=active]:text-white">
                            All Projects
                        </TabsTrigger>
                        <TabsTrigger value="Commercial" className="rounded-full px-3 py-3  text-sm font-semibold focus:outline-none transition duration-300 ease-in-out hover:bg-orange-200 data-[state=active]:bg-[#F78C40] data-[state=active]:text-white overflow-hidden">
                            Commercial
                        </TabsTrigger>
                        <TabsTrigger value="Medical" className="rounded-full px-3 py-3  text-sm font-semibold focus:outline-none transition duration-300 ease-in-out hover:bg-orange-200 data-[state=active]:bg-[#F78C40] data-[state=active]:text-white">
                            New Build
                        </TabsTrigger>
                        <TabsTrigger value="Roads" className="rounded-full px-3 py-3 text-sm font-semibold focus:outline-none transition duration-300 ease-in-out hover:bg-orange-200 data-[state=active]:bg-[#F78C40] data-[state=active]:text-white">
                            Renovation
                        </TabsTrigger>
                    </TabsList>


                    {/* Content for All Projects */}
                    <TabsContent value="Construction" className="mt-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {/* Construction (All Projects) Card */}
                            <Card className="relative w-full bg-white shadow-lg overflow-hidden group rounded-none">
                                <div className="relative w-full aspect-square">
                                    <Image
                                        src="https://i.postimg.cc/x8KzVmCV/Frame-76592.png"
                                        alt="Architecture"
                                        layout="fill"
                                        objectFit="cover"
                                        loader={customLoader}
                                        className="transition-opacity duration-300 group-hover:opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50 flex flex-col justify-end items-start p-4 px-10">
                                        <h2 className="text-white text-xl font-semibold flex items-center transition-transform duration-700 group-hover:-translate-y-6 uppercase mb-4">
                                            Architecture & builders
                                            <MdArrowOutward className="lg:ml-10 ml-2 h-6 w-6 text-white" />
                                        </h2>

                                        {/* Hidden by default and shown on hover */}
                                        <h4 className="mb-4 text-white transition-transform duration-700 group-hover:-translate-y-6 hidden group-hover:block">
                                            We maintain this by ensuring transparency and professional conduct in every aspect of our work
                                        </h4>

                                        <Link href="#">
                                            <p className="text-white font-semibold py-2 px-4 border-2 border-white rounded-full hover:bg-black hover:text-white transition-transform duration-700 group-hover:-translate-y-6">
                                                Commercial
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </Card>


                            {/* Commercial Card */}
                            <Card className="relative w-full bg-white shadow-lg overflow-hidden group rounded-none">
                                <div className="relative w-full aspect-square">
                                    <Image
                                        src="https://i.postimg.cc/NjnJbb0N/Frame-76506.png"
                                        alt="Commercial"
                                        layout="fill"
                                        objectFit="cover"
                                        loader={customLoader}
                                        className="transition-opacity duration-300 group-hover:opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50 flex flex-col justify-end items-start p-4">
                                        <h2 className="text-white text-xl font-semibold flex items-center transition-transform duration-700 group-hover:-translate-y-6 uppercase mb-4">
                                            Commercial & Industry
                                            <MdArrowOutward className="lg:ml-10 ml-2 h-6 w-6 text-white" />
                                        </h2>

                                        {/* Hidden by default and shown on hover */}
                                        <h4 className="mb-4 text-white transition-transform duration-700 group-hover:-translate-y-6 hidden group-hover:block">
                                            We maintain this by ensuring transparency and professional conduct in every aspect of our work
                                        </h4>

                                        <Link href="#">
                                            <p className="text-white font-semibold py-2 px-4 border-2 border-white rounded-full hover:bg-black hover:text-white transition transform duration-700 group-hover:-translate-y-6">
                                                commercial
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </Card>

                            {/* Medical Card */}
                            <Card className="relative w-full bg-white shadow-lg  overflow-hidden group rounded-none">
                                <div className="relative w-full aspect-square">
                                    <Image
                                        src="https://i.postimg.cc/Gm3w6Mdd/Frame-76593.png"
                                        alt="Medical"
                                        layout="fill"
                                        objectFit="cover"
                                        loader={customLoader}
                                        className="transition-opacity duration-300 group-hover:opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50 flex flex-col justify-end items-start p-4">
                                        <h2 className="text-white text-xl font-semibold flex items-center transition-transform duration-700 group-hover:-translate-y-6 uppercase mb-4">
                                            Medical Facilities
                                            <MdArrowOutward className="lg:ml-10 ml-2 h-6 w-6 text-white" />
                                        </h2>
                                        {/* Hidden by default and shown on hover */}
                                        <h4 className="mb-4 text-white transition-transform duration-700 group-hover:-translate-y-6 hidden group-hover:block">
                                            We maintain this by ensuring transparency and professional conduct in every aspect of our work
                                        </h4>

                                        <Link href="#">
                                            <p className="text-white font-semibold py-2 px-4 border-2 border-white rounded-full hover:bg-black hover:text-white transition transform duration-700 group-hover:-translate-y-6">
                                                medical
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </Card>

                            {/* Roads Card */}
                            <Card className="relative w-full bg-white shadow-lg  overflow-hidden group rounded-none">
                                <div className="relative w-full aspect-square">
                                    <Image
                                        src="https://i.postimg.cc/pTz6m8Rs/Frame-76596.png"
                                        alt="Roads"
                                        layout="fill"
                                        objectFit="cover"
                                        loader={customLoader}
                                        className="transition-opacity duration-300 group-hover:opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50 flex flex-col justify-end items-start p-4">
                                        <h2 className="text-white text-xl font-semibold flex items-center transition-transform duration-700 group-hover:-translate-y-6 uppercase mb-4">
                                            Road Construction
                                            <MdArrowOutward className="lg:ml-10 ml-2 h-6 w-6 text-white" />
                                        </h2>

                                        {/* Hidden by default and shown on hover */}
                                        <h4 className="mb-4 text-white transition-transform duration-700 group-hover:-translate-y-6 hidden group-hover:block">
                                            We maintain this by ensuring transparency and professional conduct in every aspect of our work
                                        </h4>

                                        <Link href="#">
                                            <p className="text-white font-semibold py-2 px-4 border-2 border-white rounded-full hover:bg-black hover:text-white transition transform duration-700 group-hover:-translate-y-6">
                                                roads
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </Card>

                            {/* commercial-1 Card */}
                            <Card className="relative w-full bg-white shadow-lg overflow-hidden group rounded-none">
                                <div className="relative w-full aspect-square">
                                    <Image
                                        src="https://i.postimg.cc/cJhBHLR7/Frame-76594.png"
                                        alt="commercial"
                                        layout="fill"
                                        objectFit="cover"
                                        loader={customLoader}
                                        className="transition-opacity duration-300 group-hover:opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50 flex flex-col justify-end items-start p-4">
                                        <h2 className="text-white text-xl font-semibold flex items-center transition-transform duration-700 group-hover:-translate-y-6 uppercase mb-4">
                                            Architecture & Building
                                            <MdArrowOutward className="lg:ml-10 ml-2 h-6 w-6 text-white" />
                                        </h2>
                                        {/* Hidden by default and shown on hover */}
                                        <h4 className="mb-4 text-white transition-transform duration-700 group-hover:-translate-y-6 hidden group-hover:block">
                                            We maintain this by ensuring transparency and professional conduct in every aspect of our work
                                        </h4>

                                        <Link href="#">
                                            <p className="text-white font-semibold py-2 px-4 border-2 border-white rounded-full hover:bg-black hover:text-white transition transform duration-700 group-hover:-translate-y-6">
                                                commercial
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </Card>

                            {/* commercial-2 Card */}
                            <Card className="relative w-full bg-white shadow-lg overflow-hidden group rounded-none">
                                <div className="relative w-full aspect-square">
                                    <Image
                                        src="https://i.postimg.cc/zf8k8ggX/Frame-76597.png"
                                        alt="commercial"
                                        layout="fill"
                                        objectFit="cover"
                                        loader={customLoader}
                                        className="transition-opacity duration-300 group-hover:opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50 flex flex-col justify-end items-start p-4">
                                        <h2 className="text-white text-xl font-semibold flex items-center transition-transform duration-700 group-hover:-translate-y-6 uppercase mb-4">
                                            Architecture & Building
                                            <MdArrowOutward className="lg:ml-10 ml-2 h-6 w-6 text-white" />
                                        </h2>
                                        {/* Hidden by default and shown on hover */}
                                        <h4 className="mb-4 text-white transition-transform duration-700 group-hover:-translate-y-6 hidden group-hover:block">
                                            We maintain this by ensuring transparency and professional conduct in every aspect of our work
                                        </h4>

                                        <Link href="#">
                                            <p className="text-white font-semibold py-2 px-4 border-2 border-white rounded-full hover:bg-black hover:text-white transition transform duration-700 group-hover:-translate-y-6">
                                                commercial
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </Card>

                            {/* commercial-3 Card */}
                            <Card className="relative w-full bg-white shadow-lg overflow-hidden group rounded-none">
                                <div className="relative w-full aspect-square">
                                    <Image
                                        src="https://i.postimg.cc/cLQcpm6b/Frame-76595.png"
                                        alt="commercial"
                                        layout="fill"
                                        objectFit="cover"
                                        loader={customLoader}
                                        className="transition-opacity duration-300 group-hover:opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50 flex flex-col justify-end items-start p-4">
                                        <h2 className="text-white text-xl font-semibold flex items-center transition-transform duration-700 group-hover:-translate-y-6 uppercase mb-4">
                                            Architecture & Building
                                            <MdArrowOutward className="lg:ml-10 ml-2 h-6 w-6 text-white" />
                                        </h2>
                                        {/* Hidden by default and shown on hover */}
                                        <h4 className="mb-4 text-white transition-transform duration-700 group-hover:-translate-y-6 hidden group-hover:block">
                                            We maintain this by ensuring transparency and professional conduct in every aspect of our work
                                        </h4>

                                        <Link href="#">
                                            <p className="text-white font-semibold py-2 px-4 border-2 border-white rounded-full hover:bg-black hover:text-white transition transform duration-700 group-hover:-translate-y-6">
                                                commercial
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                            {/* commercial-4 Card */}
                            <Card className="relative w-full bg-white shadow-lg overflow-hidden group rounded-none">
                                <div className="relative w-full aspect-square">
                                    <Image
                                        src="https://i.postimg.cc/Njh4CVGX/Frame-76598.png"
                                        alt="commercial"
                                        layout="fill"
                                        objectFit="cover"
                                        loader={customLoader}
                                        className="transition-opacity duration-300 group-hover:opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50 flex flex-col justify-end items-start p-4">
                                        <h2 className="text-white text-xl font-semibold flex items-center transition-transform duration-700 group-hover:-translate-y-6 uppercase mb-4">
                                            Architecture & Building
                                            <MdArrowOutward className="lg:ml-10 ml-2 h-6 w-6 text-white" />
                                        </h2>

                                        {/* Hidden by default and shown on hover */}
                                        <h4 className="mb-4 text-white transition-transform duration-700 group-hover:-translate-y-6 hidden group-hover:block">
                                            We maintain this by ensuring transparency and professional conduct in every aspect of our work
                                        </h4>


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

                    {/* Content for Commercial */}
                    <TabsContent value="Commercial" className="mt-16">
                        {/* Commercial Card */}
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                            {/* Card 1 */}
                            <Card className="relative w-full bg-white shadow-lg overflow-hidden group rounded-none">
                                <div className="relative w-full aspect-square">
                                    <Image
                                        src="https://i.postimg.cc/cLQcpm6b/Frame-76595.png"
                                        alt="commercial"
                                        layout="fill"
                                        objectFit="cover"
                                        loader={customLoader}
                                        className="transition-opacity duration-300 group-hover:opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50 flex flex-col justify-end items-start p-4">
                                        <h2 className="text-white text-xl font-semibold flex items-center transition-transform duration-700 group-hover:-translate-y-6 uppercase mb-4">
                                            Architecture & Building
                                            <MdArrowOutward className="lg:ml-10 ml-2 h-6 w-6 text-white" />
                                        </h2>

                                        {/* Hidden by default and shown on hover */}
                                        <h4 className="mb-4 text-white transition-transform duration-700 group-hover:-translate-y-6 hidden group-hover:block">
                                            We maintain this by ensuring transparency and professional conduct in every aspect of our work
                                        </h4>

                                        <Link href="#">
                                            <p className="text-white font-semibold py-2 px-4 border-2 border-white rounded-full hover:bg-black hover:text-white transition transform duration-700 group-hover:-translate-y-6">
                                                commercial
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                            {/* Card 2 */}
                            <Card className="relative w-full bg-white shadow-lg overflow-hidden group rounded-none">
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
                                        <h2 className="text-white text-xl font-semibold flex items-center transition-transform duration-700 group-hover:-translate-y-6 uppercase mb-4">
                                            Architecture & builders
                                            <MdArrowOutward className="lg:ml-10 ml-2 h-6 w-6 text-white" />
                                        </h2>

                                        {/* Hidden by default and shown on hover */}
                                        <h4 className="mb-4 text-white transition-transform duration-700 group-hover:-translate-y-6 hidden group-hover:block">
                                            We maintain this by ensuring transparency and professional conduct in every aspect of our work
                                        </h4>

                                        <Link href="#">
                                            <p className="text-white font-semibold py-2 px-4 border-2 border-white rounded-full hover:bg-black hover:text-white transition transform duration-700 group-hover:-translate-y-6">
                                                commercial
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                            {/* Card 3 */}
                            <Card className="relative w-full bg-white shadow-lg overflow-hidden group rounded-none">
                                <div className="relative w-full aspect-square">
                                    <Image
                                        src="https://i.postimg.cc/NjnJbb0N/Frame-76506.png"
                                        alt="Commercial"
                                        layout="fill"
                                        objectFit="cover"
                                        loader={customLoader}
                                        className="transition-opacity duration-300 group-hover:opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50 flex flex-col justify-end items-start p-4">
                                        <h2 className="text-white text-xl font-semibold flex items-center transition-transform duration-700 group-hover:-translate-y-6 uppercase mb-4">
                                            Commercial & Industry
                                            <MdArrowOutward className="lg:ml-10 ml-2 h-6 w-6 text-white" />
                                        </h2>

                                        {/* Hidden by default and shown on hover */}
                                        <h4 className="mb-4 text-white transition-transform duration-700 group-hover:-translate-y-6 hidden group-hover:block">
                                            We maintain this by ensuring transparency and professional conduct in every aspect of our work
                                        </h4>

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
                    <TabsContent value="Medical" className="mt-16">
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                            {/* Medical Card */}

                            {/* commercial-1 Card */}
                            <Card className="relative w-full bg-white shadow-lg overflow-hidden group rounded-none">
                                <div className="relative w-full aspect-square">
                                    <Image
                                        src="https://i.postimg.cc/cJhBHLR7/Frame-76594.png"
                                        alt="commercial"
                                        layout="fill"
                                        objectFit="cover"
                                        loader={customLoader}
                                        className="transition-opacity duration-300 group-hover:opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50 flex flex-col justify-end items-start p-4">
                                        <h2 className="text-white text-xl font-semibold flex items-center transition-transform duration-700 group-hover:-translate-y-6 uppercase mb-4">
                                            Architecture & Building
                                            <MdArrowOutward className="lg:ml-10 ml-2 h-6 w-6 text-white" />
                                        </h2>
                                        {/* Hidden by default and shown on hover */}
                                        <h4 className="mb-4 text-white transition-transform duration-700 group-hover:-translate-y-6 hidden group-hover:block">
                                            We maintain this by ensuring transparency and professional conduct in every aspect of our work
                                        </h4>

                                        <Link href="#">
                                            <p className="text-white font-semibold py-2 px-4 border-2 border-white rounded-full hover:bg-black hover:text-white transition transform duration-700 group-hover:-translate-y-6">
                                                commercial
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </Card>

                            {/* commercial-2 Card */}
                            <Card className="relative w-full bg-white shadow-lg overflow-hidden group rounded-none">
                                <div className="relative w-full aspect-square">
                                    <Image
                                        src="https://i.postimg.cc/zf8k8ggX/Frame-76597.png"
                                        alt="commercial"
                                        layout="fill"
                                        objectFit="cover"
                                        loader={customLoader}
                                        className="transition-opacity duration-300 group-hover:opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50 flex flex-col justify-end items-start p-4">
                                        <h2 className="text-white text-xl font-semibold flex items-center transition-transform duration-700 group-hover:-translate-y-6 uppercase mb-4">
                                            Architecture & Building
                                            <MdArrowOutward className="lg:ml-10 ml-2 h-6 w-6 text-white" />
                                        </h2>
                                        {/* Hidden by default and shown on hover */}
                                        <h4 className="mb-4 text-white transition-transform duration-700 group-hover:-translate-y-6 hidden group-hover:block">
                                            We maintain this by ensuring transparency and professional conduct in every aspect of our work
                                        </h4>

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

                    {/* Content for Roads */}
                    <TabsContent value="Roads" className="mt-16">
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                            {/* Roads Card */}
                            <Card className="relative w-full bg-white shadow-lg  overflow-hidden group rounded-none">
                                <div className="relative w-full aspect-square">
                                    <Image
                                        src="https://i.postimg.cc/Gm3w6Mdd/Frame-76593.png"
                                        alt="Medical"
                                        layout="fill"
                                        objectFit="cover"
                                        loader={customLoader}
                                        className="transition-opacity duration-300 group-hover:opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50 flex flex-col justify-end items-start p-4">
                                        <h2 className="text-white text-xl font-semibold flex items-center transition-transform duration-700 group-hover:-translate-y-6 uppercase mb-4">
                                            Medical Facilities
                                            <MdArrowOutward className="lg:ml-10 ml-2 h-6 w-6 text-white" />
                                        </h2>
                                        {/* Hidden by default and shown on hover */}
                                        <h4 className="mb-4 text-white transition-transform duration-700 group-hover:-translate-y-6 hidden group-hover:block">
                                            We maintain this by ensuring transparency and professional conduct in every aspect of our work
                                        </h4>

                                        <Link href="#">
                                            <p className="text-white font-semibold py-2 px-4 border-2 border-white rounded-full hover:bg-black hover:text-white transition transform duration-700 group-hover:-translate-y-6">
                                                medical
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default ProjectShowcases;
