import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"

export default function NewCampaign() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Create New Campaign</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Campaign Title
          </label>
          <Input id="title" placeholder="Enter campaign title" />
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <Select id="category">
            <option value="">Select a category</option>
            <option value="environment">Environment</option>
            <option value="health">Health</option>
            <option value="education">Education</option>
          </Select>
        </div>
        <div>
          <label htmlFor="goal" className="block text-sm font-medium text-gray-700">
            Funding Goal
          </label>
          <Input id="goal" type="number" placeholder="Enter funding goal" />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Campaign Description
          </label>
          <Textarea id="description" placeholder="Describe your campaign" rows={4} />
        </div>
        <Button type="submit">Create Campaign</Button>
      </form>
    </div>
  )
}

