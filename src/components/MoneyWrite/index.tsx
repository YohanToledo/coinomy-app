import React, { useState } from 'react';

function InputValor() {
  const [valor, setValor] = useState('');

  function handleValorChange(event : any) {
        let valor = event.target.value.replace(/\D/g, '');
        valor = (valor / 100).toFixed(2).replace('.', ',');
        event.target.value = valor;
    const formattedValue = valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    setValor(formattedValue);
  }

  return (
    <input
      type="text"
      value={valor}
      onChange={handleValorChange}
    />
  );
}

export default InputValor;
