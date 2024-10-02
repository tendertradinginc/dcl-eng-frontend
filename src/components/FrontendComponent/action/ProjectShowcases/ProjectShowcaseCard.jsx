import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";



const ProjectShowcaseCard = ({ project }) => {
    return (
        <div>
            <Card className="relative max-w-sm bg-white shadow-lg rounded overflow-hidden group">
                {/* Image section that covers the full card */}
                <div className="relative w-full aspect-square">
                    {/* Image */}
                    <Image
                        src={project.image}
                        alt="Architecture & Building"
                        layout="fill"
                        objectFit="cover"
                        className="transition-opacity duration-300 group-hover:opacity-80"
                    />
                    {/* Full Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50 flex flex-col justify-end items-start p-4">
                        {/* Title with arrow icon */}
                        <h2 className="text-white text-xl font-semibold flex items-center transition-transform duration-700 group-hover:-translate-y-6">
                            {project.name}
                            <AiOutlineArrowRight className="ml-2 h-6 w-6 text-white" />
                        </h2>
                        {/* Button */}
                        <Link href="#" className="">
                            <p className="text-white font-semibold py-2 px-4 border-2 border-white rounded-full hover:bg-black hover:text-white transition transform duration-700 group-hover:-translate-y-6">
                                {project.category}
                            </p>
                        </Link>
                    </div>
                </div>
            </Card>

        </div>
    );
};

export default ProjectShowcaseCard;