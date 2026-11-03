import { NavLink } from "react-router-dom";
import type { Sesion } from "../../model";

export const Navbar = ({
  usuario,
  cerrarSesion,
}: Pick<Sesion, "usuario" | "cerrarSesion">) => {
  return (
      <header className="cabecera">
        <nav aria-label="Navegación principal">
          <strong>Taquilla</strong>
          <NavLink to="/">Inicio</NavLink>
        </nav>
      </header>
  );
};
