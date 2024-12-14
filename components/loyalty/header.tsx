"use client"

import React from 'react'

interface LoyaltyHeaderProps {
  title: string
  description: string
  highlight?: string
}

export function LoyaltyHeader({ description, highlight }: LoyaltyHeaderProps) {
  const parts = highlight ? description.split(highlight) : [description]
  
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4">
        <span className="text-white">Best </span>
        <span className="text-[#C19A6B]">Loyalty Program</span>
      </h2>
      <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed">
        {parts[0]}
        {highlight && <span className="text-white font-medium">{highlight}</span>}
        {parts[1]}
      </p>
    </div>
  )
}