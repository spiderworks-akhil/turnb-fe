import React, { useEffect, useState } from 'react';
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import SEO from './SEO';



const Layout = ({ page, children, general, data }) => {

    const MainMenu = general?.all_menus[0]
    const FooterMenu = general?.all_menus[1]
    const Settings = general?.all_settings?.original?.data

    return (
        <>
            <SEO data={data} settings={Settings} />

            <noscript dangerouslySetInnerHTML={{ __html: Settings?.google_tag_manager_body }} />
            <div>
                <Header MainMenu={MainMenu} Settings={Settings} />
                {children}
                <Footer FooterMenu={FooterMenu} data={data} />
            </div>
        </>
    );
};

export default Layout;