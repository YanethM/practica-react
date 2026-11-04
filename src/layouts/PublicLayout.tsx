import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Sesion } from "../model";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";

export const PublicLayout = ({
  usuario,
  iniciarSesion,
  cerrarSesion,
  cambiarContrasenia,
}: Sesion) => {
  return (
    <div className="sitio">
      <Navbar usuario={usuario} cerrarSesion={cerrarSesion} />
      <main id="contenido" className="contenido">
        <p>
          {usuario
            ? `Sesión activa: ${usuario.nombre}`
            : "Visitante sin sesión"}
        </p>
        {/* Renderiza la página según indicacion de react router dom */}
        <Outlet
          context={
            {
              usuario,
              iniciarSesion,
              cerrarSesion,
              cambiarContrasenia,
            } satisfies Sesion
          }
        />
      </main>
      <Footer />
    </div>
  );
};
