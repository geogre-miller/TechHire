import { NavLink } from "react-router-dom";
import logo from "../../public/developer.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"; // Import ShadcnUI dropdown components

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "btn btn-neutral text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "btn btn-neutral text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  return (
    <nav className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo and Links */}
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-8 w-auto mb-1" src={logo} alt="React Jobs" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                Tech-Hire
              </span>
            </NavLink>
            <div className="ml-4">
              <div className="flex space-x-2 hover:text-blue-300">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
                <NavLink to="/jobs" className={linkClass}>
                  Jobs
                </NavLink>
                {/* <NavLink to="/add-job" className={linkClass}>
                  Add Job
                </NavLink> */}
              </div>
            </div>
          </div>

          {/* Avatar with Dropdown */}
          <div className="">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center border-2 rounded-3xl border-white focus:outline-none">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <NavLink to="/login">Login</NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <NavLink to="/register">Register</NavLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
