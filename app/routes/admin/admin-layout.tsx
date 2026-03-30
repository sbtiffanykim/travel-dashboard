import React from 'react';
import { Outlet } from 'react-router';

const AdminLayout = () => {
  return (
    <div className='admin-layout'>
      Mobile Sidebar
      <aside className='w-full max-w-64 hidden lg:block'>SideBar</aside>
      <aside className='children'>
        <Outlet />
      </aside>
    </div>
  );
};

export default AdminLayout;
