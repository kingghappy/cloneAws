
const TransactionHistory = ({ transactions }) => {
  if (!transactions.length) {
    return <p className="text-gray-600 text-sm">No transactions found.</p>;
  }
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-bold mb-4">Transaction History</h3>
      <ul className="space-y-2">
        {transactions.map((tx, index) => (
          <li key={index} className="flex justify-between">
            <span>{tx.date}</span>
            <span className={tx.amount > 0 ? "text-green-600" : "text-red-600"}>
              {tx.amount > 0 ? `+${tx.amount}` : tx.amount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
