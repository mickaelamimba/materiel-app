import React, {useState} from 'react';
import Head from "next/head";


import Menu from "./dashboard/menu";
import {navigation} from "./dashboard/data";
import MenuItem from "./dashboard/menuItem";
import MenuDesktop from "./dashboard/menuDesktop";
import TopBar from "./dashboard/topBar";



const Layout = ({children}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    return (
        <>

                <Head>
                    <title>Materiel App</title>
                    <meta name="description" content="Application de gestion de materiel saissie" />
                </Head>
                     <TopBar setSidebarOpen={setSidebarOpen} />
                    <Menu setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen}>
                        {navigation.map((items)=>(
                            <MenuItem key={items.name} items={items} />
                        ))

                        }
                    </Menu>
                    <MenuDesktop/>
            <div className="md:pl-64">
                <main  >
                    <div className="py-6">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            <div className="py-4">
                                {children}
                            </div>

                        </div>

                    </div>

                </main>
            </div>

                    <footer>

                    </footer>





        </>
    );
};

export default Layout;