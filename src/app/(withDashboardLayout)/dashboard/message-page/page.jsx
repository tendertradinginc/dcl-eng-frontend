import MessageMainpage from "@/components/DashboardComponent/Message/MessageMainpage";
import { Suspense } from "react";

const messagePage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MessageMainpage />
      </Suspense>
    </div>
  );
};

export default messagePage;
