import React from 'react';
import Link from 'next/link';

function Header() {

    return (
        <header className=''>
            <nav className='flex h-16 items-center justify-around '>
                <div >
                    <h2 className='text-2xl font-medium'
                    >KRIOTEK</h2>
                </div>
                <ul className='flex gap-10 text-sky-900 font-bold '>
                    <li className='hover:text-sky-600 '>
                        <Link href="/" >Home</Link>
                    </li>
                    <li className='hover:text-sky-600 '>

                        <Link href="#" >About</Link>
                    </li>
                    <li className='hover:text-sky-600 '>
                        <Link href="#" >Contact</Link>
                    </li>
                     <li className='hover:text-sky-600 '>
                        <Link href="#" >Carrer</Link>
                    </li>
                </ul>
                <button className='bg-sky-950 text-white px-4 py-2 rounded-md'>
                    <Link href="/login" >Log In</Link>
                </button>
            </nav>
        </header>
    );
}

export default Header;
