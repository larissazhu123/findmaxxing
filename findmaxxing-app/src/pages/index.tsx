/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { motion } from "framer-motion";
import { 
  Upload, 
  Search, 
  MapPin, 
  Bell, 
  Zap, 
  Shield, 
  Users, 
  Eye, 
  Clock, 
  Check 
} from "lucide-react";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { GoogleIcon } from "@/components/GoogleIcon";
import {handleGoogleSignIn} from "@/pages/api/user/googleAuthFetch"

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>FindMaxxing</title>
        <meta name="description" content="FindMaxxing is the easiest way to report and find lost items on the UMass campus. Say goodbye to scrolling through endless Snapchat stories." />
      </Head>
      <div className="w-full min-h-screen bg-gradient-to-br from-green-100 via-green-50 to-white">
        <Navbar />

        {/* Hero Content */}
        <div className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-10">
                <ScrollAnimation direction="up" delay={0.2}>
                  <div className="space-y-6">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <p className="text-green-600 text-lg font-medium">
                        Built for UMass Students
                      </p>
                    </motion.div>
                    <motion.h1
                      className="text-green-600 text-5xl lg:text-6xl leading-tight"
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.7, duration: 0.8 }}
                    >
                      Lost Something at UMass?<br />We've Got You Covered.
                    </motion.h1>
                    <motion.p
                      className="text-muted-foreground text-lg lg:text-xl"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.9, duration: 0.8 }}
                    >
                      FindMaxxing is the easiest way to report and find lost items on campus.
                      Say goodbye to scrolling through endless Snapchat stories. View items on an
                      interactive map, get instant notifications, and reconnect with your belongings.
                    </motion.p>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation direction="up" delay={0.4}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg" 
                      className="gap-2 text-lg px-8 py-6"
                      onClick={handleGoogleSignIn}
                    >
                      <Upload className="h-6 w-6" />
                      Report Found Item
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="gap-2 text-lg px-8 py-6"
                      onClick={handleGoogleSignIn}
                    >
                      <Search className="h-6 w-6" />
                      Search Lost Items
                    </Button>
                  </div>
                </ScrollAnimation>

                {/* Stats */}
                <ScrollAnimation direction="up" delay={0.6}>
                  <div className="grid grid-cols-3 gap-6 pt-10 border-t border-gray-200">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="text-center"
                    >
                      <div className="text-green-600 text-3xl lg:text-4xl font-bold">
                        <AnimatedCounter end={500} suffix="+" duration={2} delay={2.5} />
                      </div>
                      <p className="text-muted-foreground text-base lg:text-lg">Items Found</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="text-center"
                    >
                      <div className="text-green-600 text-3xl lg:text-4xl font-bold">
                        <AnimatedCounter end={1200} suffix="+" duration={2.5} delay={2.5} />
                      </div>
                      <p className="text-muted-foreground text-base lg:text-lg">Active Users</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="text-center"
                    >
                      <div className="text-green-600 text-3xl lg:text-4xl font-bold">
                        <AnimatedCounter end={95} suffix="%" duration={2} delay={2.5} />
                      </div>
                      <p className="text-muted-foreground text-base lg:text-lg">Success Rate</p>
                    </motion.div>
                  </div>
                </ScrollAnimation>
              </div>

              {/* Right Column - Image */}
              <ScrollAnimation direction="right" delay={0.3}>
                <div className="relative">
                  <motion.div 
                    className="rounded-2xl overflow-hidden shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1741637335289-c99652d3155f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHMlMjB3YWxraW5nfGVufDF8fHx8MTc1OTc4NDIyN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="UMass campus students"
                      className="w-full h-[500px] object-cover"
                    />
                  </motion.div>
                  {/* Floating Card */}
                  <motion.div 
                    className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 max-w-xs"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: 0, 
                      opacity: 1,
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                      ]
                    }}
                    transition={{ 
                      delay: 1.2, 
                      duration: 0.6,
                      scale: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      },
                      boxShadow: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="flex items-start gap-3">
                      <motion.div 
                        className="bg-green-100 rounded-full p-3"
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          repeatDelay: 3,
                          scale: {
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }
                        }}
                      >
                        <Bell className="h-6 w-6 text-green-600" />
                      </motion.div>
                      <div>
                        <p className="text-green-600 font-medium">New item found!</p>
                        <p className="text-muted-foreground">AirPods found near Library</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation direction="up" delay={0.2}>
              <div className="text-center mb-20">
                <h2 className="mb-6 text-4xl lg:text-5xl">How It Works</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg lg:text-xl">
                  FindMaxxing makes it simple to reunite lost items with their owners through 
                  our intuitive platform designed specifically for the UMass community.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                { icon: Upload, title: "Report Found Items", description: "Snap a photo, add a description, and mark the location where you found an item." },
                { icon: Search, title: "Search & Filter", description: "Browse reported items by category, date, or location to find what you're looking for." },
                { icon: MapPin, title: "View on Map", description: "See exactly where items were found with our interactive campus map view." },
                { icon: Bell, title: "Get Notified", description: "Receive instant alerts when new items are reported in your area." },
              ].map((feature, index) => (
                <ScrollAnimation key={feature.title} direction="up" delay={0.1 * index}>
                  <motion.div 
                    className="text-center space-y-5"
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="bg-green-100 rounded-full p-5 w-20 h-20 mx-auto flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="h-10 w-10 text-green-600" />
                    </motion.div>
                    <h3 className="text-green-600 text-xl lg:text-2xl">{feature.title}</h3>
                    <p className="text-muted-foreground text-base lg:text-lg">
                      {feature.description}
                    </p>
                  </motion.div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>

        {/* Map Overview Section */}
        <div className="py-24 bg-gradient-to-b from-green-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100 text-lg px-4 py-2">
                  Interactive Map View
                </Badge>
                <h2 className="text-green-600 text-4xl lg:text-5xl">
                  See Everything at a Glance
                </h2>
                <p className="text-muted-foreground text-lg lg:text-xl">
                  Our interactive campus map shows you exactly where items were found.
                  Zoom in on specific buildings, filter by item category, and get precise
                  location details including floor numbers and room locations.
                </p>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="bg-green-100 rounded-full p-2 mt-1">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-green-600 text-lg font-medium">Real-time Updates</p>
                      <p className="text-muted-foreground text-base lg:text-lg">See new items appear on the map instantly</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-green-100 rounded-full p-2 mt-1">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-green-600 text-lg font-medium">Detailed Locations</p>
                      <p className="text-muted-foreground text-base lg:text-lg">Get building names, floor numbers, and room details</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-green-100 rounded-full p-2 mt-1">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-green-600 text-lg font-medium">Filter by Proximity</p>
                      <p className="text-muted-foreground text-base lg:text-lg">Only show items found near your location</p>
                    </div>
                  </li>
                </ul>
                <Button 
                  size="lg" asChild className="gap-2 text-lg px-8 py-6" 
                  onClick={handleGoogleSignIn}
                >
                  Explore the Map
                </Button>
              </div>
              <div className="relative">
                <Card className="overflow-hidden shadow-xl">
                  <CardContent className="p-0">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1731082154898-2e63df0f2a42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXAlMjBsb2NhdGlvbiUyMHBpbnN8ZW58MXx8fHwxNzU5ODU5NjE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Interactive map with location pins"
                      className="w-full h-[450px] object-cover"
                    />
                    {/* Overlay card showing item details */}
                    <motion.div
                      className="absolute bottom-4 left-4 right-4 bg-white rounded-lg shadow-lg p-4"
                      animate={{
                        scale: [1, 1.05, 1],
                        boxShadow: [
                          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1703589535932-52d08169014f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3VuZCUyMGtleXMlMjB3YWxsZXQlMjBpdGVtc3xlbnwxfHx8fDE3NTk4NTk2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                          alt="Found keys"
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <p className="text-green-600 font-medium">Keys Found</p>
                          <p className="text-muted-foreground">W.E.B. Du Bois Library, 5th Floor</p>
                          <p className="text-muted-foreground">2 hours ago</p>
                        </div>
                        <MapPin className="h-5 w-5 text-green-600" />
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation direction="up" delay={0.2}>
              <div className="text-center mb-20">
                <h2 className="mb-6 text-4xl lg:text-5xl">Why Choose FindMaxxing?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg lg:text-xl">
                  We've built the most comprehensive lost and found platform specifically
                  for the UMass community.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { icon: Zap, title: "Lightning Fast", description: "Report or search for items in seconds. Our streamlined interface makes the process quick and easy." },
                { icon: Shield, title: "Safe & Secure", description: "Anonymous mode protects your privacy until you're ready to connect. Your personal info stays private." },
                { icon: Users, title: "Community Driven", description: "Built by UMass students, for UMass students. Earn points for helping others find their belongings." },
                { icon: Bell, title: "Smart Notifications", description: "Get instant alerts via email and in-app when items matching your search are found nearby." },
                { icon: Eye, title: "Easy to Use", description: "No more endless scrolling through Snapchat stories. Find what you need with powerful search and filters." },
                { icon: Clock, title: "Time Stamped", description: "Know exactly when items were found or reported. Track the timeline of your search." },
              ].map((benefit, index) => (
                <ScrollAnimation key={benefit.title} direction="up" delay={0.1 * index}>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full">
                      <CardContent className="pt-8">
                        <div className="space-y-5">
                          <motion.div
                            className="bg-green-100 rounded-full p-4 w-16 h-16 flex items-center justify-center"
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <benefit.icon className="h-8 w-8 text-green-600" />
                          </motion.div>
                          <h3 className="text-green-600 text-xl lg:text-2xl">{benefit.title}</h3>
                          <p className="text-muted-foreground text-base lg:text-lg">
                            {benefit.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="py-24 bg-gradient-to-b from-white to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation direction="up" delay={0.2}>
              <div className="text-center mb-20">
                <h2 className="mb-6 text-4xl lg:text-5xl">Most Commonly Found Items</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg lg:text-xl">
                  Browse by category to quickly find what you're looking for.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: "Keys", count: 127 },
                { name: "IDs & Cards", count: 98 },
                { name: "Water Bottles", count: 156 },
                { name: "Jewelry", count: 43 },
                { name: "Headphones", count: 89 },
                { name: "Wallets", count: 67 },
                { name: "Phones", count: 34 },
                { name: "Miscellaneous", count: 201 },
              ].map((category, index) => (
                <ScrollAnimation key={category.name} direction="up" delay={0.1 * index}>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                      <CardContent className="p-8 text-center space-y-3">
                        <motion.p
                          className="text-green-600 text-lg lg:text-xl font-medium"
                          whileHover={{ scale: 1.1 }}
                        >
                          {category.name}
                        </motion.p>
                        <motion.p
                          className="text-muted-foreground text-base lg:text-lg"
                          whileHover={{ scale: 1.05 }}
                        >
                          <AnimatedCounter end={category.count} duration={1.5} /> items
                        </motion.p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation direction="up" delay={0.2}>
              <div className="text-center mb-20">
                <h2 className="mb-6 text-4xl lg:text-5xl">What Students Are Saying</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg lg:text-xl">
                  Join thousands of UMass students who've successfully reunited with their lost items.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.3}>
              <TestimonialCarousel
                testimonials={[
                  {
                    text: "I found my lost AirPods within 20 minutes of checking FindMaxxing! So much better than scrolling through Snapchat stories.",
                    name: "Sarah M.",
                    role: "Junior, Computer Science"
                  },
                  {
                    text: "The map view is genius! I could see exactly where my wallet was found and pick it up on my way to class.",
                    name: "Mike T.",
                    role: "Sophomore, Business"
                  },
                  {
                    text: "I've helped return 5 items I found on campus. Love the points system! It makes doing good feel even better.",
                    name: "Jessica L.",
                    role: "Senior, Psychology"
                  },
                  {
                    text: "FindMaxxing saved me so much time! Instead of posting on every social media platform, I just check one place.",
                    name: "Alex K.",
                    role: "Graduate Student, Engineering"
                  },
                  {
                    text: "The notifications are perfect. I got an alert when someone found my lost keys and was able to get them back the same day!",
                    name: "Maria S.",
                    role: "Sophomore, Biology"
                  },
                  {
                    text: "As someone who's always losing things, FindMaxxing has been a lifesaver. The community is so helpful!",
                    name: "David R.",
                    role: "Senior, Economics"
                  }
                ]}
                autoRotateInterval={4000}
              />
            </ScrollAnimation>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-500 py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <ScrollAnimation direction="up" delay={0.2}>
              <motion.h2
                className="text-white text-4xl lg:text-5xl"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Ready to Get Started?
              </motion.h2>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.4}>
              <motion.p
                className="text-white/90 text-lg lg:text-xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Join the UMass community in making campus a better place.
                Help reunite lost items with their owners today.
              </motion.p>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    size="lg"
                    asChild
                    className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-6"
                    onClick={handleGoogleSignIn}
            
                  >
                    Create Free Account
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    size="lg"
                    asChild
                    className="bg-white text-green-600 hover:bg-white hover:text-green-600 transition-colors text-lg px-8 py-6"
                    onClick={handleGoogleSignIn}
                  >
                    <GoogleIcon className="mr-3 h-5 w-5" />
                  Sign In 
                  </Button>
                </motion.div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="text-green-600">FindMaxxing</h3>
                <p className="text-muted-foreground">
                  The UMass community's trusted lost and found platform.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-green-600">Product</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-muted-foreground hover:text-green-600">Features</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-green-600">How It Works</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-green-600">Pricing</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-green-600">Support</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-muted-foreground hover:text-green-600">Help Center</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-green-600">Contact Us</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-green-600">FAQ</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-green-600">Team 5</h4>
                <ul className="space-y-2">
                  <li className="text-muted-foreground">Alex Shick</li>
                  <li className="text-muted-foreground">Anirudh Poluru</li>
                  <li className="text-muted-foreground">Mark Iyer</li>
                  <li className="text-muted-foreground">Ata Cinar Genc</li>
                  <li className="text-muted-foreground">Larissa Zhu</li>
                  <li className="text-muted-foreground">Saukhya Shinde</li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-gray-200">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-muted-foreground">
                  © 2025 FindMaxxing. A project by Team 5.
                </p>
                <div className="flex gap-6">
                  <a href="#" className="text-muted-foreground hover:text-green-600">
                    Terms of Service
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-green-600">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-green-600">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}