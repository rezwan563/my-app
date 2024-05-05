import SidebarNav from '../sidebarNav/SidebarNav';
import './AppLayout.css'

const AppLayout = () => {
  return (
    <div className='dashboard'>
        <div className='sidebar'><SidebarNav/></div>
        <div className='content'><p>Dashboard Content</p></div>
    </div>
  );
};

export default AppLayout;
