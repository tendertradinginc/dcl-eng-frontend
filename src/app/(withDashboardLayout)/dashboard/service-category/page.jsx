import SingleCategory from "@/components/custom/SingleCategory";
import { AlertDialogHeader } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AiFillDatabase } from "react-icons/ai";
import { FaPlusCircle } from "react-icons/fa";
import CreateCategoryForm from "./CreateCategoryForm";

export default async function page() {
  let res = await fetch("https://jsonplaceholder.typicode.com/todos/");

  let blah = await res.json();

  const data = blah?.data;

  console.log(blah);

  return (
    <div>
      <div className="min-h-[80vh]">
        <div className="container mx-auto px-10">
          <br />

          <div className="mx-auto w-full bg-white">
            <div className="overflow-x-auto sm:px-1">
              <div className="flex items-center justify-between pb-6">
                <h2 className="text-2xl font-semibold text-si-primary">
                  <AiFillDatabase className="mb-1 inline" />
                  Category List
                </h2>
                <div className="mt-4 flex items-center justify-between px-2">
                  <div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">
                          Create Category
                          <span className="ml-2">
                            <FaPlusCircle className="inline" />
                          </span>
                        </Button>
                      </DialogTrigger>

                      <DialogContent>
                        <AlertDialogHeader>
                          <DialogTitle>Create Category</DialogTitle>
                        </AlertDialogHeader>

                        <CreateCategoryForm />
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
              <hr />

              <table className="w-full table-auto border">
                <thead className="bg-gradient-to-r from-si-primary to-si-secondary text-white">
                  <tr className="text-left">
                    <th className="px-4 py-2">No</th>
                    <th className="px-4 py-2">Title</th>
                    <th className="px-4 py-2">Icon</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {data?.map((category, index) => (
                    <SingleCategory
                      key={category?._id}
                      index={index}
                      data={category}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
