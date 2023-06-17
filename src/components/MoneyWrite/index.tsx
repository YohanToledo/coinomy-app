import React, { useState } from "react";
import { formatCurrency } from "../../utils/format-currency";

type Props = {
  value: string;
  setValue: (param: string) => void;
};

const InputMoney = ({ value, setValue }: Props) => {
  const handleChange = (event: { target: { value: any } }) => {
    let inputValue = event.target.value;

    // Remove non-numeric characters
    const numericValue = inputValue.replace(/\D/g, "");

    // If the numeric value is empty, set it to "0"
    if (numericValue === "") {
      inputValue = "0";
    } else {
      // Remove leading zero if the user types other numbers
      const parsedValue = parseFloat(numericValue).toString();
      inputValue = parsedValue !== "0" ? parsedValue : "0";
    }

    // Formata o valor e atualiza o estado
    const formattedValue = formatCurrency(inputValue);
    setValue(formattedValue);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      required
      placeholder="R$ 0,00"
    />
  );
};

export default InputMoney;
