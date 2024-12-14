"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Crown } from 'lucide-react'
import { LoyaltyHeader } from './header'
import { LoyaltyBenefits } from './benefits'

export function LoyaltyProgram({ isMobile = false }) {
  const [isOpen, setIsOpen] = useState(false)

  if (isMobile) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
      >
        <Crown className="h-5 w-5" />
        <span className="text-sm">Rewards</span>
      </button>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
      >
        <Crown className="h-5 w-5" />
        <span className="text-sm">Rewards</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute right-0 top-full mt-4 w-[900px] bg-[#0A0B14] border border-white/10 rounded-xl shadow-2xl z-50 -translate-x-1/2 p-8"
            >
              <LoyaltyHeader
                title="Best Loyalty Program"
                description="Streamlined three-tier loyalty program where every member enjoys the same high-quality rewards, with benefits escalating at each tier. Simple yet effective, this program stands as the best deal for Eloking's boosting services, ensuring maximum value and satisfaction for all our users."
                highlight="the best deal for Eloking's boosting services"
              />
              <LoyaltyBenefits />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}