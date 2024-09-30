import { useEffect, useState } from "react";

const useAllProjects = (page, limit, searchValue) => {
  const [messages, setMessages] = useState([]);
  const [messagesCount, setMessagesCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    const result = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:5000/api/v1/projects?page=${page}&limit=${limit}&search=${searchValue}`
        );
        const data = await response.json();
        setMessages(data?.data?.result);
        setMessagesCount(data?.data?.total);
      } catch (error) {
        console.error("Error fetching :", error);
      } finally {
        setLoading(false);
      }
    };
    result();
  }, [page, limit, reload, searchValue]);

  return {
    messages,
    reload,
    setLoading,
    setReload,
    messagesCount,
    loading,
  };
};

export default useAllProjects;
