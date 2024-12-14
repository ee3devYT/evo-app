"use client"

import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import NavLink from './nav-link'
import MobileMenu from './mobile-menu'
import Logo from './logo'
import GameSelector from './game-selector'
import { NotificationBell } from './notification-bell'
import { LoginModal } from '../../auth/login-modal'
import { LoyaltyProgram } from '../../loyalty/loyalty-program'
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../../../utils/constants/site';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isLoginModalOpen) {
      setIsMobileMenuOpen(false)
    }
  }, [isLoginModalOpen])

  const handleLoginClick = () => {
    setIsLoginModalOpen(true)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-gradient-to-r from-slate-500/10 via-slate-400/15 to-slate-500/10 backdrop-blur-[3px]'
            : 'bg-gradient-to-r from-slate-400/5 via-slate-300/10 to-slate-400/5 backdrop-blur-[2px]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo and Game Selector */}
            <div className="flex items-center space-x-4 md:space-x-8">
              <Logo />
              <div className="hidden lg:flex lg:items-center">
                <GameSelector />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
              
              <div className="flex items-center space-x-4 pl-4 border-l border-white/20">
                <NotificationBell />
                <LoyaltyProgram />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLoginClick}
                  className="bg-gradient-to-r from-[#C19A6B] to-[#A88B5E] text-white px-6 py-2 rounded-lg transition-all duration-300 font-medium"
                >
                  LOGIN
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-3">
              <NotificationBell />
              <LoyaltyProgram />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        links={navLinks}
        onClose={() => setIsMobileMenuOpen(false)}
        onLoginClick={handleLoginClick}
      />

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  )
}