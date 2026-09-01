export const formatAmount = (amount) => {
  return new Intl.NumberFormat({ style: "currency", currency: "THB" }).format(
    amount,
  );
};
