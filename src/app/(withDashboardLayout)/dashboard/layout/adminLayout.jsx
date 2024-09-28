import SideNavbar from "../../components/sidebar/SideNavbar";

export default function AdminLayout({ children }) {
  return (
    <div className="grid grid-cols-12">
      <div className="md:col-span-2">
        <SideNavbar></SideNavbar>
      </div>
      <div className="col-span-12 md:col-span-10">
        <div className="mx-auto">{children}</div>
      </div>
    </div>
  );
}
