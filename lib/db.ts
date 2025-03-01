export interface Campaign {
  id: string
  title: string
  description: string
  goal: number
  raised: number
  creatorId: string
}

export interface User {
  id: string
  name: string
  email: string
  password: string // In a real app, this would be hashed
}

class InMemoryDB {
  private campaigns: Campaign[] = [
    {
      id: "1",
      title: "Save the Forests",
      description: "Help us plant 10,000 trees to combat deforestation and climate change.",
      goal: 50000,
      raised: 25000,
      creatorId: "1",
    },
    {
      id: "2",
      title: "Clean Water Initiative",
      description: "Provide clean drinking water to rural communities in developing countries.",
      goal: 30000,
      raised: 15000,
      creatorId: "2",
    },
    {
      id: "3",
      title: "Education for All",
      description: "Support underprivileged children with access to quality education and school supplies.",
      goal: 40000,
      raised: 20000,
      creatorId: "3",
    },
  ]
  private users: User[] = []

  // Campaign methods
  getCampaigns(): Campaign[] {
    return this.campaigns
  }

  getCampaign(id: string): Campaign | undefined {
    return this.campaigns.find((c) => c.id === id)
  }

  createCampaign(campaign: Omit<Campaign, "id">): Campaign {
    const newCampaign = { ...campaign, id: Date.now().toString() }
    this.campaigns.push(newCampaign)
    return newCampaign
  }

  // User methods
  getUser(email: string): User | undefined {
    return this.users.find((u) => u.email === email)
  }

  createUser(user: Omit<User, "id">): User {
    const newUser = { ...user, id: Date.now().toString() }
    this.users.push(newUser)
    return newUser
  }
}

export const db = new InMemoryDB()

