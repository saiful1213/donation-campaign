import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
   return (
      <div className="pt-8 md:px-2 lg:px-auto">
         <div className="flex flex-col gap-12 md:flex-row justify-between items-center">
            <div>
               <Link to="/"><img src="/Logo.png" /></Link>
            </div>
            <div>
               <ul className="flex gap-12">
                  <li className="text-lg font-bold">
                     <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                           isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                     >
                        Home
                     </NavLink>
                  </li>
                  <li className="text-lg font-bold">
                     <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                           isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                     >
                        Donation
                     </NavLink>
                  </li>
                  <li className="text-lg font-bold">
                     <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                           isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                     >
                        Statistics
                     </NavLink>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Navbar;