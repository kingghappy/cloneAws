const Storage = () => {
    const storageData = [
      { id: 1, volume: 'Volume A', size: '50GB', status: 'In Use' },
      { id: 2, volume: 'Volume B', size: '100GB', status: 'Available' },
    ];
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Storage Management</h1>
        <p>View and manage your storage usage, including allocating and releasing storage resources.</p>
        <table className="table-auto w-full mt-4">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Volume</th>
              <th className="px-4 py-2">Size</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {storageData.map(storage => (
              <tr key={storage.id}>
                <td className="border px-4 py-2">{storage.id}</td>
                <td className="border px-4 py-2">{storage.volume}</td>
                <td className="border px-4 py-2">{storage.size}</td>
                <td className="border px-4 py-2">{storage.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Storage;