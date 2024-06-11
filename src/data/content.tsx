
import { FiBox } from 'react-icons/fi';
import { IoChatboxOutline } from 'react-icons/io5';
import { MdOutlineCameraAlt } from 'react-icons/md';

import type { NavItemType } from '@/components/NavItem';






import type { BlogType } from './types';

export const topNavLinks: NavItemType[] = [
  {
    id: 'ee46t',
    name: 'Home',
    href: '/',
  },
  {
    id: 'eerrrt',
    name: 'Blog',
    href: '/blog',
  },
  {
    id: 'eexct',
    name: 'Collections',
    href: '/products',
  },
  {
    id: 'ewrwrw',
    name: 'Magazins',
    href: '/magazins',
  },
  {
    id: 'h6ii8g',
    name: 'Contact',
    href: '/contact',
  },
  {
    id: 'h678ty',
    name: 'FAQ',
    href: '/faqs',
  },
  {
    id: 'h6i78g',
    name: 'Checkout',
    href: '/user/checkout',
  },
  {
    id: 'f678ty',
    name: 'Cart',
    href: '/user/cart',
  },
];

export const NavLinks: NavItemType[] = [
  {
    id: 'ee46t',
    name: 'Home',
    href: '/home',
  },
  {
    id: 'eerrrt',
    name: 'Blog',
    href: '/blog',
  },
  {
    id: 'eexct',
    name: 'Collection',
    href: '/products',
  },
  {
    id: 'ewrwrw',
    name: 'Magazins',
    href: '/magazins',
  },
  {
    id: 'h6ii8g',
    name: 'Contact',
    href: '/contact',
  },
  {
    id: 'h678ty',
    name: 'FAQ',
    href: '/faqs',
  },
  {
    id: 'h6i78g',
    name: 'Checkout',
    href: '/user/checkout',
  },
  {
    id: 'f678ty',
    name: 'Cart',
    href: '/user/cart',
  },
];

export const headerSection = {
  title: 'NEW ARRIVAL!',
  heading: 'AIR JORDAN 6 GX EASTSIDE',
  description:
    "Feel unbeatable from the tee box to the final putt in a design that's pure early MJ: speed, class",
};

export const promotionTag = {
  heading: 'DISC UP TO 50% FOR SNEAKERS FEST ID 2023',
  description:
    'Join the sneaker fest 2023 on 23 October. We have more fun gigs too and supported by FootWear!.',
};


export const productsSection = {
  heading: 'Shop Now, Look Good Later',
  description:
    'We have a buch of collections for you! Lets explore and find your dream shoes, make it happen',
};

const shoeBrands = ['Nike', 'Alexander Mqueen', 'New Balance', 'Compass'];

const shoeTypes = ['Type', 'Sandals', 'Sneakers', 'Boots'];

const sizes = ['Size', 'S', 'M', 'L', 'XL', 'XXl'];

const prices = [
  'Price',
  'Below $100',
  'Below $200',
  'Below $300',
  'Below $400',
];

export const filters = [shoeBrands, prices, sizes, shoeTypes];

export const brandsSection = {
  heading: 'The Official Store of The Amazing Brand',
  description:
    'We work together with high quality and famous brands around the world',
  // magazins: [
  //   {
  //     brandName: 'New Balance',
  //     rating: 4.9,
  //     reviews: 10334,
  //     followers: 7.2,
  //     visitLink: 'https://www.newbalance.com',
  //     logo: new_balance,
  //     shoes: [new_balance1, new_balance2, new_balance3, new_balance4],
  //   },
  //   {
  //     brandName: 'Compass',
  //     rating: 4.9,
  //     reviews: 10334,
  //     followers: 8.5,
  //     visitLink: 'https://www.sepatucompass.com/',
  //     logo: compass_profile,
  //     shoes: [compass1, compass2, compass3, compass4],
  //   },
  //   {
  //     brandName: 'Nike',
  //     rating: 4.9,
  //     reviews: 10334,
  //     followers: 11.2,
  //     visitLink: 'https://nike.com',
  //     logo: nike_profile,
  //     shoes: [yellowLow, redlow, dunklow, lebronxx],
  //   },
  // ],
};

