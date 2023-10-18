import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";


const Navbar = () => {

  const {user,logOut}=useContext(AuthContext);

  const handleLogout=()=>{
    logOut()
    .then(result=>{
      toast.success(' Log out successfully')
    })
    .catch(error=>{
      console.log(error.message)
    })
  }
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
                className="rounded-full w-[60px]"
                src="https://i.ibb.co/C8pPJss/7949550.jpg"
                alt=""
              />
              <Link className="btn btn-ghost normal-case text-xl">PhoneBD</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>
            <div className="navbar-end">
        <div className=" mr-2">
          {user ? <div className="flex h-[40px] items-center">
          <p className="mr-2">{user.displayName}</p>
          <img className="rounded-full w-[50px] mr-2" src={user.photoURL} alt="" />
          </div> : <div className="flex h-[40px] items-center"> <img className="rounded-full w-[50px] mr-2" src="https://i.ibb.co/SPLfvmb/324259259-565764695569197-5052157878188652179-n.jpg" alt="" /></div>
           
          
          }
        </div>
        {user ? (
          <button onClick={handleLogout} className="font-bold text-amber-500">Logout</button>
        ) : (
          <Link to="/login">
            <button >Login</button>
          </Link>
        )}
      </div>
          </div>
          {/* navbar end */}
        </div>
      );
};

export default Navbar;