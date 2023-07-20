export type Champion = {
  name: string;
  skinNum: number;
  skinName: string;
};

const DEFAULT_STRING = "default";
const DEFAULT_NUM = -1;

export const DEFAULT_CHAMPION: Champion = {
  name: DEFAULT_STRING,
  skinName: DEFAULT_STRING,
  skinNum: DEFAULT_NUM,
};
