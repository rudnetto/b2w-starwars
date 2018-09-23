const generateRandomNumber = (minNumber, maxNumber) => {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
};

export default {
  generateRandomNumber,
};
