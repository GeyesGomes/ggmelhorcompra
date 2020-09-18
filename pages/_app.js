import React from 'react'
import '../css/styles.css'

import Header from '../components/header'
import Footer from '../components/footer'


const MyApp = ({ Component, pageProps }) => {
    return(
        <div className='container mx-auto'>
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
    )
}

export default MyApp    
            
            
                
                
