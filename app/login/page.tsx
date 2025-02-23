import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { User, Lock, Users } from "lucide-react"

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-orange-500">HOPEHIVE</h1>
          <div className="mt-2 bg-orange-500 h-16 w-16 rounded-full mx-auto flex items-center justify-center">
            <Users className="text-white" size={32} />
          </div>
        </div>
        <form>
          <div className="mb-4 relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input type="text" placeholder="Username" className="pl-10" />
          </div>
          <div className="mb-4 relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input type="password" placeholder="Password" className="pl-10" />
          </div>
          <div className="mb-4">
            <Select>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </Select>
          </div>
          <Button className="w-full bg-orange-500 hover:bg-orange-600">Login</Button>
        </form>
      </div>
    </div>
  )
}

