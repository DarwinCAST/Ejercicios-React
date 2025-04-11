import { useState } from 'react';

const Contador = () => {
  const [contador, setContador] = useState<number>(0);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);
  const reiniciar = () => setContador(0);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>Contador: {contador}</h1>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={decrementar}>Decrementar</button>
        <button onClick={reiniciar}>Reiniciar</button>
        <button onClick={incrementar}>Incrementar</button>
      </div>
    </div>
  );
};

export default Contador;