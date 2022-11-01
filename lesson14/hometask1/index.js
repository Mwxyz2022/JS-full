let memory = 0;

export const add = numPlus => {
  memory += numPlus;
};

export const decrease = numMinus => {
  memory -= numMinus;
};

export const reset = () => {
  memory = 0;
};

export const getMemo = () => {
  return memory;
};
