import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Cards from "../../Components/Cards/Cards";
import { useState } from "react";

const Home = () => {
   const allData = useLoaderData();
   const [data, setData] = useState(allData);

   const handleSearch = value =>{
      const fieldValue = value();

      if(fieldValue.toLowerCase() === 'health'){
         const healthCtg = allData.filter(obj => obj.category.includes('Health'));
         setData(healthCtg);
      }
      else if(fieldValue.toLowerCase() === 'education'){
         const educationCtg = allData.filter(obj => obj.category.includes('Education'));
         setData(educationCtg);
      }
      else if(fieldValue.toLowerCase() === 'clothing'){
         const clothingCtg = allData.filter(obj => obj.category.includes('Clothing'));
         setData(clothingCtg);
      }
      else if(fieldValue.toLowerCase() === 'food'){
         const foodCtg = allData.filter(obj => obj.category.includes('Food'));
         setData(foodCtg);
      }
      else if(fieldValue.toLowerCase() === 'all'){
         setData(allData);
      }
   } 


   return (
      <div>
         <Banner handleSearch={handleSearch}></Banner>
         <div className="px-8 sm:px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-12">
            {
               data.map(card => <Cards key={card.id} card={card}></Cards>)
            }
         </div>
      </div>
   );
};

export default Home;