import Table from "../../components/Dashboard/Table";

const DashboardTable = () => {
  const columns = ["ID", "Name", "Status", "Created At"];
  const data = [
    { id: 1, name: "Compute Instance", status: "Running", created_at: "2025-01-20" },
    { id: 2, name: "Storage Bucket", status: "Available", created_at: "2025-01-18" },
    { id: 3, name: "Network Config", status: "Configured", created_at: "2025-01-15" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Resources Overview</h2>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default DashboardTable;
