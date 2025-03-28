import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brush, PenTool, Layout, Type, Layers, Palette, Monitor, Figma } from "lucide-react"

export default function ServicesPage() {
  // Service details for each tab
  const serviceDetails = {
    branding: {
      icon: Layers,
      iconColor: "indigo",
      title: "Brand Identity & Strategy",
      description: "We craft comprehensive brand identities that communicate your values and resonate with your audience.",
      services: [
        "Brand Strategy Development",
        "Visual Identity Systems",
        "Brand Guidelines Creation",
        "Market Positioning Analysis"
      ]
    },
    logodesign: {
      icon: Palette,
      iconColor: "purple",
      title: "Logo Design & Visual Marks",
      description: "Create memorable visual identities that capture the essence of your brand and stand out in the marketplace.",
      services: [
        "Concept Development",
        "Multiple Design Iterations",
        "Versatile Logo Formats",
        "Brand Mark Refinement"
      ]
    },
    typography: {
      icon: Type,
      iconColor: "emerald",
      title: "Typography & Verbal Identity",
      description: "Design powerful typographic systems that enhance your brand's communication and visual language.",
      services: [
        "Custom Font Selection",
        "Typeface Design",
        "Brand Typography Guidelines",
        "Responsive Typography Systems"
      ]
    },
    uiux: {
      icon: Monitor,
      iconColor: "cyan",
      title: "UI/UX Design Solutions",
      description: "Create intuitive, engaging digital experiences that delight users and drive meaningful interactions.",
      services: [
        "User Experience Research",
        "Interface Design",
        "Interaction Prototyping",
        "Usability Testing"
      ]
    },
    graphic: {
      icon: Figma,
      iconColor: "rose",
      title: "Graphic Design & Visual Communication",
      description: "Develop compelling visual narratives that communicate your brand's story across multiple platforms.",
      services: [
        "Marketing Collateral Design",
        "Digital & Print Graphics",
        "Visual Storytelling",
        "Brand Illustration"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br  relative overflow-hidden text-white">
      {/* Glassmorphic Background Elements */}
      <div className="absolute top-1/3 -right-1/4  w-96 h-96 bg-indigo-600 rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute -top-10 -left-20 w-96 h-96 bg-indigo-600 rounded-full opacity-20 blur-3xl animate-bounce"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-indigo-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 -right-1/4 w-[600px] h-[600px]  bg-indigo-600 rounded-full opacity-30 blur-[100px] animate-bounce"></div>
      <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px]  bg-indigo-600 rounded-full opacity-20 blur-[100px] animate-bounce delay-500"></div>

      {/* Services Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-white/10 backdrop-blur-md px-3 py-1 text-sm text-white border border-white/20 shadow-sm">
                Our Design Services
              </div>
              <h2 className="text-3xl font-bold tracking-tighter text-indigo-600 sm:text-5xl">
                Comprehensive Design Expertise
              </h2>
              <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Transforming brands through strategic design, creating visual experiences that connect, communicate, and inspire.
              </p>
            </div>
          </div>

          <Tabs defaultValue="branding" className="mt-12">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl shadow-sm">
              {Object.keys(serviceDetails).map((service) => (
                <TabsTrigger 
                  key={service} 
                  value={service} 
                  className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/70 hover:bg-white/10 transition-all capitalize"
                >
                  {service.replace('uiux', 'UI/UX')}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(serviceDetails).map(([key, service]) => (
              <TabsContent key={key} value={key}>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="bg-white/5 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl hover:border-white/40 transition-all group">
                    <CardHeader className="flex flex-row items-center space-x-4">
                      <div className={`bg-${service.iconColor}-100/20 p-3 rounded-full backdrop-blur-sm group-hover:scale-110 transition-transform`}>
                        <service.icon className={`h-6 w-6 text-${service.iconColor}-400 group-hover:text-${service.iconColor}-300`} />
                      </div>
                      <CardTitle className="text-2xl text-white group-hover:text-white/90 transition-colors">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/80 mb-4 group-hover:text-white transition-colors">
                        {service.description}
                      </p>
                      <ul className="space-y-2 text-white/90">
                        {service.services.map((item) => (
                          <li key={item} className="flex items-center group">
                            <div className={`mr-2 h-2 w-2 rounded-full bg-${service.iconColor}-400 group-hover:bg-${service.iconColor}-300`}></div>
                            <span className="group-hover:text-white transition-colors">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        variant="outline" 
                        className={`w-full bg-${service.iconColor}-600/10 backdrop-blur-sm border-white/20 text-white hover:bg-${service.iconColor}-600/20 hover:border-white/40 transition-all`}
                      >
                        Explore {service.title}
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="bg-white/5 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl hover:border-white/40 transition-all group">
                    <div className="relative h-full">
                      <Image
                        src="/placeholder.svg?height=600&width=800"
                        alt={service.title}
                        fill
                        className="object-cover opacity-10 absolute inset-0 group-hover:opacity-20 transition-opacity"
                      />
                      <CardContent className="relative z-10 p-6">
                        <h3 className={`text-2xl font-bold mb-4 text-white group-hover:text-${service.iconColor}-300 transition-colors`}>
                          Why Choose Our {service.title.split(' ')[0]} Services?
                        </h3>
                        <div className="space-y-4 text-white">
                          <div className="flex items-start space-x-3 group">
                            <div className={`p-2 bg-${service.iconColor}-100/20 rounded-full group-hover:scale-110 transition-transform`}>
                              <service.icon className={`h-5 w-5 text-${service.iconColor}-400 group-hover:text-${service.iconColor}-300`} />
                            </div>
                            <div>
                              <h4 className="font-semibold text-lg text-white/90 group-hover:text-white transition-colors">Strategic Approach</h4>
                              <p className="text-white/70 group-hover:text-white/90 transition-colors">
                                Data-driven design solutions tailored to your unique business goals.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3 group">
                            <div className={`p-2 bg-${service.iconColor}-100/20 rounded-full group-hover:scale-110 transition-transform`}>
                              <Figma className={`h-5 w-5 text-${service.iconColor}-400 group-hover:text-${service.iconColor}-300`} />
                            </div>
                            <div>
                              <h4 className="font-semibold text-lg text-white/90 group-hover:text-white transition-colors">Expert Craftsmanship</h4>
                              <p className="text-white/70 group-hover:text-white/90 transition-colors">
                                Precision and creativity combined to deliver exceptional design outcomes.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white/5 backdrop-blur-md border-t border-white/20 relative">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Brand?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
            Let's collaborate to create design solutions that elevate your brand, engage your audience, and drive meaningful growth.
          </p>
          <div className="flex justify-center space-x-4">
            <Button 
              variant="secondary" 
              className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20 shadow-md"
            >
              View Our Process
            </Button>
            <Button 
              variant="outline" 
              className="bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10"
            >
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}