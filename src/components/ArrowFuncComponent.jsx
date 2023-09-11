import { useState } from "react";

export const ArrowFuncComponent = () => {
  const [contador, setContador] = useState(0);

  const menos = () => {
    setContador(contador - 1);
  };

  const mas = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      Arrow Function Component
      <p>
        <button onClick={menos}>-</button>
        {contador}
        <button onClick={mas}>+</button>
      </p>
    </div>
  );
};
