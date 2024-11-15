import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-2xl text-gray-700 mt-4">Page Not Found</p>
        <Button asChild className="mt-6 inline-block px-6 py-2">
          <NavLink to="/">Go Back to Home</NavLink>
        </Button>
      </div>
    </div>
  );
}