export const footerBannerData = {
  heading: 'BRINGING YOU TO UPDATE WITH FANTASTIC FOOTWEAR',
  description:
    'View all brands of our collection on HotKicks, there is another collection. Please check it out bro, like seriously',
};

export const footerData = {
  description:
    'HotKicks was designed and founded in 2023 by Person. The theme is about sneakers ecommerce thet use for shoes selling around the world.',
  footerLinks: [
    {
      title: 'Main Pages',
      links: [
        { href: '/home', name: 'Home' },
        { href: '/products', name: 'Collections' },
        { href: '/cart', name: 'Cart' },
        { href: '/checkout', name: 'Checkout' },
        { href: '/blog', name: 'Blogs' },
      ],
    },
    {
      title: 'Single Pages',
      links: [
        { href: '/product/yellowLow', name: 'Product Single' },
        {
          href: '/blog/the-evolution-of-sneaker-culture-a-historical-perspective',
          name: 'Blog Single',
        },
      ],
    },
    {
      title: 'Other Pages',
      links: [{ href: '/rt', name: 'Not Found' }],
    },
    {
      title: 'Utility Pages',
      links: [
        { href: '/faq', name: 'FAQS' },
        { href: '/contact', name: 'Contact' },
        { href: '/forgot-pass', name: 'Forgot Password' },
        { href: '/login', name: 'Login' },
        { href: '/signup', name: 'Signup' },
      ],
    },
  ],
};

export const newsletter = {
  heading: "Don't wanna miss our offers?",
  description:
    'Drop your email below and start receiving the best offers from HotKicks',
};

export const shoeSizes = [
  'EU36',
  'EU37',
  'EU38',
  'EU39',
  'EU40',
  'EU41',
  'EU42',
  'EU43',
  'EU44',
];

export const note =
  ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, est eum magnam doloremque, at adipisci debitis, similique dolores ipsa unde necessitatibus vero quibusdam nostrum numquam!';

// export const contactSection = {
//   heading: 'Contact us',
//   description:
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis quis phasellus eleifend tellus orci ornare.',
//   directContactInfoHeader: {
//     heading: 'Prefer to reach out directly?',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh magna sit diam pharetra.',
//   },
//   directContactInfo: [
//     {
//       icon: <FiBox className="text-5xl" />,
//       title: 'Sales',
//       description:
//         'Lorem ipsum dolor sit amet consectetur adipiscing elit blandit velit semper aliquam.',
//       contactLink: {
//         href: 'mailto:sales@hotkicks.com',
//         title: 'sales@hotkicks.com',
//       },
//     },
//     {
//       icon: <IoChatboxOutline className="text-5xl" />,
//       title: 'Support',
//       description:
//         'Lorem ipsum dolor sit amet consectetur adipiscing elit blandit velit semper aliquam.',
//       contactLink: {
//         href: 'mailto:support@hotckicks.com',
//         title: 'support@hotckicks.com',
//       },
//     },
//     {
//       icon: <MdOutlineCameraAlt className="text-5xl" />,
//       title: 'Influencers',
//       description:
//         'Lorem ipsum dolor sit amet consectetur adipiscing elit blandit velit semper aliquam.',
//       contactLink: {
//         href: 'mailto:influencers@hotckicks.com',
//         title: 'influencers@hotckicks.com',
//       },
//     },
//   ],
//   instagramPhotos: [
//     'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1479&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1463100099107-aa0980c362e6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1505784045224-1247b2b29cf3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   ],
// };



