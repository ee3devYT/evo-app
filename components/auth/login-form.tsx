"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Lock, Loader2 } from 'lucide-react'

interface LoginFormProps {
  onClose: () => void
}

export function LoginForm({ onClose }: LoginFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
    onClose()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Email Input */}
      <div className="space-y-2">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
          <input
            type="email"
            placeholder="Email address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full rounded-lg bg-white/5 px-10 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#C19A6B]/50 transition-all duration-300"
            required
          />
        </div>
      </div>

      {/* Password Input */}
      <div className="space-y-2">
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full rounded-lg bg-white/5 px-10 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#C19A6B]/50 transition-all duration-300"
            required
          />
        </div>
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center space-x-2 text-white/60">
            <input type="checkbox" className="rounded border-white/20 bg-white/5" />
            <span>Remember me</span>
          </label>
          <button type="button" className="text-[#C19A6B] hover:text-[#A88B5E] transition-colors">
            Forgot password?
          </button>
        </div>
      </div>

      {/* Submit Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isLoading}
        className="relative w-full rounded-lg bg-gradient-to-r from-[#C19A6B] to-[#A88B5E] py-3 text-white font-medium transition-all duration-300 disabled:opacity-70"
      >
        {isLoading ? (
          <Loader2 className="h-5 w-5 animate-spin mx-auto" />
        ) : (
          'Sign in'
        )}
        {!isLoading && (
          <motion.div
            className="absolute inset-0 rounded-lg bg-white/20 opacity-0 transition-opacity"
            whileHover={{ opacity: 1 }}
          />
        )}
      </motion.button>
    </form>
  )
}