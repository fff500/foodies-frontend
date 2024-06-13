export const generateSequence = (max) => {
  const sequence = [];
  let current = 3;
  let step = 1;

  while (current <= max) {
    sequence.push(current);
    current += step;
    step += 3;
  }

  return sequence;
};
