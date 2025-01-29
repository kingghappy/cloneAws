const Compute = () => {
  const containers = [
    { id: 1, name: "Container A", status: "Running" },
    { id: 2, name: "Container B", status: "Stopped" },
    { id: 3, name: "Container C", status: "Running" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Compute Management</h1>
      <p>
        Manage your compute resources here, including creating, starting,
        stopping, and deleting containers.
      </p>
      <table className="table-auto w-full mt-4">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {containers.map((container) => (
            <tr key={container.id}>
              <td className="border px-4 py-2">{container.id}</td>
              <td className="border px-4 py-2">{container.name}</td>
              <td className="border px-4 py-2">{container.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Compute;