export const contactSection = {
  heading: 'Contactez-nous',
  description:
    'Nous sommes là pour vous aider. Que vous ayez une question sur nos produits, une demande de support ou une proposition de collaboration, n’hésitez pas à nous contacter.',
  directContactInfoHeader: {
    heading: 'Préférez-vous nous joindre directement ?',
    description:
      'Nous sommes disponibles par email pour répondre à toutes vos questions et préoccupations. Choisissez le service que vous souhaitez contacter.',
  },
  directContactInfo: [
    {
      icon: <FiBox className="text-5xl" />,
      title: 'Ventes',
      description:
        'Pour toute question concernant nos produits ou nos offres, contactez notre équipe de ventes.',
      contactLink: {
        href: 'mailto:sales@hotkicks.com',
        title: 'sales@hotkicks.com',
      },
    },
    {
      icon: <IoChatboxOutline className="text-5xl" />,
      title: 'Support',
      description:
        'Pour toute assistance technique ou demande de support, notre équipe est là pour vous aider.',
      contactLink: {
        href: 'mailto:support@hotkicks.com',
        title: 'support@hotkicks.com',
      },
    },
    {
      icon: <MdOutlineCameraAlt className="text-5xl" />,
      title: 'Influenceurs',
      description:
        'Vous êtes influenceur et souhaitez collaborer avec nous ? Contactez notre équipe dédiée aux partenariats.',
      contactLink: {
        href: 'mailto:influencers@hotkicks.com',
        title: 'influencers@hotkicks.com',
      },
    },
  ],
  instagramPhotos: [
    'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1479&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1463100099107-aa0980c362e6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1505784045224-1247b2b29cf3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ],
};



export const faqsData = {
  heading: 'Questions Fréquemment Posées',
  description:
    'Retrouvez ici les réponses aux questions les plus courantes sur nos services, produits, livraisons et plus encore.',
  faqs: [
    {
      category: 'Livraison',
      data: [
        {
          question: 'Comment puis-je suivre ma commande ?',
          answer:
            'Vous pouvez suivre votre commande en vous connectant à votre compte et en vérifiant le statut de la commande. De plus, un numéro de suivi sera fourni dans l\'email de confirmation d\'expédition.',
        },
        {
          question: 'Quel est le délai de livraison estimé pour ma commande ?',
          answer:
            'Les délais de livraison varient en fonction de votre emplacement. En général, les commandes nationales prennent 3 à 5 jours ouvrables, tandis que les commandes internationales peuvent prendre de 7 à 14 jours ouvrables.',
        },
        {
          question: 'Puis-je changer mon adresse de livraison après avoir passé une commande ?',
          answer:
            'Malheureusement, nous ne pouvons pas changer l\'adresse de livraison une fois la commande passée. Veuillez vérifier vos informations avant de finaliser l\'achat.',
        },
        {
          question: 'Proposez-vous des options de livraison accélérée ?',
          answer:
            'Oui, nous proposons une livraison accélérée moyennant des frais supplémentaires. Vous pouvez choisir votre méthode de livraison préférée lors du processus de paiement.',
        },
        {
          question: 'Que dois-je faire si ma commande est retardée ou perdue ?',
          answer:
            'Si votre commande est significativement retardée ou perdue, veuillez contacter notre service client et nous enquêterons sur le problème.',
        },
        {
          question: 'Quels sont les frais de livraison ?',
          answer:
            'Les frais de livraison dépendent de votre emplacement et de la méthode de livraison choisie. Les frais exacts seront calculés lors du passage en caisse.',
        },
      ],
    },
    {
      category: 'Produits',
      data: [
        {
          question: 'Comment déterminer la bonne taille pour mes sneakers ?',
          answer:
            'Référez-vous à notre guide des tailles disponible sur la page du produit. Il fournit des mesures et des conseils pour vous aider à choisir la bonne taille.',
        },
        {
          question: 'Vos sneakers sont-ils authentiques ?',
          answer:
            'Oui, nous garantissons l\'authenticité de tous nos sneakers. Nous les sourçons directement auprès de détaillants autorisés et de fournisseurs réputés.',
        },
        {
          question: 'Puis-je retourner ou échanger mes sneakers s\'ils ne me vont pas ?',
          answer:
            'Oui, nous avons une politique de retour sans tracas. Vous pouvez retourner ou échanger des sneakers non portés dans les 30 jours suivant la réception de votre commande.',
        },
        {
          question: 'Les couleurs des sneakers sont-elles fidèles aux photos ?',
          answer:
            'Nous nous efforçons de fournir une représentation précise des couleurs, mais de légères variations peuvent se produire en raison des réglages de l\'écran. Consultez les descriptions des produits pour plus de détails.',
        },
        {
          question: 'Réapprovisionnez-vous les sneakers en rupture de stock ?',
          answer:
            'Nous réapprovisionnons les styles populaires en fonction de la demande. Vous pouvez vous inscrire aux notifications pour être informé lorsque qu\'un produit spécifique est de nouveau en stock.',
        },
      ],
    },
    {
      category: 'Paiements',
      data: [
        {
          question: 'Quels modes de paiement acceptez-vous ?',
          answer:
            'Nous acceptons les principales cartes de crédit, PayPal et d\'autres méthodes de paiement sécurisées. Vous pouvez voir la liste complète lors du processus de paiement.',
        },
        {
          question: 'Comment puis-je appliquer un code de réduction à ma commande ?',
          answer:
            'Entrez votre code de réduction dans le champ prévu à cet effet lors du paiement. La réduction sera appliquée à votre total avant le paiement.',
        },
        {
          question: 'Puis-je modifier ou annuler ma commande après paiement ?',
          answer:
            'Une fois une commande passée, elle ne peut pas être modifiée ou annulée. Veuillez vérifier attentivement votre commande avant de finaliser l\'achat.',
        },
        {
          question: 'Mes informations de paiement sont-elles sécurisées ?',
          answer:
            'Oui, nous utilisons le cryptage standard de l\'industrie pour sécuriser vos informations de paiement. Vos données sont protégées et ne sont jamais stockées sur nos serveurs.',
        },
        {
          question: 'Proposez-vous des cartes-cadeaux ?',
          answer:
            'Oui, nous proposons des cartes-cadeaux de diverses valeurs. Elles sont parfaites pour les amateurs de sneakers !',
        },
      ],
    },
    {
      category: 'Retours',
      data: [
        {
          question: 'Comment initier un retour ou un échange ?',
          answer:
            'Visitez la page "Retours & Échanges" sur notre site web, suivez les instructions et soumettez une demande. Notre équipe vous guidera tout au long du processus.',
        },
        {
          question: 'Quelle est votre politique de retour pour les produits défectueux ?',
          answer:
            'Si vous recevez un produit défectueux, veuillez contacter notre service client dans les 7 jours suivant la réception de la commande. Nous organiserons un remplacement ou un remboursement.',
        },
        {
          question: 'Y a-t-il des frais de restockage pour les retours ?',
          answer:
            'Nous ne facturons pas de frais de restockage pour les retours. Cependant, veuillez consulter notre politique de retour pour les détails spécifiques.',
        },
        {
          question: 'Combien de temps faut-il pour traiter un remboursement ?',
          answer:
            'Les remboursements sont généralement traités dans les 5 à 7 jours ouvrables après réception et vérification des articles retournés.',
        },
        {
          question: 'Puis-je retourner des sneakers si je les ai portés ?',
          answer:
            'Nous acceptons uniquement les retours de sneakers non portés. Veuillez les essayer dans un environnement propre et intérieur pour vous assurer qu\'ils sont à la bonne taille avant de les porter à l\'extérieur.',
        },
      ],
    },
    {
      category: 'Vendeurs',
      data: [
        {
          question: 'Comment puis-je devenir vendeur sur Bymap ?',
          answer:
            'Pour devenir vendeur sur Bymap, visitez la page "Devenir Vendeur" sur notre site web et remplissez le formulaire de candidature. Notre équipe examinera votre demande et vous contactera avec les prochaines étapes.',
        },
        {
          question: 'Quels sont les critères pour devenir vendeur sur Bymap ?',
          answer:
            'Nous recherchons des vendeurs avec des produits authentiques et de haute qualité. Vous devez également être capable de fournir un excellent service client et de respecter nos politiques de vente.',
        },
        {
          question: 'Quels sont les frais pour vendre sur Bymap ?',
          answer:
            'Les frais pour vendre sur Bymap varient en fonction de la catégorie de produit et du volume de ventes. Consultez notre page "Frais de Vente" pour plus de détails.',
        },
        {
          question: 'Comment puis-je gérer mes commandes en tant que vendeur ?',
          answer:
            'En tant que vendeur, vous pouvez gérer vos commandes via votre tableau de bord vendeur. Vous y trouverez des outils pour suivre les commandes, gérer l\'expédition et communiquer avec les clients.',
        },
        {
          question: 'Quels sont les avantages de vendre sur Bymap ?',
          answer:
            'Vendre sur Bymap vous donne accès à une large audience de passionnés de sneakers et de mode. Vous bénéficiez également de notre infrastructure de paiement sécurisée et de notre support client dédié.',
        },
      ],
    },
  ],
};


const demoBlogData = {
  sectionOne: {
    title: 'Quels produits de nettoyage sont sûrs pour les différents matériaux de sneakers ?',
    paragraph1:
      'Il est crucial de choisir les bons produits de nettoyage pour éviter d’endommager vos sneakers. Les matériaux comme le cuir, le daim et le tissu nécessitent des produits spécifiques pour maintenir leur qualité.',
    points: [
      'Le cuir nécessite des nettoyants doux et non abrasifs pour préserver son éclat.',
      'Le daim doit être nettoyé avec des brosses spéciales et des nettoyants conçus pour les matériaux délicats.',
      'Les tissus peuvent souvent être nettoyés avec des solutions de savon doux et de l’eau.',
      'Évitez les nettoyants contenant de l’alcool ou des produits chimiques agressifs qui peuvent détériorer les matériaux.',
    ],
    paragraph2:
      'Utiliser des produits adaptés garantit non seulement la longévité de vos sneakers mais aussi leur apparence impeccable. Prenez le temps de bien choisir et d’appliquer ces produits pour un résultat optimal.',
  },
  sectionTwo: {
    title: 'Pouvez-vous fournir un guide étape par étape pour nettoyer les sneakers ?',
    description:
      'Pour nettoyer vos sneakers efficacement, il est important de suivre un processus en plusieurs étapes. Voici un guide simple pour vous aider à maintenir vos chaussures en parfait état.',
    midImage:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  sectionThree: {
    title: 'Comment prévenir et enlever les taches de mes sneakers ?',
    description:
      'Les taches peuvent ruiner l’apparence de vos sneakers. Utilisez des protecteurs de tissu pour prévenir les taches et des nettoyants spécialisés pour les éliminer efficacement.',
  },
  sectionFour: {
    title: 'Quelles sont les meilleures pratiques pour sécher les sneakers sans les endommager ?',
    description:
      'Sécher vos sneakers correctement est crucial pour éviter les déformations et les dégâts. Voici quelques conseils pour sécher vos chaussures sans les endommager.',
    points: [
      'Retirez les semelles et lacets avant de sécher vos sneakers.',
      'Évitez de les exposer directement à la chaleur intense comme les radiateurs.',
      'Utilisez des serviettes en papier ou du papier journal pour absorber l’humidité à l’intérieur des chaussures.',
      'Laissez-les sécher à l’air libre dans un endroit bien ventilé.',
    ],
  },
  quote:
    '“Prenez soin de vos sneakers comme de véritables trésors, ils vous le rendront en restant impeccables plus longtemps.”',
  sectionFive: [
    {
      title: 'Comment dois-je stocker mes sneakers pour maintenir leur qualité ?',
      description:
        'Stocker vos sneakers correctement prolonge leur durée de vie. Utilisez des boîtes de rangement et des inserts pour maintenir leur forme.',
    },
    {
      title:
        'Quels soins particuliers doivent être pris pour prolonger la durée de vie des sneakers ?',
      description:
        'Un entretien régulier et adapté est essentiel pour garder vos sneakers en bon état. Nettoyez-les après chaque utilisation et protégez-les contre les éléments extérieurs.',
    },
  ],
};

export const blogs = Array.from({ length: 30 }, (_, i) => ({
  title: `Blog ${i + 1} - L'évolution de la culture sneaker : Une perspective historique`,
  brief:
    'Découvrez comment la culture sneaker a évolué au fil des années et les moments clés qui ont marqué cette tendance.',
  date: `Octobre ${i % 31 + 1}, 2022`,
  coverImage:
    'https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  blogData: demoBlogData,
  tag: 'Style',
  slug: `l-evolution-de-la-culture-sneaker-une-perspective-historique-${i + 1}`,
}));

export const descriptionRapport = `
1. Introduction
La phase initiale de la création de ma plateforme comprend une étude préalable. Tout d’abord, nous commençons par la présentation du projet. Ensuite, nous passons à la définition des objectifs à atteindre, ainsi que le champ d’étude.

2. Objectif
Dans un contexte où la digitalisation du commerce local devient essentielle face aux contraintes telles que la concurrence en ligne et les changements dans les habitudes d'achat, la plateforme Bymap offre une réponse novatrice.

Le secteur du commerce local est confronté à des défis tels que la visibilité limitée des petits commerces, la nécessité de s'adapter aux préférences des consommateurs modernes, et le besoin de renforcer les liens au sein de la communauté. Bymap se positionne comme une solution complémentaire, offrant une vitrine virtuelle aux commerces locaux pour accroître leur visibilité et dynamiser leurs activités.

Le concept de Bymap repose sur une approche innovante, offrant une plus grande flexibilité aux utilisateurs. Ils peuvent désormais explorer et acheter des produits locaux à tout moment, à leur propre rythme et selon leurs disponibilités.

En favorisant le commerce local à travers une plateforme digitale, Bymap aspire à renforcer les liens au sein de la communauté, à encourager l'achat local et à offrir une alternative convaincante aux modèles de commerce traditionnels. Le projet vise à transformer la manière dont les consommateurs interagissent avec les commerces locaux, créant ainsi un écosystème durable et dynamique.

L'objectif principal de la plateforme Bymap est de créer un écosystème numérique qui répond aux besoins des commerçants locaux et des consommateurs de manière intégrée. Cette plateforme ambitionne :
• Promouvoir le Commerce Local : Favoriser une vitrine numérique pour les commerces locaux afin d'accroître leur visibilité et d'encourager l'achat local.
• Simplicité d'Utilisation : Garantir une interface intuitive, légère et compatible avec différents navigateurs, offrant une expérience utilisateur fluide tant pour les commerçants que pour les consommateurs.
• Flexibilité pour les Commerçants : Permettre aux commerçants de planifier, gérer et promouvoir leurs offres de manière flexible à travers une interface ergonomique.
• Accès Facilité aux Ressources : Offrir aux utilisateurs un accès facile aux informations, aux promotions, et aux services des commerces locaux partenaires.
• Expérience Personnalisée : Créer un espace personnalisé pour les utilisateurs, où ils peuvent explorer, comparer et acheter des produits locaux de manière adaptée à leurs préférences.
• Renforcer la Communauté Locale : Encourager le partage, la communication et la collaboration entre les commerces locaux et les consommateurs, favorisant ainsi une communauté dynamique.
`;

export default blogs;

export const productsCollection = {
  heading: 'Shoes Collection',
  description:
    'Lorem ipsum dolor sit amet consectetur adipiscing elit facilisi pellentesque cursus eget morbi sagittis sagittis.',
};
