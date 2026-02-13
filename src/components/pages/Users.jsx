import React from 'react';
import { Card, StatCard, Table } from '../index';

function Users() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Users Management</h1>
        <p className="text-gray-600">Manage and view all users</p>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Total Users"
          value="8,234"
          change={12}
          icon="👥"
        />
        <StatCard
          title="Active Users"
          value="6,421"
          change={8}
          icon="✅"
        />
        <StatCard
          title="Inactive Users"
          value="1,813"
          change={-5}
          icon="⏸️"
        />
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <Card title="User Demographics">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Ages 18-25</span>
              <span className="font-semibold text-gray-800">25%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Ages 26-35</span>
              <span className="font-semibold text-gray-800">35%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Ages 36-45</span>
              <span className="font-semibold text-gray-800">25%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Ages 46+</span>
              <span className="font-semibold text-gray-800">15%</span>
            </div>
          </div>
        </Card>
        <Card title="User Status">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Premium Users</span>
              <span className="font-semibold text-blue-600">2,145 (26%)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Free Users</span>
              <span className="font-semibold text-gray-600">4,276 (52%)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Trial Users</span>
              <span className="font-semibold text-yellow-600">1,813 (22%)</span>
            </div>
          </div>
        </Card>
      </div>

      <Table />
    </>
  );
}

export default Users;
