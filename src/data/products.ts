export interface Product {
  name: string;
  fema?: number;
  cas?: string;
  profile: string;
}

export const products: Product[] = [
  {
    name: 'Pyrazine Mixtures',
    profile: "80%, roasted potato, nutty.",
  },
  {
    name: "3-Ethyl-2-Methylpyrazine",
    fema: 3155,
    cas: "15707-23-0",
    profile: "Nutty, peanut, musty, corn-like with raw earthy and bready nuances",
  },
  {
    name:"2-Ethyl-3,5(or6)-dimethylpyrazine",
    fema: 3149,
    cas: "27043-05-6",
    profile: "Nutty"
  },
  {
    name: "Pyrazine, 2,5-dimethyl-",
    fema: 3272,
    cas: "123-32-0",
    profile: "cocoa roasted nuts roast beef woody grass medical"
  },
  {
    name: "Pyrazine, 2,6-dimethyl-",
    fema: 3273,
    cas: "108-50-9",
    profile: "cocoa roasted nuts roast beef coffee"
  },
  {
    name: "Pyrazine, 2,3-dimethyl-",
    fema: 3271,
    cas: "5910-89-4",
    profile: "nutty coffee peanut butter walnut caramel leather"
  },
];
