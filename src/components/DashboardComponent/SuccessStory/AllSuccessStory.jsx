
"use client";

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Import Input component
import PaginationBlog from "@/components/shared/pagination/PaginationShadcn";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AiFillDatabase } from "react-icons/ai";
import { CgSpinnerAlt } from "react-icons/cg";
import { FaPlusCircle } from "react-icons/fa";
import CreateSuccessStory from "./CreateSuccessStory";
import SingleSuccessStory from "./SingleSuccessStory";

const AllSuccessStory = () => {
    const searchParams = useSearchParams();
    const [successStory, setSuccessStory] = useState([]);
    const [page, setPage] = useState(searchParams.get("page") || 1);
    const [limit, setLimit] = useState(searchParams.get("limit") || 5);
    const [totalSuccessStory, setTotalSuccessStory] = useState(0);
    const [reload, setReload] = useState(0);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    useEffect(() => {
        const fetchSuccessStory = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `http://localhost:5000/api/v1/successStory?page=${page}&limit=${limit}`
                );
                const data = await response.json();

                setSuccessStory(data?.data.result);
                setTotalSuccessStory(data?.data?.total);
            } catch (error) {
                console.error("Error fetching :", error);
            } finally {
                setLoading(false);
            }
        };
        fetchSuccessStory();
    }, [reload, page, limit]);

    const totalPage = Math.ceil(totalSuccessStory / limit);

    const handleSearch = (e) => {
        const newSearchTerm = e.target.value;
        setSearchQuery(newSearchTerm);
        setPage(1); // Reset to page 1 when a new search is performed
        updateURL(1, limit, newSearchTerm); // Update the URL with new search term
    };

    const updateURL = (newPage, newLimit, newSearchTerm) => {
        const params = new URLSearchParams();
        params.set("page", newPage);
        params.set("limit", newLimit);
        if (newSearchTerm) {
            params.set("search", newSearchTerm);
        }
        window.history.replaceState({}, '', `?${params.toString()}`); // Update the URL without reloading
    };

    // Filtered success stories based on search query
    const filteredStories = successStory.filter(story =>
        story.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <div className="min-h-[100vh]">
                <div className="container mx-auto px-10">
                    <br />

                    <div className="mx-auto w-full max-w-screen-lg bg-white p-8">
                        <div className="overflow-x-auto sm:px-1">
                            <div className="flex items-center justify-between pb-6">
                                <h2 className="text-2xl font-semibold text-[#F78C40]">
                                    <AiFillDatabase className="mb-1 inline"></AiFillDatabase>
                                    Success Story List
                                </h2>
                                <div className="mt-4 flex items-center justify-between px-2">
                                    {/* Search Input */}
                                    <Input
                                        type="text"
                                        placeholder="Search..."
                                        value={searchQuery}
                                        onChange={handleSearch}
                                        className="mr-4 w-64"
                                    />
                                    <div>
                                        <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                                <Button
                                                    className="cursor-pointer rounded-lg border  px-3 py-1 text-base font-semibold hover:text-white duration-500 hover:bg-[#F78C40] text-black"
                                                    variant="outline"
                                                >
                                                    Create Success Story{" "}
                                                    <span className="ml-2">
                                                        <FaPlusCircle className="inline" />
                                                    </span>{" "}
                                                </Button>
                                            </AlertDialogTrigger>

                                            <AlertDialogContent className="max-w-4xl">
                                                <CreateSuccessStory setReload={setReload} />

                                                <AlertDialogFooter>
                                                    <AlertDialogCancel className="bg-blue-500 hover:bg-blue-300 text-white">
                                                        Close
                                                    </AlertDialogCancel>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    </div>
                                </div>
                            </div>
                            <hr />

                            {loading ? (
                                <div className="flex min-h-[50vh] items-center justify-center">
                                    <span className="animate-spin text-si-primary">
                                        <CgSpinnerAlt className="h-10 w-10" />
                                    </span>
                                </div>
                            ) : (
                                <table className="w-full table-auto">
                                    <thead className="bg-gradient-to-r from-[#F78C40] to-[#F78C40] text-white">
                                        <tr className="text-left">
                                            <th className="px-4 py-2">No</th>
                                            <th className="py-2 pl-8">Company Name</th>
                                            <th className="py-2 pl-16">Project Name</th>
                                            <th className="py-2 pr-4">Details</th>
                                            <th className="px-4 pl-6">Actions</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {filteredStories.length > 0 ? (
                                            filteredStories.map((story, index) => (
                                                <SingleSuccessStory
                                                    key={story?._id}
                                                    index={index}
                                                    successStoryData={story}
                                                    setReload={setReload}
                                                />
                                            ))
                                        ) : (
                                            <p className="text-center">No Client Feedback Available.</p>
                                        )}
                                    </tbody>
                                </table>
                            )}
                        </div>
                        {!loading && (
                            <div className="mt-8">
                                <PaginationBlog data={{ page, limit, totalPage }} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllSuccessStory;

