import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { CalendarDays, Trophy, Users } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Animation du défilement
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % 200);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const partners = [
    {
      name: "Nike",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png",
    },
    {
      name: "Adidas",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Adidas-Logo.png",
    },
    {
      name: "Puma",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Puma-Logo.png",
    },
    {
      name: "Under Armour",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Under-Armour-Logo.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#c0392b]">
      {/* Section Hero */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6  text-[#c0392b]">HITEMA FC</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Plus qu'un club, une famille. Rejoignez-nous dans notre passion pour
            le football et notre engagement envers l'excellence sportive.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <NavLink to="/register">Rejoindre le club</NavLink>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <NavLink to="/calendar">Voir les matchs</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Section Actualités récentes */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Dernières Actualités
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Carte actualité 1 */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-sm text-gray-500 mb-2">12 Nov 2024</div>
              <h3 className="text-xl font-bold mb-2">
                Victoire écrasante de l'équipe Senior
              </h3>
              <p className="mb-4">
                Notre équipe senior masculine remporte une victoire 3-0 contre
                FC Rival.
              </p>
              <Button variant="link" asChild>
                <NavLink to="/actualites">Lire la suite →</NavLink>
              </Button>
            </div>
            {/* Carte actualité 2 */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-sm text-gray-500 mb-2">10 Nov 2024</div>
              <h3 className="text-xl font-bold mb-2">
                Nouveau programme jeunes talents
              </h3>
              <p className="mb-4">
                Lancement de notre académie pour les jeunes de 8 à 12 ans.
              </p>
              <Button variant="link" asChild>
                <NavLink to="/actualites">Lire la suite →</NavLink>
              </Button>
            </div>
            {/* Carte actualité 3 */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-sm text-gray-500 mb-2">8 Nov 2024</div>
              <h3 className="text-xl font-bold mb-2">
                Les féminines en demi-finale
              </h3>
              <p className="mb-4">
                L'équipe féminine se qualifie pour les demi-finales de la coupe
                régionale.
              </p>
              <Button variant="link" asChild>
                <NavLink to="/actualites">Lire la suite →</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Statistiques */}
      <section className="py-16 px-4 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 mb-4" />
              <h3 className="text-4xl font-bold mb-2">500+</h3>
              <p className="text-lg">Membres actifs</p>
            </div>
            <div className="flex flex-col items-center">
              <Trophy className="w-12 h-12 mb-4" />
              <h3 className="text-4xl font-bold mb-2">15</h3>
              <p className="text-lg">Titres remportés</p>
            </div>
            <div className="flex flex-col items-center">
              <CalendarDays className="w-12 h-12 mb-4" />
              <h3 className="text-4xl font-bold mb-2">25</h3>
              <p className="text-lg">Années d'existence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Prochains Matchs */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Prochains Matchs
          </h2>
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="divide-y">
              <div className="py-4 flex justify-between items-center">
                <div>HITEMA FC vs FC Rival</div>
                <div>20 Nov 2024 - 15:00</div>
              </div>
              <div className="py-4 flex justify-between items-center">
                <div>AS Local vs HITEMA FC</div>
                <div>27 Nov 2024 - 16:30</div>
              </div>
              <div className="py-4 flex justify-between items-center">
                <div>HITEMA FC vs US Voisine</div>
                <div>4 Dec 2024 - 15:00</div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <Button variant="outline" asChild>
                <NavLink to="/calendar">Voir tous les matchs</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Partenaires */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#c0392b]">
            Nos Partenaires
          </h2>
          <div className="relative overflow-hidden">
            <div
              className="flex gap-8 items-center transition-transform duration-500 ease-linear"
              style={{
                transform: `translateX(-${scrollPosition}px)`,
                width: "fit-content",
              }}
            >
              {/* Répéter les partenaires pour créer un effet infini */}
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 bg-white p-4 rounded-lg shadow-sm"
                >
                  <img
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    className="h-16 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
