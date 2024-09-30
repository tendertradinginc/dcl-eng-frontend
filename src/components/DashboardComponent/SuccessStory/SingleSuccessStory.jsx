
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import ViewSuccessStory from "./ViewSuccessStory";
import DeleteDataModal from "@/components/shared/DeleteDataModal/DeleteDataModal";
import EditSuccessStory from "./EditSuccessStory";


const SingleSuccessStory = ({ successStoryData, index, setReload }) => {
    const { companyName, projectName } = successStoryData;



    return (
        <tr className={index % 2 === 1 ? "bg-[#f2f2f2]" : ""}>
            <td className="px-4 py-1">{index + 1}</td>

            <td className="px-16 py-1 font-semibold text-black">{companyName || "N/A"}</td>

            {/* <td className="px-8 py-1 font-semibold text-black">
                <Image
                    loader={customLoader}
                    src={image}
                    alt="client"
                    height="56"
                    width="30"
                    className="h-14"
                />
            </td> */}

            {/* <td className="py-1 px-16 pr-2 font-semibold text-black">{authorDesignation || "N/A"}</td> */}

            <td className="py-1 px-16 pr-2 font-semibold text-black">
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
                        url={`http://localhost:5000/api/v1/successStory/${successStoryData._id}`} />
                </AlertDialog>
            </td>
        </tr>
    );
};

export default SingleSuccessStory;
