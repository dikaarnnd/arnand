"use client"; // Add this directive to mark the file as a client component

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    { path: '/', name: 'Home' },
    { path: '/services', name: 'Services' },
    { path: '/resume', name: 'Resume' },
    { path: '/work', name: 'Work' },
    { path: '/contact', name: 'Contact' },
];

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className='flex gap-8'>
            {links.map((link, index) => {
                const isActive = link.path === pathname;
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={`font-medium hover:text-accent transition-all ${isActive ? 'text-accent border-b-2 border-accent' : ''}`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;
