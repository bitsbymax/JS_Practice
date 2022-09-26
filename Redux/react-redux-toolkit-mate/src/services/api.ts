import { wait } from './wait'

export const fetchGoods = async () => {
  await wait(2000);
  return ['A', 'B', 'C'];
};