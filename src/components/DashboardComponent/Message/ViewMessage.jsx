import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AiFillEye } from "react-icons/ai";
const ViewMessage = ({ data, handelReadMessage }) => {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger>
          <div
            onClick={() => handelReadMessage(data?._id, data?.status)}
            className="bg-green-700 text-white px-2 py-1 rounded hover:bg-green-800 text-sm"
          >
            <AiFillEye className="inline m-1"></AiFillEye> <spanv>View</spanv>
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent className="w-1/2">
          <AlertDialogHeader>
            <AlertDialogTitle>
              <div>
                <p>{data?.name}</p>
                <p>{data?.email}</p>
              </div>
            </AlertDialogTitle>
            <hr />
            <AlertDialogDescription>{data?.message}</AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ViewMessage;
