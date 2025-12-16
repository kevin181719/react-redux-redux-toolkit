import React from 'react'
import { useNavigate } from 'react-router-dom';


const Navbar2 = () => {
  let Navigate = useNavigate();

  return (
    <div className='py-3 px-5 bg-cyan-700'>
      <button
        onClick={() => Navigate('/')}
       className='bg-emerald-600 font-medium px-5 py-2 rounded m-2 active:scale-95 cursor-pointer'>Return To Home Page</button>
      <button
        onClick={() => Navigate(-1)}
       className='bg-emerald-600 font-medium px-5 py-2 rounded m-2 active:scale-95 cursor-pointer'>Back</button>
        <button
        onClick={() => Navigate(+1)}
       className='bg-emerald-600 font-medium px-5 py-2 rounded m-2 active:scale-95 cursor-pointer'>Next</button>
    </div>
  )
}

export default Navbar2
