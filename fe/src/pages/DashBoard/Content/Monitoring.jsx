const Monitoring = () => {
    const metrics = [
      { id: 1, type: 'CPU Usage', value: '45%' },
      { id: 2, type: 'Memory Usage', value: '60%' },
      { id: 3, type: 'Network Traffic', value: '1.2Gbps' },
    ];
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Monitoring</h1>
        <p>Monitor the performance of your resources, including CPU usage, memory usage, and network traffic.</p>
        <table className="table-auto w-full mt-4">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Metric</th>
              <th className="px-4 py-2">Value</th>
            </tr>
          </thead>
          <tbody>
            {metrics.map(metric => (
              <tr key={metric.id}>
                <td className="border px-4 py-2">{metric.id}</td>
                <td className="border px-4 py-2">{metric.type}</td>
                <td className="border px-4 py-2">{metric.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Monitoring;