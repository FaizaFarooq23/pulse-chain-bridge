import React from 'react'
import SettingsSVG from '../svgs/Settings'

export default function Card() {
    return (
        <div className='flex justify-center items-center w-full -mt-16'>
            <div className='flex flex-col px-4 py-4 justify-evenly items center  border card rounded-[17px] w-[494px] h-[544px]  bg-[#191B1A]'>
                <div className='flex justify-between items-center w-fill'>
                    <p className='text-color text-lg'>From</p>
                    <SettingsSVG className="fill-[#dfe4ed] w-5 h-5 hover:fill-[#fa65fa70] cursor-pointer" />
                </div>
                <div className='bg-[#232523] rounded-t-xl py-3 mt-2 flex justify-between items-center '>
                    <div className='flex justify-center items-center '>
                        <img className='w-8 h-8 mx-3' src="images/1027.png" alt="Unknown Network" />
                        <p className="text-[#dfe4ed]  font-bold">Unknown Network</p>
                    </div>
                    <div className='flex justify-center items-center pr-3'>
                        <p className="text-[#DFE4ED] text-sm mr-3">Balance: 0.0 WPLS</p>
                        <p className='text-[#FF00F79E] text-sm font-bold'>Max</p>
                    </div>
                </div>
                <div className='bg-[#232523] rounded-b-xl mt-0.5 py-3 flex justify-between items-center w-full '>
                    <div className='flex justify-center items-center pl-3'>
                        <p className="text-[#dfe4ed] text-2xl">0.0</p>
                    </div>
                    <div className='flex justify-center items-center pr-3 '>
                        <svg viewBox="0 0 24 24" focusable="false" className="fill-[#CC00C5B3] hover:fill-[#CC00C5] w-4 h-4"><path d="M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z"></path></svg>
                        <img className='w-8 h-8 mx-3' src="images/pulsex.png" alt="Unknown Network" />
                        <span className='  text-[#dfe4ed] font-bold text-lg'>  WPLS </span>
                        <svg viewBox="0 0 24 24" focusable="false" className="text-[#dfe4ed] h-6 w-6"><path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" fill="currentColor"></path></svg>
                    </div>
                </div>
                <div className='flex justify-center items-center w-full'>
                    <div className=' bg-[#191B1A] flex items-center justify-center rounded-lg w-9 h-9 absolute '>
                        <div className='flex items-center justify-center rounded-lg w-7 h-7  bg-[#CC00C5B3]'>
                            <svg viewBox="0 0 24 24" focusable="false" class="text-[#dfe4ed] h-5 w-5 cursor-pointer" aria-hidden="true"><g><path d="M10 14V1M10 1L5 6M10 1L15 6" stroke="#dfe4ed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 10V23M14 23L9 18M14 23L19 18" stroke="#dfe4ed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
                        </div>
                    </div>
                </div>
                <div className='bg-[#232523] rounded-t-xl py-3 mt-1.5 flex justify-between items-center '>
                    <div className='flex justify-center items-center '>
                        <img className='w-8 h-8 mx-3' src="images/pulsex.png" alt="PulseChain" />
                        <p className="text-[#dfe4ed]  font-bold">PulseChain</p>
                    </div>
                    <div>
                        <p className='text-[#DFE4ED] text-sm mr-3'>Balance: 0.0 PLS</p>
                    </div>
                </div>
                <div className='bg-[#232523]  mt-0.5 py-3 flex justify-between items-center '>
                    <div className='flex justify-center items-center pl-3'>
                        <p className="text-[#dfe4ed] ">Bridge Fee</p>
                    </div>
                    <div className='flex justify-center items-center pr-3'>
                        <p className=' text-[#dfe4ed] text-lg'>0%</p>
                    </div>
                </div>
                <div className='bg-[#232523]  py-3 flex justify-between items-center '>
                    <div className='flex justify-center items-center pl-3'>
                        <p className="text-[#dfe4ed] ">Receive</p>
                    </div>
                    <div className='flex justify-center items-center pr-3'>
                        <p className=' text-[#dfe4ed] text-lg'>0.0</p>
                        <p className=' text-[#dfe4ed] text-lg font-bold pl-2'>PLS</p>
                    </div>
                </div>
                <div className='bg-[#232523]  py-3 flex justify-between items-center '>
                    <div className='flex justify-center items-center pl-3'>
                        <p className="text-[#dfe4ed] ">Receive PLS</p>
                    </div>

                </div>
                <div className='bg-[#232523] rounded-b-xl  py-3 flex justify-between items-center '>
                    <div className='flex justify-center items-center pl-3'>
                        <p className="text-[#dfe4ed] ">Limits</p>
                        <svg viewBox="0 0 24 24" focusable="false" class="text-[#dfe4ed] w-4 h-4 inline-block ml-1 mt-1 "><path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" fill="currentColor"></path></svg>
                    </div>

                </div>
                <div className='flex justify-center items-center mt-2 mx-1'>
                    <button className='bg-[#CC00C5B3] hover:bg-[#CC00C5] px-12 w-full text-color font-bold py-3 rounded-md text-base '>
                        Connect Wallet
                    </button>
                </div>
                <div>
                    <p className='text-[#858586] text-center mt-4'>Estimated to completion is 30 minutes</p>
                </div>

            </div>

        </div>
    )
}
