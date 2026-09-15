export type Locale = "en" | "ko";
export type LocalizedText = Record<Locale, string>;

export const restaurant = {
  name: "ROYAL INDIA HAEUNDAE",
  nameKorean: "로얄인디아 해운대점",
  shortName: "Royal India",
  cuisine: {
    en: "Indian & Nepali Restaurant",
    ko: "인도 & 네팔 레스토랑",
  },
  address: {
    street: "287 Haeundaehaebyeon-ro, 1F / Unit 115",
    district: "Haeundae-gu",
    city: "Busan 48095",
    country: "South Korea",
    korean: "부산광역시 해운대구 해운대해변로 287, 1층 115호",
  },
  phoneDisplay: "+82 51-731-1946",
  phoneHref: "tel:+82517311946",
  email: "royalindiahaeundae@gmail.com",
  emailHref: "mailto:royalindiahaeundae@gmail.com",
  canonicalBase: "https://royal-india-haeundae.ayro-8578.chatgpt.site",
  // TODO(owner): add a verified price range (for example, a Schema.org-compatible value) before production.
  priceRange: null as string | null,
  links: {
    catchTable: "https://www.catchtable.net/shop/ROYAL_INDIA",
    catchTableKorean: "https://app.catchtable.co.kr/ct/shop/ROYAL_INDIA",
    googleMaps:
      "https://www.google.com/maps/search/?api=1&query=Royal+India+Haeundae+287+Haeundaehaebyeon-ro+Busan",
    naverMaps:
      "https://map.naver.com/p/search/%EB%A1%9C%EC%96%84%EC%9D%B8%EB%94%94%EC%95%84%20%ED%95%B4%EC%9A%B4%EB%8C%80%EC%A0%90",
    tripadvisor:
      "https://www.tripadvisor.com/Restaurant_Review-g297884-d27135892-Reviews-Royal_India_Haeundae-Busan.html",
    mapEmbed:
      "https://www.google.com/maps?q=Royal+India+Haeundae,+287+Haeundaehaebyeon-ro,+Busan&output=embed",
  },
  ratings: {
    // Approximate public ratings. Recheck before launch and update only here.
    google: { value: 4.8, label: "Google", approximate: true },
    tripadvisor: { value: 4.9, label: "Tripadvisor", approximate: true },
  },
  hours: {
    // TODO(owner): replace with verified opening hours before production launch.
    verified: false,
    note: {
      en: "Opening hours vary across public listings. Please call to confirm today’s hours.",
      ko: "공개된 영업시간 정보가 서로 다릅니다. 방문 전 전화로 당일 영업시간을 확인해 주세요.",
    },
  },
  services: [
    "Reservations",
    "Takeaway",
    "Delivery",
    "Parking",
    "Digital payments",
  ],
} as const;

export const navigation = [
  { href: "/", label: { en: "Home", ko: "홈" } },
  { href: "/menu", label: { en: "Menu", ko: "메뉴" } },
  { href: "/story", label: { en: "Our Story", ko: "이야기" } },
  { href: "/gallery", label: { en: "Gallery", ko: "갤러리" } },
  { href: "/visit", label: { en: "Visit", ko: "오시는 길" } },
  { href: "/reservations", label: { en: "Reservations", ko: "예약" } },
] as const;

