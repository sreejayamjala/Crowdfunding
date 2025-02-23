"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Mail, Lock, Users } from "lucide-react"
import Link from "next/link"

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "",
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    if (!formData.fullName) newErrors.fullName = "Full name is required"
    if (!formData.email) newErrors.email = "Email is required"
    if (!formData.password) newErrors.password = "Password is required"
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match"
    if (!formData.accountType) newErrors.accountType = "Account type is required"

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      // Submit the form data to your API
      console.log("Form submitted:", formData)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-orange-500">HOPEHIVE</h1>
          <div className="mt-2 bg-orange-500 h-16 w-16 rounded-full mx-auto flex items-center justify-center">
            <Users className="text-white" size={32} />
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="pl-10"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              className="pl-10"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              className="pl-10"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="pl-10"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
          </div>
          <Select
            name="accountType"
            onValueChange={(value) => handleChange({ target: { name: "accountType", value } })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select account type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="backer">Backer</SelectItem>
              <SelectItem value="creator">Creator</SelectItem>
            </SelectContent>
          </Select>
          {errors.accountType && <p className="text-red-500 text-xs mt-1">{errors.accountType}</p>}
          <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
            Register
          </Button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-orange-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  )
}

