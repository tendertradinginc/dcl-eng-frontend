import { useEffect, useState } from "react";

const useAllMessage = (page, limit, searchValue) => {
  const [allMessage, setAllMessage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(0);
  const [count, setCount] = useState(0);
  const [messagesCount, setMessagesCount] = useState(0);

  useEffect(() => {
    const result = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:5000/api/v1/message?page=${page}&limit=${limit}&search=${searchValue}`
        );
        const data = await response.json();
        setAllMessage(data?.data?.result);
        setMessagesCount(data?.data?.total);
      } catch (error) {
        console.error("Error fetching:", error);
      } finally {
        setLoading(false);
      }
    };

    result();
  }, [page, limit, reload, searchValue]);

  return {
    allMessage,
    setAllMessage,
    count,
    setCount,
    loading,
    page,
    reload,
    setReload,
    messagesCount,
  };
};

export default useAllMessage;
