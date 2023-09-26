import swal from 'sweetalert';

const getDataFromLS = () => {
   const donationData = localStorage.getItem('donation');
   if (donationData) {
      return JSON.parse(donationData)
   }
   return [];
}


const setDataToLS = id => {
   const storedData = getDataFromLS();
   const isExist = storedData.find(donationId => donationId === id);

   if (!isExist) {
      storedData.push(id);
      localStorage.setItem( 'donation', JSON.stringify(storedData));
      swal("Donated Successfully!", "Your donation help many people!", "success");
   }
   else{
      swal("Already Donated!", "please try another category", "error");
   }
}

export { setDataToLS, getDataFromLS }