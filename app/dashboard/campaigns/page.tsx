import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

export default function CampaignList() {
  const campaigns = [
    { id: 1, title: "Save the Forests", category: "Environment", goal: 10000, raised: 5000, status: "Active" },
    { id: 2, title: "Clean Water Initiative", category: "Health", goal: 5000, raised: 2500, status: "Active" },
    { id: 3, title: "Education for All", category: "Education", goal: 15000, raised: 7500, status: "Active" },
  ]

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Campaign List</h1>
        <Button asChild>
          <Link href="/dashboard/campaigns/new">Create New Campaign</Link>
        </Button>
      </div>
      <div className="mb-4">
        <Input placeholder="Search campaigns..." />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Goal</TableHead>
            <TableHead>Raised</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {campaigns.map((campaign) => (
            <TableRow key={campaign.id}>
              <TableCell>{campaign.title}</TableCell>
              <TableCell>{campaign.category}</TableCell>
              <TableCell>${campaign.goal}</TableCell>
              <TableCell>${campaign.raised}</TableCell>
              <TableCell>{campaign.status}</TableCell>
              <TableCell>
                <Button asChild size="sm" className="mr-2">
                  <Link href={`/dashboard/campaigns/${campaign.id}`}>Edit</Link>
                </Button>
                <Button variant="destructive" size="sm">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

