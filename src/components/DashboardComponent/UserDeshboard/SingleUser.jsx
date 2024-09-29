import DeleteDataModal from "@/components/shared/DeleteDataModal/DeleteDataModal";
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import EditUser from "./EditUser";

const SingleUser = ({ data, index, setReload }) => {
  return (
    <tr className={` ${index % 2 === 1 ? "bg-[#f2f2f2]" : ""}`}>
      <td className="px-4 py-1">{index + 1}</td>
      <td className="px-4 py-1 text-left font-semibold">{data?.fullName}</td>
      <td className="px-4 py-1 text-left font-semibold">{data?.email}</td>
      <td className="px-4 py-1 text-left font-semibold">{data?.role}</td>

      <td className="space-x-3 md:px-4">
        <AlertDialog className="flex gap-3">
          <EditUser setReload={setReload} data={data} />
          <DeleteDataModal
            setReload={setReload}
            url={`http://localhost:5000/api/v1/users/${data?._id}`}
          />
        </AlertDialog>
      </td>
    </tr>
  );
};

export default SingleUser;
