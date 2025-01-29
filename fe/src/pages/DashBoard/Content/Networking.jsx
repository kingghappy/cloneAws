const Networking = () => {
    const networks = [
      { id: 1, name: 'Network A', type: 'Private', status: 'Active' },
      { id: 2, name: 'Network B', type: 'Public', status: 'Inactive' },
    ];
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Networking Management</h1>
        <p>Configure and monitor your network resources, such as virtual networks, subnets, and firewall rules.</p>
        <table className="table-auto w-full mt-4">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {networks.map(network => (
              <tr key={network.id}>
                <td className="border px-4 py-2">{network.id}</td>
                <td className="border px-4 py-2">{network.name}</td>
                <td className="border px-4 py-2">{network.type}</td>
                <td className="border px-4 py-2">{network.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Networking;