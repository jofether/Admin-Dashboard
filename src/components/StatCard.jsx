import React from 'react';

function StatCard({ title, value, change, icon }) {
  const isPositive = change > 0;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition">
      <div className="flex justify-between items-start mb-4">
        <div className="text-gray-500 text-sm font-medium">{title}</div>
        <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
          {icon || '📊'}
        </div>
      </div>
      <div className="text-3xl font-bold text-gray-800">{value}</div>
      <div className={`text-sm font-medium mt-2 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
        {isPositive ? '+' : ''}{change}% from last month
      </div>
    </div>
  );
}

export default StatCard;