export const copy = {
  common: {
    reserve: { en: "Reserve a Table", ko: "테이블 예약" },
    reserveCatchTable: { en: "Reserve via CatchTable", ko: "캐치테이블로 예약" },
    call: { en: "Call Restaurant", ko: "전화하기" },
    callToReserve: { en: "Call to Reserve", ko: "전화로 예약" },
    directions: { en: "Get Directions", ko: "길찾기" },
    exploreMenu: { en: "Explore the Menu", ko: "메뉴 보기" },
    close: { en: "Close menu", ko: "메뉴 닫기" },
    open: { en: "Open menu", ko: "메뉴 열기" },
    demoImage: { en: "Concept photography", ko: "콘셉트 이미지" },
  },
  home: {
    location: { en: "Haeundae · Busan", ko: "부산 · 해운대" },
    headline: {
      en: "Authentic India,\nin the heart of Haeundae.",
      ko: "해운대 한가운데서\n만나는 인도와 네팔.",
    },
    intro: {
      en: "Traditional curries, tandoor-fired favourites and warm hospitality in the heart of Haeundae, Busan.",
      ko: "정통 커리와 탄두르 요리, 갓 구운 난을 따뜻한 환대와 함께 해운대에서 만나보세요.",
    },
    proof: {
      en: "Highly rated by diners on Google & Tripadvisor",
      ko: "Google과 Tripadvisor에서 높은 평가를 받은 레스토랑",
    },
    flavoursEyebrow: { en: "Signature plates", ko: "시그니처 메뉴" },
    flavoursTitle: { en: "Discover our flavours", ko: "로얄인디아의 맛" },
    flavoursBody: {
      en: "Comforting curries, fire-kissed tandoori and naan served warm from the oven.",
      ko: "부드러운 커리부터 불향 가득한 탄두리, 오븐에서 갓 구운 난까지 만나보세요.",
    },
    guideEyebrow: { en: "A simple way to choose", ko: "처음이라면" },
    guideTitle: { en: "New to Indian cuisine?", ko: "인도 음식이 처음이신가요?" },
    guideBody: {
      en: "Start with the flavour you already love. We’ll help you find a dish that feels just right.",
      ko: "좋아하는 맛에서 시작해 보세요. 취향에 꼭 맞는 메뉴를 쉽게 고를 수 있어요.",
    },
    storyEyebrow: { en: "Our table in Haeundae", ko: "해운대의 로얄인디아" },
    storyTitle: {
      en: "Warm spices. Open doors. A table for everyone.",
      ko: "따뜻한 향신료와 모두를 위한 식탁.",
    },
    storyBody: {
      en: "Royal India brings the warmth, spices and hospitality of Indian and Nepali dining to Haeundae — through traditional curries, tandoor cooking and freshly prepared naan.",
      ko: "로얄인디아는 정통 커리, 탄두르 요리와 갓 구운 난을 통해 인도와 네팔의 풍미와 따뜻한 환대를 해운대에 전합니다.",
    },
    dietaryEyebrow: { en: "Plan with confidence", ko: "편안한 식사를 위해" },
    dietaryTitle: { en: "Dining for everyone", ko: "모두를 위한 다이닝" },
    dietaryBody: {
      en: "Options are available for a range of dietary preferences. Our team can help you choose with care.",
      ko: "다양한 식단을 위한 선택지를 준비하고 있습니다. 직원에게 편하게 문의해 주세요.",
    },
    dietaryNote: {
      en: "Please speak with our team about individual dietary requirements and preparation.",
      ko: "개별 식이 요건과 조리 방식은 직원에게 반드시 확인해 주세요.",
    },
    reviewsEyebrow: { en: "Independent platforms", ko: "외부 리뷰 플랫폼" },
    reviewsTitle: { en: "Loved by local and visiting diners", ko: "현지인과 여행자가 함께 찾는 곳" },
    reviewsNote: {
      en: "Approximate public ratings shown for context. Review details remain on their original platforms.",
      ko: "표시된 평점은 공개된 정보를 바탕으로 한 참고 수치이며, 리뷰 내용은 각 플랫폼에서 확인할 수 있습니다.",
    },
    coastEyebrow: { en: "A Haeundae table", ko: "해운대에서의 한 끼" },
    coastTitle: { en: "Indian flavours, steps from the coast.", ko: "바다 가까이에서 만나는 인도의 풍미." },
    coastBody: {
      en: "Pause between beach walks and city explorations for warming curries, fresh naan and an easy meal to share.",
      ko: "해변 산책과 도시 여행 사이, 따뜻한 커리와 갓 구운 난을 함께 나누며 여유를 즐겨보세요.",
    },
  },
} as const;

