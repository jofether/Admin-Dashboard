import React from 'react';
import { Card } from '../index';

function Settings() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Settings</h1>
        <p className="text-gray-600">Configure your application settings</p>
      </div>

      <div className="max-w-2xl space-y-6">
        <Card title="Account Settings">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
              <input type="text" defaultValue="Admin Corp" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" defaultValue="admin@example.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Save Changes</button>
          </div>
        </Card>

        <Card title="Security">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Change Password</label>
              <input type="password" placeholder="Current Password" className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="password" placeholder="New Password" className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="password" placeholder="Confirm Password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Update Password</button>
          </div>
        </Card>

        <Card title="Preferences">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-4 border-b">
              <label className="text-gray-700">Email Notifications</label>
              <input type="checkbox" defaultChecked className="w-4 h-4" />
            </div>
            <div className="flex items-center justify-between pb-4 border-b">
              <label className="text-gray-700">Dark Mode</label>
              <input type="checkbox" className="w-4 h-4" />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-gray-700">Data Export</label>
              <button className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 transition">Download</button>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Settings;
