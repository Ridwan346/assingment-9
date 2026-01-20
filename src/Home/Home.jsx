import React from 'react';
import { useLoaderData } from 'react-router';
import HOmeCard from './HOmeCard';
import BannerSlider from './Slider';

const Home = () => {
    let data = useLoaderData()
    return (
        <div>
           <div className='mt-2.5'>
             <BannerSlider></BannerSlider>
           </div>
           <div className='grid grid-cols-3 m-auto'>
            {
            data.map(res =><HOmeCard key={res?.id} data={res}></HOmeCard>)
           }
           </div>
           <div className='flex justify-between items-center p-2.5 mt-2 border rounded-xl bg-gradient-to-r from-blue-200 via-blue-500 to white shadow-sm'>
            <div>
                <h2 className='flex justitfy-start text-blue-700 text-xl'>Subscribe to our Newsletter</h2>
                <p>Get latest game updates and offers directly in your inbox.</p>
            </div>
            <div>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
           <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Subscribe</button>
          <dialog id="my_modal_1" className="modal">
           <div className="modal-box">
              <form>
            <input className="input" type="email" placeholder="Enter your email" />
              <button className='btn'>Subscribe</button>
             </form>
             <div className="modal-action">
             <form method="dialog">
           {/* if there is a button in form, it will close the modal */}
             <button className="btn">Close</button>
             </form>
         </div>
         </div>
         </dialog>
            </div>
           </div>
        </div>
    );
};

export default Home;