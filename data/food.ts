import { Category } from "@/types/menu";
import { categories } from "./categories";
import { Size } from "@/types/menu";

export type MenuItemBase = {
  id: string;
  name: string;
  allergen?: number[];
  description?: string;
  category: Category;
};

type PricedItem = MenuItemBase & { price: number; size?: never };
type SizedItem = MenuItemBase & { size: Size; price?: never };

export type MenuItem = PricedItem | SizedItem;

export const menuItems: MenuItem[] = [
  {
    id: "ant-01",
    name: "PEPERONI CON GJIZË",
    price: 7.5,
    allergen: [7],
    description:
      "Una base ricca di ricotta e panna amalgamate con formaggio tipico, sormontata da peperoni dolci arrostiti e spezie.",
    category: categories.antipasti,
  },
  {
    id: "ant-02",
    name: "PEPERONI ME KAJMAK",
    price: 8.0,
    allergen: [7],
    description:
      "Una base ricca di Philadelphia e panna amalgamata, sormontata da peperoni dolci arrostiti e spezie. La nostra crema leggermente sapida.",
    category: categories.antipasti,
  },
  {
    id: "ant-03",
    name: "FLIJA",
    price: 8.5,
    allergen: [1, 3, 7],
    description:
      "La regina della tavola. Decine di strati sottili di pastella, spennellati con crema yogurt e cotti lentamente fino a diventare dorati e soffici. Con yogurt bianco e un mix di sottaceti.",
    category: categories.antipasti,
  },
  {
    id: "ant-04",
    name: "TARATOR",
    price: 5.5,
    allergen: [7],
    description:
      "Condimento fresco e saporito, una zuppa fredda e densa a base di yogurt, arricchita da cetrioli, aglio e profumato aneto. Ideale per resettare il palato.",
    category: categories.antipasti,
  },
  {
    id: "ant-05",
    name: "BRUSCHETTA NADI",
    price: 7.5,
    allergen: [1, 7],
    description:
      "Croccantezza e contrasti: fette di pane tostato condite con peperoni dolci, l'intensità dell'Ajvar e la morbidezza del Gjizë.",
    category: categories.antipasti,
  },
  {
    id: "ant-06",
    name: "L'ORTO E IL PASCOLO (TURSHI)",
    price: 6.5,
    allergen: [7, 12],
    description:
      "Un incontro di contrasti: le nostre verdure sottaceti si accompagnano al carattere dei formaggi tipici.",
    category: categories.antipasti,
  },
  {
    id: "ant-07",
    name: "POGAQE (PANE TRADIZIONALE)",
    price: 7.0,
    allergen: [1, 7],
    description:
      "Pane tipico della tradizione, dalla consistenza soffice e crosta dorata. Portato in tavola ancora caldo, è pensato per essere spezzato e gustato insieme a Gjizë, Ajvar e Salsa Nadi.",
    category: categories.antipasti,
  },
  {
    id: "ant-08",
    name: "SOFRA NADI (ANTIPASTO PER DUE PERSONE)",
    price: 14.0,
    allergen: [1, 3, 7, 12],
    description:
      "La nostra accoglienza più autentica in un unico, grande assaggio: dalla Pite croccante alla Flija morbida e dorata, fino alla bruschetta fragrante e alla Pogaqe soffice e dorata. Una danza di consistenze accompagnata dal cuore della nostra dispensa: Ajvar, Gjizë, salsa Nadi, sott'aceti, yogurt e formaggi tipici. Tutto il calore della nostra terra in un solo racconto.",
    category: categories.antipasti,
  },

  {
    id: "gri-01",
    name: "NADI GRILL MIX (L'ESSENZA DEL VILLAGGIO)",
    price: 18.0,
    allergen: [1, 7, 9, 12],
    description:
      "Un viaggio completo tra i sapori della nostra terra: 5 succosi Qebapa artigianali, suxhuk, Vishlle e filetto di pollo. Il piatto della festa, servito con patate fritte e salsa Ajvar.",
    category: categories.griglia,
  },
  {
    id: "gri-02",
    name: "QEBAPA / CEVAPCICI (7 PEZZI - 210G)",
    price: 11.5,
    allergen: [1, 9],
    description:
      "Polpette cilindriche di carne di manzo, speziate secondo tradizione e lavorate a mano. Succose e dal profumo irresistibile, sono il cuore pulsante della nostra cucina. Servite con salsa Ajvar.",
    category: categories.griglia,
  },
  {
    id: "gri-03",
    name: "QEBAPA / CEVAPCICI (10 PEZZI - 300G)",
    price: 14.5,
    allergen: [1, 9],
    description:
      "Polpette cilindriche di carne di manzo, speziate secondo tradizione e lavorate a mano. Succose e dal profumo irresistibile, sono il cuore pulsante della nostra cucina. Servite con salsa Ajvar.",
    category: categories.griglia,
  },
  {
    id: "gri-04",
    name: "SALSICCIA DI CASA (SUXHUK - IL SAPORE ANTICO)",
    price: 13.5,
    allergen: [9, 12],
    description:
      "Salsiccia artigianale di manzo, sapientemente speziata e leggermente affumicata. Accompagnata da insalata di Cappuccio e salsa Ajvar.",
    category: categories.griglia,
  },
  {
    id: "gri-05",
    name: "MEZZALUNA (PLJESKAVICA SHARRI)",
    price: 15.0,
    allergen: [1, 7, 9],
    description:
      "Un ricco ripieno di mozzarella fusa, rifinita con una pioggia di formaggio grattugiato. Accompagnata da insalata di Cappuccio e salsa Ajvar.",
    category: categories.griglia,
  },
  {
    id: "gri-06",
    name: "PLJESKAVICA (IL CARATTERE DEI BALCANI)",
    price: 13.0,
    allergen: [1, 9],
    description:
      "Il grande classico: speziata con cura e grigliata fino a diventare una promessa di gusto. Accompagnata da insalata di Cappuccio e salsa Ajvar.",
    category: categories.griglia,
  },
  {
    id: "gri-07",
    name: "WURSTEL (VISHLLE)",
    price: 12.5,
    allergen: [9, 12],
    description:
      "Il tipico wurstel dei Balcani di manzo. Accompagnato da insalata di Cappuccio e salsa Ajvar.",
    category: categories.griglia,
  },
  {
    id: "gri-08",
    name: "SCAMONE DI MANZO",
    price: 19.5,
    allergen: [9],
    description:
      "Tagliata di scamone, cotta alla griglia per preservarne i succhi e la morbidezza. Servita con patate fritte e salsa Ajvar.",
    category: categories.griglia,
  },
  {
    id: "gri-09",
    name: "TAGLIATA DI POLLO",
    price: 13.5,
    allergen: [9],
    description:
      "Tenero petto di pollo alla griglia, servita con patatine fritte e salsa Ajvar.",
    category: categories.griglia,
  },
  {
    id: "gri-10",
    name: "TEGAMINO NADI",
    price: 14.5,
    allergen: [7, 9],
    description:
      "Straccetti di pollo grigliati con salsa di Gjizë, ultimati al forno. Un piatto caldo e avvolgente, accompagnato da patatine fritte e salsa Ajvar.",
    category: categories.griglia,
  },
  {
    id: "gri-11",
    name: "POLLETTO",
    price: 15.5,
    allergen: [7, 9],
    description:
      "Marinato e cotto lentamente sulla griglia. Accompagnato da patate fritte. (Mezza porzione 9,90€)",
    category: categories.griglia,
  },
  {
    id: "gri-12",
    name: "SOFRA NADI GRILL (PER DUE PERSONE)",
    price: 45.0,
    allergen: [1, 7, 9, 12],
    description:
      "La nostra selezione più ricca: 8 Qebapa artigianali, 2 Suxhuk, 2 Vishlle, 2 filetti di pollo, Teglia Nadi e 2 tagli di scamone. Un banchetto servito con verdure grigliate e Dippers, Gjizë, Ajvar e salsa Nadi.",
    category: categories.griglia,
  },

  {
    id: "seg-01",
    name: "LA DOLCEZZA DEI POMODORI (TAVË ME DOMATE)",
    price: 4.5,
    allergen: [9],
    description:
      "Pomodori, peperoni e riso stufati al forno con cipolla, paprika dolce e aromi. Una base ricca e accogliente che custodisce i sapori di una volta.",
    category: categories.segreti,
  },
  {
    id: "seg-02",
    name: "LA GENUINITÀ DELLE PATATE (TAVË ME PATATE)",
    price: 4.5,
    allergen: [3, 9],
    description:
      "Patate e riso uniti in una cottura lenta al forno, profumati da cipolla e aromi di casa. Un piatto genuino e ricco di sapore.",
    category: categories.segreti,
  },
  {
    id: "seg-03",
    name: "LA CREMOSITÀ DEL KAJMAK",
    price: 4.5,
    allergen: [7, 9],
    description:
      "La nostra crema di panna leggermente sapida, insaporita con il nostro mix di spezie.",
    category: categories.segreti,
  },
  {
    id: "seg-04",
    name: "L'INTENSITÀ DEL GJIZË",
    price: 4.5,
    allergen: [7, 9],
    description: "Ricotta e panna amalgamate con formaggio tipico e spezie.",
    category: categories.segreti,
  },

  {
    id: "bur-01",
    name: "NADI BURGER",
    price: 15.0,
    allergen: [1, 3, 7],
    description:
      "Doppio hamburger, cheddar, peperoni e cipolla grigliata, uovo, pomodoro, insalata. Servito con patate Dippers e salsa Nadi.",
    category: categories.hamburger,
  },
  {
    id: "bur-02",
    name: "CLASSIC BURGER",
    price: 14.5,
    allergen: [1, 7],
    description:
      "Hamburger, cheddar fuso, insalata, pomodoro. Servito con patate fritte e salsa Nadi.",
    category: categories.hamburger,
  },
  {
    id: "bur-03",
    name: "LIPINJA BURGER",
    price: 13.5,
    allergen: [1, 7],
    description:
      "Pane dei Balcani, hamburger, cavolo di Cappuccio, pomodoro, cetriolo, cipolla, salsa Nadi. Servito con patate fritte.",
    category: categories.hamburger,
  },
  {
    id: "bur-04",
    name: "PULBURGER",
    price: 13.0,
    allergen: [1, 7],
    description:
      "Petto di pollo, cheddar, insalata, pomodoro, salsa maionese, salsa Nadi. Servito con patate fritte.",
    category: categories.hamburger,
  },
  {
    id: "bur-05",
    name: "CHICKEN BURGER",
    price: 12.5,
    allergen: [1, 3, 7],
    description:
      "Cotoletta di pollo, cheddar fuso, insalata, pomodoro, salsa Nadi. Servito con patate fritte.",
    category: categories.hamburger,
  },

  {
    id: "pit-01",
    name: "TRADIZIONE DORATA (GJIZË)",
    price: 11.5,
    allergen: [1, 7],
    description:
      "Un classico intramontabile: farcitura ricca a base di Gjizë in strati di pasta fillo tirata a mano con pazienza infinita.",
    category: categories.pite,
  },
  {
    id: "pit-02",
    name: "PITE AGLI SPINACI",
    price: 11.9,
    allergen: [1, 7],
    description:
      "Spinaci freschi saltati con cipolla dorata e un cuore cremoso di Gjizë.",
    category: categories.pite,
  },
  {
    id: "pit-03",
    name: "SAPORE ROBUSTO (MISH)",
    price: 13.5,
    allergen: [1, 9],
    description:
      "Per gli amanti della carne: manzo macinato, cotto lentamente con cipolla e una miscela di spezie.",
    category: categories.pite,
  },
  {
    id: "pit-04",
    name: "VILLAGGIO (PORRI)",
    price: 11.9,
    allergen: [1, 7],
    description:
      "La dolcezza dei porri freschi stufati incontra la sapidità della Gjizë e della cipolla soffritta. Una combinazione rustica e avvolgente.",
    category: categories.pite,
  },

  {
    id: "stu-01",
    name: "PASUL (L'ABBRACCIO DELLA TRADIZIONE)",
    price: 13.0,
    allergen: [1, 9, 12],
    description:
      "Lo stufato della tradizione familiare. Fagioli bianchi e carne affumicata artigianale cotti a fuoco lento. Un piatto genuino, dal sapore morbido.",
    category: categories.stufati,
  },
  {
    id: "stu-02",
    name: "GULLASH (L'ANIMA SPEZIATA)",
    price: 12.5,
    allergen: [1, 9],
    description:
      "Carne di manzo stufata a fuoco lento tra spezie e aromi intensi.",
    category: categories.stufati,
  },

  {
    id: "kid-01",
    name: "MINI NADI (4 QEBAPA)",
    price: 7.0,
    allergen: [1, 9],
    description:
      "Quattro piccoli cevapcici grigliati, serviti con patatine fritte.",
    category: categories.bambini,
  },
  {
    id: "kid-02",
    name: "MINI NUGGETS (5 PEZZI)",
    price: 6.5,
    allergen: [1, 3, 9],
    description:
      "Cinque croccanti nuggets di pollo serviti con patatine fritte.",
    category: categories.bambini,
  },
  {
    id: "kid-03",
    name: "MINI HAMBURGER",
    price: 6.5,
    allergen: [1, 7, 9],
    description: "Hamburger di manzo, formaggio fuso e patatine fritte.",
    category: categories.bambini,
  },
  {
    id: "kid-04",
    name: "MINI ITALIAN CHICKEN",
    price: 6.5,
    allergen: [1, 3, 7, 9],
    description:
      "Panino con cotoletta di pollo impanata, pomodoro, lattuga e maionese, accompagnato da patatine fritte.",
    category: categories.bambini,
  },
  {
    id: "kid-05",
    name: "MINI WÜRSTEL",
    price: 6.5,
    allergen: [9],
    description: "Wurstel di pollo grigliato servito con patatine fritte.",
    category: categories.bambini,
  },

  {
    id: "sld-01",
    name: "INSALATA RUSTICA",
    description:
      "Una base ricca di pomodoro, cetriolo, lattuga, cipolla, peperoni e mais, completata da cubetti di formaggio saporito.",
    allergen: [7, 9],
    category: categories.salads,
    size: {
      id: "sz-01",
      sizes: [
        { label: "SINGOLA", price: 5.5 },
        { label: "GRANDE", price: 11.5 },
      ],
    },
  },
  {
    id: "sld-02",
    name: "SHOPE",
    allergen: [7, 9],
    description:
      "La classica insalata balcanica con pomodori, cetrioli, e una generosa pioggia di formaggio tipico grattugiato.",
    category: categories.salads,
    size: {
      id: "sz-02",
      sizes: [
        { label: "SINGOLA", price: 5.0 },
        { label: "GRANDE", price: 10.8 },
      ],
    },
  },
  {
    id: "sld-03",
    name: "CAVOLO CAPPUCCIO",
    allergen: [9, 12],
    description:
      "Cavolo bianco tagliato finemente, pomodori freschi e il condimento della tradizione con olio EVO e aceto.",
    category: categories.salads,
    size: {
      id: "sz-03",
      sizes: [
        { label: "SINGOLA", price: 5.0 },
        { label: "GRANDE", price: 10.5 },
      ],
    },
  },
  {
    id: "sld-04",
    name: "INSALATA COME A CASA",
    allergen: [9, 12],
    description:
      "Ortaggi freschi serviti al naturale, proprio come sulle tavole di una volta: pomodori, cetrioli, cipolla di Tropea, porro e peperoni. Servita senza condimento, con una ciotolina di sale.",
    category: categories.salads,
    size: {
      id: "sz-04",
      sizes: [
        { label: "SINGOLA", price: 5.0 },
        { label: "GRANDE", price: 11.5 },
      ],
    },
  },
  {
    id: "sld-05",
    name: "PETSALAT",
    price: 12.5,
    allergen: [3, 7, 9, 10],
    description:
      "Un'insalata mista completa con tenero petto di pollo grigliato e l'accompagnamento con la salsa French.",
    category: categories.salads,
  },

  {
    id: "dsrt-01",
    name: "BAKLAVA (L'ORO DEI SULTANI)",
    price: 6.0,
    allergen: [1, 3, 7, 8],
    description:
      "Sottili strati di pasta fillo artigianale, noci e miele. Un classico croccante e senza tempo.",
    category: categories.desserts,
  },
  {
    id: "dsrt-02",
    name: "TRILEQE (LA NUVOLA CREMOSA)",
    price: 5.0,
    allergen: [1, 3, 7, 8],
    description:
      "Soffice pan di spagna bagnato ai tre latti con un goloso strato di caramello. Una nuvola vellutata.",
    category: categories.desserts,
  },
  {
    id: "dsrt-03",
    name: "TORTA DELLA NONNA",
    price: 5.0,
    allergen: [1, 3, 7, 8],
    description:
      "Dolce semplice e genuino che profuma di casa. Il calore della tradizione in ogni morso.",
    category: categories.desserts,
  },
];
