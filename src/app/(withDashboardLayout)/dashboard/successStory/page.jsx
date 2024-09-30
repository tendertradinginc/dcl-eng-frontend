import AllSuccessStory from "@/components/DashboardComponent/SuccessStory/AllSuccessStory";
import { Suspense } from "react";
const SuccessStory = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <AllSuccessStory />
            </Suspense>
        </div>
    );
};

export default SuccessStory;
