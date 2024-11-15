import { Button } from "@/components/ui/button";
import { AuthContext } from "@/context";
import { ReactNode, useContext } from "react";
import { NavLink, useMatch } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: LayoutProps) {
  const { logout } = useContext(AuthContext);
  const dashboard = useMatch("/dashboard");
  return (
    <div className="flex h-screen w-full">
      {/* Sidebar Navigation */}
      <div className="bg-slate-800 fixed text-white p-6 flex flex-col justify-between h-full w-60">
        <div className="flex flex-col space-y-3">
          <NavLink
            to="/dashboard"
            className={() =>
              dashboard
                ? "text-slate-800 bg-gray-100 p-2 rounded-md"
                : "transition-colors text-white hover:text-slate-800 p-2 hover:bg-gray-100 rounded flex items-center"
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/dashboard/matchs"
            className={({ isActive }) =>
              isActive
                ? "text-slate-800 bg-gray-100 p-2 rounded-md"
                : "transition-colors text-white hover:text-slate-800 p-2 hover:bg-gray-100 rounded flex items-center"
            }
          >
            Matchs
          </NavLink>

          <NavLink
            to="/dashboard/news"
            className={({ isActive }) =>
              isActive
                ? "text-slate-800 bg-gray-100 p-2 rounded-md"
                : "transition-colors text-white hover:text-slate-800 p-2 hover:bg-gray-100 rounded flex items-center"
            }
          >
            Actualitées
          </NavLink>

          <NavLink
            to="/dashboard/users"
            className={({ isActive }) =>
              isActive
                ? "text-slate-800 bg-gray-100 p-2 rounded-md"
                : "transition-colors text-white hover:text-slate-800 p-2 hover:bg-gray-100 rounded flex items-center"
            }
          >
            Utilisateurs
          </NavLink>

          <NavLink
            to="/dashboard/partners"
            className={({ isActive }) =>
              isActive
                ? "text-slate-800 bg-gray-100 p-2 rounded-md"
                : "transition-colors text-white hover:text-slate-800 p-2 hover:bg-gray-100 rounded flex items-center"
            }
          >
            Partenaires
          </NavLink>
          <NavLink
            to="/dashboard/contact"
            className={({ isActive }) =>
              isActive
                ? "text-slate-800 bg-gray-100 p-2 rounded-md"
                : "transition-colors text-white hover:text-slate-800 p-2 hover:bg-gray-100 rounded flex items-center"
            }
          >
            Contact
          </NavLink>
        </div>
        <Button
          variant="outline"
          asChild
          className="bg-[#c0392b] hover:bg-[#c0392b] hover:text-white w-40"
        >
          <NavLink onClick={() => logout()} to={""}>
            Déconnexion
          </NavLink>
        </Button>
      </div>

      {/* Main Content Area */}
      <div className="ml-60 flex-1 p-8 overflow-y-auto">{children}</div>
    </div>
  );
}
