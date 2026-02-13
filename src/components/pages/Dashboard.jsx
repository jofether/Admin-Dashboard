import React from 'react';
import { StatCard, Chart, Table, Card } from '../index';

function Dashboard() {
  return (
    <>
      {/* Statistics Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Revenue"
          value="$45,231"
          change={12}
          icon="💰"
        />
        <StatCard
          title="Total Users"
          value="8,234"
          change={8}
          icon="👥"
        />
        <StatCard
          title="Orders"
          value="1,429"
          change={-3}
          icon="📦"
        />
        <StatCard
          title="Conversion Rate"
          value="3.24%"
          change={2}
          icon="📈"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <Chart title="Revenue Trend" />
        <Chart title="User Growth" />
      </div>

      {/* Additional Info Cards */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <Card title="Quick Stats">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Avg. Session Time</span>
              <span className="font-semibold text-gray-800">4m 32s</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Bounce Rate</span>
              <span className="font-semibold text-gray-800">32.4%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Pages Per Session</span>
              <span className="font-semibold text-gray-800">5.2</span>
            </div>
          </div>
        </Card>
        <Card title="Recent Activity">
          <div className="space-y-3">
            <div className="pb-3 border-b">
              <p className="text-sm text-gray-700">New user registered</p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
            <div className="pb-3 border-b">
              <p className="text-sm text-gray-700">Order completed</p>
              <p className="text-xs text-gray-500">5 hours ago</p>
            </div>
            <div>
              <p className="text-sm text-gray-700">System backup completed</p>
              <p className="text-xs text-gray-500">1 day ago</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Table */}
      <Table />
    </>
  );
}

export default Dashboard;
