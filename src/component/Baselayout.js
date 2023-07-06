import React from 'react'
import Topbar from './Topbar'
import Footer from './Footer'

export default function Baselayout() {
    return (
        <>
            <div className='flex flex-col justify-between background-image h-screen w-screen '>
                <Topbar />
                <Footer/>
            </div>
        </>
    )
}
