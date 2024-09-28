import { customLoader } from "@/utils/customLoader";
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import Image from "next/image";
import DeleteClientModal from "./DeleteClientModal";
import EditClientModal from "./EditClientModal";

const SingleClient = ({ clientData, index, setReload }) => {
  const { name, image, details } = clientData;

  return (
    <tr className={index % 2 === 1 ? "bg-[#f2f2f2]" : ""}>
      <td className="px-4 py-1">{index + 1}</td>

      <td className="py-1 pl-16 text-gray-700">
        <Image
          loader={customLoader}
          src={image}
          alt="client"
          height="56"
          width="30"
          className="h-14"
        />
      </td>

      <td className="px-16 py-1 font-semibold text-si-primary">{name}</td>

      <td className="py-1 pr-2 font-semibold text-si-primary">{details}</td>

      <td className="flex items-center space-x-3 py-2 md:px-4">
        <AlertDialog>
          <EditClientModal
            data={clientData}
            setReload={setReload}
          ></EditClientModal>
          <DeleteClientModal
            data={clientData}
            setReload={setReload}
          ></DeleteClientModal>
        </AlertDialog>
      </td>
    </tr>
  );
};

export default SingleClient;
