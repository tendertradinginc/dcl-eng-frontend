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
import CreateClientFeedback from "./CreateClientFeedback";
import SingleFeedback from "./SingleFeedback";

const AllClientFeedback = () => {
    const searchParams = useSearchParams();
    const [clientFeedback, setClientFeedback] = useState([]);
    const [page, setPage] = useState(searchParams.get("page") || 1);
    const [limit, setLimit] = useState(searchParams.get("limit") || 5);
    const [totalClientFeedback, setTotalClientFeedback] = useState(0);
    const [reload, setReload] = useState(0);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState(""); // Search query state

    // Fetch client feedback data, including search
    useEffect(() => {
        const fetchClientFeedback = async () => {
            setLoading(true);
            try {
                // Fetch data from the backend, passing search query if it exists
                const response = await fetch(
                    `http://localhost:5000/api/v1/clientFeedback?page=${page}&limit=${limit}`
                );
                const data = await response.json();

                // Update feedback and total count
                setClientFeedback(data?.data?.result);
                setTotalClientFeedback(data?.data?.total);
            } catch (error) {
                console.error("Error fetching client feedback:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchClientFeedback();
    }, [reload, page, limit]);

    const totalPage = Math.ceil(totalClientFeedback / limit);


    const handleSearch = (e) => {
        const newSearchTerm = e.target.value;
        setSearchQuery(newSearchTerm);
        setPage(1); // Reset to page 1 when a new search is performed
        updateURL(1, limit, newSearchTerm); // Update the URL with new search term
    };

    // Update the URL with the search term
    const updateURL = (newPage, newLimit, newSearchTerm) => {
        const params = new URLSearchParams();
        params.set("page", newPage);
        params.set("limit", newLimit);
        if (newSearchTerm) {
            params.set("search", newSearchTerm);
        }
        window.history.replaceState({}, '', `?${params.toString()}`); // Update the URL without reloading
    };


    const filteredFeedback = clientFeedback.filter(feedback =>
        feedback.authorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        feedback.authorDesignation.toLowerCase().includes(searchQuery.toLowerCase())
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
                                    <AiFillDatabase className="mb-1 inline" />
                                    Client Feedback List
                                </h2>
                                <div className="mt-4 flex items-center justify-between px-2">
                                    {/* Search Input */}
                                    <Input
                                        type="text"
                                        placeholder="Search by name or designation..."
                                        value={searchQuery}
                                        onChange={handleSearch}
                                        className="mr-4 w-64"
                                    />
                                    <div>
                                        <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                                <Button
                                                    className="cursor-pointer rounded-lg border bg-secondary px-3 py-1 text-base font-semibold hover:text-white duration-500 hover:bg-[#F78C40] text-black"
                                                    variant="outline"
                                                >
                                                    Create Client Feedback{" "}
                                                    <span className="ml-2">
                                                        <FaPlusCircle className="inline" />
                                                    </span>{" "}
                                                </Button>
                                            </AlertDialogTrigger>

                                            <AlertDialogContent className="max-w-4xl">
                                                <CreateClientFeedback setReload={setReload} />

                                                <AlertDialogFooter>
                                                    <AlertDialogCancel className="bg-blue-700 hover:bg-blue-300 text-white">
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
                                            <th className="py-2 pl-8">Author</th>
                                            <th className="py-2 pl-8">Image</th>
                                            <th className="py-2 pl-16">Designation</th>
                                            <th className="py-2 pl-8">Details</th>
                                            <th className="px-4 pl-6">Actions</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {filteredFeedback.length > 0 ? (
                                            filteredFeedback.map((feedback, index) => (
                                                <SingleFeedback
                                                    key={feedback._id}
                                                    index={index}
                                                    clientFeedbackData={feedback}
                                                    setReload={setReload}
                                                />
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="6" className="text-center">
                                                    No Client Feedback Available.
                                                </td>
                                            </tr>
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

export default AllClientFeedback;
