import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-4 flex gap-6 min-w-screen justify-center capitalize font-semibold">
      <NavLink to="/">
        <span>Home</span>
      </NavLink>
      <NavLink to="/favorites">
        <span>favorites</span>
      </NavLink>
    </nav>
  );
}

export default Navbar;