export const trustItems: LocalizedText[] = [
  { en: "Indian & Nepali Cuisine", ko: "인도 & 네팔 요리" },
  { en: "Halal Options", ko: "할랄 옵션" },
  { en: "Vegetarian & Vegan Options", ko: "채식 & 비건 옵션" },
  { en: "Near Haeundae Beach", ko: "해운대 해변 인근" },
  { en: "Reservations Available", ko: "예약 가능" },
];

export const dietaryOptions: LocalizedText[] = [
  { en: "Halal options", ko: "할랄 옵션" },
  { en: "Vegetarian options", ko: "채식 옵션" },
  { en: "Vegan options", ko: "비건 옵션" },
  { en: "Gluten-free options", ko: "글루텐 프리 옵션" },
];

export const flavourGuides = [
  {
    key: "creamy",
    number: "01",
    title: { en: "Creamy & Mild", ko: "부드럽고 순한 맛" },
    detail: { en: "Silky, gently spiced curries", ko: "크리미하고 향신료가 부드러운 커리" },
  },
  {
    key: "savoury",
    number: "02",
    title: { en: "Rich & Savoury", ko: "깊고 진한 맛" },
    detail: { en: "Slow-built layers of warm spice", ko: "따뜻한 향신료가 겹겹이 쌓인 깊은 맛" },
  },
  {
    key: "smoky",
    number: "03",
    title: { en: "Smoky Tandoor", ko: "불향 가득 탄두르" },
    detail: { en: "Charred edges, tender centres", ko: "겉은 노릇하고 속은 부드러운 요리" },
  },
  {
    key: "vegetarian",
    number: "04",
    title: { en: "Vegetarian Favourites", ko: "채식 인기 메뉴" },
    detail: { en: "Ask our team for today’s options", ko: "오늘의 채식 메뉴는 직원에게 문의하세요" },
  },
  {
    key: "spicy",
    number: "05",
    title: { en: "Something Spicy", ko: "매콤하게" },
    detail: { en: "A little more heat and energy", ko: "기분 좋게 살아나는 매콤함" },
  },
  {
    key: "sharing",
    number: "06",
    title: { en: "Perfect for Sharing", ko: "함께 나누기 좋은" },
    detail: { en: "A generous table of many tastes", ko: "여러 가지 맛을 풍성하게 즐기는 식탁" },
  },
] as const;

export const signatureDishes = [
  {
    name: { en: "Butter Chicken", ko: "버터 치킨" },
    secondary: "Chicken Makhani",
    description: {
      en: "Tender chicken in a velvety tomato-butter curry.",
      ko: "부드러운 치킨을 토마토와 버터로 완성한 크리미한 커리.",
    },
    image: "/images/hero-feast.webp",
    alt: {
      en: "Butter chicken, naan, rice and tandoori dishes on a restaurant table",
      ko: "테이블 위 버터 치킨과 난, 라이스, 탄두리 요리",
    },
  },
  {
    name: { en: "Tandoori Chicken", ko: "탄두리 치킨" },
    secondary: "From the tandoor",
    description: {
      en: "Fire-kissed chicken with warm spices and a gentle char.",
      ko: "따뜻한 향신료와 은은한 불향을 입힌 탄두리 치킨.",
    },
    image: "/images/tandoori.webp",
    alt: {
      en: "Tandoori chicken tikka with naan on a dark ceramic plate",
      ko: "짙은 도자기 접시에 담긴 탄두리 치킨 티카와 난",
    },
  },
  {
    name: { en: "Garlic Naan", ko: "갈릭 난" },
    secondary: "Fresh from the oven",
    description: {
      en: "Warm, blistered flatbread brushed with garlic and herbs.",
      ko: "마늘과 허브 향을 더해 오븐에서 갓 구운 따뜻한 난.",
    },
    image: "/images/tandoori.webp",
    alt: {
      en: "Fresh garlic naan beside a tandoori plate",
      ko: "탄두리 요리 곁에 놓인 갓 구운 갈릭 난",
    },
  },
] as const;
