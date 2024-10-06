// import DeleteBlog from "./DeleteBlog";
import { AlertDialog } from "@radix-ui/react-alert-dialog";

import DeleteDataModal from "@/components/shared/DeleteDataModal/DeleteDataModal";
import UpdateBanner from "./UpdateBanner";
import ViewBanner from "./ViewBanner";
const SingleBanner = ({ data, index, setReload }) => {
  const { title, colorWord, lastTitle, buttonText, _id } = data;
  console.log(_id);
  return (
    <tr className={` ${index % 2 === 1 ? "bg-[#f2f2f2]" : ""}`}>
      <td className="px-4 py-1">{index + 1}</td>
      <td className="px-4 py-1 text-left font-semibold">
        {title}
        {colorWord}
        {lastTitle}
      </td>
      <td className="px-4 py-1 text-left font-semibold">{buttonText}</td>

      <td className="space-x-3 md:px-4">
        <AlertDialog className="flex gap-3">
          <ViewBanner data={data} />
          <UpdateBanner setReload={setReload} data={data} />
          <DeleteDataModal
            setReload={setReload}
            url={`http://localhost:5000/api/v1/bannerpage/${_id}`}
          />
        </AlertDialog>
      </td>
    </tr>
  );
};

export default SingleBanner;
