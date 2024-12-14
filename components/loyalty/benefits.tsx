"use client"

import React from 'react'
import { Wallet, Tag, Users, Gift, Ticket } from 'lucide-react'
import { LoyaltyCard } from './card'

export function LoyaltyBenefits() {
  const benefits = [
    {
      icon: Wallet,
      title: "Cashback on all Eloking boosts",
      description: "(3%, 5%, 7%)"
    },
    {
      icon: Tag,
      title: "Discounts for all Eloking boosts",
      description: "(5%, 10%, 15%)"
    },
    {
      icon: Users,
      title: "Discount for a friend 😊",
    },
    {
      icon: Gift,
      title: "Free daily lootbox spin with industry-leading rewards",
    },
    {
      icon: Ticket,
      title: "Member exclusive season and event offers",
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {benefits.map((benefit, index) => (
        <LoyaltyCard
          key={index}
          icon={benefit.icon}
          title={benefit.title}
          description={benefit.description}
        />
      ))}
    </div>
  )
}