
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import DeleteDataModal from "@/components/shared/DeleteDataModal/DeleteDataModal";
import ViewSuccessStory from "./ViewSuccessStory";
import EditSuccessStory from "./EditSuccessStory";

const SingleSuccessStory = ({ successStoryData, index, setReload }) => {
    // const { author, image, authorDesignation: designation, feedback } = clientFeedbackData; // Include feedback

    const { companyName, projectName } = successStoryData;
    console.log(successStoryData);


    return (
        <tr className={index % 2 === 1 ? "bg-[#f2f2f2]" : ""}>
            <td className="px-4 py-1">{index + 1}</td>

            <td className="px-8 py-1 pr-2 font-semibold text-black">{companyName || "N/A"}</td>


            <td className="py-1 px-16 pr-2 font-semibold text-black">{projectName || "N/A"}</td>


            <td className="py-1  pr-16 font-semibold text-black">
                {/* Call ViewFeedback component */}
                <ViewSuccessStory data={successStoryData} />
            </td>



            <td className="flex items-center space-x-3 py-2 md:px-4">
                <AlertDialog>
                    <EditSuccessStory
                        data={successStoryData}
                        setReload={setReload}
                    ></EditSuccessStory>
                    {/* <DeleteFeedback
                        data={clientFeedbackData}
                        setReload={setReload}
                    ></DeleteFeedback> */}
                    <DeleteDataModal
                        setReload={setReload}
                        url={`http://localhost:5000/api/v1/SuccessStory/${successStoryData._id}`} />
                </AlertDialog>
            </td>
        </tr>
    );
};

export default SingleSuccessStory;
