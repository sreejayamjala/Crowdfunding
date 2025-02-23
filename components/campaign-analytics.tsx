import { Bar } from "react-chartjs-2"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CampaignAnalytics({ campaignId }) {
  // This data should be fetched from your backend
  const analyticsData = {
    totalBackers: 150,
    totalFunds: 7500,
    dailyFunds: [100, 200, 150, 300, 250, 400, 350],
  }

  const chartData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [
      {
        label: "Daily Funds Raised",
        data: analyticsData.dailyFunds,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Backers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{analyticsData.totalBackers}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Funds Raised</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">${analyticsData.totalFunds}</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Funds Raised (Last 7 Days)</CardTitle>
        </CardHeader>
        <CardContent>
          <Bar data={chartData} />
        </CardContent>
      </Card>
    </div>
  )
}

