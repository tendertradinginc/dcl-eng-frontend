import SideNavbar from "@/components/DashboardComponent/sidebar/SideNavbar";
import { Suspense } from "react";

export default function AdminLayout({ children }) {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 md:col-span-2">
        <SideNavbar></SideNavbar>
      </div>
      <div className="col-span-12 md:col-span-10">
        <Suspense fallback={<div>Loading...</div>}>
          <div className="mx-auto">{children}</div>
        </Suspense>
      </div>
    </div>
  );
}
