import { customLoader } from "@/utils/customLoader";
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import Image from "next/image";


const SingleFeedback = ({ clientFeedbackData, index, setReload }) => {
    const { author, image, Designation } = clientFeedbackData;

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

            <td className="px-16 py-1 font-semibold text-si-primary">{author}</td>

            <td className="py-1 pr-2 font-semibold text-si-primary">{Designation}</td>

            {/* <td className="py-1 pr-2 font-semibold text-si-primary">{feedback}</td> */}

            <td className="flex items-center space-x-3 py-2 md:px-4">
                <AlertDialog>
                    <EditFeedbackModal
                        data={clientFeedbackData}
                        setReload={setReload}
                    ></EditFeedbackModal>
                    {/* <EditClientModal
            data={clientData}
            setReload={setReload}
          ></EditClientModal> */}
                    <DeleteFeedbackModal
                        data={clientFeedbackData}
                        setReload={setReload}
                    ></DeleteFeedbackModal>
                </AlertDialog>
            </td>
        </tr>
    );
};

export default SingleFeedback;
