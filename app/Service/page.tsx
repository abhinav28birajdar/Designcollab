import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brush, PenTool, Layout, Type, Layers } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Services Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-indigo-600 px-3 py-1 text-sm text-white">
                Our Services
              </div>
              <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-5xl">
                Comprehensive Design Solutions
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From brand identity to digital experiences, we offer a full spectrum of design services to elevate your brand.
              </p>
            </div>
          </div>

          <Tabs defaultValue="branding" className="mt-12">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8 bg-gray-100">
              <TabsTrigger 
                value="branding" 
                className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
              >
                Branding
              </TabsTrigger>
              <TabsTrigger 
                value="logo" 
                className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
              >
                Logo Design
              </TabsTrigger>
              <TabsTrigger 
                value="typography" 
                className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
              >
                Typography
              </TabsTrigger>
              <TabsTrigger 
                value="uiux" 
                className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
              >
                UI/UX Design
              </TabsTrigger>
              <TabsTrigger 
                value="graphic" 
                className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
              >
                Graphic Design
              </TabsTrigger>
            </TabsList>

            {/* Branding Section */}
            <TabsContent value="branding">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="flex flex-row items-center space-x-4">
                    <div className="bg-indigo-100 p-3 rounded-full">
                      <Layers className="h-6 w-6 text-indigo-600" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900">Brand Identity & Strategy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      We craft comprehensive brand identities that communicate your values and resonate with your audience.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <div className="mr-2 h-2 w-2 rounded-full bg-indigo-600"></div>
                        <span>Brand Strategy & Positioning</span>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2 h-2 w-2 rounded-full bg-indigo-600"></div>
                        <span>Visual Identity Systems</span>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2 h-2 w-2 rounded-full bg-indigo-600"></div>
                        <span>Brand Guidelines</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="flex flex-row items-center space-x-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Brush className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900">Brand Implementation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      We implement your brand across all touchpoints, ensuring consistency and maximum impact.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <div className="mr-2 h-2 w-2 rounded-full bg-purple-600"></div>
                        <span>Multi-Channel Branding</span>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2 h-2 w-2 rounded-full bg-purple-600"></div>
                        <span>Digital & Print Assets</span>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2 h-2 w-2 rounded-full bg-purple-600"></div>
                        <span>Brand Consistency Audit</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50">
                      Explore Services
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* Similar modifications for other tabs... */}
          </Tabs>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-indigo-600 px-3 py-1 text-sm text-white mb-4">
              Our Work
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of innovative design solutions across various industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Brand Identity", subtitle: "Tech Startup Rebrand", color: "indigo" },
              { title: "UI/UX Design", subtitle: "E-commerce App", color: "purple" },
              { title: "Packaging Design", subtitle: "Sustainable Product Line", color: "teal" }
            ].map((project, index) => (
              <Card key={index} className="group overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className={`text-xl font-bold text-${project.color}-200`}>{project.title}</h3>
                  <p className="text-white/80">{project.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-indigo-600 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's create design solutions that transform your brand and drive meaningful growth.
          </p>
          <div className="flex justify-center space-x-4">
            <Button 
              variant="secondary" 
              className="bg-white text-indigo-600 hover:bg-gray-100"
            >
              View Our Process
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
            >
              Our Approach
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}