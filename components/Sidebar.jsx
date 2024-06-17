"use client";

import {useEffect,useState} from 'react';
import { signOut } from 'next-auth/react'; // Import signOut

const Sidebar = ({ isOpen, toggleSidebar, session }) => {

  const username = session?.user?.name || 'Guest'; // Fallback if name is not available
  const firstName = username.split(' ')[0];
  const truncatedFirstName = firstName.length > 20 ? `${firstName.substring(0, 17)}...` : firstName
  const [lastScrollY, setLastScrollY] = useState(0);
  const scrollThreshold = 50;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isOpen && Math.abs(currentScrollY - lastScrollY) > scrollThreshold) {
        toggleSidebar();
      }
      setLastScrollY(currentScrollY);

    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen, toggleSidebar]);

  return (
    <div
      className={`fixed top-0 z-10 right-0 h-screen bg-[#1E1F20] text-white transition-transform duration-500 ease-in-out transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      style={{ width: '300px' }}
    >
      
      {isOpen && (
        <nav className="mt-20 flex flex-col justify-between h-[calc(100vh-80px)]"> {/* Adjust height to fit sidebar */}
          <ul>
            {/* User Info */}
            <li className="p-4">
              <p>Hi,
                </p>
                <strong className=' text-4xl'>{truncatedFirstName}</strong>
            </li>
          </ul>
          {/* Logout Button at Bottom */}
          {session && (
            <div className="p-4">
              <button
                onClick={() => {
                  signOut();
                  toggleSidebar(); // Close sidebar after logout
                }}
                className="w-full text-left bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded focus:outline-none"
              >
                Logout
              </button>
            </div>
          )}
        </nav>

      )}
    </div>
  );
};

export default Sidebar;
