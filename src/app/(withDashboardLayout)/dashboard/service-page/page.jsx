"use client";

import CreateServiceForm from "@/components/DashboardComponent/Service-page/CreateServiceForm";
import UpdateServiceForm from "@/components/DashboardComponent/Service-page/UpdateServiceForm";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { CaretDownIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AiFillDatabase } from "react-icons/ai";
import { FaPlusCircle } from "react-icons/fa";
import { toast } from "sonner";
import { useDebounce } from "use-debounce";

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
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/service?page=${selectedPage}&limit=${selectedLimit}&search=${debouncedSearchTerm}`
        );
        setData(response.data.data);
        setMetadata(response.data.metadata);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to fetch services. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [reload, selectedPage, selectedLimit, debouncedSearchTerm]);

  const handleDelete = async (serviceId) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/service/${serviceId}`);
      toast.success("Service deleted successfully!");
      setReload((prev) => !prev);
    } catch (error) {
      console.error("Failed to delete service:", error);
      toast.error("Failed to delete service. Please try again.");
    }
  };

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
      `/dashboard/service-page?page=${page}&limit=${limit}&search=${search}`
    );
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
              <div className="flex items-center justify-between py-6 px-2">
                <h2 className="text-2xl font-semibold text-si-primary">
                  <AiFillDatabase className="mb-1 inline" />
                  Service List
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
                          Create Service
                          <span className="ml-2">
                            <FaPlusCircle className="inline" />
                          </span>
                        </Button>
                      </DialogTrigger>

                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Create Service</DialogTitle>
                        </DialogHeader>

                        <ScrollArea className="h-[400px]">
                          <CreateServiceForm setReload={setReload} />
                        </ScrollArea>
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
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Image</th>
                    <th className="px-4 py-2">Category</th>
                    <th className="px-4 py-2">Featured Status</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {data && data.length > 0 ? (
                    data.map((service, index) => (
                      <tr key={service._id || index}>
                        <td className="px-4 py-2">{index + 1}</td>
                        <td className="px-4 py-2">{service.name}</td>
                        <td className="px-4 py-2">
                          <Image
                            src={service.image}
                            alt={service.name}
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </td>
                        <td className="px-4 py-2">{service.category}</td>
                        <td className="px-4 py-2">
                          {service.featuredStatus ? "Yes" : "No"}
                        </td>
                        <td className="px-4 py-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="icon">
                                <Pencil />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                              <DialogHeader>
                                <DialogTitle>Update Service</DialogTitle>
                              </DialogHeader>
                              <ScrollArea className="h-[400px]">
                                <UpdateServiceForm
                                  serviceId={service._id}
                                  setReload={setReload}
                                />
                              </ScrollArea>
                            </DialogContent>
                          </Dialog>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="destructive"
                                size="icon"
                                className="ml-2"
                              >
                                <Trash2 />
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Confirm Deletion</DialogTitle>
                                <DialogDescription>
                                  Are you sure you want to delete this service?
                                  This action cannot be undone.
                                </DialogDescription>
                              </DialogHeader>
                              <DialogFooter>
                                <DialogClose asChild>
                                  <Button variant="outline">Cancel</Button>
                                </DialogClose>
                                <Button
                                  variant="destructive"
                                  onClick={() => handleDelete(service._id)}
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
                      <td colSpan="6" className="px-4 py-2 text-center">
                        No services found.
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
