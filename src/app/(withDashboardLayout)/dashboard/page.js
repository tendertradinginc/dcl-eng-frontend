import BarChartData from "@/components/DashboardComponent/DashboardHome/BarChartData";
import PieChartData from "@/components/DashboardComponent/DashboardHome/PieChartData";
import TotalClients from "@/components/DashboardComponent/DashboardHome/TotalClients";
import TotalConstructionBlogs from "@/components/DashboardComponent/DashboardHome/TotalConstractionBlogs";
import TotalFurnitureEquipments from "@/components/DashboardComponent/DashboardHome/TotalFurnitureEquipments";
import TotalMedicalEquipments from "@/components/DashboardComponent/DashboardHome/TotalMedicalEquipments";

const dashboardPage = () => {
  return (
    <div className="w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 px-4">
        <TotalConstructionBlogs />
        <TotalMedicalEquipments />
        <TotalFurnitureEquipments />
        <TotalClients />
      </div>
      <div className="flex mt-4 px-4 pb-6">
        <div className="w-3/5">
          <BarChartData />
        </div>
        <div className="w-2/5">
          <PieChartData />
        </div>
      </div>
    </div>
  );
};

export default dashboardPage;
