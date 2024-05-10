import { Outlet } from 'react-router-dom';
import SidebarNav from '../sidebarNav/SidebarNav';
import './AppLayout.css'

const AppLayout = () => {
  return (
    <div className='dashboard'>
        <div className='sidebar'><SidebarNav/></div>
        <div className='content'><Outlet/></div>
    </div>
  );
};

export default AppLayout;
