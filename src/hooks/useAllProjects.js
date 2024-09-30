import { useEffect, useState } from "react";

const useAllProjects = (page, limit, searchValue) => {
  const [projects, setProjects] = useState([]);
  const [projectsCount, setProjectsCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    const result = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:5000/api/v1/projects?page=${page}&limit=${limit}&searchValue=${searchValue}`
        );
        const data = await response.json();
        setProjects(data?.data?.allProjects);
        setProjectsCount(data?.data?.totlaProjects);
        console.log({projects, projectsCount})
      } catch (error) {
        console.error("Error fetching :", error);
      } finally {
        setLoading(false);
      }
    };
    result();
  }, [page, limit, reload, searchValue]);

  return {
    projects,
    reload,
    setLoading,
    setReload,
    projectsCount,
    loading,
  };
};

export default useAllProjects;
