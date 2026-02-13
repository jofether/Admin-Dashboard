import React from 'react';
import { Chart, Card, StatCard } from '../index';

function Analytics() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Analytics</h1>
        <p className="text-gray-600">Detailed insights and metrics</p>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Page Views"
          value="24,531"
          change={15}
          icon="👁️"
        />
        <StatCard
          title="Unique Visitors"
          value="12,234"
          change={7}
          icon="🌐"
        />
        <StatCard
          title="Avg. Time on Page"
          value="3m 45s"
          change={-2}
          icon="⏱️"
        />
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <Chart title="Page Views Over Time" />
        <Chart title="Traffic Sources" />
      </div>

      <Card title="Traffic Breakdown">
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-4 border-b">
            <span className="text-gray-700">Direct Traffic</span>
            <div className="flex items-center gap-3">
              <div className="w-48 bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{width: '45%'}}></div>
              </div>
              <span className="font-semibold text-gray-800">45%</span>
            </div>
          </div>
          <div className="flex items-center justify-between pb-4 border-b">
            <span className="text-gray-700">Organic Search</span>
            <div className="flex items-center gap-3">
              <div className="w-48 bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: '35%'}}></div>
              </div>
              <span className="font-semibold text-gray-800">35%</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Social Media</span>
            <div className="flex items-center gap-3">
              <div className="w-48 bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{width: '20%'}}></div>
              </div>
              <span className="font-semibold text-gray-800">20%</span>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}

export default Analytics;
