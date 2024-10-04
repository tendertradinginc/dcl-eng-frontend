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
          `http://localhost:5000/api/v1/blogs?page=${page}&limit=${limit}&searchValue=${searchValue}`
        );
        const data = await response.json();
        setBlogs(data?.data?.allBlogs);
        setBlogsCount(data?.data?.totlaBlogs);
        console.log({blogs, blogsCount})
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
