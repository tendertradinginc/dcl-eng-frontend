import { useState } from "react";

const MessageMainpage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);
  const { allMessage, setAllMessage, loading, total, messagesCount } =
    useAllMessage(currentPage, pageLimit);
  const skleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handelReadMessage = async (_id, status) => {
    try {
      if (status) {
        return;
      }

      const response = await fetch(
        `https://www.server.tendertradinginc.com/api/v1/contactus/${_id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setAllMessage((prevMessages) =>
          prevMessages?.map((message) =>
            message._id === _id ? { ...message, status: true } : message
          )
        );
      } else {
        console.error("Failed to update message status:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating message status:", error);
    }
  };

  const handleRemovecategory = async (id) => {
    try {
      const response = await fetch(
        `https://www.server.tendertradinginc.com/api/v1/contactus/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        toast.success("success");
        const remainingData = allMessage.filter((user) => user._id !== id);
        setAllMessage(remainingData);
      } else {
        console.error("Failed to remove category:", response.statusText);
      }
    } catch (error) {
      console.error("Error removing category:", error);
    }
  };

  if (allMessage.length <= 0 && !loading) {
    return (
      <div className=" max-h-16">
        <p className="text-blue-800 font-bold text-4xl flex justify-center items-center">
          No Message found yet.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] ">
      <div className="container mx-auto px-2">
        <br />

        <div className="w-full max-w-screen-lg mx-auto bg-white  ">
          <div className="overflow-x-auto sm:px-1 ">
            <div className="pb-6 flex justify-between items-center">
              <h2 className="text-blue-950 font-semibold text-2xl ">
                <AiFillDatabase className="inline mb-1"></AiFillDatabase>
                Message List
              </h2>
              <div className="flex items-center justify-between mt-4 px-2">
                <p>
                  Total Message : {total} <span>{""}</span>
                </p>
              </div>
            </div>
            <hr />
            {loading ? (
              <table className="w-full table-auto">
                <tbody className="my-2">
                  {skleton.map((skel, index) => (
                    <SkeletonNotice key={index} index={index}></SkeletonNotice>
                  ))}
                </tbody>
              </table>
            ) : (
              <table className="w-full table-auto">
                <thead>
                  <tr className="text-left">
                    <th className="px-4 py-2">id</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Phone</th>

                    <th className="px-4 py-2">View</th>
                    <th className="px-4 py-2">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {allMessage?.map((message, index) => (
                    <SingleMessage
                      key={message._id}
                      index={index}
                      data={message}
                      handelReadMessage={handelReadMessage}
                      handleRemovecategory={handleRemovecategory}
                    ></SingleMessage>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          <Pagination
            data={{
              pageLimit,
              setCurrentPage,
              setPageLimit,
              articlesCount: messagesCount,
              currentPage,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MessageMainpage;
