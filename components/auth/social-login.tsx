"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FaDiscord } from "react-icons/fa";

export function SocialLogin() {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative w-full rounded-lg bg-[#5865F2] py-3 px-4 text-white font-medium transition-all duration-300"
    >
      <div className="flex items-center justify-center space-x-2">
        <FaDiscord className="h-5 w-5" />
        <span>Continue with Discord</span>
      </div>
      <motion.div
        className="absolute inset-0 rounded-lg bg-white/20 opacity-0 transition-opacity"
        whileHover={{ opacity: 1 }}
      />
    </motion.button>
  )
}