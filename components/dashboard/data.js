import {HomeIcon,DocumentAddIcon,CollectionIcon,BackspaceIcon } from "@heroicons/react/outline";


export function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon, current: true },
    { name: 'Ajouter', href: '/materiel/add', icon: DocumentAddIcon, current: false },
    { name: 'Materiels', href: '/materiel', icon: CollectionIcon, current: false },
    { name: 'Affectations', href: '/affectations', icon: BackspaceIcon, current: false },
]
export const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]