import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET() {
  const campaigns = db.getCampaigns()
  return NextResponse.json(campaigns)
}

export async function POST(request: Request) {
  const campaign = await request.json()
  const newCampaign = db.createCampaign(campaign)
  return NextResponse.json(newCampaign, { status: 201 })
}

