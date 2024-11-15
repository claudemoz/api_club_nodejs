import React from "react";
import { Button } from "@/components/ui/button";
import { Trophy, Users, Medal, Clock } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Presentation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#c0392b]">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-[#c0392b]">
            Notre Histoire
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Depuis sa création en 1999, HITEMA FC incarne l'excellence sportive
            et l'engagement communautaire. Notre club est devenu un pilier du
            football régional, formant les champions de demain.
          </p>
        </div>
      </section>

      {/* Valeurs Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Nos Valeurs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <Trophy className="w-12 h-12 mx-auto mb-4 text-[#c0392b]" />
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p>
                Nous visons l'excellence dans tous les aspects, du terrain à la
                formation, en passant par nos installations.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-[#c0392b]" />
              <h3 className="text-xl font-bold mb-3">Esprit d'équipe</h3>
              <p>
                La solidarité et le respect mutuel sont au cœur de notre
                philosophie, sur et en dehors du terrain.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <Medal className="w-12 h-12 mx-auto mb-4 text-[#c0392b]" />
              <h3 className="text-xl font-bold mb-3">Formation</h3>
              <p>
                Notre engagement envers la formation des jeunes talents est la
                clé de notre succès futur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Installations Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Nos Installations
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://usbl-football.com/public/2578/upload/images/parc-des-sports-des-noiselieres/01-terrain-de-foot-02-1024x683.jpg"
                alt="Terrain principal"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Terrain Principal</h3>
                <p>
                  Notre terrain principal aux normes FIFA accueille les matchs
                  officiels et les entraînements de haut niveau.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://www.lequipe.fr/_medias/img-photo-jpg/les-nantais-a-la-joneliere-en-debut-de-saison-b-le-bars-l-equipe/1500000001721223/0:0,1994:1329-828-552-75/c0e27.jpg"
                alt="Centre d'entraînement"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  Centre d'Entraînement
                </h3>
                <p>
                  Des installations modernes comprenant des terrains
                  synthétiques, une salle de musculation et un centre médical.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            Notre Histoire
          </h2>
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-4">
                <Clock className="w-8 h-8 text-[#c0392b]" />
                <div>
                  <h3 className="text-xl font-bold">1999</h3>
                  <p>Création du club avec une seule équipe senior</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-4">
                <Clock className="w-8 h-8 text-[#c0392b]" />
                <div>
                  <h3 className="text-xl font-bold">2005</h3>
                  <p>
                    Ouverture de l'école de football et création des équipes
                    jeunes
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-4">
                <Clock className="w-8 h-8 text-[#c0392b]" />
                <div>
                  <h3 className="text-xl font-bold">2015</h3>
                  <p>Premier titre régional et inauguration du nouveau stade</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-4">
                <Clock className="w-8 h-8 text-[#c0392b]" />
                <div>
                  <h3 className="text-xl font-bold">2024</h3>
                  <p>
                    Création de la section féminine et expansion du centre de
                    formation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Rejoignez l'Aventure
          </h2>
          <p className="text-xl mb-8 text-white max-w-2xl mx-auto">
            Que vous soyez joueur, supporteur ou partenaire potentiel, nous
            serions ravis de vous accueillir dans la famille HITEMA FC.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">
              <NavLink to="/register">Devenir Membre</NavLink>
            </Button>
            <Button variant="outline" size="lg">
              <NavLink to="/contact">Nous Contacter</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
