import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
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