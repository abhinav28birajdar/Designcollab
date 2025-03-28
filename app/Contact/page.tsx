import React, { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Mail, Phone, MapPin, Send, Clock, ArrowRight, 
  Twitter, Linkedin, Facebook, Instagram, 
  Youtube, Github, Dribbble, Twitch 
} from "lucide-react"

export default function ContactPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const currentContainer = containerRef.current;
    if (currentContainer) {
      currentContainer.addEventListener('mousemove', handleMouseMove);
      return () => {
        currentContainer.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  // Social media links with icons
  const socialLinks = [
    { 
      icon: <Twitter className="h-5 w-5" />, 
      href: "https://twitter.com/abhi28birajdar",
      name: "X (Twitter)"
    },
    { 
      icon: <Linkedin className="h-5 w-5" />, 
      href: "https://linkedin.com/in/yourusername",
      name: "LinkedIn"
    },
    { 
      icon: <Facebook className="h-5 w-5" />, 
      href: "https://facebook.com/yourusername",
      name: "Facebook"
    },
    { 
      icon: <Instagram className="h-5 w-5" />, 
      href: "https://instagram.com/yourusername",
      name: "Instagram"
    },
    { 
      icon: <Github className="h-5 w-5" />, 
      href: "https://github.com/yourusername",
      name: "GitHub"
    },
    { 
      icon: <Dribbble className="h-5 w-5" />, 
      href: "https://dribbble.com/yourusername",
      name: "Dribbble"
    },
    { 
      icon: <Youtube className="h-5 w-5" />, 
      href: "https://youtube.com/yourusername",
      name: "YouTube"
    },
    { 
      icon: <Twitch className="h-5 w-5" />, 
      href: "https://twitch.tv/yourusername",
      name: "Twitch"
    }
  ];

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br  relative overflow-hidden text-white"
    >
      {/* Dynamic Blur Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(
            600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
             oklch(0.546 0.245 262.881),
        
            transparent 80%
          )`,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 px-4">
        {/* Header */}
        <div className="text-center pt-16 mb-16">
          <h1 className="text-5xl font-bold text-white">
            Get in Touch
          </h1>
          <div className="h-1 w-20 bg-white/30 mx-auto mt-6 rounded-full"></div>
          <p className="text-white/70 mt-6 max-w-2xl mx-auto text-xl">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <Card className="bg-white/10 backdrop-blur-lg border border-white/20 text-white shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  { 
                    icon: <Mail className="h-6 w-6 text-indigo-300" />, 
                    title: "Email Us", 
                    content: "info@company.com" 
                  },
                  { 
                    icon: <Phone className="h-6 w-6 text-indigo-300" />, 
                    title: "Call Us", 
                    content: "+1 (555) 123-4567" 
                  },
                  { 
                    icon: <MapPin className="h-6 w-6 text-indigo-300" />, 
                    title: "Visit Us", 
                    content: "123 Business Avenue, San Francisco, CA 94107" 
                  },
                  { 
                    icon: <Clock className="h-6 w-6 text-indigo-300" />, 
                    title: "Business Hours", 
                    content: "Monday - Friday: 9AM - 5PM\nWeekend: Closed" 
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white/80">{item.title}</h3>
                      <p className="text-white/60">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
             
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-lg border border-white/20 text-white shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-white/70">Full Name</label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="bg-white/10 backdrop-blur-md border-white/20 text-white placeholder-white/50 focus:border-white/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-white/70">Email Address</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-white/10 backdrop-blur-md border-white/20 text-white placeholder-white/50 focus:border-white/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-white/70">Subject</label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    className="bg-white/10 backdrop-blur-md border-white/20 text-white placeholder-white/50 focus:border-white/50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-white/70">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    className="bg-white/10 backdrop-blur-md border-white/20 text-white placeholder-white/50 focus:border-white/50 min-h-[150px] resize-none"
                  />
                </div>

                <div className="pt-4">
                  <Button className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md">
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
                className="bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white/80 mb-2">{faq.question}</h3>
                  <p className="text-white/60 mb-4">{faq.answer}</p>
                  <Button 
                    variant="link" 
                    className="text-white/70 hover:text-white p-0"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pb-8">
          <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl">
            <div className="grid md:grid-cols-3 gap-8 p-8">
              {/* Company Info */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white/80">Company Name</h3>
                <p className="text-white/60 mb-4">
                  Innovative solutions for your business. 
                  Connecting people through technology and design.
                </p>
                <p className="text-white/50 text-sm">
                  &copy; {new Date().getFullYear()} Company Name. All Rights Reserved.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-xl font-semibold mb-4 text-white/80">Quick Links</h4>
                <div className="space-y-2">
                  {[
                    "Home", "About", "Services", 
                    "Portfolio", "Contact", "Privacy Policy"
                  ].map((link) => (
                    <a 
                      key={link} 
                      href="#" 
                      className="block text-white/60 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-xl font-semibold mb-4 text-white/80">Connect</h4>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors backdrop-blur-md"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}