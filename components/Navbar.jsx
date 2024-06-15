// components/Navbar.js
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/icons/logo.png';
import styles from '@/assets/styles/Navbar.module.css';
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-4 px-12 text-sm shadow-md">
            <div className="flex items-center space-x-8">
                
                <Link href="/">
                    <Image src={logo} alt="Aliens Valley Logo" width={20} height={20} />
                </Link>
                <Link href="/">
                    <span className="text-lg font-semibold">Aliens Valley</span>
                </Link>
                <div className="relative flex items-center">
                    <input
                        type="text"
                        className="p-2 border rounded-md w-64 "
                        placeholder="SEARCH"
                    />
                </div>
            </div>
            <div className='flex items-center'>
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
                    <li>
                        <Link href="/login">
                            <span className={styles['hover-line']}>LOGIN</span>
                        </Link>
                    </li>
                </ul>
               
                <Link href="/cart" className="ml-6">
                    <span className="hover:text-gray-700">
                        <FaShoppingCart size={20} />
                    </span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
