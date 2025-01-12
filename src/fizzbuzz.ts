// The function should return 'fizz' if the number is divisible by 3,
// 'buzz' if it's divisible by 5,
// 'fizzbuzz' if it's divisible by both 3 and 5,
// and the number itself if it's divisible by neither 3 nor 5.

export const fizzBuzz = (num: number): string => {
  if (typeof num !== "number") {
    throw new Error("The argument must be a number");
  }
  if (Number.isNaN(num)) {
    throw new Error("The argument must be a number");
  }

  const multiplies = { 3: "Fizz", 5: "Buzz" };
  let output = "";

  Object.entries(multiplies).forEach(([key, value]): void => {
    if (num % Number(key) === 0) output += value;
  });

  return output || num.toString();
};
