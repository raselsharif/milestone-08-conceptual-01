
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <section className='py-7 px-4 bg-zinc-50 flex justify-between items-center shadow-slate-600 shadow-lg'>
            <div className='flex items-center justify-center h-16 w-16 bg-white rounded-full shadow-lg'>
                <h3 className='  text-black text-2xl font-bold'>RS</h3>
            </div>
            <ul className='flex gap-9 font-bold'>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink to='/dashboard'>Dashboard</NavLink>
                </li>
            </ul>
        </section>
    );
};

export default Nav;