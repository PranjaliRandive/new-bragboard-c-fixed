import React from 'react';

const Admin_Sidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { key: 'dashboard', label: 'Dashboard', icon: 'fa-solid fa-chart-line' },
    { key: 'users', label: 'Users', icon: 'fa-solid fa-users' },
    { key: 'reports', label: 'Reports', icon: 'fa-solid fa-chart-bar' },
    { key: 'notifications', label: 'Notifications', icon: 'fa-solid fa-bell' },
    { key: 'settings', label: 'Settings', icon: 'fa-solid fa-gear' }
  ];

  const departments = ['HR', 'CyberSecurity', 'Deployment'];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>BragBoard</h2>
      </div>
      
      <nav className="sidebar-nav">
        <ul className="nav-menu">
          {menuItems.map(item => (
            <li key={item.key} className="nav-item">
              <button
                className={`nav-link ${activeSection === item.key ? 'active' : ''}`}
                onClick={() => setActiveSection(item.key)}
              >
                <i className={item.icon}></i>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-filters">
        <h3>Filter</h3>
        <ul className="filter-list">
          {departments.map(dept => (
            <li key={dept} className="filter-item">
              <label className="filter-label">
                <input type="checkbox" />
                <span>{dept}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Admin_Sidebar;