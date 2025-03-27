"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, ChevronRight, MessageSquare, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ServicePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      quote:
        "Agraphicart transformed our brand identity completely. Their attention to detail and creative approach helped us stand out in a crowded market.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "Bloom Retail",
      quote:
        "Working with Agraphicart on our rebranding was the best decision we made last year. They delivered beyond our expectations and on schedule.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      company: "Culinary Creations",
      quote:
        "The team at Agraphicart understood our vision immediately. Their designs perfectly captured the essence of our restaurant chain.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Services Section */}
      <section className="py-20" id="services">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl text-indigo-600">Our Services</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We offer comprehensive design solutions tailored to your unique needs, helping you build a cohesive and
              impactful visual presence.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 bg-indigo-600 rounded-2xl">
            {[
              {
                title: "Brand Identity",
                description:
                  "We create cohesive brand identities that resonate with your audience and set you apart from competitors.",
                icon: "/placeholder.svg?height=48&width=48",
                features: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Brand Messaging"],
              },
              {
                title: "Logo Design",
                description:
                  "Our custom logo designs capture the essence of your brand in a memorable, versatile mark.",
                icon: "/placeholder.svg?height=48&width=48",
                features: ["Logo Concepts", "Refinement", "Final Deliverables", "Usage Guidelines"],
              },
              {
                title: "UI/UX Design",
                description:
                  "We create intuitive, engaging digital experiences that delight users and achieve business goals.",
                icon: "/placeholder.svg?height=48&width=48",
                features: ["User Research", "Wireframing", "Prototyping", "UI Design Systems"],
              },
              {
                title: "Social Media Graphics",
                description: "Scroll-stopping visuals that boost engagement and strengthen your social media presence.",
                icon: "/placeholder.svg?height=48&width=48",
                features: ["Content Strategy", "Post Templates", "Story Graphics", "Ad Creatives"],
              },
              {
                title: "Print Design",
                description: "High-quality print materials that make a lasting impression in the physical world.",
                icon: "/placeholder.svg?height=48&width=48",
                features: ["Business Collateral", "Packaging", "Signage", "Marketing Materials"],
              },
              {
                title: "Motion Graphics",
                description:
                  "Dynamic animations and video content that bring your brand to life and increase engagement.",
                icon: "/placeholder.svg?height=48&width=48",
                features: ["Animated Logos", "Social Media Animations", "Video Intros", "Explainer Videos"],
              },
            ].map((service, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg transition-all hover:shadow-xl">
                <div className="h-2 bg-primary"></div>
                <CardContent className="p-6 pt-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Image
                      src={service.icon || "/placeholder.svg"}
                      alt={service.title}
                      width={48}
                      height={48}
                      className="h-6 w-6 text-primary"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                  <p className="mb-6 text-muted-foreground">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="mt-6 px-0 text-primary">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Work</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Browse through our recent projects and see how we've helped brands across various industries achieve their
              visual communication goals.
            </p>
          </div>

          <Tabs defaultValue="all" className="mx-auto max-w-5xl">
            <div className="mb-8 flex justify-center">
              <TabsList>
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="branding">Branding</TabsTrigger>
                <TabsTrigger value="digital">Digital</TabsTrigger>
                <TabsTrigger value="print">Print</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-lg">
                    <Image
                      src={`/placeholder.svg?height=400&width=600&text=Project+${index + 1}`}
                      alt={`Project ${index + 1}`}
                      width={600}
                      height={400}
                      className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <h3 className="text-xl font-bold text-white">Project Title {index + 1}</h3>
                      <p className="text-white/80">Branding, Digital Design</p>
                      <Button variant="link" className="mt-2 p-0 text-white hover:text-primary">
                        View Case Study
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Other tab contents would be similar but with filtered projects */}
            <TabsContent value="branding" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-lg">
                    <Image
                      src={`/placeholder.svg?height=400&width=600&text=Branding+${index + 1}`}
                      alt={`Branding Project ${index + 1}`}
                      width={600}
                      height={400}
                      className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <h3 className="text-xl font-bold text-white">Branding Project {index + 1}</h3>
                      <p className="text-white/80">Brand Identity, Logo Design</p>
                      <Button variant="link" className="mt-2 p-0 text-white hover:text-primary">
                        View Case Study
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="digital" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[...Array(2)].map((_, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-lg">
                    <Image
                      src={`/placeholder.svg?height=400&width=600&text=Digital+${index + 1}`}
                      alt={`Digital Project ${index + 1}`}
                      width={600}
                      height={400}
                      className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <h3 className="text-xl font-bold text-white">Digital Project {index + 1}</h3>
                      <p className="text-white/80">UI/UX, Web Design</p>
                      <Button variant="link" className="mt-2 p-0 text-white hover:text-primary">
                        View Case Study
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="print" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[...Array(2)].map((_, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-lg">
                    <Image
                      src={`/placeholder.svg?height=400&width=600&text=Print+${index + 1}`}
                      alt={`Print Project ${index + 1}`}
                      width={600}
                      height={400}
                      className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <h3 className="text-xl font-bold text-white">Print Project {index + 1}</h3>
                      <p className="text-white/80">Packaging, Print Design</p>
                      <Button variant="link" className="mt-2 p-0 text-white hover:text-primary">
                        View Case Study
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center">
            <Button size="lg">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Client Testimonials</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Don't just take our word for it. Here's what our clients have to say about working with Agraphicart.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="relative rounded-2xl bg-muted/30 p-8 shadow-lg md:p-12">
              <div className="absolute -top-6 left-12 text-6xl text-primary opacity-20">"</div>

              <div className="relative z-10">
                <p className="mb-6 text-lg italic md:text-xl">{testimonials[activeTestimonial].quote}</p>

                <div className="flex items-center">
                  <Image
                    src={testimonials[activeTestimonial].avatar || "/placeholder.svg"}
                    alt={testimonials[activeTestimonial].name}
                    width={60}
                    height={60}
                    className="mr-4 rounded-full"
                  />
                  <div>
                    <h4 className="font-bold">{testimonials[activeTestimonial].name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonials[activeTestimonial].company}</p>
                    <div className="mt-1 flex">
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-3 w-3 rounded-full transition-all ${
                    activeTestimonial === index ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-primary/5 py-20">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-xl md:p-12">
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to transform your brand?</h2>
              <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
                Let's collaborate to create designs that elevate your brand and connect with your audience. Get in touch
                today to start your project.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" className="px-8">
                  Start a Project
                </Button>
                <Button size="lg" variant="outline" className="px-8">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center">
              <div className="mr-2 h-8 w-8 rounded-full bg-primary"></div>
              <span className="text-xl font-bold">Agraphicart</span>
            </div>

            <div className="flex gap-8">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                Services
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                Work
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                About
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                Contact
              </Link>
            </div>

            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Agraphicart. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

