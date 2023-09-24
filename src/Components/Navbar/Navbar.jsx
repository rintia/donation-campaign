import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 mt-8">
        <div className="flex-1">
          <img className="lg:w-2/12 md:w-3/12" src="../../../public/Logo.png" alt="" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li> <NavLink to='/' >Home</NavLink> </li>
            <li> <NavLink to='/donation' >Donation</NavLink> </li>
            <li> <NavLink to='/statistic' >Statistic</NavLink> </li>
          </ul>
        </div>
      </div>
    );
};

export default Navbar;