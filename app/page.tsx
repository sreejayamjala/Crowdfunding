import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LightbulbIcon, Target, Users } from "lucide-react"
import { getCampaigns } from "@/lib/api"
import type { Campaign } from "@/lib/db"

export default async function Home() {
  const campaigns: Campaign[] = await getCampaigns()

  return (
    <div className="container mx-auto px-4">
      <section className="relative h-[600px]">
        <Image
          src="/crowdfunding-hero.jpg"
          alt="People collaborating on a crowdfunding project"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-4">Empower Change with HOPEHIVE</h1>
          <p className="text-xl mb-8">Join our community of innovators and supporters</p>
          <Button asChild>
            <Link href="/campaigns">Explore Campaigns</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">How Crowdfunding Works</h2>
              <p className="text-gray-600 mb-6">
                Join our community of changemakers and supporters. Whether you have an innovative idea or want to
                support meaningful projects, HOPEHIVE makes it easy to get started.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-lg mr-4">
                    <LightbulbIcon className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Share Your Idea</h3>
                    <p className="text-gray-600">Create a campaign and share your story with our community.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-lg mr-4">
                    <Users className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Get Support</h3>
                    <p className="text-gray-600">Connect with donors who believe in your cause.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-lg mr-4">
                    <Target className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Achieve Your Goals</h3>
                    <p className="text-gray-600">Use the funds to make your project a reality.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tnSrmLHF3erj9Rs2aN81ISRjHf4o8v.png"
                alt="Crowdfunding concept illustration"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Campaigns</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.slice(0, 3).map((campaign) => (
            <div key={campaign.id} className="border rounded-lg p-4 shadow-md">
              <h3 className="text-xl font-semibold mb-2">{campaign.title}</h3>
              <p className="text-gray-600 mb-4">{campaign.description.slice(0, 100)}...</p>
              <div className="flex justify-between items-center">
                <span className="text-orange-500 font-bold">${campaign.raised} raised</span>
                <Button asChild>
                  <Link href={`/campaigns/${campaign.id}`}>View Campaign</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-orange-100 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Rise Your Hand</h2>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            DONATE NOW
          </Button>
        </div>
      </section>
    </div>
  )
}

