export interface NamedImage {
  name: string;
  image: string;
}

export interface ProfileContent extends NamedImage {
  role: string | readonly string[];
}

export interface HomeHeroContent {
  title: string;
  description: string;
  quote: string;
  ctaText: string;
  ctaUrl: string;
  previewImage: string;
  previewAlt: string;
}

export interface UnlockCardContent {
  title: string;
  description: string;
  variant: "teal" | "dark";
  elevated?: boolean;
}
