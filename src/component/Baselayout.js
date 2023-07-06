import React from 'react'
import Topbar from './Topbar'
import Footer from './Footer'
import Card from './Card'

export default function Baselayout() {
    return (
        <>
            <div className='flex flex-col justify-between items-center background-image h-full w-[100%] '>
                <Topbar />
                <Card/>
                <Footer/>
            </div>
        </>
    )
}
