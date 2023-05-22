type Boundaries = {
  min: number;
  max: number;
};

type RandomGenerator = () => number;

const minmax = ({ min, max }: Boundaries, generator: RandomGenerator): number => {
  return min + generator() * (max - min);
};

export default minmax;
