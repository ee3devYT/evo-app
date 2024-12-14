"use client"

import React from 'react'
import GameSelector from './game-selector'
import { User, Settings, HelpCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface MobileMenuProps {
  isOpen: boolean
  links: Array<{ href: string; label: string }>
  onClose: () => void
  onLoginClick: () => void
}

const MobileMenu = ({ isOpen, links, onClose, onLoginClick }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] md:hidden"
        >
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/95 backdrop-blur-lg"
            onClick={onClose}
          />
          
          {/* Content */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="absolute right-0 top-0 h-[100dvh] w-full max-w-[280px] bg-[#1A1A1A]/95 overflow-y-auto"
          >
            <div className="flex flex-col h-full pt-20">
              <div className="flex-1 overflow-y-auto px-4">
                {/* Game Selector */}
                <div className="mb-6 pb-4 border-b border-white/10">
                  <GameSelector />
                </div>

                {/* Navigation Links */}
                <nav className="space-y-1">
                  {links.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      className="flex items-center text-white hover:text-[#C19A6B] px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors"
                      onClick={onClose}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="text-sm font-medium">{link.label}</span>
                    </motion.a>
                  ))}
                </nav>

                {/* Additional Links */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  {[
                    { href: '/profile', label: 'Profile', icon: User },
                    { href: '/settings', label: 'Settings', icon: Settings },
                    { href: '/help', label: 'Help Center', icon: HelpCircle },
                  ].map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      className="flex items-center space-x-3 text-white hover:text-[#C19A6B] px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (links.length + index) * 0.1 }}
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Login Button */}
              <div className="p-4 border-t border-white/10">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onLoginClick}
                  className="w-full bg-gradient-to-r from-[#C19A6B] to-[#A88B5E] text-white py-2.5 rounded-lg font-medium transition-all duration-300"
                >
                  LOGIN
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu