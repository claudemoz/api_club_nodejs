import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Filter, Calendar, ChevronRight } from "lucide-react";

export default function News() {
  const [activeCategory, setActiveCategory] = useState("all");

  const news = [
    {
      id: 1,
      title: "Victoire écrasante de l'équipe Senior",
      date: "12 Nov 2024",
      category: "match",
      image:
        "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=1000",
      summary:
        "Notre équipe senior masculine remporte une victoire 3-0 contre FC Rival, maintenant sa position en tête du championnat.",
      content:
        "Dans un match palpitant, notre équipe senior a démontré sa supériorité...",
    },
    {
      id: 2,
      title: "Nouveau programme jeunes talents",
      date: "10 Nov 2024",
      category: "formation",
      image:
        "https://www.lequipe.fr/_medias/img-photo-jpg/les-nantais-a-la-joneliere-en-debut-de-saison-b-le-bars-l-equipe/1500000001721223/0:0,1994:1329-828-552-75/c0e27.jpg",
      summary:
        "Lancement de notre académie pour les jeunes de 8 à 12 ans avec un programme innovant.",
      content:
        "Le nouveau programme de formation vise à développer les talents...",
    },
    {
      id: 3,
      title: "Les féminines en demi-finale",
      date: "8 Nov 2024",
      category: "match",
      image:
        "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=1000",
      summary:
        "L'équipe féminine se qualifie pour les demi-finales de la coupe régionale après une victoire spectaculaire.",
      content: "Une performance remarquable de notre équipe féminine...",
    },
    {
      id: 4,
      title: "Partenariat avec l'école locale",
      date: "5 Nov 2024",
      category: "club",
      image:
        "https://cdn-s-www.lejsl.com/images/50F61B47-A6E0-4202-B079-6160736FF76D/NW_raw/le-club-de-foot-et-le-college-ont-signe-une-convention-photo-jsl-rene-dubois-1632152395.jpg",
      summary:
        "HITEMA FC s'associe avec l'école primaire locale pour promouvoir le sport chez les jeunes.",
      content: "Un nouveau partenariat prometteur qui permettra...",
    },
    {
      id: 5,
      title: "Rénovation des installations",
      date: "1 Nov 2024",
      category: "club",
      image:
        "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=1000",
      summary:
        "Début des travaux de rénovation du terrain d'entraînement et des vestiaires.",
      content: "Les travaux de modernisation de nos installations...",
    },
  ];

  const categories = [
    { id: "all", label: "Toutes les actualités" },
    { id: "match", label: "Matchs" },
    { id: "formation", label: "Formation" },
    { id: "club", label: "Vie du club" },
  ];

  const filteredNews =
    activeCategory === "all"
      ? news
      : news.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#c0392b]">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-[#c0392b] text-center">
            Actualités
          </h1>

          {/* Search and Filter Bar */}
          <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row gap-4 md:items-center mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher une actualité..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c0392b]"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    activeCategory === category.id ? "default" : "outline"
                  }
                  onClick={() => setActiveCategory(category.id)}
                  size="sm"
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Grid Section */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredNews.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                  <h2 className="text-xl font-bold mb-3">{item.title}</h2>
                  <p className="mb-4 text-gray-600">{item.summary}</p>
                  <Button
                    variant="link"
                    className="flex items-center gap-1 text-[#c0392b]"
                  >
                    Lire la suite
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination Section */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-2">
            <Button variant="outline">Précédent</Button>
            <Button>1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">Suivant</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
