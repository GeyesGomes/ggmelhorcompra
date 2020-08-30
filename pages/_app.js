import React from 'react'
import '../css/styles.css'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'


const MyApp = ({ Component, pageProps }) => {
    return(
        <div>
            <div className=''>
                
                <Link href='/'>
                    <img className='h-32 flex mx-auto p-2 justify-around hover:shadow'src='/logo01.jpeg' alt=''></img>
                </Link>
                <div>
                    <Header />
                </div>
                <div>
                    <Component {...pageProps} />
                </div>
                <div>
                    <Footer />
                </div>

            </div>
        </div>
    )
}

export default MyApp    