 const getQuantityLabel = (num: number) => {
    const lastDigit = num % 10;
    const lastTwoDigits = num % 100;

    if (lastDigit === 1 && !(lastTwoDigits >= 11 && lastTwoDigits <= 14)) {
      return "товар";
    } else if (
      lastDigit >= 2 &&
      lastDigit <= 4 &&
      !(lastTwoDigits >= 10 && lastTwoDigits <= 20)
    ) {
      return "товари";
    } else {
      return "товарів";
    }
  };
    export default getQuantityLabel;