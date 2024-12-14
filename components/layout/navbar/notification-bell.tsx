"use client"

import { Bell, Copy, Check, X } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Notification {
  id: string
  title: string
  message: string
  time: string
  code?: string
  isNew?: boolean
}

export function NotificationBell() {
  const [hasNotification, setHasNotification] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const notifications: Notification[] = [
    {
      id: '1',
      title: "Special Offer! 🎉",
      message: "Get 10% off your first order with our exclusive coupon code.",
      time: "Just now",
      code: "EVO10",
      isNew: true
    },
    {
      id: '2',
      title: "Welcome to EVO! 👋",
      message: "Thanks for joining. Explore our services and level up your game.",
      time: "2 hours ago"
    }
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const handleBellClick = () => {
    setHasNotification(false)
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button 
        className="relative inline-flex items-center justify-center p-2 text-white hover:text-[#C19A6B] transition-colors"
        onClick={handleBellClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Bell className="h-5 w-5" />
        <AnimatePresence>
          {hasNotification && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ 
              duration: 0.2,
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            className="absolute right-0 mt-2 w-96 bg-gradient-to-b from-[#1A1A1A]/95 to-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="p-4 border-b border-white/10">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-medium">Notifications</h3>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white/50 hover:text-white transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="max-h-[400px] overflow-y-auto">
              {notifications.map((notification, index) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="text-white font-medium text-sm">
                          {notification.title}
                        </h4>
                        {notification.isNew && (
                          <span className="px-1.5 py-0.5 bg-[#C19A6B]/20 text-[#C19A6B] text-xs rounded-full">
                            New
                          </span>
                        )}
                      </div>
                      <p className="text-white/70 text-sm mt-1">
                        {notification.message}
                      </p>
                      
                      {notification.code && (
                        <motion.div 
                          className="mt-3 flex items-center space-x-2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <code className="bg-black/30 px-3 py-1.5 rounded-lg text-[#C19A6B] font-mono text-sm border border-[#C19A6B]/20">
                            {notification.code}
                          </code>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleCopyCode(notification.code!)}
                            className="p-1.5 hover:bg-white/10 rounded-lg transition-colors group"
                          >
                            {isCopied ? (
                              <Check className="h-4 w-4 text-green-500" />
                            ) : (
                              <Copy className="h-4 w-4 text-[#C19A6B] group-hover:text-[#C19A6B]/80" />
                            )}
                          </motion.button>
                        </motion.div>
                      )}
                      
                      <span className="text-white/30 text-xs mt-2 block">
                        {notification.time}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="p-3 bg-white/5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <button className="text-[#C19A6B] text-sm hover:text-[#C19A6B]/80 transition-colors w-full text-center">
                View all notifications
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}