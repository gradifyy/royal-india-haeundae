import type { LocalizedText } from "./restaurant";

export const menuCategories = [
  "all",
  "recommendations",
  "curries",
  "tandoori",
  "biryani",
  "breads",
  "vegetarian",
  "rice",
  "sides",
  "drinks",
  "desserts",
] as const;

export type MenuCategory = (typeof menuCategories)[number];
export type DietaryTag = "vegetarian" | "vegan" | "halal" | "spicy";

export const categoryLabels: Record<MenuCategory, LocalizedText> = {
  all: { en: "All", ko: "전체" },
  recommendations: { en: "Chef Recommendations", ko: "셰프 추천" },
  curries: { en: "Curries", ko: "커리" },
  tandoori: { en: "Tandoori", ko: "탄두리" },
  biryani: { en: "Biryani", ko: "비리야니" },
  breads: { en: "Naan & Roti", ko: "난 & 로티" },
  vegetarian: { en: "Vegetarian", ko: "채식" },
  rice: { en: "Rice", ko: "라이스" },
  sides: { en: "Sides", ko: "사이드" },
  drinks: { en: "Drinks", ko: "음료" },
  desserts: { en: "Desserts", ko: "디저트" },
};

export type MenuItem = {
  id: string;
  name: LocalizedText;
  alternateName?: string;
  description: LocalizedText;
  category: Exclude<MenuCategory, "all">;
  price: string | null;
  image: string | null;
  dietary: DietaryTag[];
  flavourProfiles: string[];
  available: boolean;
};

// Dish-level dietary tags intentionally remain empty until the restaurant confirms
// ingredients and preparation. The UI explains this and keeps the fields ready.
export const menuItems: MenuItem[] = [
  {
    id: "butter-chicken",
    name: { en: "Butter Chicken", ko: "버터 치킨" },
    alternateName: "Chicken Makhani",
    description: {
      en: "Tender chicken in a smooth tomato and butter curry.",
      ko: "부드러운 치킨과 토마토, 버터로 완성한 크리미한 커리.",
    },
    category: "recommendations",
    price: null,
    image: "/images/hero-feast.webp",
    dietary: [],
    flavourProfiles: ["creamy", "sharing"],
    available: true,
  },
  {
    id: "palak-paneer",
    name: { en: "Palak Paneer", ko: "팔락 파니르" },
    description: {
      en: "Paneer served in a warmly spiced spinach curry.",
      ko: "향신료로 풍미를 낸 시금치 커리와 파니르 치즈.",
    },
    category: "vegetarian",
    price: null,
    image: null,
    dietary: [],
    flavourProfiles: ["savoury", "vegetarian"],
    available: true,
  },
  {
    id: "tandoori-chicken",
    name: { en: "Tandoori Chicken", ko: "탄두리 치킨" },
    description: {
      en: "Warmly spiced chicken cooked for a smoky, fire-kissed finish.",
      ko: "향신료로 재워 불향을 살려 구워낸 치킨.",
    },
    category: "tandoori",
    price: null,
    image: "/images/tandoori.webp",
    dietary: [],
    flavourProfiles: ["smoky", "spicy", "sharing"],
    available: true,
  },
  {
    id: "chicken-tikka",
    name: { en: "Chicken Tikka", ko: "치킨 티카" },
    description: {
      en: "Charred, tender pieces from the tandoor with bright spice.",
      ko: "탄두르에서 노릇하게 구워낸 부드럽고 향긋한 치킨.",
    },
    category: "tandoori",
    price: null,
    image: "/images/tandoori.webp",
    dietary: [],
    flavourProfiles: ["smoky", "sharing"],
    available: true,
  },
  {
    id: "chicken-biryani",
    name: { en: "Chicken Biryani", ko: "치킨 비리야니" },
    description: {
      en: "Aromatic basmati rice layered with chicken and warm spices.",
      ko: "향긋한 바스마티 라이스에 치킨과 향신료를 겹겹이 더한 요리.",
    },
    category: "biryani",
    price: null,
    image: null,
    dietary: [],
    flavourProfiles: ["savoury", "sharing"],
    available: true,
  },
  {
    id: "lamb-curry",
    name: { en: "Lamb Curry", ko: "램 커리" },
    description: {
      en: "A slow, savoury curry built around tender lamb and spice.",
      ko: "부드러운 양고기와 향신료의 깊은 맛을 살린 커리.",
    },
    category: "curries",
    price: null,
    image: null,
    dietary: [],
    flavourProfiles: ["savoury", "spicy"],
    available: true,
  },
  {
    id: "garlic-naan",
    name: { en: "Garlic Naan", ko: "갈릭 난" },
    description: {
      en: "Oven-fresh flatbread finished with garlic and herbs.",
      ko: "마늘과 허브로 풍미를 더한 갓 구운 난.",
    },
    category: "breads",
    price: null,
    image: null,
    dietary: [],
    flavourProfiles: ["sharing"],
    available: true,
  },
  {
    id: "cheese-naan",
    name: { en: "Cheese Naan", ko: "치즈 난" },
    description: {
      en: "Soft baked naan with a rich cheese filling.",
      ko: "고소한 치즈를 가득 넣어 부드럽게 구운 난.",
    },
    category: "breads",
    price: null,
    image: null,
    dietary: [],
    flavourProfiles: ["creamy", "sharing"],
    available: true,
  },
  {
    id: "jeera-rice",
    name: { en: "Jeera Rice", ko: "지라 라이스" },
    description: {
      en: "Fragrant basmati rice lifted with toasted cumin.",
      ko: "구운 커민 향을 더한 향긋한 바스마티 라이스.",
    },
    category: "rice",
    price: null,
    image: null,
    dietary: [],
    flavourProfiles: ["sharing"],
    available: true,
  },
  {
    id: "raita",
    name: { en: "Raita", ko: "라이타" },
    description: {
      en: "A cool yoghurt side to balance a richly spiced meal.",
      ko: "향신료 요리와 균형을 이루는 산뜻한 요거트 사이드.",
    },
    category: "sides",
    price: null,
    image: null,
    dietary: [],
    flavourProfiles: ["creamy"],
    available: true,
  },
  {
    id: "mango-lassi",
    name: { en: "Mango Lassi", ko: "망고 라씨" },
    description: {
      en: "A smooth, cooling mango yoghurt drink.",
      ko: "부드럽고 시원한 망고 요거트 음료.",
    },
    category: "drinks",
    price: null,
    image: null,
    dietary: [],
    flavourProfiles: ["creamy"],
    available: true,
  },
  {
    id: "gulab-jamun",
    name: { en: "Gulab Jamun", ko: "굴랍 자문" },
    description: {
      en: "A warm, syrup-soaked finish to the table.",
      ko: "달콤한 시럽을 머금은 따뜻한 인도식 디저트.",
    },
    category: "desserts",
    price: null,
    image: null,
    dietary: [],
    flavourProfiles: ["sharing"],
    available: true,
  },
];

export const dietaryLabels: Record<DietaryTag, LocalizedText> = {
  vegetarian: { en: "Vegetarian", ko: "채식" },
  vegan: { en: "Vegan", ko: "비건" },
  halal: { en: "Halal-friendly", ko: "할랄 프렌들리" },
  spicy: { en: "Spicy", ko: "매운맛" },
};
