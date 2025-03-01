import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-orange-500">
            HOPEHIVE
          </Link>
          <div className="space-x-4">
            <Link href="/" className="hover:text-orange-500">
              HOME
            </Link>
            <Link href="/about" className="hover:text-orange-500">
              ABOUT
            </Link>
            <Link href="/campaigns" className="hover:text-orange-500">
              CAMPAIGNS
            </Link>
            <Link href="/contact" className="hover:text-orange-500">
              CONTACT
            </Link>
            <Button asChild variant="outline">
              <Link href="/login">LOGIN</Link>
            </Button>
            <Button asChild>
              <Link href="/register">REGISTER</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

