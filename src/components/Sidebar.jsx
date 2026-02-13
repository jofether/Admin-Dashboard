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
    /* 4. LAYERS BUG A: Negative z-index makes the sidebar sit behind the main background, making links unclickable if they overlap */
    /* FIX: className="w-64 bg-slate-800 text-white flex flex-col" */
    <aside className="w-64 bg-slate-800 text-white flex flex-col z-[-10] relative">
      <div className="p-6 text-2xl font-bold border-b border-slate-700">
        AdminPanel
      </div>
      <nav className="flex-1 px-4 space-y-2 py-6">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => onTabChange(item)}
            /* 5. TYPO BUG A: 'hoover' instead of 'hover'. The hover effect (lighter slate) will never trigger. */
            /* FIX: 'hover:bg-slate-700 text-gray-200' */
            className={`w-full text-left block py-2.5 px-4 rounded transition text-sm font-medium ${
              activeTab === item
                ? 'bg-blue-600 text-white'
                : 'hoover:bg-slate-700 text-gray-200'
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