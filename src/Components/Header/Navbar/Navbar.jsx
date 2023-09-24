import { NavLink } from "react-router-dom";

const Navbar = () => {
   return (
      <div className="pt-8">
         <div className="flex flex-col gap-12 md:flex-row justify-between items-center">
            <div>
               <img src="/Logo.png" />
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