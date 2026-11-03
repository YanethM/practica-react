import Campo from "./src/components/Campo";
import "/App.css";

const App = () => {
  return (
    <>
      <main className="pagina">
        <header className="pagina-encabezado">
          <h1>Taquilla</h1>
          <p>Crea tu cuenta o ingresa para comprar tu boletas.</p>
        </header>
        <div className="pagina-formularios">
          <Campo
            etiqueta="Correo"
            type="email"
            ayuda="Ingresa tu correo institucional"
          />
          <Campo
            etiqueta="Contraseña"
            type="password"
            ayuda="Contraseña institucional"
            error="La contraseña es requerida"
          />
        </div>
      </main>
    </>
  );
};

export default App;
