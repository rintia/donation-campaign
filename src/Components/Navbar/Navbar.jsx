import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="max-w-screen-xl mx-auto px-4">
            <div className="navbar bg-base-100 mt-8">
        <div className="flex-1">
          <img className="lg:w-2/12 md:w-3/12" src="/Logo.png" alt="" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li> <NavLink style={({ isActive }) => ({
            color: isActive ? '#FF444A' : '#0B0B0B',
            background: '#FFFFFFF2',
            })}
             to='/' >Home</NavLink> </li>
            <li> <NavLink  style={({ isActive }) => ({
            color: isActive ? '#FF444A' : '#0B0B0B',
            background: '#FFFFFFF2',
        })} 
            to='/donation' >Donation</NavLink> </li>
            <li> <NavLink   style={({ isActive }) => ({
            color: isActive ? '#FF444A' : '#0B0B0B',
            background: '#FFFFFFF2',
        })}
            to='/statistic' >Statistic</NavLink> </li>
          </ul>
        </div>
      </div>
        </nav>
    );
};

export default Navbar;