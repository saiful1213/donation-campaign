/* eslint-disable react/prop-types */


const Cards = ({ card }) => {
   const { img, category, title, card_color, category_color, text_color, description, price } = card;

   return (
      // #FF444A25
      //  bg-opacity-[15%]
      // text-[${text_color}]
      <div className={`bg-[${card_color}] bg-opacity-[15%]`}>
         <img src={img} className="w-full h-52"></img>
         <div className={`p-4 mt-4`}>
            <button className={`py-1 bg-[${category_color}] bg-opacity-20 px-[10px] rounded text-[${text_color}] font-medium`}>{category}</button>
            <h1 className={`text-xl font-semibold mt-1 text-[${text_color}]`}>{title}</h1>
         </div>
      </div>
   );
};

export default Cards;