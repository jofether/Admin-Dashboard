import React from 'react';
import { Chart, Card, StatCard } from '../index';

function Reports() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Reports</h1>
        <p className="text-gray-600">View and generate reports</p>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Total Reports"
          value="156"
          change={18}
          icon="📊"
        />
        <StatCard
          title="Generated This Month"
          value="42"
          change={11}
          icon="📈"
        />
        <StatCard
          title="Pending Reports"
          value="8"
          change={-3}
          icon="⏳"
        />
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <Chart title="Report Generation Trend" />
        <Chart title="Report Types Distribution" />
      </div>

      <Card title="Recent Reports">
        <div className="space-y-3">
          {[
            { name: 'Quarterly Revenue Report', date: '2024-02-10', status: 'Completed' },
            { name: 'User Activity Analysis', date: '2024-02-09', status: 'Completed' },
            { name: 'Product Performance Report', date: '2024-02-08', status: 'In Progress' },
            { name: 'Market Analysis', date: '2024-02-07', status: 'Completed' },
            { name: 'Customer Satisfaction Survey', date: '2024-02-06', status: 'Pending' },
          ].map((report) => (
            <div key={report.name} className="flex justify-between items-center pb-3 border-b last:border-b-0">
              <div>
                <p className="text-gray-700 font-medium">{report.name}</p>
                <p className="text-xs text-gray-500">{report.date}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                report.status === 'Completed' ? 'bg-green-100 text-green-800' :
                report.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {report.status}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}

export default Reports;
