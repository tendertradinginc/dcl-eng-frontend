import BannderTable from "@/components/DashboardComponent/BannerComponent/BannderTable";
import { Suspense } from "react";

const bannerPage = () => {
  return (
    <div className="w-full p-5 md:p-10">
      <Suspense fallback={<div>Loading...</div>}>
        <BannderTable />
      </Suspense>
    </div>
  );
};

export default bannerPage;
