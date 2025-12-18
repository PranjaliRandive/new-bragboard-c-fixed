import React from 'react';
import AdminPageContainer from '../layout/AdminPageContainer';
import AdminShoutoutManagement from '../features/shoutout-management/AdminShoutoutManagement';

const AdminShoutouts = () => {
  return (
    <AdminPageContainer showFilters={false}>
      <AdminShoutoutManagement />
    </AdminPageContainer>
  );
};

export default AdminShoutouts;