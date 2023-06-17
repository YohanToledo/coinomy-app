import StaticData from "../shared/static/static-data";

export const formatCurrency = (inputValue: string) => {
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

  return `${StaticData.getCurrency()} ${formattedValue}`;
};
