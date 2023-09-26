/* eslint-disable react/prop-types */

const Banner = ({handleSearch}) => {
   
   const handleInput = () =>{
      const inputValue = document.getElementById('inputField').value;
      return inputValue
   }

   return (
      <div className="mt-12 p-2 h-[60vh] flex justify-center items-center bg-bannerImg bg-cover bg-center bg-no-repeat">
         <div className="">
            <h1 className="text-[#0B0B0B] text-3xl md:text-5xl font-bold">I Grow By Helping People In Need</h1>
            {/* search bar */}
            <div className="flex justify-center items-center">
               <div className="form-control mt-10">
                  <label className="input-group">
                     <input type="text" id="inputField" onChange={()=>handleInput()} placeholder="Search here by category...." className="input focus:outline-none input-bordered" />
                     <span className="bg-[#FF444A] font-semibold text-white" onClick={()=>handleSearch(handleInput)}>Search</span>
                  </label>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;