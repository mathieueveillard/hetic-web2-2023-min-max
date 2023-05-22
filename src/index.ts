type Boundaries = Readonly<{
  min: number;
  max: number;
}>;

type RandomGenerator = () => number;

const random = ({ min, max }: Boundaries, randomGenerator: RandomGenerator): number => {
  return min + randomGenerator() * (max - min);
};

export default random;
