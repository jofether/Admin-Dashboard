// synthetic-repo-02/src/App.js
import React from 'react';

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-800 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold">AdminPanel</div>
        <nav className="flex-1 px-4 space-y-2">
          {['Dashboard', 'Analytics', 'Users', 'Settings', 'Reports'].map((item) => (
            <a key={item} href="#" className="block py-2.5 px-4 rounded hover:bg-slate-700 transition">
              {item}
            </a>
          ))}
        </nav>
        <div className="p-4 bg-slate-900">
          <p className="text-sm text-gray-400">Logged in as Admin</p>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex justify-between items-center p-6 bg-white shadow-sm border-b">
          <h2 className="text-xl font-semibold text-gray-800">Dashboard Overview</h2>
          <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          <div className="grid grid-cols-4 gap-6 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="text-gray-500 text-sm">Total Metric {i}</div>
                <div className="text-3xl font-bold text-gray-800 mt-2">1,234</div>
              </div>
            ))}
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border h-64 flex items-center justify-center">
            <span className="text-gray-400">Chart Visualization Placeholder</span>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;