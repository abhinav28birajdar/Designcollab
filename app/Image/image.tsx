"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function HorizontalImageGrid() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Auto-scroll from right to left
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const scrollInterval = setInterval(() => {
      container.scrollBy({ left: -2, behavior: "smooth" })
    }, 50)

    return () => clearInterval(scrollInterval)
  }, [])

  return (
    <div className="w-full max-w-7.5xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6">Image Gallery</h2>

      {/* Auto-scrolling gallery */}
      <div className="relative">
        <div ref={scrollContainerRef} className="flex overflow-x-auto gap-4 pb-6" style={{ direction: "rtl" }}>
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="flex-shrink-0 w-64 min-w-64">
              <div className="overflow-hidden rounded-lg border border-border shadow-sm">
                <Image
                  src={`/placeholder.svg?height=300&width=400&text=Image+${index + 1}`}
                  width={400}
                  height={300}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={() => scrollContainerRef.current?.scrollBy({ left: 300, behavior: "smooth" })}
          className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 shadow-md border border-border"
          aria-label="Previous"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={() => scrollContainerRef.current?.scrollBy({ left: -300, behavior: "smooth" })}
          className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-background/80 shadow-md border border-border"
          aria-label="Next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Manual scrolling gallery */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4">Manual Scrolling Gallery</h3>
        <div className="flex overflow-x-auto gap-4 pb-4" style={{ direction: "rtl" }}>
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="flex-shrink-0 w-64 min-w-64">
              <div className="overflow-hidden rounded-lg border border-border shadow-sm">
                <Image
                  src={`/placeholder.svg?height=300&width=400&text=Scroll+${index + 1}`}
                  width={400}
                  height={300}
                  alt={`Scrollable image ${index + 1}`}
                  className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

