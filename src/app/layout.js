"use client"; 

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname(); 
  const [menuOpen, setMenuOpen] = useState(false); 

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-r from-[#fefffe] to-[#ffffff]`}>
      
      {/* Navigation Bar */}
      <nav className="bg-white p-4 shadow-md w-full fixed top-0 z-50 h-16">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo & Title */}
          <div className="flex items-center text-black text-lg md:text-2xl font-semibold font-serif">
            <img
              src="/images/logoPHI.jpg"
              alt="Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="ml-4">PHII Magazine</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/about" className="text-black underline underline-offset-4 hover:text-gray-600">About</Link>
            <Link href="/RSSpage" className="text-black underline underline-offset-4 hover:text-gray-600">News</Link>
            {pathname !== "/" && (
              <Link href="/" className="text-black hover:text-gray-600">Home</Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none z-50 relative" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-8 h-8 text-black"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                // Close Icon (X)
                <path 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger Menu Icon
                <path 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-2 bg-white p-4 absolute top-16 left-0 w-full shadow-lg">
            <Link href="/about" className="text-black hover:text-gray-600 p-2" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/RSSpage" className="text-black hover:text-gray-600 p-2" onClick={() => setMenuOpen(false)}>News</Link>
            {pathname !== "/" && (
              <Link href="/" className="text-black hover:text-gray-600 p-2" onClick={() => setMenuOpen(false)}>Home</Link>
            )}
          </div>
        )}
      </nav>

      {/* Push Content Below Navbar */}
      <div className="pt-20"></div>

      <div className="container mx-auto px-4 py-6">
        {children}
      </div>

      {/* Footer */}
      <footer className="bg-white shadow-sm w-full dark:bg-gray-800 mt-10">
        <div className="w-full mx-auto max-w-screen-xl px-6 py-8 flex flex-col md:flex-row md:justify-between md:items-center">
          
          <div className="text-lg font-semibold text-gray-800 dark:text-white mb-6 md:mb-0">
            <h2>CONTACTS</h2>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li><strong>Website:</strong> <a href="mailto:aljames@gmail.com" className="hover:text-blue-500">aljames@gmail.com</a></li>
              <li><strong>Telephone No:</strong> 02-8538-2054 / 02-77509605 / +639946529009</li>
              <li><strong>Email:</strong> <a href="mailto:aljames@gmail.com" className="hover:text-blue-500">aljames@gmail.com</a></li>
              <li><strong>Facebook:</strong> <a href="https://facebook.com" className="hover:text-blue-500">facebook.com/aljames</a></li>
            </ul>
          </div>
        </div>

        <div className="w-full mx-auto max-w-screen-xl p-4 text-center text-sm text-gray-500 dark:text-gray-400">
          © 2023 <a href="https://flowbite.com/" className="hover:underline">Syntax™</a>. All Rights Reserved.
        </div>
      </footer>

      </body>
    </html>
  );
}
