import { NavLink } from "react-router-dom";


const Navbar = () => {
    const links = (
        <>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-500 underline font-bold" : ""
              }
            >
              Home
            </NavLink>
          </li>
    
          <li>
            <NavLink
              to="/addproduct"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-500 underline font-bold" : ""
              }
            >
              Add Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mycart"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-500 underline font-bold" : ""
              }
            >
              My Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-500 underline font-bold" : ""
              }
            >
              Login
            </NavLink>
          </li>
        </>
      );
    
      return (
        <div>
          {/* navbar */}
    
          <div className="navbar bg-base-100">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {links}
                </ul>
              </div>
              <img
                className="rounded-full w-[50px]"
                src="https://i.ibb.co/C8pPJss/7949550.jpg"
                alt=""
              />
              <a className="btn btn-ghost normal-case text-xl">PhoneBD</a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>
            <div className="navbar-end">
              <a className="btn">Button</a>
            </div>
          </div>
          {/* navbar end */}
        </div>
      );
};

export default Navbar;