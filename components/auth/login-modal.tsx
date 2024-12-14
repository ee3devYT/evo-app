"use client"

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { LoginForm } from './login-form'
import { SocialLogin } from './social-login'
import { Separator } from '../ui/separator'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center px-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl bg-[#1A1A1A] shadow-xl"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-4 top-4 p-1 text-white/60 hover:text-white transition-colors"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
            </motion.button>

            <div className="p-6">
              {/* Header */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
                <p className="text-white/60">Sign in to continue to EVO Gaming</p>
              </div>

              {/* Social Login */}
              <SocialLogin />

              {/* Separator */}
              <div className="relative my-6">
                <Separator className="bg-white/10" />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1A1A1A] px-2 text-sm text-white/40">
                  or continue with
                </span>
              </div>

              {/* Login Form */}
              <LoginForm onClose={onClose} />

              {/* Footer */}
              <p className="mt-6 text-center text-sm text-white/40">
                Don&apos;t have an account?{' '}
                <button className="text-[#C19A6B] hover:text-[#A88B5E] transition-colors font-medium">
                  Sign up
                </button>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}