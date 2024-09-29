import { useEffect, useState } from "react";

const useAllClients = (page, limit, searchValue) => {
  const [user, setUsers] = useState([]);
  const [userCount, setUsersCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    const result = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:5000/api/v1/users?page=${page}&limit=${limit}&search=${searchValue}`
        );
        const data = await response.json();
        setBlogs(data?.data?.result);
        setBlogsCount(data?.data?.total);
      } catch (error) {
        console.error("Error fetching :", error);
      } finally {
        setLoading(false);
      }
    };
    result();
  }, [page, limit, reload, searchValue]);

  return {
    user,
    reload,
    setReload,
    userCount,
  };
};

export default useAllClients;
