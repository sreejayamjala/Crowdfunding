import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function POST(request: Request) {
  const { name, email, password } = await request.json()

  if (db.getUser(email)) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 })
  }

  const newUser = db.createUser({ name, email, password })
  return NextResponse.json({ id: newUser.id, name: newUser.name, email: newUser.email }, { status: 201 })
}

