const generateRandomNumber = (minNumber, maxNumber) => Math.floor(
  Math.random() * (maxNumber - minNumber + 1),
) + minNumber;

export default {
  generateRandomNumber,
};
