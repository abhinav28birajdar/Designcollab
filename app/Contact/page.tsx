import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Clock, ArrowRight } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b   from-background to-background/60 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Get in Touch
          </h1>
          <div className="h-1 w-20 bg-primary mx-auto mt-6 rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg text-2xl text-bold text-indigo-600">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-5 bg-indigo-600 rounded-2xl gap-10 max-w-6xl mx-auto">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="h-2 bg-gradient-to-r from-primary to-primary/60"></div>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Email Us</h3>
                      <a
                        href="mailto:info@company.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@company.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Call Us</h3>
                      <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Visit Us</h3>
                      <p className="text-muted-foreground">
                        123 Business Avenue
                        <br />
                        San Francisco, CA 94107
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9AM - 5PM
                        <br />
                        Weekend: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="font-medium text-lg mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                      <a
                        key={social}
                        href={`#${social}`}
                        className="bg-primary/10 hover:bg-primary/20 p-3 rounded-full transition-colors"
                      >
                        <span className="sr-only">{social}</span>
                        <div className="w-5 h-5 bg-primary/80 rounded-full"></div>
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact form.... */}
          <div className="lg:col-span-3 ">
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="h-2 bg-gradient-to-r from-primary/60 to-primary"></div>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        className="border-muted-foreground/20 focus:border-primary h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="border-muted-foreground/20 focus:border-primary h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="How can we help you?"
                      className="border-muted-foreground/20 focus:border-primary h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      className="min-h-[150px] border-muted-foreground/20 focus:border-primary resize-none"
                    />
                  </div>

                  <div className="pt-4">
                    <Button className="h-12 px-8 rounded-full font-medium">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-14 max-w-6xl mx-auto bg-indigo-600 rounded-2xl ">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "How quickly will you respond?",
                answer: "We typically respond to all inquiries within 24-48 business hours.",
              },
              {
                question: "Do you offer support on weekends?",
                answer:
                  "Our support team is available Monday through Friday. Weekend support is available for premium customers.",
              },
              {
                question: "Can I schedule a meeting?",
                answer: "Yes! You can request a meeting through our contact form or call us directly to schedule.",
              },
              {
                question: "Where are you located?",
                answer: "Our main office is in San Francisco, with satellite offices in New York and London.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                  <Button variant="link" className="mt-2 p-0 h-auto text-primary">
                    Learn more <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="mt-24 max-w-6xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <div className="bg-muted h-[400px] w-full flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-primary/40 mx-auto mb-4" />
              <p className="text-muted-foreground">Interactive map would be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

