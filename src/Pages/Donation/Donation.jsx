import { useLoaderData } from "react-router-dom";
import { getDataFromLS } from "../../Components/utility/LocalStorage";
import { useEffect, useState } from "react";
import DonationDetails from "../../Components/DonationDetails/DonationDetails";

const Donation = () => {
   const allData = useLoaderData();

   const [donation, setDonation] = useState([]);
   const [seeAll, setSeeAll] = useState(false);
   const [noFound, setNoFound] = useState('');

   useEffect(() => {
      const storageData = getDataFromLS();
      if (storageData.length > 0) {
         const donationData = allData.filter(data => storageData.includes(data.id));
         setDonation(donationData)
      } else {
         setNoFound('No data found')
      }

   }, [allData]);


   return (
      <div>
         {
            noFound ?
               <div className="flex h-[70vh] justify-center items-center">
                  <p className="text-xl font-semibold">{noFound}</p>
               </div>
               :
               <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-20">
                     {
                        seeAll ? donation.map(obj => <DonationDetails key={obj.id} obj={obj}></DonationDetails>)
                           : donation.slice(0, 4).map(obj => <DonationDetails key={obj.id} obj={obj}></DonationDetails>)
                     }
                  </div>

                  {
                     donation.length > 4 && <button onClick={() => setSeeAll(!seeAll)} className="btn btn-primary block mx-auto mb-8">{seeAll ? 'See less' : 'see more'}</button>
                  }

               </div>
         }
      </div>
   );
};

export default Donation;