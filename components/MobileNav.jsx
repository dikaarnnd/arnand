"use client";

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';

const links = [
    { path: '/', name: 'Home' },
    { path: '/services', name: 'Services' },
    { path: '/resume', name: 'Resume' },
    { path: '/work', name: 'Work' },
    { path: '/contact', name: 'Contact' },
];

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className='text-[32px] text-accent'/>
            </SheetTrigger>
            <SheetContent classnName='flex flex-col'>
                {/* logo */}
                <div className='mt-32 mb-20 text-center text-2xl'>
                    <Link href="/">
                        <h1 className='text-4xl font-semibold'>
                            Dika<span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>
                {/* nav */}
                <nav className='flex flex-col justify-center items-center gap-4'>
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
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav