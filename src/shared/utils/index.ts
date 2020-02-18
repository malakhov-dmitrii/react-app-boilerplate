export const smartRound = (num: number, fractionalLength = 2) => {
  if (num === null) {
    return;
  }

  return parseFloat(num.toFixed(fractionalLength));
};
