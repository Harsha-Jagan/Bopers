/**
 * champion object received from riot's api. Used to store skins for a champion.
 */
export type Champion = {
  name: string;
  skinNum: number;
  skinName: string;
};

const DEFAULT_STRING = "default";
const DEFAULT_NUM = -1;

/**
 * placeholder champion object
 */
export const DEFAULT_CHAMPION: Champion = {
  name: DEFAULT_STRING,
  skinName: DEFAULT_STRING,
  skinNum: DEFAULT_NUM,
};
