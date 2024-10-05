"use client";

import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import Image from "next/image";
import CreateCategoryForm from "@/components/DashboardComponent/Service-Category-page/CreateCategoryForm";
import UpdateCategoryForm from "@/components/DashboardComponent/Service-Category-page/UpdateCategoryForm";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AiFillDatabase } from "react-icons/ai";
import { FaPlusCircle } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CaretDownIcon, Pencil1Icon } from "@radix-ui/react-icons";
import { Trash2 } from "lucide-react";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(0);
  const [data, setData] = useState(null);
  const [metadata, setMetadata] = useState(null);

  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const currentLimit = parseInt(searchParams.get("limit") || "10", 10);
  const currentSearch = searchParams.get("search") || "";

  const [selectedPage, setSelectedPage] = useState(currentPage);
  const [selectedLimit, setSelectedLimit] = useState(currentLimit);
  const [searchTerm, setSearchTerm] = useState(currentSearch);
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/category?page=${selectedPage}&limit=${selectedLimit}&search=${debouncedSearchTerm}`
        );
        setData(response.data.data);
        setMetadata(response.data.metadata);
      } catch (error) {
        console.error("Error fetching categories:", error);
        toast.error("Failed to fetch categories. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [reload, selectedPage, selectedLimit, debouncedSearchTerm]);

  const handleSearch = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    setSelectedPage(1);
    updateURL(1, selectedLimit, newSearchTerm);
  };

  const handlePageChange = (newPage, newLimit) => {
    setSelectedPage(newPage);
    setSelectedLimit(newLimit);
    updateURL(newPage, newLimit, searchTerm);
  };

  const updateURL = (page, limit, search) => {
    router.push(
      `/dashboard/service-category?page=${page}&limit=${limit}&search=${search}`
    );
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/category/${id}`);
      toast.success("Category Deleted Successfully!");
      setReload((prev) => prev + 1);
    } catch (error) {
      toast.error("Failed to delete the category. Try again later.");
      console.error("Failed to delete the category:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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
                <div className="flex items-center gap-2">
                  <div>
                    <Input
                      type="text"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={handleSearch}
                    />
                  </div>
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

                        <CreateCategoryForm setReload={setReload} />
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
                    <th className="px-4 py-2">Image</th>
                    <th className="px-4 py-2">Title</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {data && data.length > 0 ? (
                    data.map((category, index) => (
                      <tr
                        key={category._id}
                        className={index % 2 === 1 ? "bg-[#f2f2f2]" : ""}
                      >
                        <td className="px-4 py-1">{index + 1}</td>
                        <td className="px-4 py-1">
                          <Image
                            className="h-12 w-12"
                            width={48}
                            height={48}
                            src={
                              category.img ||
                              "https://picsum.photos/id/237/200/300"
                            }
                            alt={category.name || "Category Image"}
                          />
                        </td>
                        <td className="px-4 py-1 font-semibold text-blue-900">
                          {category.name || "N/A"}
                        </td>
                        <td className="flex items-center space-x-3 py-2 md:px-4">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="icon">
                                <Pencil1Icon />
                              </Button>
                            </DialogTrigger>

                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Update Category</DialogTitle>
                              </DialogHeader>

                              <UpdateCategoryForm
                                categoryId={category._id}
                                setReload={setReload}
                              />
                            </DialogContent>
                          </Dialog>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="destructive" size="icon">
                                <Trash2 />
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Are you sure?</DialogTitle>
                              </DialogHeader>
                              <div className="py-4">
                                <p>
                                  This action will permanently delete this
                                  category from the database. This cannot be
                                  undone.
                                </p>
                              </div>
                              <DialogFooter>
                                <DialogClose asChild>
                                  <Button type="button">Cancel</Button>
                                </DialogClose>
                                <Button
                                  variant="destructive"
                                  onClick={() => handleDelete(category._id)}
                                >
                                  Delete
                                </Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        </td>
                      </tr>
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

          {metadata && (
            <section className="flex flex-col lg:flex-row items-center justify-between my-10">
              <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-10 mb-5 lg:mb-0">
                <p className="font-semibold">
                  Page {metadata.page} of {metadata.totalPages}
                </p>

                <div className="flex items-center gap-2">
                  <p className="font-semibold">Content per page</p>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="sm" className="gap-1">
                        {selectedLimit} <CaretDownIcon />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="min-w-min flex items-center gap-2">
                      {[10, 20, 30, 40, 50, 100].map((limit) => (
                        <DropdownMenuItem
                          key={limit}
                          asChild
                          onSelect={() => handlePageChange(1, limit)}
                        >
                          <Button size="sm">{limit}</Button>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="flex items-center gap-2">
                  <p className="font-semibold">Current page</p>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="sm" className="gap-1">
                        {selectedPage} <CaretDownIcon />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <ScrollArea className="w-44 md:w-96 whitespace-nowrap rounded-md">
                        <div className="w-max flex items-center gap-2 py-2 mb-2">
                          {Array.from(
                            { length: metadata.totalPages },
                            (_, i) => i + 1
                          ).map((page) => (
                            <DropdownMenuItem
                              key={page}
                              asChild
                              onSelect={() =>
                                handlePageChange(page, selectedLimit)
                              }
                            >
                              <Button size="sm">{page}</Button>
                            </DropdownMenuItem>
                          ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                      </ScrollArea>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <div className="space-x-2">
                <Button
                  size="sm"
                  onClick={() =>
                    handlePageChange(selectedPage - 1, selectedLimit)
                  }
                  disabled={selectedPage === 1}
                >
                  Prev
                </Button>
                <Button
                  size="sm"
                  onClick={() =>
                    handlePageChange(selectedPage + 1, selectedLimit)
                  }
                  disabled={selectedPage === metadata.totalPages}
                >
                  Next
                </Button>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
