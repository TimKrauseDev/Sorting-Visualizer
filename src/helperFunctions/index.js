export const createRandomArray = (amountOfBars, min, max) =>
  Array.from({ length: amountOfBars }, () =>
    Math.floor(Math.random() * (max - min) + min)
  );
