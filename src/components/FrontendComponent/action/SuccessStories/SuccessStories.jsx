"use client"


import SuccessStoryCard from './SuccessStoryCard';
import { CgSpinnerAlt } from 'react-icons/cg';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import PaginationBlog from '@/components/shared/pagination/PaginationShadcn';

const SuccessStories = () => {

    const searchParams = useSearchParams();
    const [successStory, setSuccessStory] = useState([]);
    const [page, setPage] = useState(searchParams.get("page") || 1);
    const [limit, setLimit] = useState(searchParams.get("limit") || 5);
    const [totalSuccessStory, setTotalSuccessStory] = useState(0);
    const [reload, setReload] = useState(0);
    const [loading, setLoading] = useState(true);

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

    return (
        <div>
            <div>

                {/* Main Section  */}
                <div className="flex flex-col">
                    {loading ? (
                        <div className="flex min-h-[50vh] items-center justify-center">
                            <span className="animate-spin text-[#F78C40]">
                                <CgSpinnerAlt className="h-10 w-10" />
                            </span>
                        </div>
                    )
                        : successStory.length > 0 ? (
                            successStory?.map((story, index) => (
                                <SuccessStoryCard
                                    key={successStory?._id}
                                    index={index}
                                    successStoryData={story}
                                    setReload={setReload}
                                />
                            )))
                            : (
                                <p className="text center">No Success Story Available.</p>
                            )}
                </div>
                {!loading && (
                    <div className="mt-8">
                        <PaginationBlog data={{ page, limit, totalPage }} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default SuccessStories;