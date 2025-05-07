'use client'

import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="pt-6 pb-4 bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-text-dark hover:text-accent">
            MALLORY ANTOMARCHI
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 text-sm">
            <Link href="/" className="text-text-default hover:text-accent">
              Home
            </Link>
            <Link href="/about" className="text-text-default hover:text-accent">
              About
            </Link>
            <Link href="/blog" className="text-text-default hover:text-accent">
              Blog
            </Link>
            <Link href="/projects" className="text-text-default hover:text-accent">
              Projects
            </Link>
            <Link href="/contact" className="text-text-default hover:text-accent">
              Contact
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-text-dark focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 mt-2 space-y-3 border-t border-primary-dark">
            <Link 
              href="/" 
              className="block text-text-default hover:text-accent py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block text-text-default hover:text-accent py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/blog" 
              className="block text-text-default hover:text-accent py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/projects" 
              className="block text-text-default hover:text-accent py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="/contact" 
              className="block text-text-default hover:text-accent py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 