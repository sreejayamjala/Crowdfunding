import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone } from "lucide-react"

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <MapPin className="mr-2 text-orange-500" />
              <p>A108 Adam Street, Manila, Philippines</p>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2 text-orange-500" />
              <p>info@example.com, contact@example.com</p>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2 text-orange-500" />
              <p>+6393245671246, +6397865435321</p>
            </div>
          </div>
        </div>
        <div>
          <form className="space-y-4">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Input placeholder="Subject" />
            <Textarea placeholder="Message" rows={4} />
            <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

