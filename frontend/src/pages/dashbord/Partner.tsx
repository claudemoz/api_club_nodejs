import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

interface Partner {
  id: number;
  logoUrl: string;
  link: string;
}

export default function Partner() {
  const [partners, setPartners] = useState<Partner[]>([
    {
      id: 1,
      logoUrl: "https://example.com/logo1.png",
      link: "https://partner1.com",
    },
    {
      id: 2,
      logoUrl: "https://example.com/logo2.png",
      link: "https://partner2.com",
    },
  ]);
  const [newPartner, setNewPartner] = useState<Partner>({
    id: 0,
    logoUrl: "",
    link: "",
  });
  const [editingPartner, setEditingPartner] = useState<Partner | null>(null);

  const handleAddPartner = () => {
    if (newPartner.logoUrl && newPartner.link) {
      setPartners((prevPartners) => [
        ...prevPartners,
        { ...newPartner, id: Date.now() }, // Generate a unique ID for the new partner
      ]);
      setNewPartner({ id: 0, logoUrl: "", link: "" }); // Reset the form
    } else {
      alert("Please fill in both the logo URL and the partner link.");
    }
  };

  const handleEditPartner = (partner: Partner) => {
    setEditingPartner(partner);
    setNewPartner(partner); // Populate the form with the partner's current info
  };

  const handleUpdatePartner = () => {
    if (newPartner.logoUrl && newPartner.link && editingPartner) {
      setPartners((prevPartners) =>
        prevPartners.map((partner) =>
          partner.id === editingPartner.id ? { ...newPartner } : partner
        )
      );
      setNewPartner({ id: 0, logoUrl: "", link: "" });
      setEditingPartner(null);
    } else {
      alert("Please fill in both the logo URL and the partner link.");
    }
  };

  const handleDeletePartner = (partnerId: number) => {
    setPartners((prevPartners) =>
      prevPartners.filter((partner) => partner.id !== partnerId)
    );
  };

  return (
    <Card className="p-6">
      <h1 className="text-xl font-bold mb-4">Partner Management</h1>

      {/* Form to Add or Edit Partner */}
      <div className="mb-4">
        <Input
          placeholder="Partner Logo URL"
          value={newPartner.logoUrl}
          onChange={(e) =>
            setNewPartner({ ...newPartner, logoUrl: e.target.value })
          }
          className="mb-2"
        />
        <Input
          placeholder="Partner URL"
          value={newPartner.link}
          onChange={(e) =>
            setNewPartner({ ...newPartner, link: e.target.value })
          }
          className="mb-2"
        />
        <Button
          onClick={editingPartner ? handleUpdatePartner : handleAddPartner}
        >
          {editingPartner ? "Update Partner" : "Add Partner"}
        </Button>
      </div>

      {/* Table displaying Partners */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Link</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {partners.map((partner) => (
            <TableRow key={partner.id}>
              <TableCell>
                <img
                  src={partner.logoUrl}
                  alt="Partner Logo"
                  className="w-20 h-20 object-contain"
                />
              </TableCell>
              <TableCell>
                <a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {partner.link}
                </a>
              </TableCell>
              <TableCell>
                <Button onClick={() => handleEditPartner(partner)}>Edit</Button>
                <Button
                  onClick={() => handleDeletePartner(partner.id)}
                  className="ml-2"
                  variant="destructive"
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
