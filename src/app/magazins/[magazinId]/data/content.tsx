import adidas_woman from '../images/adidas_woman.jpg';
import man_hoodie from '../images/hoodie_man.webp';
import boss from '../images/hugo-boss.png';
import prada from '../images/prada.png';
import product1 from '../images/product1.avif';
import product2 from '../images/product2.avif';
import product3 from '../images/product3.avif';
import versace from '../images/versace.png';
// import zara from '../images/zara.png';

export const logoLinks = [ prada, boss, versace];

export const headerSection = {
  heading: 'Réflétez Qui Vous Êtes Avec Notre',
  spanText: 'Style',
  description:
    "Le pouvoir d'une tenue exceptionnelle est impossible à surestimer. Au mieux, la mode a la capacité de transformer votre humeur, votre identité et bien sûr votre apparence. Cela peut être amusant, rafraîchissant et agréable.",
};

export const midSection = {
  headingStart: 'Nous Fournissons La Meilleure Tenue Pour Vous Aider à',
  description:
    "Le pouvoir d'une tenue exceptionnelle est impossible à surestimer. Au mieux, la mode a la capacité de transformer votre humeur, votre identité et bien sûr votre apparence. Cela peut être amusant, rafraîchissant et agréable.",
  spanText: 'Exprimer',
  headingEnd: 'Votre Identité',
};

export const collections = [
  {
    image: man_hoodie,
    name: 'Collection de Sweatshirts Pink Soda',
  },
  {
    image: adidas_woman,
    name: 'Collection de Hoodies Adidas',
  },
];

export const bestsellers = [
  {
    image: product1,
    type: 'T-shirt',
    name: 'Graffiti Boyfriend',
    price: 24,
  },
  {
    image: product2,
    type: 'Hoodie',
    name: 'Badge Boyfriend',
    price: 32,
  },
  {
    image: product3,
    type: 'T-shirt',
    name: 'Adidas Contempo',
    price: 50,
  },
];

export const reviews = [
  {
    profile:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    name: 'Esther Howard',
    position: 'PDG de BuySell Start Up Agency',
    review:
      "Livraison super rapide, excellent matériau, et je l'adore !!! J'ai hâte de faire mon prochain achat :)"
  },
  {
    profile:
      'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHVzZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    name: 'Jane Cooper',
    position: 'Cliente fidèle',
    review:
      "J'adore ce pull ! Je ne l'ai pas encore lavé donc je ne sais pas comment il va tenir mais pour l'instant je suis contente",
  },
];

export const aboutSectionDescription =
  "Nous croyons en un monde où vous avez la liberté totale d'être vous-même, sans jugement. D'expérimenter. De vous exprimer. D'être courageux et de saisir la vie comme l'aventure extraordinaire qu'elle est. Alors nous nous assurons que chacun a une chance égale de découvrir toutes les choses incroyables dont il est capable - peu importe qui ils sont, d'où ils viennent ou quel style ils aiment dominer.";
