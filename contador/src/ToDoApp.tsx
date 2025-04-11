import React, { useState } from 'react';

interface Tarea {
  id: number;
  texto: string;
  completada: boolean;
}

const TodoApp: React.FC = () => {
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [nuevaTarea, setNuevaTarea] = useState<string>('');

  const agregarTarea = () => {
    if (nuevaTarea.trim() === '') return;
    
    setTareas([
      ...tareas,
      {
        id: Date.now(),
        texto: nuevaTarea,
        completada: false
      }
    ]);
    setNuevaTarea('');
  };

  const toggleCompletada = (id: number) => {
    setTareas(tareas.map(tarea =>
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    ));
  };

  const eliminarTarea = (id: number) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  return (
    <div className="todo-app">
      <h2>Lista de Tareas</h2>
      
      <div className="agregar-tarea">
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nueva tarea"
          onKeyPress={(e) => e.key === 'Enter' && agregarTarea()}
        />
        <button onClick={agregarTarea}>Agregar</button>
      </div>
      
      <ul className="lista-tareas">
        {tareas.map(tarea => (
          <li key={tarea.id} className={tarea.completada ? 'completada' : ''}>
            <span onClick={() => toggleCompletada(tarea.id)}>
              {tarea.texto}
            </span>
            <button 
              onClick={() => eliminarTarea(tarea.id)}
              className="eliminar"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;