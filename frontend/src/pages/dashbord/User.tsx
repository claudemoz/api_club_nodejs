import { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";

// Définition des types
type Role = "Admin" | "Editor" | "Viewer";

interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
}

export default function UserRoleManagement() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "Alice", email: "alice@example.com", role: "Admin" },
    { id: 2, name: "Bob", email: "bob@example.com", role: "Editor" },
    { id: 3, name: "Charlie", email: "charlie@example.com", role: "Viewer" },
  ]);

  const roles: Role[] = ["Admin", "Editor", "Viewer"];

  const handleRoleChange = (userId: number, newRole: Role) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, role: newRole } : user
      )
    );
  };

  const handleSave = () => {
    // Simuler la sauvegarde sur le serveur
    console.log("Updated roles:", users);
    alert("Roles updated successfully!");
  };

  const handleActivateEditor = (userId: number) => {
    // Activer l'utilisateur en tant qu'éditeur
    handleRoleChange(userId, "Editor");
    alert("User activated as Editor!");
  };

  return (
    <Card className="p-6">
      <h1 className="text-xl font-bold mb-4">User Role Management</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Select
                  onValueChange={(value) =>
                    handleRoleChange(user.id, value as Role)
                  }
                  value={user.role}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={user.role} />
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map((role) => (
                      <SelectItem key={role} value={role}>
                        {role}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>
                {user.role !== "Editor" && (
                  <Button onClick={() => handleActivateEditor(user.id)}>
                    Activate as Editor
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-end mt-4">
        <Button onClick={handleSave}>Save Changes</Button>
      </div>
    </Card>
  );
}
