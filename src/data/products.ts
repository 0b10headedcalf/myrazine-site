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
  {
    name: "Tetramethyl Pyrazine",
    fema: 3237,
    cas: "1124-11-4",
    profile: "musty nutty chocolate coffee cocoa soybean lard burnt"
  },
  {
    name:"Pyrazine,2-ethyl-6-methyl-",
    fema: 3919,
    cas: "13925-03-6",
    profile: "roasted potato, Taste: roasted hazelnut"
  },
  {
    name: "Pyrazine,2-ethyl-5-methyl-",
    fema: 3154,
    cas: "13360-64-0",
    profile: "coffee bean nutty grassy roasted, coffee pyrazine"
  },
  {
    name:"Pyrazine, trimethyl-",
    fema: 3244,
    cas: "14667-55-1",
    profile: "nutty musty earthy powdery cocoa roasted peanut" 
  },
  {
    name: "Pyrazine, propyl-",
    fema: 3961,
    cas: "18138-03-9",
    profile: "green vegetable nutty"
  },
  {
    name: "Pyrazine, 3,5-diethyl-2-methyl-",
    fema: 3916,
    cas: "18138-05-1",
    profile: "nutty meaty vegetable"
  },
  {
    name:"Isopentyl hexanoate",
    fema:2075,
    cas: "2198-61-0",
    profile: "fruity banana apple pineapple green"
  },
  {
    name:"iso-Amyl n-heptanoate",
    cas:"109-25-1",
    profile:"fruity herbal grassy banana unripe fruit"
  },
  {
    name:"Decanoic acid, ethyl ester",
    fema:2432,
    cas:"110-38-3",
    profile:"sweet waxy fruity apple grape oily brandy"
  },
  {
    name:"Isoamyl octanoate",
    fema:2080,
    cas: "2035-99-6",
    profile:"sweet oily fruity green soapy pineapple coconut"
  },
  {
    name: "Isoamyl nonoate",
    fema:2078,
    cas:"7779-70-6",
    profile:"fruity oily apricot floral"
  },
  {
    name:"Isoamyl decanoate",
    cas:"2306-91-4",
    profile:"waxy banana fruity sweet cognac green"
  },
  {
    name:"Phenylethyl Alcohol ",
    fema:2858,
    cas:"60-12-8",
    profile:"floral rose dried rose flower rose water"
  },
  {
    name:"Phenol",
    fema:3223,
    cas:"108-95-2",
    profile: "phenolic plastic rubber (in dipropylene alcohol)"
  },
  {
    name:"Isoamyl laurate",
    fema:2077,
    cas:"6309-51-9",
    profile:"wine waxy oily fatty peach"
  },
  {
    name:"Phenylethyl octanoate",
    fema: 3222,
    cas: "5457-70-5",
    profile:"sweet waxy green cocoa fruity"
  }
];
