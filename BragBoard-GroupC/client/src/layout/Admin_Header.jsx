import React, { useState } from 'react';

const Admin_Header = ({ searchQuery, setSearchQuery, showSearch = true }) => {
  const [localSearchQuery, setLocalSearchQuery] = useState('');
  const currentSearchQuery = searchQuery !== undefined ? searchQuery : localSearchQuery;
  const handleSearchChange = setSearchQuery || setLocalSearchQuery;

  return (
    <header style={styles.header}>
      {showSearch && (
        <div style={styles.headerLeft}>
          <div style={styles.searchBar}>
            <i className="fa-solid fa-search" style={styles.searchIcon}></i>
            <input
              type="text"
              placeholder="Search shoutouts..."
              value={currentSearchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              style={styles.searchInput}
              onFocus={(e) => e.target.style.borderColor = '#667eea'}
              onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
            />
          </div>
        </div>
      )}
      <div style={styles.headerRight}>
        <button style={styles.notificationButton}>
          <i className="fa-solid fa-bell" style={styles.bellIcon}></i>
        </button>
        <div style={styles.userInfo}>
          <div style={styles.userDetails}>
            <span style={styles.userName}>Admin User</span>
            <span style={styles.userRole}>Administrator</span>
          </div>
          <div style={styles.userAvatar}>
            <span>AU</span>
          </div>
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    background: 'white',
    padding: '0 24px',
    height: '70px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #e2e8f0',
    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
    position: 'fixed',
    top: 0,
    right: 0,
    left: '250px',
    zIndex: 100
  },
  headerLeft: {
    flex: 1,
    maxWidth: '400px'
  },
  searchBar: {
    position: 'relative',
    width: '100%'
  },
  searchIcon: {
    position: 'absolute',
    left: '14px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#94a3b8',
    fontSize: '14px',
    zIndex: 1
  },
  searchInput: {
    width: '100%',
    padding: '10px 16px 10px 40px',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    fontSize: '14px',
    background: '#f8fafc',
    transition: 'all 0.2s',
    color: '#334155',
    height: '40px'
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
  },
  notificationButton: {
    position: 'relative',
    background: 'none',
    border: 'none',
    color: '#64748b',
    fontSize: '18px',
    cursor: 'pointer',
    padding: '8px',
    borderRadius: '8px',
    transition: 'all 0.2s',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bellIcon: {
    fontSize: '20px'
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '6px 12px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  userDetails: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  userName: {
    color: '#1e293b',
    fontWeight: '600',
    fontSize: '14px'
  },
  userRole: {
    color: '#64748b',
    fontSize: '12px',
    marginTop: '2px'
  },
  userAvatar: {
    width: '36px',
    height: '36px',
    borderRadius: '8px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '600',
    fontSize: '14px'
  }
};

export default Admin_Header;