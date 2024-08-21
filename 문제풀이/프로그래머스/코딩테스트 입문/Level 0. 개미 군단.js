/**
 * @param {number} hp
 */
const solution = (hp) => {
  const ANTS_DAMAGE = [5, 3, 1];
  let res = 0;

  let antIndex = 0;
  while (hp > 0) {
    if (hp >= ANTS_DAMAGE[antIndex]) {
      hp -= ANTS_DAMAGE[antIndex];
      res++;
    } else {
      antIndex++;
    }
  }

  return res;
};
