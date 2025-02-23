import Link from "next/link"
import {
  LayoutDashboard,
  Users,
  FolderTree,
  List,
  Image,
  DollarSign,
  LogOut,
  UserCog,
  FileBarChart,
} from "lucide-react"

export function Sidebar() {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: Users, label: "Member", href: "/dashboard/members" },
    { icon: FolderTree, label: "Campaign Category", href: "/dashboard/categories" },
    { icon: List, label: "Campaign List", href: "/dashboard/campaigns" },
    { icon: Image, label: "Gallery", href: "/dashboard/gallery" },
    { icon: DollarSign, label: "Donations", href: "/dashboard/donations" },
    { icon: LogOut, label: "Withdraw Logs", href: "/dashboard/withdrawals" },
    { icon: UserCog, label: "User Management", href: "/dashboard/users" },
    { icon: FileBarChart, label: "Reports", href: "/dashboard/reports" },
  ]

  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-4">
        <h2 className="text-2xl font-bold text-orange-500">HOPEHIVE</h2>
      </div>
      <nav className="mt-6">
        {menuItems.map((item, index) => (
          <Link key={index} href={item.href} className="flex items-center px-4 py-2 text-gray-700 hover:bg-orange-100">
            <item.icon className="mr-3 h-5 w-5" />
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}

