import React, { useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Exemple de structure de message
interface ContactMessage {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}

export default function ContactMessages() {
  // Simuler des messages de contact
  const [messages, setMessages] = useState<ContactMessage[]>([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      subject: "Question about membership",
      message:
        "Hello, I would like to know more about your membership options.",
      date: "2024-11-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      subject: "Partnership inquiry",
      message: "I am interested in discussing partnership opportunities.",
      date: "2024-11-14",
    },
  ]);

  const handleDeleteMessage = (id: number) => {
    setMessages(messages.filter((message) => message.id !== id));
  };

  return (
    <Card className="p-6">
      <h1 className="text-xl font-bold mb-4">Contact Messages</h1>

      {/* Tableau des messages */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Message</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {messages.map((message) => (
            <TableRow key={message.id}>
              <TableCell>{message.name}</TableCell>
              <TableCell>{message.email}</TableCell>
              <TableCell>{message.subject}</TableCell>
              <TableCell>{message.date}</TableCell>
              <TableCell>
                <div className="max-w-[300px] truncate">{message.message}</div>
              </TableCell>
              <TableCell>
                <Button
                  variant="destructive"
                  onClick={() => handleDeleteMessage(message.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
