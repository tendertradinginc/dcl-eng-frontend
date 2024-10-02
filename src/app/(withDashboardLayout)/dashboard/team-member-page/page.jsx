"use client";

import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { AiOutlineTeam } from "react-icons/ai";
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
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import CreateTeamMemberForm from "@/components/DashboardComponent/TeamMembers/CreateTeamMemberForm";
import UpdateTeamMemberForm from "@/components/DashboardComponent/TeamMembers/UpdateTeamMemberForm";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(false);
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
          `http://localhost:5000/api/v1/teamMember?page=${selectedPage}&limit=${selectedLimit}&search=${debouncedSearchTerm}`
        );
        setData(response.data.data);
        setMetadata(response.data.metadata);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to fetch team members. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [reload, selectedPage, selectedLimit, debouncedSearchTerm]);

  const handleDelete = async (teamMemberId) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/v1/teamMember/${teamMemberId}`
      );
      toast.success("Team member deleted successfully!");
      setReload((prev) => !prev);
    } catch (error) {
      console.error("Failed to delete team member:", error);
      toast.error("Failed to delete team member. Please try again.");
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
      `/dashboard/team-member-page?page=${page}&limit=${limit}&search=${search}`
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
                  <AiOutlineTeam className="mb-1 inline" />
                  Team Members List
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
                          Add Team Member
                          <span className="ml-2">
                            <FaPlusCircle className="inline" />
                          </span>
                        </Button>
                      </DialogTrigger>

                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Add Team Member</DialogTitle>
                        </DialogHeader>

                        <ScrollArea className="h-[400px]">
                          <CreateTeamMemberForm setReload={setReload} />
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
                    <th className="px-4 py-2">Designation</th>
                    <th className="px-4 py-2">Social Media</th>
                    <th className="px-4 py-2">Featured Status</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {data && data.length > 0 ? (
                    data.map((member, index) => (
                      <tr key={member._id || index}>
                        <td className="px-4 py-2">{index + 1}</td>
                        <td className="px-4 py-2">{member.name}</td>
                        <td className="px-4 py-2">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={40}
                            height={40}
                            className="object-cover rounded-full"
                          />
                        </td>
                        <td className="px-4 py-2">{member.designation}</td>
                        <td className="px-4 py-2">
                          {member.socialMedia.facebook && (
                            <a
                              href={member.socialMedia.facebook}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mr-2"
                            >
                              FB
                            </a>
                          )}
                          {member.socialMedia.linkedin && (
                            <a
                              href={member.socialMedia.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mr-2"
                            >
                              LI
                            </a>
                          )}
                          {member.socialMedia.whatsapp && (
                            <span>WA: {member.socialMedia.whatsapp}</span>
                          )}
                        </td>
                        <td className="px-4 py-2">
                          {member.featuredStatus ? "Yes" : "No"}
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
                                <DialogTitle>Update Team Member</DialogTitle>
                              </DialogHeader>
                              <ScrollArea className="h-[400px]">
                                <UpdateTeamMemberForm
                                  memberId={member._id}
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
                                  Are you sure you want to delete this team
                                  member? This action cannot be undone.
                                </DialogDescription>
                              </DialogHeader>
                              <DialogFooter>
                                <DialogClose asChild>
                                  <Button variant="outline">Cancel</Button>
                                </DialogClose>
                                <Button
                                  variant="destructive"
                                  onClick={() => handleDelete(member._id)}
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
                      <td colSpan="7" className="px-4 py-2 text-center">
                        No team members found.
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
