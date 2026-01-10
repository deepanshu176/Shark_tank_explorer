export interface Shark {
  id: string;      // slug
  name: string;
  company: string;
  image: string;
  bio: string;
  seasons?: number[];
}

/* 🔥 SINGLE SOURCE OF TRUTH */
export const sharks: Shark[] = [
  {
    id: "aman-gupta",
    name: "Aman Gupta",
    company: "Co-founder, boAt",
    image: "/sharks/aman.jpg",
    bio: "Co-founder of boAt, one of India's top audio and wearable brands.",
    seasons: [1,2,3,4],
  },
  {
    id: "namita-thapar",
    name: "Namita Thapar",
    company: "Executive Director, Emcure Pharma",
    image: "/sharks/namita.jpg",
    bio: "Pharma leader and strong supporter of women entrepreneurs.",
    seasons: [1,2,3,4],
  },
  {
    id: "peyush-bansal",
    name: "Peyush Bansal",
    company: "Founder, Lenskart",
    image: "/sharks/peyush.jfif",
    bio: "Tech entrepreneur and founder of Lenskart.",
    seasons: [1,2,3,4],
  },
  {
    id: "anupam-mittal",
    name: "Anupam Mittal",
    company: "Founder, Shaadi.com",
    image: "/sharks/anupam.jpg",
    bio: "Serial entrepreneur and angel investor.",
    seasons: [1,2,3,4],
  },
  {
    id: "ashneer-grover",
    name: "Ashneer Grover",
    company: "Former MD, BharatPe",
    image: "/sharks/ashneer.jpg",
    bio: "Fintech entrepreneur and early Shark Tank investor.",
    seasons: [1],
  },

  // Season 2+
  {
    id: "amit-jain",
    name: "Amit Jain",
    company: "CEO, CarDekho",
    image: "/sharks/amit.jfif",
    bio: "Co-founder of CarDekho Group.",
    seasons: [2,3,4],
  },
  {
    id: "deepinder-goyal",
    name: "Deepinder Goyal",
    company: "Founder, Zomato",
    image: "/sharks/deepinder.webp",
    bio: "Founder of Zomato and food-tech entrepreneur.",
    seasons: [2],
  },
  {
    id: "ritesh-agarwal",
    name: "Ritesh Agarwal",
    company: "Founder, OYO",
    image: "/sharks/ritesh.jfif",
    bio: "Hospitality entrepreneur and youngest billionaire in India.",
    seasons: [2,3,4],
  },
  {
    id: "ghazal-alagh",
    name: "Ghazal Alagh",
    company: "Co-founder, Mamaearth",
    image: "/sharks/ghazal.jfif",
    bio: "Beauty and wellness brand entrepreneur.",
    seasons: [2],
  },

  // Season 3+
  {
    id: "ronnie-screwvala",
    name: "Ronnie Screwvala",
    company: "Founder, UTV Group",
    image: "/sharks/ronnie.jpg",
    bio: "Media mogul and education investor.",
    seasons: [3],
  },
  {
    id: "kunal-bahl",
    name: "Kunal Bahl",
    company: "Co-founder, Snapdeal",
    image: "/sharks/kunal.jfif",
    bio: "E-commerce entrepreneur and investor.",
    seasons: [3],
  },
  {
    id: "radhika-gupta",
    name: "Radhika Gupta",
    company: "CEO, Edelweiss AMC",
    image: "/sharks/radhika.jfif",
    bio: "Finance expert and mutual fund leader.",
    seasons: [3],
  },

  // Season 4+
  {
    id: "varun-dua",
    name: "Varun Dua",
    company: "Founder, Acko",
    image: "/sharks/varun.jfif",
    bio: "Insurtech startup founder.",
    seasons: [4],
  },
  {
    id: "viraj-bahl",
    name: "Viraj Bahl",
    company: "Founder, Veeba Foods",
    image: "/sharks/viraj.jfif",
    bio: "FMCG entrepreneur and food brand expert.",
    seasons: [4],
  },
  {
  id: "azhar-iqubal",
  name: "Azhar Iqubal",
  company: "Co-founder & CEO, Inshorts",
  image: "/sharks/azhar.jfif",
  bio: "Tech entrepreneur and media innovator, co-founder of Inshorts, focused on building scalable digital platforms.",
  seasons: [4],
  },


];

