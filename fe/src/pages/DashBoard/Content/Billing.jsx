const Billing = () => {
    const transactions = [
      { id: 1, date: '2025-01-15', amount: '$50', status: 'Completed' },
      { id: 2, date: '2025-01-16', amount: '$75', status: 'Pending' },
    ];
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Billing</h1>
        <p>View your billing history, manage payment methods, and review current charges.</p>
        <table className="table-auto w-full mt-4">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td className="border px-4 py-2">{transaction.id}</td>
                <td className="border px-4 py-2">{transaction.date}</td>
                <td className="border px-4 py-2">{transaction.amount}</td>
                <td className="border px-4 py-2">{transaction.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Billing;