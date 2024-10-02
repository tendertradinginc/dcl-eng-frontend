"use client"

import MaxWidthWrapper from '@/components/custom/MaxWidthWrapper';
import PageBanner from '@/components/shared/PageBanner/PageBanner';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import Link from 'next/link';
import { useSearchParams, useNavigate } from 'next/navigation';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectCategory from './ProjectCategory';
import { useState } from 'react';


const ProjectShowcases = () => {

    const { uniqueCatories, setUniqueCategories } = useState([]);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [selectedCategory, setSelectedCategory] = useState(uniqueCatories[0]);
    const [loading, setLoading] = useState(true)


    // useEffect(() => {
    //     if (uniqueCatories.length > 0) {
    //         const queryCategory = searchParams.get("category");
    //         if (!queryCategory) {
    //             setSelectedCategory(uniqueCatories[0]);
    //         } else {
    //             setSelectedCategory(queryCategory);
    //         }
    //     }
    // }, [uniqueCatories, searchParams]);


    useEffect(() => {
        const fetchProjectCategory = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `http://localhost:5000/api/v1/projects`
                );
                const data = await response.json();

                setUniqueCategories(data?.data.result);
                setSelectedCategory(data?.data?.uniqueCatories);
            } catch (error) {
                console.error("Error fetching :", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProjectCategory();
    }, [setUniqueCategories]);



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


                {/* showcase tab */}
                <div>
                    <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
                        <div className="flex justify-center flex-wrap gap-5 items-center text-5xl mt-5">
                            <TabsList className="flex  gap-5 flex-wrap justify-start md:justify-end  ">
                                {uniqueCatories?.map((item, idx) => (
                                    <TabsTrigger
                                        className="py-3 bg-white text-black font-semibold data-[state=active]:bg-black data-[state=active]:text-white"
                                        key={idx}
                                        value={item}
                                        onClick={() => navigate(`?category=${item}`)}
                                    >
                                        {item}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </div>


                        <div className="grids lg:grid-cols-2 grid-col-1 gap-4">
                            {uniqueCatories?.map((category, idx) => (
                                <ProjectCategory setTabLoading={setLoading} key={idx} value={category} />
                            ))}
                            {/* <ProjectShowcaseCard /> */}
                        </div>
                    </Tabs>



                </div>
            </MaxWidthWrapper>

        </div>
    );
};

export default ProjectShowcases;