import React from 'react';
import { Chart, Card, StatCard } from '../index';

function Products() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Products</h1>
        <p className="text-gray-600">Manage your product inventory</p>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Products"
          value="342"
          change={5}
          icon="📦"
        />
        <StatCard
          title="In Stock"
          value="289"
          change={3}
          icon="✅"
        />
        <StatCard
          title="Low Stock"
          value="34"
          change={2}
          icon="⚠️"
        />
        <StatCard
          title="Out of Stock"
          value="19"
          change={-4}
          icon="❌"
        />
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <Chart title="Sales by Category" />
        <Chart title="Inventory Movement" />
      </div>

      <Card title="Top Selling Products">
        <div className="space-y-4">
          {['Premium Widget', 'Standard Package', 'Deluxe Bundle', 'Basic Kit', 'Pro Suite'].map((product, i) => (
            <div key={product} className="flex justify-between items-center pb-3 border-b last:border-b-0">
              <span className="text-gray-700">{product}</span>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">Units: {(i + 1) * 150}</span>
                <span className="font-semibold text-gray-800">${(i + 1) * 1000}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}

export default Products;
