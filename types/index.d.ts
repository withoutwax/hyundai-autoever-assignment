export interface FaqContentProps {
  category: string;
  subCategory?: string;
  question: string;
  answer: string;
}

export interface FaqDataProps {
  tab: string;
  faq: FaqContentProps[];
}
