import { data } from "@/lib/data";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useMemo } from "react";
import { dataProps } from "@/lib/type";

const AdminDashboard = () => {
  //to memoize and prvent the data recreation on every render
  const userData: dataProps[] = useMemo(() => data, []);

  return (
    <div className="max-w-5xl mx-auto">
      <DataTable data={userData} columns={columns} />
    </div>
  );
};

export default AdminDashboard;
