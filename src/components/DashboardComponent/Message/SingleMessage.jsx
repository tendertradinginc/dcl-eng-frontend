import DeleteDataModal from "@/components/shared/DeleteDataModal/DeleteDataModal";
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import ViewMessage from "./ViewMessage";

const SingleMessage = ({ data, index, setReload, handelReadMessage }) => {
  return (
    <tr className={` ${index % 2 === 1 ? "bg-[#f2f2f2]" : ""}`}>
      <td className="px-4 py-1">{index + 1}</td>
      <td className="px-4 py-1 text-blue-800 ">{data?.name}</td>
      <td className="px-4 py-1 text-gray-700 ">{data?.email}</td>
      <td className="px-4 py-1 text-gray-700 ">{data?.phone}</td>
      <td className="px-4 py-1 text-gray-700 ">
        <ViewMessage
          data={data}
          handelReadMessage={handelReadMessage}
        ></ViewMessage>
      </td>
      <td
        className={`px-4 py-1 text-gray-700 ${
          data?.status ? "text-green-500" : "text-red-500"
        } `}
      >
        {data?.status ? "Read" : "Unread"}
      </td>
      <td className="space-x-3 md:px-5">
        <AlertDialog className="flex gap-3">
          <DeleteDataModal
            setReload={setReload}
            url={`http://localhost:5000/api/v1/message/${data?._id}`}
          />
        </AlertDialog>
      </td>
    </tr>
  );
};

export default SingleMessage;
