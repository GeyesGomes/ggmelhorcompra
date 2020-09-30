import React from 'react'
import '../css/styles.css'

import Header from '../components/header'
import Footer from '../components/footer'


const MyApp = ({ Component, pageProps }) => {
    return(
            
        <div className='container mx-auto sm:bg-pink-100'>
            <div>
                <Header />
            </div>
            <div className='bg-gray-400 h-1'></div>
            <div>
                <Component {...pageProps} />
            </div>
            <div className='bg-gray-400 h-1'></div>
            <div>
                <Footer />
            </div>
        </div>
        
    )
}

export default MyApp    
            
            
                
                
