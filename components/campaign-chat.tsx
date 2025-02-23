"use client"

import { useState, useEffect } from "react"
import { io } from "socket.io-client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const socket = io("http://localhost:3001") // Replace with your server URL

export function CampaignChat({ campaignId }) {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("")

  useEffect(() => {
    socket.emit("join", campaignId)

    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message])
    })

    return () => {
      socket.emit("leave", campaignId)
      socket.off("message")
    }
  }, [campaignId])

  const sendMessage = (e) => {
    e.preventDefault()
    if (newMessage.trim()) {
      socket.emit("sendMessage", { campaignId, message: newMessage })
      setNewMessage("")
    }
  }

  return (
    <div className="border rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Campaign Chat</h2>
      <div className="h-64 overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            <strong>{message.user}:</strong> {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="flex">
        <Input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow mr-2"
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  )
}

