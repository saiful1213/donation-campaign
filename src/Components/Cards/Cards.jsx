/* eslint-disable react/prop-types */
// #0052FF33 

import { useNavigate } from "react-router-dom";

const Cards = ({ card }) => {
   const { id, img, category, title, card_color, category_color, text_color} = card;
   const navigate = useNavigate();

   const handleCardDetails = (cardId) =>{
      navigate(`/cards/${cardId}`);
   }

   return (
      <div style={{
         backgroundColor: card_color         
      }} onClick={()=>handleCardDetails(id)}>

         <img src={img} className="w-full h-52"></img>
         <div className={`p-4 mt-4`}>
            <button style={{ color: text_color, backgroundColor: category_color}} className={`py-1 px-[10px] rounded font-medium`}>{category}</button>
            <h1 style={{color: text_color}} className={`text-xl font-semibold mt-1`}>{title}</h1>
         </div>
      </div>
   );
};

export default Cards;