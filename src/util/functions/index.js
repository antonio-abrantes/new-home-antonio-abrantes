export const delay = (amount = 3000) =>
  new Promise((resolve) => {
    setTimeout(resolve, amount);
  });
