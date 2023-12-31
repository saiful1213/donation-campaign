/* eslint-disable react/prop-types */
import { setDataToLS } from '../utility/LocalStorage';

const ShowCardDetails = ({ card }) => {
   const { id, img, title, description, price, text_color } = card;

   return (
      <div className="mt-20 flex justify-center items-center lg:h-[70vh]">
         <div className="w-full mt-4 p-2 md:w-1/2">
            <div className="relative">
               <img src={img} className="w-full h-72" />
               <div className="bg-[#0B0B0B80] h-24 absolute w-full bottom-0 flex items-center pl-8">
                  <button style={{backgroundColor: text_color}} className="text-xl font-semibold text-white px-5 py-3 rounded-lg" onClick={() => setDataToLS(id)}> Donate ${price}</button>
               </div>
            </div>
            <h1 className="text-[#0B0B0B] text-3xl md:text-4xl font-bold mt-8 mb-3">{title}</h1>
            <p className="text-[#0b0b0bb3] text-justify">{description}</p>
         </div>
      </div>
   );
};

export default ShowCardDetails;