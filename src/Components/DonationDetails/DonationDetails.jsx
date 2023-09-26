/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

const DonationDetails = ({ obj }) => {
   const { img, category, title, price, card_color, category_color, text_color } = obj;
   return (
      <div className="flex flex-col sm:flex-row rounded-lg p-2" style={{backgroundColor: card_color}}>
         <img src={img} className="w-full sm:w-2/5"></img>
         <div className="p-6">
            <button style={{backgroundColor: category_color, color: text_color}} className="py-1 px-[10px] rounded font-medium">{category}</button>
            <h1 className="text-[#0B0B0B] text-2xl font-semibold mb-2">{title}</h1>
            <p className="font-semibold mb-6" style={{color: text_color}}>${price}</p>
            <Link to={-1}><button className="btn text-white" style={{backgroundColor: text_color}}>View Details</button></Link>
         </div>
      </div>
   );
};

export default DonationDetails;