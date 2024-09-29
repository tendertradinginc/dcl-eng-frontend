import { AlertDialog } from "@radix-ui/react-alert-dialog";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import ProjectUpdate from "./ProjectUpdate";
import DeleteDataModal from "@/components/shared/DeleteDataModal/DeleteDataModal";
// import BlogUpdate from "./BlogUpdate";
// import DeleteBlog from "./DeleteBlog";
// import ViewBlog from "./ViewBlog";
// import DeleteDataModal from "@/components/shared/DeleteDataModal/DeleteDataModal";

const SingleProject = ({ data, index, setReload }) => {
  const {  name } = data;
  return (
    <tr className={` ${index % 2 === 1 ? "bg-[#f2f2f2]" : ""}`}>
      <td className="px-4 py-1">{index + 1}</td>
      <td className="px-4 py-1 text-left font-semibold">{name}</td>

      <td className="space-x-3 md:px-4">
        <AlertDialog className="flex gap-3">
          {/* <ViewBlog data={data}/> */}
          <ProjectUpdate setReload={setReload} data={data} />
     
        <DeleteDataModal setReload={setReload} url={`http://localhost:5000/api/v1/projects/${data?._id}`} />
        </AlertDialog>
      </td>
    </tr>
  );
};

export default SingleProject;