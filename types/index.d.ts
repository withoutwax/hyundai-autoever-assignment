export interface FaqContentProps {
  category: string;
  subCategory?: string;
  question: string;
  answer: string;
}

export interface FaqDataProps {
  tab: string;
  categories: string[];
  faq: FaqContentProps[];
}
