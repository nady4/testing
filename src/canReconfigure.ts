// Should return true if the two strings can be reconfigured, and false otherwise.
// The two strings can be reconfigured if they have the same length,
// but the same character cannot be reconfigured into two different characters.
// also the order of the characters should be the same.

export const canReconfigure = (from: string, to: string): boolean => {
  if (!from || !to || typeof from !== "string" || typeof to !== "string")
    return false;

  const isSameLength = from.length === to.length;
  if (!isSameLength) return false;

  const hasSameUniqueLetters = new Set(from).size === new Set(to).size;
  if (!hasSameUniqueLetters) return false;

  const transformations = {};

  for (let i = 0; i < from.length; i += 1) {
    const fromLetter = from[i];
    const toLetter = to[i];

    const storedTransformation = transformations[fromLetter];
    if (storedTransformation && storedTransformation !== toLetter) return false;

    transformations[fromLetter] = toLetter;
  }
  console.log(transformations);
  return true;
};
