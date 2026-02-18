import React from 'react';

function Header({ activeTab }) {
  const getHeaderInfo = () => {
    const info = {
      'Dashboard': { title: 'Dashboard', subtitle: 'Welcome back, Admin!' },
      'Analytics': { title: 'Analytics', subtitle: 'Your performance metrics' },
      'Users': { title: 'Users Management', subtitle: 'Manage your users' },
      'Products': { title: 'Products', subtitle: 'Manage your inventory' },
      'Settings': { title: 'Settings', subtitle: 'Configure your account' },
      'Reports': { title: 'Reports', subtitle: 'View and generate reports' },
      'Help': { title: 'Help & Support', subtitle: 'Get assistance' }
    };
    return info[activeTab] || info['Dashboard'];
  };

  const headerInfo = getHeaderInfo();

  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-sm border-b">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">{headerInfo.title}</h1>
        <p className="text-gray-500 text-sm">{headerInfo.subtitle}</p>
      </div>
      
      <div className="flex items-center gap-0">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="h-10 w-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
          A
        </div>
      </div>
    </header>
  );
}

export default Header;