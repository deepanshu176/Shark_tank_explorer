export interface Startup {
  id: string;
  name: string;
  category: string;
  season: number;
  episode: number;
  deal: "Yes" | "No";
  sharks?: string[];
  askAmount?: string;
  dealAmount?: string;
  equity?: string;
  description?: string;
}

export const startups: Startup[] = [
  {
    id: "1",
    name: "BluePine Foods",
    category: "Food & Beverage",
    season: 1,
    episode: 1,
    deal: "Yes",
    sharks: ["Aman Gupta", "Namita Thapar"],
    askAmount: "₹75 Lakh",
    dealAmount: "₹75 Lakh",
    equity: "4%",
    description: "Premium momos brand from Sikkim"
  },
  {
    id: "2",
    name: "Booz",
    category: "Fashion",
    season: 1,
    episode: 1,
    deal: "No",
    sharks: [],
    askAmount: "₹40 Lakh",
    description: "Alcohol-themed clothing brand"
  },
  {
    id: "3",
    name: "TagZ Foods",
    category: "Food & Beverage",
    season: 1,
    episode: 2,
    deal: "Yes",
    sharks: ["Ashneer Grover"],
    askAmount: "₹70 Lakh",
    dealAmount: "₹70 Lakh",
    equity: "2.5%",
    description: "Popped potato chips"
  },
  {
    id: "4",
    name: "Hammer",
    category: "Electronics",
    season: 1,
    episode: 2,
    deal: "Yes",
    sharks: ["Aman Gupta"],
    askAmount: "₹1 Crore",
    dealAmount: "₹1 Crore",
    equity: "6%",
    description: "Lifestyle tech brand for audio products"
  },
  {
    id: "5",
    name: "Skippi Ice Pops",
    category: "Food & Beverage",
    season: 1,
    episode: 3,
    deal: "Yes",
    sharks: ["Aman Gupta", "Namita Thapar"],
    askAmount: "₹50 Lakh",
    dealAmount: "₹50 Lakh",
    equity: "5%",
    description: "Healthy ice popsicles for kids"
  },
  {
    id: "6",
    name: "Heart Up My Sleeves",
    category: "Fashion",
    season: 1,
    episode: 3,
    deal: "No",
    sharks: [],
    askAmount: "₹25 Lakh",
    description: "Designer sleeves for women"
  },
  {
    id: "7",
    name: "Beyond Snack",
    category: "Food & Beverage",
    season: 2,
    episode: 1,
    deal: "Yes",
    sharks: ["Peyush Bansal", "Vineeta Singh"],
    askAmount: "₹1 Crore",
    dealAmount: "₹1 Crore",
    equity: "3%",
    description: "Kerala banana chips brand"
  },
  {
    id: "8",
    name: "Rare Planet",
    category: "Home & Living",
    season: 2,
    episode: 1,
    deal: "Yes",
    sharks: ["Anupam Mittal"],
    askAmount: "₹80 Lakh",
    dealAmount: "₹80 Lakh",
    equity: "5%",
    description: "Handcrafted home decor products"
  },
  {
    id: "9",
    name: "Nuutjob",
    category: "Personal Care",
    season: 2,
    episode: 2,
    deal: "Yes",
    sharks: ["Aman Gupta", "Peyush Bansal"],
    askAmount: "₹60 Lakh",
    dealAmount: "₹60 Lakh",
    equity: "10%",
    description: "Men's intimate care products"
  },
  {
    id: "10",
    name: "Phool.co",
    category: "Sustainability",
    season: 2,
    episode: 2,
    deal: "Yes",
    sharks: ["Anupam Mittal", "Vineeta Singh"],
    askAmount: "₹1.2 Crore",
    dealAmount: "₹1.2 Crore",
    equity: "5%",
    description: "Sustainable products from temple flowers"
  },
  {
    id: "11",
    name: "Find Your Kicks",
    category: "Retail",
    season: 3,
    episode: 1,
    deal: "Yes",
    sharks: ["Aman Gupta"],
    askAmount: "₹1 Crore",
    dealAmount: "₹1 Crore",
    equity: "15%",
    description: "Sneaker reselling marketplace"
  },
  {
    id: "12",
    name: "Loka",
    category: "Food & Beverage",
    season: 3,
    episode: 1,
    deal: "No",
    sharks: [],
    askAmount: "₹50 Lakh",
    description: "Plant-based meat alternatives"
  },
  {
    id: "13",
    name: "Beco",
    category: "Sustainability",
    season: 3,
    episode: 2,
    deal: "Yes",
    sharks: ["Vineeta Singh", "Namita Thapar"],
    askAmount: "₹75 Lakh",
    dealAmount: "₹75 Lakh",
    equity: "2.5%",
    description: "Eco-friendly household products"
  },
  {
    id: "14",
    name: "Aas Vidyalaya",
    category: "Education",
    season: 3,
    episode: 2,
    deal: "Yes",
    sharks: ["Anupam Mittal"],
    askAmount: "₹30 Lakh",
    dealAmount: "₹30 Lakh",
    equity: "20%",
    description: "Rural education initiative"
  },
  {
    id: "15",
    name: "The Sass Bar",
    category: "Beauty",
    season: 4,
    episode: 1,
    deal: "Yes",
    sharks: ["Vineeta Singh"],
    askAmount: "₹40 Lakh",
    dealAmount: "₹40 Lakh",
    equity: "10%",
    description: "Natural skincare products"
  },
  {
    id: "16",
    name: "Raising Superstars",
    category: "Education",
    season: 4,
    episode: 1,
    deal: "Yes",
    sharks: ["Namita Thapar", "Peyush Bansal"],
    askAmount: "₹2 Crore",
    dealAmount: "₹2 Crore",
    equity: "4%",
    description: "Early childhood development program"
  },
  {
    id: "17",
    name: "Snitch",
    category: "Fashion",
    season: 4,
    episode: 2,
    deal: "Yes",
    sharks: ["Aman Gupta", "Peyush Bansal"],
    askAmount: "₹1.5 Crore",
    dealAmount: "₹1.5 Crore",
    equity: "1.5%",
    description: "Fast fashion menswear brand"
  },
  {
    id: "18",
    name: "Nomad Food Project",
    category: "Food & Beverage",
    season: 4,
    episode: 2,
    deal: "No",
    sharks: [],
    askAmount: "₹60 Lakh",
    description: "Artisanal food products"
  }
];

export const sharks = [
  "Aman Gupta",
  "Namita Thapar",
  "Peyush Bansal",
  "Vineeta Singh",
  "Anupam Mittal",
  "Ashneer Grover"
];
