export const getTopThreeMostRepeated = (arr: string[]) => {
  if (!arr || arr.length === 0) {
    return [];
  }

  const counts = {} as Record<string, number>;
  arr.forEach((item) => {
    counts[item] = (counts[item] || 0) + 1;
  });

  const sortedCounts = Object.entries(counts).sort(
    ([, countA], [, countB]) => Number(countB) - Number(countA)
  );

  console.log({ sortedCounts });

  const top3 = sortedCounts.slice(0, 3).map(([item]) => item);

  console.log({ top3 });

  return top3;
};
