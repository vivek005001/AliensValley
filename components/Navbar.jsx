'use client';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/icons/logo.png';
import styles from '@/assets/styles/Navbar.module.css';
import { FaShoppingCart, FaBell } from 'react-icons/fa';
import { signIn, useSession, getProviders } from 'next-auth/react';
import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar'; // Adjust this path

const Navbar = () => {
    const { data: session } = useSession();
    const [providers, setProviders] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    
    
    useEffect(() => {
        const setAuthProviders = async () => {
            const res = await getProviders();
            setProviders(res);
        };

        setAuthProviders();
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <nav className="flex items-center justify-between py-4 px-12 text-sm shadow-md fixed top-0 left-0 right-0 bg-white z-50 h-[4rem]">
                <div className="flex items-center space-x-8">
                    <Link href="/">
                        <Image src={logo} alt="Aliens Valley Logo" width={40} height={40} />
                    </Link>
                    <Link href="/">
                        <span className="text-lg font-semibold">Aliens Valley</span>
                    </Link>
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            className="p-2 border rounded-md w-64"
                            placeholder="SEARCH"
                        />
                    </div>
                </div>
                <div className="flex items-center">
                    <ul className="flex space-x-8 text-sm">
                        <li>
                            <Link href="/">
                                <span className={styles['hover-line']}>HOME</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/explore">
                                <span className={styles['hover-line']}>EXPLORE</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/trending">
                                <span className={styles['hover-line']}>TRENDING</span>
                            </Link>
                        </li>
                        {session ? (
                            <>
                                <li>
                                    <Link href="/cart">
                                        <FaShoppingCart size={20} />
                                    </Link>
                                </li>
                                <li>
                                    <FaBell size={20} className="cursor-pointer" />
                                </li>
                                <li>
                                    <button onClick={toggleSidebar} className="focus:outline-none">
                                        <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-300">
                                            <Image
                                                src={session.user.image || '/default-profile.png'}
                                                alt="Profile"
                                                width={32}
                                                height={32}
                                            />
                                        </div>
                                    </button>
                                </li>
                            </>
                        ) : (
                            <li>
                                {providers && Object.values(providers).map((provider, index) => (
                                    <button key={index} onClick={() => signIn(provider.id)} className={styles['hover-line']}>
                                        LOGIN
                                    </button>
                                ))}
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} session={session} />
            <div className="pt-[4rem]">
                {/* Your page content */}
            </div>
        </>
    );
};

export default Navbar;
