import { TabsContent } from "@/components/ui/tabs";
import ProjectShowcaseCard from "./ProjectShowcaseCard";


const ProjectCategory = () => {
    return (
        <div>
            <TabsContent className="w-full min-h-[70vh]" value={value}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                    {loading
                        ? skeletonElement?.map((item, idx) => (
                            <div
                                key={idx}
                                className="shadow-2xl rounded-md p-4 py-6 border  w-full mx-auto"
                            >
                                <div className="animate-pulse flex space-x-4">
                                    <div className="flex-1 space-y-4 py-1">
                                        <div className="h-4 bg-gray-400 rounded"></div>
                                        <div className="space-y-3">
                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="h-2 bg-gray-400 rounded col-span-2"></div>
                                                <div className="h-2 bg-gray-400 rounded col-span-1"></div>
                                            </div>
                                            <div className="h-2 bg-gray-400 rounded"></div>
                                            <div className="h-2 bg-gray-400 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="rounded-md bg-gray-400 h-10 w-20 order-fast"></div>
                                </div>
                                <div className="rounded-md bg-gray-400 h-10 w-28 mt-10"></div>
                            </div>
                        ))
                        : projects?.map((project, idx) => (
                            <ProjectShowcaseCard project={project} key={idx} />
                        ))}
                </div>
            </TabsContent>
        </div>
    );
};

export default ProjectCategory;