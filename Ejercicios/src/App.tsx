// Paso 1. Importa useState y useEffect desde React.
import React, { useState, useEffect } from "react";
import TodoApp from "./ToDoApp";
import Login from "./login";

import Contador from "./contador";
import "./App.css";

const App: React.FC = () => {
  // Paso 2: crear estados necesarios
  const [nombre, setNombre] = useState<string>("");
  const [mostrarMensaje, setMostrarMensaje] = useState<boolean>(false);
  const [contador, setContador] = useState<number>(0);

  // Paso 3: funciones para manejar eventos y lógica del contador
  const handleNombreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNombre(e.target.value);
  };

  const mostrarSaludo = () => {
    setMostrarMensaje(true);
    setContador(0);
  };

  useEffect(() => {
    let intervalo: NodeJS.Timeout;

    if (mostrarMensaje) {
      intervalo = setInterval(() => {
        setContador((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (intervalo) clearInterval(intervalo);
    };
  }, [mostrarMensaje]);

  return (


    <div className="App">
      <h2>Primer ejercicio: Saludando App</h2>

      <div>
        <input
          type="text"
          value={nombre}
          onChange={handleNombreChange}
          placeholder="Escribe tu nombre"
        />
        <button onClick={mostrarSaludo}>Saludar</button>
      </div>

      {mostrarMensaje && (
        <div className="mensaje">
          <h2>¡Hola, {nombre}!</h2>
          <p>Han pasado {contador} segundos desde que hiciste clic.</p>
        </div>
      )}
      <br />
      <hr />
      <h2>Segundo ejercicio: To Do App</h2>
     {/*  Implementando el todoApp */}
      <TodoApp />

      <br />
      <hr />
      <h2>Tercer ejercicio: Contador</h2>
     {/*  Implementando el contador */}
      <Contador />


      <br />
      <hr />
      <h2>Cuarto ejercicio: login</h2>
     {/*  Implementando el contador */}
      <Login />
    </div>
  );
};

export default App;
