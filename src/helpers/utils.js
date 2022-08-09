/**
 * Randimizes integer number between given min/max range
 *
 * @param {number} min
 * @param {number} max
 * @param {number} lastNumber once given, the function will repeat randomizing until the result is different
 */
const randomizeInteger = (min, max, lastNumber = null) => {
  if (max < min) {
    throw new Error(`Max value must be greater than min value! (${min} ${max})`);
  }
  if (min === max) {
    return min;
  }

  let newInteger;
  do {
    newInteger = Math.round(min + Math.random() * (max - min));
  } while (newInteger === lastNumber);
  return newInteger;
};

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

export { sleep, randomizeInteger };
