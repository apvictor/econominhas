import { Outlet } from "react-router-dom";
import { Fab } from "../components/fab";

export function AuthorizedLayout() {
  return (
    <main className="relative">
      <Outlet />
      <Fab />
    </main>
  );
}
