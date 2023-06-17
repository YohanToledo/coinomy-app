import React, { useState } from "react";

type Props = {
  value: string;
  setValue: (param: string) => void;
};

const InputMoney = ({ value, setValue }: Props) => {
  const formatCurrency = (inputValue: string) => {
    // Remove non-numeric characters
    const numericValue = inputValue.replace(/\D/g, "");

    // Split the value into whole number and decimal parts
    const wholeNumber = numericValue.slice(0, -2);
    const decimalPart = numericValue.slice(-2);

    // Format the whole number part with commas
    let formattedWholeNumber = "";
    for (let i = wholeNumber.length - 1, count = 0; i >= 0; i--, count++) {
      if (count === 3) {
        formattedWholeNumber = "," + formattedWholeNumber;
        count = 0;
      }
      formattedWholeNumber = wholeNumber[i] + formattedWholeNumber;
    }

    // Combine the formatted whole number and decimal part with a decimal point
    const formattedValue = `${formattedWholeNumber}.${decimalPart}`;

    return `R$ ${formattedValue}`;
  };

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
