import { useEffect, useState } from "react";
import { TabsContent } from "@/components/ui/tabs";
import ProjectShowcaseCard from "./ProjectShowcaseCard";

const ProjectCategory = ({ category, loading }) => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`http://localhost:5000/api/v1/projects?category=${category}`);
                const data = await response.json();

                // Assuming the API returns projects in data.data.projects
                setProjects(data?.data?.projects || []);
            } catch (error) {
                console.error("Error fetching projects:", error);
            } finally {
                setIsLoading(false);
            }
        };

        if (category) {
            fetchProjects();
        }
    }, [category]);

    return (
        <TabsContent className="w-full min-h-[70vh]" value={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {
                    projects.length > 0 ? (
                        projects.map((project, idx) => (
                            <ProjectShowcaseCard project={project} key={idx} />
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-500">No projects found for this category.</p>
                    )
                }
            </div>
        </TabsContent>
    );
};

export default ProjectCategory;
