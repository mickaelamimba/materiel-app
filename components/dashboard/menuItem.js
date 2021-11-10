import React from 'react';
import Link from "next/link";
import {classNames} from "./data";

const MenuItem = ({items}) => {
    return (
        <>
            <Link href={items.href}>
                <a
                    className={classNames(
                        items.current ? 'bg-green-800 text-white' : 'text-green-100 hover:bg-green-600',
                        'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                    )}
                >
                    <items.icon className="mr-4 flex-shrink-0 h-6 w-6 text-green-300" aria-hidden="true" />
                    {items.name}
                </a>
            </Link>

        </>
    );
};

export default MenuItem;