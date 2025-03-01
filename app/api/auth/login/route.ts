import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function POST(request: Request) {
  const { email, password } = await request.json()

  const user = db.getUser(email)

  if (!user || user.password !== password) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
  }

  // In a real app, you would generate and return a JWT token here
  return NextResponse.json({ id: user.id, name: user.name, email: user.email })
}

