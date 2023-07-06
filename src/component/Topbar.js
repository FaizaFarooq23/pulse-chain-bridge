import React from 'react';

export default function Topbar() {
  return (

    <div className='flex justify-between items-start w-full px-24 '>
      <div className='flex justify-center items-center -mt-40 '>
        <img className=' h-11/12 mr-4 ' src="images/pulseChain-logo.svg" alt="logo" />
        <p className=' text-color font-bold text-lg'>PulseChain Bridge</p>
      </div>
      <div className='flex justify-center items-center mt-6'>
        <button className='bg-[#CC00C5B3] hover:bg-[#CC00C5] px-12  text-color font-bold py-2 rounded text-base '>
        <svg viewBox="0 0 18 18" focusable="false" className="text-color h-4 w-4 inline-flex mr-2 -mt-1 " aria-hidden="true"><path d="M12 10C11.4477 10 11 10.4477 11 11C11 11.5523 11.4477 12 12 12H13C13.5523 12 14 11.5523 14 11C14 10.4477 13.5523 10 13 10H12Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4 0C1.79086 0 0 1.79086 0 4V14C0 16.2091 1.79086 18 4 18H14C16.2091 18 18 16.2091 18 14V8C18 5.79086 16.2091 4 14 4C14 1.79086 12.2091 0 10 0H4ZM12 4H2C2 2.89543 2.89543 2 4 2H10C11.1046 2 12 2.89543 12 4ZM2 14V6H14C15.1046 6 16 6.89543 16 8V14C16 15.1046 15.1046 16 14 16H4C2.89543 16 2 15.1046 2 14Z" fill="currentColor"></path></svg>
          Connect Wallet
        </button>
      </div>
    </div>


  )
}
