import AllClientFeedback from "@/components/DashboardComponent/ClientFeedback/AllClientFeedback";
import { Suspense } from "react";
const ClientsFeedbackPage = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <AllClientFeedback />
            </Suspense>
        </div>
    );
};

export default ClientsFeedbackPage;
