export const createDelay = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));
