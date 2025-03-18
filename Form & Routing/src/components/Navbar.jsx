import { NavLink, Outlet } from "react-router-dom";
import 'C:/Users/nateb/route-form-assignment-813/src/App.css'

function Navbar() {
  return (
    <>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/login" >Log in</NavLink>
        <NavLink to="/fav">Favorite</NavLink>
      </nav>
      
      <Outlet />
    </>
  );
}

export default Navbar;