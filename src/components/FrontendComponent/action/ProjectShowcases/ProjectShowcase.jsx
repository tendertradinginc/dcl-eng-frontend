"use client"

import PageBanner from '@/components/shared/PageBanner/PageBanner';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import Link from 'next/link';

const ProjectShowcases = () => {


    return (
        <div>
            <div>
                <PageBanner title="Project Showcase" banner="https://i.postimg.cc/mksvNfyj/Frame-76521-1.png" description={<> <Breadcrumb className="flex justify-center mt-5">
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
        </div>
    );
};

export default ProjectShowcases;