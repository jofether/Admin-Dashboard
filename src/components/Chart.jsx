import React from 'react';

function Chart({ title }) {
  // Simple bar chart visualization
  const data = [
    { label: 'Jan', value: 400 },
    { label: 'Feb', value: 520 },
    { label: 'Mar', value: 480 },
    { label: 'Apr', value: 650 },
    { label: 'May', value: 720 },
    { label: 'Jun', value: 680 }
  ];

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">{title}</h3>
      <div className="flex items-end justify-between gap-2 h-64">
        {data.map((item) => (
          <div key={item.label} className="flex flex-col items-center flex-1">
            <div className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg" 
                 style={{ height: `${(item.value / maxValue) * 100}%` }}></div>
            <p className="text-xs text-gray-500 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chart;
