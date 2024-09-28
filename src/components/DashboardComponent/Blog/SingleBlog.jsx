import { AlertDialog } from "@radix-ui/react-alert-dialog";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import BlogUpdate from "./BlogUpdate";
// import DeleteBlog from "./DeleteBlog";
import ViewBlog from "./ViewBlog";

const SingleBlog = ({ data, index, setReload }) => {
  const { title } = data;
  return (
    <tr className={` ${index % 2 === 1 ? "bg-[#f2f2f2]" : ""}`}>
      <td className="px-4 py-1">{index + 1}</td>
      <td className="px-4 py-1 text-left font-semibold">{title}</td>

      <td className="space-x-3 md:px-4">
        <AlertDialog className="flex gap-3">
          <ViewBlog data={data}/>
          <BlogUpdate setReload={setReload} data={data} />
          {/* <DeleteBlog setReload={setReload} id={data?._id} /> */}
        </AlertDialog>
      </td>
    </tr>
  );
};

export default SingleBlog;