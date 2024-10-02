import CreateCategoryForm from "@/components/DashboardComponent/Service-Category-page/CreateCategoryForm";
import SingleCategory from "@/components/DashboardComponent/Service-Category-page/SingleCategory";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AiFillDatabase } from "react-icons/ai";
import { FaPlusCircle } from "react-icons/fa";

async function fetchCategories() {
  const res = await fetch("http://localhost:5000/api/v1/category");

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
}

export default async function Page() {
  const categoryData = await fetchCategories();
  const data = categoryData?.data || [];

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
                        <DialogHeader>
                          <DialogTitle>Create Category</DialogTitle>
                        </DialogHeader>

                        <CreateCategoryForm />
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
              <hr />

              <table className="w-full table-auto border">
                <thead className="bg-blue-500">
                  <tr className="text-left">
                    <th className="px-4 py-2">No</th>
                    <th className="px-4 py-2">Title</th>
                    <th className="px-4 py-2">Icon</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {Array.isArray(data) && data.length > 0 ? (
                    data.map((category, index) => (
                      <SingleCategory
                        key={category._id || index}
                        index={index}
                        data={category}
                      />
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="px-4 py-2 text-center">
                        No categories found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
