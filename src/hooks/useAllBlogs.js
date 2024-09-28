import { useEffect, useState } from "react";

const useAllblogs = (page, limit, searchValue) => {
  const [blogs, setBlogs] = useState([]);
  const [blogsCount, setBlogsCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    const result = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:5000/api/v1/blogs?page=${page}&limit=${limit}`
        );
        const data = await response.json();
        setBlogs(data?.data?.laws);
        setBlogsCount(data?.data?.lawsCount);
      } catch (error) {
        console.error("Error fetching :", error);
      } finally {
        setLoading(false);
      }
    };
    result();
  }, [page, limit, reload, searchValue]);

  return {
    blogs,
    reload,
    setLoading,
    setReload,
    blogsCount,
    loading,
  };
};

export default useAllblogs;
