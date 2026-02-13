import React, { useState } from 'react';
import { Sidebar, Header } from './components';
import Dashboard from './components/pages/Dashboard';
import Analytics from './components/pages/Analytics';
import Users from './components/pages/Users';
import Products from './components/pages/Products';
import Settings from './components/pages/Settings';
import Reports from './components/pages/Reports';
import Help from './components/pages/Help';

function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Analytics':
        return <Analytics />;
      case 'Users':
        return <Users />;
      case 'Products':
        return <Products />;
      case 'Settings':
        return <Settings />;
      case 'Reports':
        return <Reports />;
      case 'Help':
        return <Help />;
      default:
        return <Dashboard />;
    }
  };

  return (
    /* 2. LAYOUT BUG A: Changed 'flex' to 'block'. Sidebar and Content now stack vertically instead of side-by-side. */
    /* FIX: className="flex h-screen bg-gray-50" */
    <div className="block h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header activeTab={activeTab} />

        {/* 3. SPACING BUG A: Removed 'p-6'. Content touches the exact edges of the screen, looking cramped. */ }
        {/* FIX: className="flex-1 overflow-x-hidden overflow-y-auto p-6" */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;