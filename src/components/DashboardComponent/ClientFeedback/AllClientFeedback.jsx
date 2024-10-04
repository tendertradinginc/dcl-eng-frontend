"use client";

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

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

    useEffect(() => {
        const fetchClientFeedback = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `http://localhost:5000/api/v1/clientFeedback?page=${page}&limit=${limit}`
                );
                const data = await response.json();

                setClientFeedback(data?.data.result);
                setTotalClientFeedback(data?.data?.total);
            } catch (error) {
                console.error("Error fetching :", error);
            } finally {
                setLoading(false);
            }
        };
        fetchClientFeedback();
    }, [reload, page, limit]);

    const totalPage = Math.ceil(totalClientFeedback / limit);



    // loading skeleton
    // const skeleton = new Array(10).fill(Math.random());

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
                                    Client Feedback List
                                </h2>
                                <div className="mt-4 flex items-center justify-between px-2">
                                    <div>
                                        <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                                <Button
                                                    className="cursor-pointer rounded-lg border bg-secondary px-3 py-1 text-base font-semibold  hover:text-white duration-500 hover:bg-[#F78C40] text-black"
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
                                        {clientFeedback.length > 0 ? (
                                            clientFeedback?.map((feedback, index) => (
                                                <SingleFeedback
                                                    key={clientFeedback?._id}
                                                    index={index}
                                                    clientFeedbackData={feedback}
                                                    setReload={setReload}
                                                />
                                            ))
                                        ) : (
                                            <p className="text center">No Client Feedback Available.</p>
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
