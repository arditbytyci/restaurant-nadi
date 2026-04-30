export type SideItem = {
  name: string;
  price: number | string;
};

export type Category = {
  id: string;
  title: string;
  desc?: string;
  illustration?: string;
  sides?: SideItem[];
  extras?: SideItem[];
};

export type Size = {
  id: string;
  sizes: { label: string; price: number }[];
};
