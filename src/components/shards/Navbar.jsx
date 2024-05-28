import { Link } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { useContext } from "react";


export default function Navbar() {
  const {user,logOut} = useContext(AuthContext)
  
  const logOutHandl=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.error(error))
      }
const manuItem= 
<>
<li><Link to='/'>home</Link></li>
<li><Link to='/about'>about</Link></li>
<li><Link to='/blog'>Blog</Link></li>
<li>
  {
  user?.uid?
  <>
  <li><Link to='/myReviews'>My review</Link></li>
  <li><Link to= '/addService'>add service </Link></li>
  <button onClick={logOutHandl}>log out</button>
  </>
  :
  <>
  <li><Link to='/login'>Log in </Link></li>
  {/* <li><Link to='/register'>Register</Link></li> */}
  </>
  
  }
</li>
</>
  return (
     <div className="navbar bg-base-100 border-b-2 border-indigo-500 margin-b-4">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      {manuItem}
        </ul>
      </div>
      <a href="/" className="btn btn-ghost normal-case text-xl text-[#f64c72]">HEALTHY RECIPES</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal p-0">
      {manuItem}
      </ul>
    </div>
    <div className="navbar-end">
      <a href="/" className="btn">Get started</a>
    </div>
  </div>
  );
}
