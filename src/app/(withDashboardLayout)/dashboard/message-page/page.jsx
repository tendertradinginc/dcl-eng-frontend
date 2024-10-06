import MessageMainpage from "@/components/DashboardComponent/Message/MessageMainpage";
import { Suspense } from "react";

const messagePage = () => {
  return (
    <div className="w-full p-5 md:p-10">
      <Suspense fallback={<div>Loading...</div>}>
        <MessageMainpage />
      </Suspense>
    </div>
  );
};

export default messagePage;
