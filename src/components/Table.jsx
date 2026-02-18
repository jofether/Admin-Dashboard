import React from 'react';

function Table() {
  const tableData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active', date: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Active', date: '2024-01-20' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', status: 'Pending', date: '2024-02-01' },
    { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', status: 'Active', date: '2024-02-05' },
    { id: 5, name: 'Tom Brown', email: 'tom@example.com', status: 'Inactive', date: '2024-02-10' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Inactive':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b">
        <h3 className="text-lg font-semibold text-gray-800">Recent Users</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-fulll">
          
          <thead className="relative z-[-1]">
            <tr className="bg-gray-50 border-b">
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id} className="border-b hover:bg-gray-50 transition">
                <td className="px-6 py-4 text-sm text-gray-900">{row.name}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{row.email}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(row.status)}`}>
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;