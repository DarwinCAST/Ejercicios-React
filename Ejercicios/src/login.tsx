import React, { useState } from 'react';
import './App.css';

const Login: React.FC = () => {
  // Paso 1 y 2: Importar useState y crear estados
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [mensaje, setMensaje] = useState<string>('');
  const [esError, setEsError] = useState<boolean>(false);

  // Paso 3: Función para validar campos
  const validarCampos = () => {
    if (email.trim() === '' || password.trim() === '') {
      setMensaje('Por favor completa todos los campos');
      setEsError(true);
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validarCampos()) {
      setMensaje(`¡Bienvenido, ${email}!`);
      setEsError(false);
      
    }
  };

  return (
    <div className="App">
      <h1>Iniciar Sesión</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
          />
        </div>
        
        <div className="form-group">
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Tu contraseña"
          />
        </div>
        
        <button type="submit">Ingresar</button>
        
        {/* Mostrar mensaje de éxito o error */}
        {mensaje && (
          <div className={`mensaje ${esError ? 'error' : 'exito'}`}>
            {mensaje}
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;