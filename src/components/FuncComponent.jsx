import { useState } from "react";

function FuncComponent() {
  const [contador, setContador] = useState(0);
  return (
    <div>
      Componente Funcional
      <p>
        <button
          onClick={() => {
            setContador(contador - 1);
          }}
        >
          -
        </button>
        {contador}
        <button
          onClick={() => {
            setContador(contador + 1);
          }}
        >
          +
        </button>
      </p>
    </div>
  );
}

export default FuncComponent;
