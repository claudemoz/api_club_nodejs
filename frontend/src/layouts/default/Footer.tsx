import { NavLink } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1e272e] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">HITEMA FC</h3>
            <p className="text-sm mb-4">
              Club de football fondé en 1999, HITEMA FC s'engage à développer le
              football pour tous et à former les champions de demain.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Colonne 2 - Liens rapides */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/actualites" className="hover:text-white">
                  Actualités
                </NavLink>
              </li>
              <li>
                <NavLink to="/presentation" className="hover:text-white">
                  Le Club
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/equipes/masculin/senior/effectif"
                  className="hover:text-white"
                >
                  Équipe Senior
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/equipes/feminin/senior/effectif"
                  className="hover:text-white"
                >
                  Équipe Féminine
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-white">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/mentions-legales" className="hover:text-white">
                  Mentions Légales
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Colonne 3 - Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" />
                <span>48 Rue Président, 75008 Paris</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span>01 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span>contact@hitemafc.fr</span>
              </li>
            </ul>
          </div>

          {/* Colonne 4 - Horaires */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Horaires d'ouverture
            </h3>
            <ul className="space-y-2">
              <li>
                <span className="font-medium">Lundi - Vendredi:</span>
                <br />
                9h00 - 20h00
              </li>
              <li>
                <span className="font-medium">Samedi:</span>
                <br />
                9h00 - 18h00
              </li>
              <li>
                <span className="font-medium">Dimanche:</span>
                <br />
                10h00 - 16h00
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barre de copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm">
              © {new Date().getFullYear()} HITEMA FC. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm">
              <NavLink to="/mentions-legales" className="hover:text-white">
                Mentions Légales
              </NavLink>
              <NavLink
                to="/politique-confidentialite"
                className="hover:text-white"
              >
                Politique de Confidentialité
              </NavLink>
              <NavLink
                to="/conditions-utilisation"
                className="hover:text-white"
              >
                CGU
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
