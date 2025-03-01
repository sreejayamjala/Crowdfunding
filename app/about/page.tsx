import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function About() {
  const benefits = [
    "Easy-to-use platform for creating and managing campaigns",
    "Wide reach to potential donors and supporters",
    "Secure payment processing for donations",
    "Real-time campaign analytics and insights",
    "Community engagement tools for campaign creators",
    "Flexible funding options to suit different project needs",
    "Dedicated support team to assist with campaign success",
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">About HOPEHIVE</h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-8">
          HOPEHIVE is a cutting-edge crowdfunding platform designed to empower innovators, creators, and changemakers.
          Our mission is to connect visionary ideas with a global community of supporters, making it easier than ever to
          bring dreams to life and make a positive impact on the world.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Why Choose HOPEHIVE?</h2>
        <ul className="space-y-4 mb-8">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg mb-8">
          Whether you're an entrepreneur with a groundbreaking product, a nonprofit organization seeking to make a
          difference, or an individual with a personal cause, HOPEHIVE provides the tools and support you need to
          succeed in your crowdfunding journey.
        </p>
        <div className="text-center">
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Link href="/campaigns/new">Start Your Campaign</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

