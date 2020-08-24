import React from 'react'
import '../css/styles.css'
import Link from 'next/link'






const MyApp = ({ Component, pageProps }) => {
    return(
        <div className='p-2 bg-red-200'>
            <div className=''>
                <Link href='/'>
                    <img className='h-32 flex mx-auto p-2 justify-around hover:shadow'src='/logo01.jpeg' alt=''></img>
                </Link>
            
                <Component {...pageProps} />
            </div>
        </div>
    )
}

export default MyApp

     