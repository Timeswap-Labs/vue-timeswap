import type {
  HomeHeroContent,
  NamedImage,
  ProfileContent,
  UnlockCardContent,
} from "@/types/interfaces/home";

export const SECTION_TITLES = {
  ourTeam: "Our Team",
  ourTeamDescription:
    "Our mission is to build the most capital efficient, secure & permissionless money market protocol on web 3.0. Come join the Timeswap team and help shape the future of DeFi",
  v3Unlocks: "What V3 Unlocks",
  advisors: "Advisors",
  investors: "Investors",
} as const;

export const HOME_HERO: HomeHeroContent = {
  title: "Trade specific periods of yield",
  description:
    "Timeswap is the first permissionless, oracle-less, non-liquiditable, fixed maturity lending & borrowing protocol",
  quote:
    "Timeswap aims to revolutionize money markets via its unique 3 variable constant product AMM",
  ctaText: "Launch App",
  ctaUrl: process.env.NEXT_PUBLIC_LAUNCH_APP_URL || "https://app.timeswap.io",
  previewImage: "/timeswap_hour_glass.svg",
  previewAlt: "Timeswap hourglass — time as a tradeable asset",
};

export const V3_UNLOCK_CARDS: readonly UnlockCardContent[] = [
  {
    title: "Targeted exposure",
    description: "Pick specific months (e.g., Aug-Sep; Nov-Dec), skip the rest.",
    variant: "teal",
  },
  {
    title: "Clean exits",
    description: "Frequent natural month-end maturities reduce exit slippage.",
    variant: "dark",
    elevated: true,
  },
  {
    title: "Capital efficiency",
    description: "Unified liquidity across maturities cuts slippage.",
    variant: "teal",
  },
  {
    title: "LP Control",
    description: "Flexible fees per pool, improving liquidity allocation and fewer toxic flows.",
    variant: "dark",
    elevated: true,
  },
];

export const CORE_MEMBERS: readonly ProfileContent[] = [
  { name: "Ricsson Ngo", role: "Core contributor", image: "/images/team/ricsson.png" },
  { name: "Aniket Jindal", role: "Core contributor", image: "/images/team/aniket_jindal08.png" },
  { name: "Harsha", role: "Core contributor", image: "/images/team/harsha.png" },
];

export const TEAM_MEMBERS: readonly ProfileContent[] = [
  { name: "Anupama Singh", role: "Operations Lead", image: "/images/team/anupama.png" },
  { name: "Yuvraj Singh", role: "Business Development", image: "/images/team/yuvraj.png" },
  { name: "Mohit", role: "Engineering", image: "/images/team/mohit.png" },
  { name: "Nitish", role: "Engineering", image: "/images/team/nitish.png" },
  { name: "Puneet", role: "Design", image: "/images/team/puneet.png" },
  { name: "Soumik", role: "Marketing", image: "/images/team/soumik.png" },
];

export const ADVISORS: readonly ProfileContent[] = [
  {
    name: "Sandeep Nailwal",
    role: ["Co-founder,", "Polygon"],
    image: "/images/advisors/sandeep.png",
  },
];

export const INVESTOR_LOGOS: readonly NamedImage[] = [
  { name: "DeFiance Capital", image: "/images/investors/definance.png" },
  { name: "Multicoin Capital", image: "/images/investors/multicoin.png" },
  { name: "Mechanism Capital", image: "/images/investors/capital.png" },
];

export const INVESTOR_PEOPLE: readonly ProfileContent[] = [
  {
    name: "Alex Svanevik",
    role: "CEO & Co-founder, Nansen",
    image: "/images/investors/alex_svanevik.png",
  },
  {
    name: "Balaji Srinivasan",
    role: "ex CTO - Coinbase, ex - a16z",
    image: "/images/investors/balaji_srinivasan.png",
  },
  {
    name: "George Lambeth",
    role: "Partner, Divergence Ventures",
    image: "/images/investors/george_lambeth.png",
  },
  {
    name: "John Lilic",
    role: "Ex Consensys / Advisor - Polygon",
    image: "/images/investors/john_lilic.png",
  },
  {
    name: "Surojit Chatterjee",
    role: "CPO, Coinbase",
    image: "/images/investors/surojit_chhaterjee.png",
  },
  {
    name: "Sina Habibian",
    role: "Ethereum Foundation",
    image: "/images/investors/sina_habibian.png",
  },
  {
    name: "Calvin Liu",
    role: "Strategy Lead, Compound Labs",
    image: "/images/investors/calvin_liu.png",
  },
  {
    name: "Larry Cermak",
    role: "Director of Research, The Block",
    image: "/images/investors/larry_cermak.png",
  },
  {
    name: "Mika Honkasalo",
    role: "DeFi Research, The Block",
    image: "/images/investors/mika_honkasalo.png",
  },
  {
    name: "Mihailo Bjelic",
    role: "Co-Founder, Polygon",
    image: "/images/investors/mihailo_bjelic.png",
  },
  {
    name: "Julien Bouteloup",
    role: "Curve Finance / Stake DAO",
    image: "/images/investors/julien_bouteloup.png",
  },
  { name: "Vaibhav", role: "Founder, Genie", image: "/images/investors/vaibhav.png" },
  {
    name: "Ryan Sean Adams",
    role: "Bankless / Mythos Capital",
    image: "/images/investors/ryan_sean_adams.png",
  },
  {
    name: "Sanket Shah",
    role: "Strategy Lead, Polygon",
    image: "/images/investors/sanket_shah.png",
  },
  {
    name: "Tanmay Bhat",
    role: "Co-founder, Superpumped",
    image: "/images/investors/tanmay_bhat.png",
  },
  { name: "Akshay BD", role: "Co-founder, Superpumped", image: "/images/investors/akshay_bd.png" },
  {
    name: "Sachin Tomar",
    role: "Founder & CTO, Biconomy",
    image: "/images/investors/sachin_tomar.png",
  },
  {
    name: "Ajeet Khurana",
    role: "ex CEO - Zebpay / Angel Investor",
    image: "/images/investors/ajeet_khurana.png",
  },
  { name: "Min Kim", role: "CMO, Polygon", image: "/images/investors/min_kim.png" },
  {
    name: "Kenzi Wang",
    role: "Co-Founder, Cere Network / AU21",
    image: "/images/investors/kenzi_wang.png",
  },
  {
    name: "Ajit Tripathi",
    role: "Head of Institutional Business, Aave",
    image: "/images/investors/ajit_tripathi.png",
  },
];
