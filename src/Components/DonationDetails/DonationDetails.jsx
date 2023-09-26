/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

const DonationDetails = ({ obj }) => {
   const { img, category, title, price } = obj;
   return (
      <div className="flex border border-black rounded-lg">
         <img src={img} className="w-2/5"></img>
         <div className="p-6">
            <button>{category}</button>
            <h1 className="text-[#0B0B0B] text-2xl font-semibold mb-2">{title}</h1>
            <p className="font-semibold mb-6">${price}</p>
            <Link to={-1}><button className="btn btn-primary">View Details</button></Link>
         </div>
      </div>
   );
};

export default DonationDetails;