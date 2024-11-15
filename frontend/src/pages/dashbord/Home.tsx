import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  // État pour la présentation du club et son histoire
  const [clubInfo, setClubInfo] = useState({
    presentation:
      "HITEMA FC est un club passionné par le football et la formation des jeunes talents.",
    history:
      "Fondé en 2000, HITEMA FC a rapidement grimpé dans les divisions grâce à une gestion visionnaire et un entraînement rigoureux.",
  });

  const handleInputChange = (field: keyof typeof clubInfo, value: string) => {
    setClubInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveChanges = () => {
    // Simule la sauvegarde des modifications (par exemple, envoyer au serveur)
    console.log("Présentation du club modifiée:", clubInfo);
    alert("Présentation et histoire du club mises à jour avec succès !");
  };

  return (
    <Card className="p-6">
      <h1 className="text-xl font-bold mb-4">
        Modifier la Présentation du Club
      </h1>

      {/* Formulaire pour modifier la présentation du club */}
      <div className="space-y-6 mb-6">
        <div>
          <h2 className="text-lg font-semibold">Présentation du Club</h2>
          <Textarea
            value={clubInfo.presentation}
            onChange={(e) => handleInputChange("presentation", e.target.value)}
            placeholder="Écrivez la présentation du club ici..."
            rows={4}
          />
        </div>

        {/* Formulaire pour modifier l'histoire du club */}
        <div>
          <h2 className="text-lg font-semibold">Histoire du Club</h2>
          <Textarea
            value={clubInfo.history}
            onChange={(e) => handleInputChange("history", e.target.value)}
            placeholder="Écrivez l'histoire du club ici..."
            rows={6}
          />
        </div>
      </div>

      {/* Bouton pour sauvegarder les modifications */}
      <Button onClick={handleSaveChanges}>Sauvegarder les Modifications</Button>
    </Card>
  );
}
