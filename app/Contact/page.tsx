import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Clock, ArrowRight } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white">
            Get in Touch
          </h1>
          <div className="h-1 w-20 bg-indigo-400 mx-auto mt-6 rounded-full"></div>
          <p className="text-indigo-200 mt-6 max-w-2xl mx-auto text-xl">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <Card className="bg-indigo-600 text-white border-none shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  { 
                    icon: <Mail className="h-6 w-6 text-indigo-400" />, 
                    title: "Email Us", 
                    content: "info@company.com" 
                  },
                  { 
                    icon: <Phone className="h-6 w-6 text-indigo-400" />, 
                    title: "Call Us", 
                    content: "+1 (555) 123-4567" 
                  },
                  { 
                    icon: <MapPin className="h-6 w-6 text-indigo-400" />, 
                    title: "Visit Us", 
                    content: "123 Business Avenue, San Francisco, CA 94107" 
                  },
                  { 
                    icon: <Clock className="h-6 w-6 text-indigo-400" />, 
                    title: "Business Hours", 
                    content: "Monday - Friday: 9AM - 5PM\nWeekend: Closed" 
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-white p-3 rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-indigo-200">{item.title}</h3>
                      <p className="text-indigo-100">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-indigo-200 mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                    <a
                      key={social}
                      href={`#${social}`}
                      className="bg-indigo-700 hover:bg-indigo-600 p-3 rounded-full transition-colors"
                    >
                      <span className="sr-only">{social}</span>
                      <div className="w-6 h-6 bg-indigo-500 rounded-full"></div>
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="bg-indigo-800 text-white border-none shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-indigo-200">Full Name</label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="bg-indigo-700 border-indigo-600 text-white placeholder-indigo-400 focus:border-indigo-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-indigo-200">Email Address</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-indigo-700 border-indigo-600 text-white placeholder-indigo-400 focus:border-indigo-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-indigo-200">Subject</label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    className="bg-indigo-700 border-indigo-600 text-white placeholder-indigo-400 focus:border-indigo-400"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-indigo-200">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    className="bg-indigo-700 border-indigo-600 text-white placeholder-indigo-400 focus:border-indigo-400 min-h-[150px] resize-none"
                  />
                </div>

                <div className="pt-4">
                  <Button className="bg-indigo-600 hover:bg-indigo-500 text-white">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Frequently Asked Questions</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "How quickly will you respond?",
                answer: "We typically respond to all inquiries within 24-48 business hours.",
              },
              {
                question: "Do you offer support on weekends?",
                answer: "Our support team is available Monday through Friday. Weekend support is available for premium customers.",
              },
              {
                question: "Can I schedule a meeting?",
                answer: "Yes! You can request a meeting through our contact form or call us directly to schedule.",
              },
              {
                question: "Where are you located?",
                answer: "Our main office is in San Francisco, with satellite offices in New York and London.",
              }
            ].map((faq, index) => (
              <Card 
                key={index} 
                className="bg-indigo-800 border-none shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-indigo-200 mb-2">{faq.question}</h3>
                  <p className="text-indigo-100 mb-4">{faq.answer}</p>
                  <Button 
                    variant="link" 
                    className="text-indigo-400 hover:text-indigo-300 p-0"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 max-w-6xl mx-auto">
          <Card className="bg-indigo-800 border-none shadow-lg">
            <CardContent className="p-8 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                <p className="text-indigo-200">Interactive map would be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}