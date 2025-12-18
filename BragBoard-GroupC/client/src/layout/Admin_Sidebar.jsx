import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Admin_Sidebar = ({ activeSection, setActiveSection, showFilters = true }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hoverItem, setHoverItem] = useState(null);
  
  // admin navigation
  const menuItems = [
    { key: 'dashboard', label: 'Dashboard', icon: 'fa-solid fa-chart-line', path: '/admin/dashboard' },
    { key: 'shoutouts', label: 'Shoutouts', icon: 'fa-solid fa-bullhorn', path: '/admin/shoutouts' },
    { key: 'users', label: 'Users', icon: 'fa-solid fa-users', path: '/admin/users' },
    { key: 'reports', label: 'Reports', icon: 'fa-solid fa-chart-bar', path: '/admin/reports' },
    { key: 'settings', label: 'Settings', icon: 'fa-solid fa-gear', path: '/admin/settings' }
  ];

  const departments = ['HR', 'CyberSecurity', 'Deployment'];

  const getActiveKey = () => {
    if (activeSection !== undefined) {
      return activeSection;
    }
    
    const currentPath = location.pathname;
    for (let item of menuItems) {
      if (currentPath === item.path) {
        return item.key;
      }
      if (item.path !== '/admin/dashboard' && currentPath.startsWith(item.path)) {
        return item.key;
      }
    }
    return 'dashboard';
  };

  const currentActive = getActiveKey();

  const handleMenuItemClick = (item) => {
    if (setActiveSection) {
      setActiveSection(item.key);
      return;
    }
    
    if (item.path) {
      navigate(item.path);
    }
  };

  return (
    <div style={styles.sidebar}>
      <div style={styles.sidebarHeader}>
        <h2 style={styles.logo}>BragBoard</h2>
      </div>
      
      <nav style={styles.sidebarNav}>
        <ul style={styles.navMenu}>
          {menuItems.map(item => {
            const isActive = currentActive === item.key;
            const isHovered = hoverItem === item.key;
            
            return (
              <li key={item.key} style={styles.navItem}>
                <button
                  onClick={() => handleMenuItemClick(item)}
                  onMouseEnter={() => setHoverItem(item.key)}
                  onMouseLeave={() => setHoverItem(null)}
                  style={{
                    ...styles.navLink,
                    ...(isActive ? styles.activeNavLink : {}),
                    ...(isHovered && !isActive ? styles.hoverNavLink : {})
                  }}
                >
                  <i className={item.icon} style={{
                    ...styles.navIcon,
                    ...(isActive ? styles.activeNavIcon : {})
                  }}></i>
                  <span style={styles.navText}>{item.label}</span>
                  {isActive && (
                    <div style={styles.activeIndicator}></div>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {showFilters && (
        <div style={styles.sidebarFilters}>
          <h3 style={styles.filterTitle}>Filter</h3>
          <ul style={styles.filterList}>
            {departments.map(dept => (
              <li key={dept} style={styles.filterItem}>
                <label style={styles.filterLabel}>
                  <input type="checkbox" style={styles.checkbox} />
                  <span style={styles.filterText}>{dept}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const styles = {
  sidebar: {
    width: '280px',
    background: 'white',
    height: '100vh',
    position: 'fixed',
    left: 0,
    top: 0,
    display: 'flex',
    flexDirection: 'column',
    color: '#64748b',
    borderRight: '1px solid #e2e8f0',
    zIndex: 1000,
    paddingBottom: '20px'
  },
  sidebarHeader: {
    padding: '24px 20px',
    borderBottom: '1px solid #e2e8f0',
    background: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '70px'
  },
  logo: {
    margin: 0,
    fontSize: '20px',
    fontWeight: '700',
    color: '#1e293b',
    letterSpacing: '-0.3px'
  },
  sidebarNav: {
    padding: '20px 0',
    flex: 1
  },
  navMenu: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  navItem: {
    margin: 0
  },
  navLink: {
    display: 'flex',
    alignItems: 'center',
    padding: '14px 24px',
    color: '#64748b',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.2s',
    position: 'relative',
    margin: '4px 0',
    background: 'none',
    border: 'none',
    width: '100%',
    textAlign: 'left',
    cursor: 'pointer',
    fontFamily: 'inherit',
    borderRadius: '0 8px 8px 0'
  },
  activeNavLink: {
    background: '#f1f5f9',
    color: '#667eea',
    fontWeight: '600',
    borderRight: '3px solid #667eea'
  },
  hoverNavLink: {
    background: '#f8fafc',
    color: '#475569'
  },
  navIcon: {
    marginRight: '14px',
    fontSize: '16px',
    color: '#94a3b8',
    width: '20px',
    textAlign: 'center'
  },
  activeNavIcon: {
    color: '#667eea'
  },
  navText: {
    flex: 1
  },
  activeIndicator: {
    position: 'absolute',
    right: '20px',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#667eea'
  },
  sidebarFilters: {
    padding: '24px 20px',
    borderTop: '1px solid #e2e8f0'
  },
  filterTitle: {
    color: '#1e293b',
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '16px',
    marginTop: 0
  },
  filterList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  filterItem: {
    marginBottom: '12px'
  },
  filterLabel: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#475569'
  },
  checkbox: {
    marginRight: '10px',
    width: '16px',
    height: '16px',
    cursor: 'pointer'
  },
  filterText: {
    fontSize: '14px'
  }
};

export default Admin_Sidebar;