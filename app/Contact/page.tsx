import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import ContactInfo from "@/app/Contact/contact-info"
import SocialIcons from "@/app/socialmedia/social-icons"

export default function ContactPage() {
  return (
    <div className="container mx-auto py-10 px-7 bg-[#6810c1] rounded-md">
      <div className="grid md:grid-cols-2 gap-8 items-start  ">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
            <p className="text-muted-foreground">
              We'd love to hear from you. Fill out the form or use our contact information.
            </p>
          </div>

          <ContactInfo />

          <div className="pt-4">
            <Link href="/feedback" className="inline-flex items-center">
              <Button variant="outline" className="gap-2">
                Share Your Feedback
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
                  className="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Button>
            </Link>
          </div>

          <SocialIcons />
        </div>

        <div className="bg-primary/10 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Got ideas? We've got the skills. Let's team up.</h2>
          <p className="mb-6">Tell us more about yourself and what you're got in mind.</p>

          <form className="space-y-4 roun">
            <div>
              <Input placeholder="Your name" className="bg-white/80" />
            </div>
            <div>
              <Input type="email" placeholder="you@company.com" className="bg-white/80" />
            </div>
            <div>
              <Textarea placeholder="Tell us a little about the project..." className="bg-white/80 min-h-[100px]" />
            </div>

            <div>
              <p className="font-medium mb-3">How can we help?</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="website" />
                  <label htmlFor="website" className="text-sm">
                    Website design
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="content" />
                  <label htmlFor="content" className="text-sm">
                    Content creation
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="ux" />
                  <label htmlFor="ux" className="text-sm">
                    UX design
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="strategy" />
                  <label htmlFor="strategy" className="text-sm">
                    Strategy & consulting
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="research" />
                  <label htmlFor="research" className="text-sm">
                    User research
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="other" />
                  <label htmlFor="other" className="text-sm">
                    Other
                  </label>
                </div>
              </div>
            </div>

            <Button className="w-15 bg-gray-200 text-black">Let's get started!</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

