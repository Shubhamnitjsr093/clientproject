import React, { useEffect, useState } from 'react' 
import { Outlet } from 'react-router-dom'  
import Header from './Header'
import Footer from './Footer'
import BackToTop from './BackToTop'
import ScrollToTop from './ScrollToTop'

const Layout = () => {
     

    return (
        <>
            <ScrollToTop />
            <Header />
            <main>
                <Outlet />   
            </main>
            <Footer />
            <BackToTop />
        </>
    )
}

export default Layout