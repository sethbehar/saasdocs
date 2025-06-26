import { Link } from "react-router-dom";
import { MenuIcon } from "lucide-react";

// Navbar component for the application, providing navigation links and session management.
// Displays a login button if no session exists, or a logout button if a session is present.
const Navbar = ({ session, supabase }) => {
  return (
    <div className="navbar bg-base-100 border-2 border-gray-200 rounded-xl shadow-lg mt-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <MenuIcon className="h-6 w-6" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] border-2 border-gray-200 mt-4 w-52 p-2 shadow-md"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/docs">Documentation</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to="/docs" className="btn btn-ghost text-xl flex items-center">
          SaaS Docs
        </Link>
      </div>
      {/* The navbar-end section contains the login/logout button based on session state. */}
      {/* If a session exists, it shows a logout button, otherwise it shows a login button. */}
      <div className="navbar-end">
        {session ? (
          <button className="btn btn-outline" onClick={() => supabase.auth.signOut()}>
            Logout
          </button>
        )
        :
        <Link to="/login" className="btn btn-outline">
          Login
        </Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
