import React from 'react';
import {navigation,classNames} from "./data";

const MenuDesktop = () => {
    return (

    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">

        <div className="flex flex-col flex-grow pt-5 bg-green-700 shadow overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
                <h1 className="text-3xl text-white">@Mat-S</h1>

            </div>
            <div className="mt-5 flex-1 flex flex-col">
                <nav className="flex-1 px-2 pb-4 space-y-1">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                                item.current ? 'bg-green-800 text-white' : 'text-green-100 hover:bg-green-600',
                                'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                            )}
                        >
                            <item.icon className="mr-3 flex-shrink-0 h-6 w-6 text-green-300" aria-hidden="true" />
                            {item.name}
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    </div>
    );
};

export default MenuDesktop;