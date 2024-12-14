"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function Hero() {
  useEffect(() => {
    const handleScroll = () => {
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#242424]">
      <div className="absolute inset-0 flex">
        <div className="relative h-full w-1/2">
          <Image
            src="/images/bg/jett-bg.webp"
            alt="Background Left"
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-75 object-[70%_center]"
            priority
          />
          <div className="absolute inset-y-0 right-0 w-[300px] bg-gradient-to-r from-transparent via-[#242424]/80 to-[#242424]" />
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center">
          <div className="space-y-8">
            <Image
              src="/images/logo/EVO-LOGO.webp"
              alt="EVO BOOSTING"
              width={400}
              height={133}
              className="mx-auto"
              priority
            />
            <h1 className="text-4xl font-bold text-white">
              Professional Game Boosting Service
            </h1>
            <p className="text-lg text-gray-300">
              Reach your desired rank with our professional boosters
            </p>
            <button className="rounded-md bg-orange-500 px-8 py-3 text-lg font-medium text-white hover:bg-orange-600 transition-colors">
              Get Started
            </button>
          </div>

          <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-2">
                <Image
                  src="/images/logo/irelia-bg.webp"
                  alt="Trustpilot"
                  width={100}
                  height={20}
                  className="h-5 object-contain"
                />
                <div className="flex">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-green-500">
                      {star}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-400">436 reviews on Trustpilot</p>
            </div>
          </div>
        </div>

        <div className="relative h-full w-1/2">
          <Image
            src="/images/bg/irelia-bg.webp"
            alt="Background Right"
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-75 object-[50%_center]"
            priority
          />
          <div className="absolute inset-y-0 left-0 w-[300px] bg-gradient-to-l from-transparent via-[#242424]/80 to-[#242424]" />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white opacity-75" />
      </div>
    </section>
  )
}