import { NavLink } from "react-router-dom";
import logo from "@/assets/images/logo_.png";
import { Button } from "@/components/ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useContext } from "react";
import { AuthContext } from "@/context";

export default function Header() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="flex justify-around p-4 mx-4 items-center">
      <div className="flex flex-col justify-center items-center">
        <img src={logo} alt="logo" width={120} height={120} />
        <div className="font-bold text-1xl text-[#c0392b] -mt-4">HITEMA FC</div>
      </div>
      <Menubar className="flex gap-20 items-center border-none shadow-none">
        <MenubarMenu>
          <MenubarTrigger>
            <NavLink to="/">Accueil</NavLink>
          </MenubarTrigger>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Équipes Masculines</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>Section Junior</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>
                  <NavLink to="/equipes/masculin/junior/effectif">
                    Effectif
                  </NavLink>
                </MenubarItem>
                <MenubarItem>
                  <NavLink to="/equipes/masculin/junior/resultats">
                    Résultats
                  </NavLink>
                </MenubarItem>
                <MenubarItem>
                  <NavLink to="/equipes/masculin/junior/calendrier">
                    Calendrier
                  </NavLink>
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Section Senior</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>
                  <NavLink to="/equipes/masculin/senior/effectif">
                    Effectif
                  </NavLink>
                </MenubarItem>
                <MenubarItem>
                  <NavLink to="/equipes/masculin/senior/resultats">
                    Résultats
                  </NavLink>
                </MenubarItem>
                <MenubarItem>
                  <NavLink to="/equipes/masculin/senior/calendrier">
                    Calendrier
                  </NavLink>
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Équipes Féminines</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>Section Junior</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>
                  <NavLink to="/equipes/feminin/junior/effectif">
                    Effectif
                  </NavLink>
                </MenubarItem>
                <MenubarItem>
                  <NavLink to="/equipes/feminin/junior/resultats">
                    Résultats
                  </NavLink>
                </MenubarItem>
                <MenubarItem>
                  <NavLink to="/equipes/feminin/junior/calendrier">
                    Calendrier
                  </NavLink>
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Section Senior</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>
                  <NavLink to="/equipes/feminin/senior/effectif">
                    Effectif
                  </NavLink>
                </MenubarItem>
                <MenubarItem>
                  <NavLink to="/equipes/feminin/senior/resultats">
                    Résultats
                  </NavLink>
                </MenubarItem>
                <MenubarItem>
                  <NavLink to="/equipes/feminin/senior/calendrier">
                    Calendrier
                  </NavLink>
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>A propos</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <NavLink to="/presentation">Présentation et Histoire</NavLink>
            </MenubarItem>
            <MenubarItem>
              <NavLink to="/news">Actualités</NavLink>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>
            <NavLink to="/contact">Contact</NavLink>
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>

      <div className="flex justify-between gap-4 items-center">
        {user ? (
          <>
            <Button variant="outline" asChild>
              <NavLink onClick={() => logout()} to={""}>
                Déconnexion
              </NavLink>
            </Button>
            <Button
              variant="outline"
              asChild
              className="bg-[#f0932b] hover:bg-[#f0932b]"
            >
              <NavLink to="/dashboard" className="text-white hover:text-white">
                Dashboard
              </NavLink>
            </Button>
          </>
        ) : (
          <>
            <Button className="bg-[#c0392b] hover:bg-[#c0392b]">
              <NavLink to="/login">Connexion</NavLink>
            </Button>
            <Button variant="outline" asChild>
              <NavLink to="/register">Inscription</NavLink>
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
