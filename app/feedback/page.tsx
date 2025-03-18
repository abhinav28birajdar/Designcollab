"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Star } from "lucide-react"
import Link from "next/link"

export default function FeedbackPage() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  return (
    <div className="container mx-auto py-12 px-4 max-w-2xl">
      <div className="mb-6">
        <Link href="/contact" className="text-primary hover:underline flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-left"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Back to Contact
        </Link>
      </div>

      <div className="bg-card p-8 rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold mb-2">Share Your Feedback</h1>
        <p className="text-muted-foreground mb-8">
          We value your opinion and would love to hear about your experience with us.
        </p>

        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="font-medium">
              Your Name
            </label>
            <Input id="name" placeholder="Enter your name" />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="font-medium">
              Email Address
            </label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>

          <div className="space-y-2">
            <label className="font-medium">How would you rate your experience?</label>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => {
                const ratingValue = i + 1
                return (
                  <button
                    type="button"
                    key={ratingValue}
                    className={`text-2xl ${ratingValue <= (hover || rating) ? "text-yellow-400" : "text-gray-300"}`}
                    onClick={() => setRating(ratingValue)}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(0)}
                  >
                    <Star className="h-8 w-8" fill={ratingValue <= (hover || rating) ? "currentColor" : "none"} />
                    <span className="sr-only">{ratingValue} stars</span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="feedback" className="font-medium">
              Your Feedback
            </label>
            <Textarea
              id="feedback"
              placeholder="Please share your thoughts, suggestions, or concerns..."
              className="min-h-[150px]"
            />
          </div>

          <Button type="submit" className="w-full">
            Submit Feedback
          </Button>
        </form>
      </div>
    </div>
  )
}

