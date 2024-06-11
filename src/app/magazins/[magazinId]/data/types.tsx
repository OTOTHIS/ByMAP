import type React from 'react';

export type ContactsType = {
  svg: React.JSX.Element;
  title: string;
  description: string;
  href: string;
};

export type SubContactsType = {
  heading: string;
  description: string;
  contacts: ContactsType[];
};

export type FaqDataType = {
  title: string;
  FAQS: {
    question: string;
    answer: string;
  }[];
};

export type ProductType = {
  slug: string;
  name: string;
  image: string;
  decsription: string;
  demoLink: string;
  price?: number | undefined;
  purchaseLink: string;
  highlights: string[];
  productOverview: {
    description: string;
    features: string[];
    subDescription: string;
  };
  screenshots: string[];
  changeLog: {
    version: string;
    description: string;
  };
};
