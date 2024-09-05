import React, { useEffect, useState } from 'react';
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";



const Layout = ({ page, children}) => {
    return (
        <div>
            {/* {page === "Home" ? <Header /> : <div className='inner-menu-active'><Header /></div>} */}
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;