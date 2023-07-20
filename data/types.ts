export type RiotSkinObject = {
  id: string;
  num: number;
  name: string;
  chromas: boolean;
}

export type SkinMap = {
    [key: string]: RiotSkinObject[];
  };