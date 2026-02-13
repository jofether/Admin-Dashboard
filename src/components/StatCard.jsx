import React from 'react';

function StatCard({ title, value, change, icon }) {
  const isPositive = change > 0;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition">
      {/* 7. LAYOUT BUG B: Removed 'flex justify-between'. The icon will stack on top of the title instead of floating right. */ }
      {/* FIX: className="flex justify-between items-start mb-4" */}
      <div className="block items-start mb-4">
        <div className="text-gray-500 text-sm font-medium">{title}</div>
        <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
          {icon || '📊'}
        </div>
      </div>
      <div className="text-3xl font-bold text-gray-800">{value}</div>
      
      {/* 8. COLOR BUG B: Semantic swap. Green is now Red, Red is now Green. Confusing data representation. */ }
      {/* FIX: className={`text-sm font-medium mt-2 ${isPositive ? 'text-green-600' : 'text-red-600'}`} */}
      <div className={`text-sm font-medium mt-2 ${isPositive ? 'text-red-600' : 'text-green-600'}`}>
        {isPositive ? '+' : ''}{change}% from last month
      </div>
    </div>
  );
}

export default StatCard;