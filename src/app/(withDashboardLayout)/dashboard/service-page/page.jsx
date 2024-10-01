"use client";

import { useState, useEffect } from "react";
import { AiFillDatabase } from "react-icons/ai";
import { FaPlusCircle } from "react-icons/fa";
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
import Image from "next/image";
import CreateServiceForm from "@/components/DashboardComponent/Service-page/CreateServiceForm";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Pencil, Trash, Trash2 } from "lucide-react";
import UpdateServiceForm from "@/components/DashboardComponent/Service-page/UpdateServiceForm";
import { toast } from "sonner";
import axios from "axios";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/service"
        );
        setData(response.data.data.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [reload]);

  const handleDelete = async (serviceId) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/service/${serviceId}`);
      toast.success("Service deleted successfully!");
      setReload(true);
    } catch (error) {
      console.error("Failed to delete service:", error);
      toast.error("Failed to delete service. Please try again.");
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
                  Service List
                </h2>
                <div className="mt-4 flex items-center justify-between px-2">
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
        </div>
      </div>
    </div>
  );
};

export default Page;
