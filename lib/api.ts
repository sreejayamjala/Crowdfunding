import type { Campaign } from "./db"

const API_BASE_URL = "/api"

export async function getCampaigns(): Promise<Campaign[]> {
  const response = await fetch(`${API_BASE_URL}/campaigns`)
  if (!response.ok) throw new Error("Failed to fetch campaigns")
  return response.json()
}

export async function createCampaign(campaign: Omit<Campaign, "id">) {
  const response = await fetch(`${API_BASE_URL}/campaigns`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(campaign),
  })
  if (!response.ok) throw new Error("Failed to create campaign")
  return response.json()
}

export async function getCampaign(id: string): Promise<Campaign> {
  const response = await fetch(`${API_BASE_URL}/campaigns/${id}`)
  if (!response.ok) throw new Error("Failed to fetch campaign")
  return response.json()
}

export async function register(user: { name: string; email: string; password: string }) {
  const response = await fetch(`${API_BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
  if (!response.ok) throw new Error("Failed to register")
  return response.json()
}

export async function login(credentials: { email: string; password: string }) {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  })
  if (!response.ok) throw new Error("Failed to login")
  return response.json()
}

