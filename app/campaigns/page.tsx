import { getCampaigns } from "@/lib/api"
import type { Campaign } from "@/lib/db"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default async function CampaignList() {
  const campaigns: Campaign[] = await getCampaigns()

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Explore Campaigns</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="border rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{campaign.title}</h2>
            <p className="text-gray-600 mb-4">{campaign.description.slice(0, 100)}...</p>
            <div className="mb-4">
              <Progress value={(campaign.raised / campaign.goal) * 100} className="h-2" />
              <div className="flex justify-between mt-2 text-sm text-gray-600">
                <span>${campaign.raised} raised</span>
                <span>${campaign.goal} goal</span>
              </div>
            </div>
            <Button asChild className="w-full">
              <Link href={`/campaigns/${campaign.id}`}>View Campaign</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

