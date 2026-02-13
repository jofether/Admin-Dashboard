import React from 'react';

function Sidebar({ activeTab, onTabChange }) {
  const navItems = [
    'Dashboard',
    'Analytics',
    'Users',
    'Products',
    'Settings',
    'Reports',
    'Help'
  ];

  return (
    <aside className="w-64 bg-slate-800 text-white flex flex-col">
      <div className="p-6 text-2xl font-bold border-b border-slate-700">
        AdminPanel
      </div>
      <nav className="flex-1 px-4 space-y-2 py-6">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => onTabChange(item)}
            className={`w-full text-left block py-2.5 px-4 rounded transition text-sm font-medium ${
              activeTab === item
                ? 'bg-blue-600 text-white'
                : 'hover:bg-slate-700 text-gray-200'
            }`}
          >
            {item}
          </button>
        ))}
      </nav>
      <div className="p-4 bg-slate-900 border-t border-slate-700">
        <p className="text-sm text-gray-400">Logged in as</p>
        <p className="text-white font-semibold mt-1">Admin User</p>
      </div>
    </aside>
  );
}

export default Sidebar;
