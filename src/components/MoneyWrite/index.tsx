import React, { useState } from 'react';

type Props = {
    value: string,
    setValue: (param: string) => void
}

const InputMoney = ({value, setValue}:Props) => {

  const formatCurrency = (inputValue: string) => {
    // Remove caracteres não numéricos
    const numericValue = inputValue.replace(/\D/g, '');

    // Formata o valor monetário da direita para a esquerda
    let formattedValue = '';
    for (let i = numericValue.length - 1, count = 0; i >= 0; i--, count++) {
      if (count === 2) {
        formattedValue = ',' + formattedValue;
        count = -1;
      }
      formattedValue = numericValue[i] + formattedValue;
    }

    return `R$ ${formattedValue}`;
  };

  const handleChange = (event: { target: { value: any; }; }) => {
    const inputValue = event.target.value;
    
    // Formata o valor e atualiza o estado
    const formattedValue = formatCurrency(inputValue);
    setValue(formattedValue);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="R$ 0,00"
    />
  );
};

export default InputMoney;
