import React from 'react'
import Link from 'next/link'


const Header = () => {
    return (
        <div className='mx-auto items-center sm:flex justify-around self-center p-3 shadow bg-red-300 mx-auto'>
            
            <Link href='/'>
                <h1 className='text-center p-3 sm:p-3 font-bold hover:shadow text-red-900'>GGMelhorCompra</h1>
            </Link>
            <Link href='/360Slim'>
                <button className='rounded-full self-center bg-red-500 px-6 h-8 hover:bg-pink-300'>
                    <a>360Slim</a>
                </button>
            </Link>
            <button className='rounded-full self-center bg-red-500 px-6 h-8 hover:bg-pink-300'>
                <a href='https://d-finecaps.com/braip/?pv=propv75p&af=afix6q4m'>D-FINE CAPS</a>
            </button>
            <button className='rounded-full self-center bg-red-500 px-6 h-8 hover:bg-pink-300'>
                <a href='https://antidiabetico.com.br/?pv=prolw64n&af=afig4o61'>ANTI-DIABÉTICO</a>
            </button>
            <button className='rounded-full self-center bg-red-500 px-6 h-8 hover:bg-pink-300'>
                <a href='https://amostra-natudrin.com/?pv=proloz4r&af=afin1673'>NATUDRIN</a>
            </button>
            
            
        </div>  
    )
}

export default Header