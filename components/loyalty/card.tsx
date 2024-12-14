"use client"

import React from 'react'
import { LucideIcon } from 'lucide-react'

interface LoyaltyCardProps {
  icon: LucideIcon
  title: string
  description?: string
}

export function LoyaltyCard({ icon: Icon, title, description }: LoyaltyCardProps) {
  return (
    <div className="relative p-6 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] transition-all duration-300">
      <div className="mb-4">
        <Icon className="h-6 w-6 text-[#C19A6B]" />
      </div>
      <h3 className="text-white text-lg font-medium mb-2">{title}</h3>
      {description && (
        <p className="text-white/60 text-sm">{description}</p>
      )}
    </div>
  )
}