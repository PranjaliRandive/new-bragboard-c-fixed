import React from 'react';
import Admin_Sidebar from './Admin_Sidebar';
import Admin_Header from './Admin_Header';

const AdminPageContainer = ({ children, showFilters = true, showSearch = true }) => {
  return (
    <div style={styles.container}>
      <Admin_Sidebar showFilters={showFilters} />
      <div style={styles.mainContent}>
        <Admin_Header showSearch={showSearch} />
        <main style={styles.contentArea}>
          {children}
        </main>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    background: '#f8fafc'
  },
  mainContent: {
    flex: 1,
    marginLeft: '280px',
    display: 'flex',
    flexDirection: 'column'
  },
  contentArea: {
    flex: 1,
    padding: '24px',
    background: '#f8fafc',
    marginTop: '70px'
  }
};

export default AdminPageContainer;