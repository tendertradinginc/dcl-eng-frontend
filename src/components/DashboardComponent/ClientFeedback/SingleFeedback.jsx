
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import EditFeedback from "./EditFeedback";
import DeleteFeedback from "./DeleteFeedback";

const SingleFeedback = ({ clientFeedbackData, index, setReload }) => {
    const { author, designation, feedback } = clientFeedbackData; // Include feedback

    return (
        <tr className={index % 2 === 1 ? "bg-[#f2f2f2]" : ""}>
            <td className="px-4 py-1">{index + 1}</td>

            <td className="px-16 py-1 font-semibold text-black">{author}</td>

            <td className="py-1 pr-2 font-semibold text-black">{designation}</td>

            <td className="py-1 pr-2 font-semibold text-black">{feedback}</td>

            <td className="flex items-center space-x-3 py-2 md:px-4">
                <AlertDialog>
                    <EditFeedback
                        data={clientFeedbackData}
                        setReload={setReload}
                    ></EditFeedback>
                    <DeleteFeedback
                        data={clientFeedbackData}
                        setReload={setReload}
                    ></DeleteFeedback>
                </AlertDialog>
            </td>
        </tr>
    );
};

export default SingleFeedback;
