
import { NavLink } from 'react-router-dom';

const DashboardSideMenu = () => {
    return (
        <div>
            <nav className='flex flex-col border-r-4 font-bold gap-4 ml-3 '>
                <NavLink to='/dashboard'>
                    Dashboard
                </NavLink>
                <NavLink to='/dashboard/profile'>
                    Profile
                </NavLink>
                <NavLink to='/edit'>
                    Edit
                </NavLink>
                <NavLink to='/logout'>
                    Logout
                </NavLink>
            </nav>
        </div>
    );
};

export default DashboardSideMenu;