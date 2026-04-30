import { Category } from "@/types/menu";
import { categories } from "./categories";
import { Size } from "@/types/menu";
import { label } from "framer-motion/client";

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

export const drinkItems: MenuItem[] = [
  //draft beer
  {
    id: "beer-01",
    name: "FORST PILLS",
    category: categories.draftBeer,
    size: {
      id: "sz-01",
      sizes: [
        { label: "0.2L", price: 3.5 },
        { label: "0.4L", price: 5 },
        { label: "CARAFFA (1.5L)", price: 17.0 },
      ],
    },
  },
  {
    id: "beer-02",
    name: "ICHNUSA NON FILTRATA",
    category: categories.draftBeer,
    size: {
      id: "sz-01",
      sizes: [
        { label: "0.2L", price: 4 },
        { label: "0.4L", price: 5.5 },
        { label: "CARAFFA (1.5L)", price: 19.5 },
      ],
    },
  },
  {
    id: "beer-02",
    name: "FORST SIXTUS (ROSSA)",
    category: categories.draftBeer,
    size: {
      id: "sz-01",
      sizes: [
        { label: "0.2L", price: 4 },
        { label: "0.4L", price: 5.5 },
        { label: "CARAFFA (1.5L)", price: 19.5 },
      ],
    },
  },
  {
    id: "beer-02",
    name: "KELLER BARCH (ARTIGIANALE)",
    category: categories.draftBeer,
    size: {
      id: "sz-01",
      sizes: [
        { label: "0.3L", price: 4.5 },
        { label: "0.5L", price: 6.5 },
        { label: "CARAFFA (1.5L)", price: 20.5 },
      ],
    },
  },
  {
    id: "beer-02",
    name: "CANKARA IPA (ARTIGIANALE)",
    category: categories.draftBeer,
    size: {
      id: "sz-01",
      sizes: [
        { label: "0.2L", price: 4.5 },
        { label: "0.4L", price: 6.5 },
        { label: "CARAFFA (1.5L)", price: 22.0 },
      ],
    },
  },
  // bottle beer

  {
    id: "bbeer-01",
    name: "BIRRA PEJA (KOSOVO)",
    price: 5.5,
    category: categories.bottleBeer,
  },

  {
    id: "bbeer-02",
    name: "BIRRA KORÇA (ALBANIA)",
    price: 5.5,
    category: categories.bottleBeer,
  },
  {
    id: "bbeer-03",
    name: "BIRRA KARLOVAČKO (CROAZIA)",
    price: 5.5,
    category: categories.bottleBeer,
  },
  {
    id: "bbeer-04",
    name: "BIRRA LAŠKO (SLOVENIA)",
    price: 5.5,
    category: categories.bottleBeer,
  },
  {
    id: "bbeer-05",
    name: "BIRRA HEINEKEN 0.0 (ANALCOLICA)",
    price: 4.5,
    category: categories.bottleBeer,
  },

  //normal drinks

  {
    id: "nd-01",
    name: "ACQUA SAN BENEDETO",
    size: {
      id: "sz-01",
      sizes: [{ label: "(NATURALE / GASATA) 0.75L", price: 3.5 }],
    },
    category: categories.drinks,
  },
  {
    id: "nd-04",
    name: "COCA COLA / COCA COLA ZERO",

    category: categories.drinks,
    size: {
      id: "sz-01",
      sizes: [{ label: "LATTINA", price: 3.5 }],
    },
  },
  {
    id: "nd-02",
    name: "THE SAN BENEDETO",

    size: {
      id: "sz-01",
      sizes: [{ label: "(LIMONA / PESCA) 0.75L", price: 3.5 }],
    },
    category: categories.drinks,
  },

  {
    id: "nd-04",
    name: "FANTA / SPRITE",

    category: categories.drinks,
    size: {
      id: "sz-01",
      sizes: [{ label: "LATTINA", price: 3.5 }],
    },
  },

  {
    id: "nd-07",
    name: "LEMONSODA",
    size: {
      id: "sz-01",
      sizes: [{ label: "LATTINA", price: 3.5 }],
    },
    category: categories.drinks,
  },
  {
    id: "nd-05",
    name: "TONICA SCHWEPPES",
    size: {
      id: "sz-01",
      sizes: [{ label: "LATTINA", price: 3.5 }],
    },
    category: categories.drinks,
  },
  {
    id: "nd-06",
    name: "SUCCHI",
    size: {
      id: "sz-01",
      sizes: [{ label: "MIRTILLO / PESCA / ALBICOCCA ", price: 3.5 }],
    },
    category: categories.drinks,
  },
  {
    id: "nd-08",
    name: "RED BULL",
    size: {
      id: "sz-01",
      sizes: [{ label: "LATTINA", price: 4.5 }],
    },
    category: categories.drinks,
  },

  // apperitivi

  {
    id: "apprt-01",
    name: "SPRITZ APEROL / SELECT",
    price: 4,
    category: categories.apperitivi,
  },
  {
    id: "apprt-02",
    name: "SPRITZ CAMPARI",
    price: 4,
    category: categories.apperitivi,
  },
  {
    id: "apprt-03",
    name: "PROSECCO D.O.C.G. (CALICE)",
    price: 4.5,
    category: categories.apperitivi,
  },
  {
    id: "apprt-04",
    name: "GINGER / CRODINO",
    price: 3.5,
    category: categories.apperitivi,
  },
  {
    id: "apprt-05",
    name: "GIN / VODKA PREMIUM",
    price: 10,
    category: categories.apperitivi,
  },
  {
    id: "apprt-06",
    name: "GIN / VODKA (BASE)",
    price: 8,
    category: categories.apperitivi,
  },
  {
    id: "apprt-07",
    name: "NEGRONI",
    price: 8,
    category: categories.apperitivi,
  },
  {
    id: "apprt-08",
    name: "AMERICANO",
    price: 8,
    category: categories.apperitivi,
  },
  {
    id: "apprt-09",
    name: "JACK DANIEL'S & COLA",
    price: 8,
    category: categories.apperitivi,
  },
  {
    id: "grpp-01",
    name: "GRAPPA CANDOLINI",
    price: 4,
    category: categories.grappe,
  },
  {
    id: "grpp-02",
    name: "GRAPPA 903 BARRIQUE",
    price: 5.5,
    category: categories.grappe,
  },
  {
    id: "grpp-03",
    name: "STRAVECCHIO BRANCA",
    price: 5.0,
    category: categories.grappe,
  },
  {
    id: "grpp-04",
    name: "VECCHIA ROMAGNA",
    price: 4,
    category: categories.grappe,
  },
  {
    id: "grpp-05",
    name: "WHISKY JACK DANIEL'S",
    price: 6,
    category: categories.grappe,
  },
  {
    id: "grpp-06",
    name: "AMARI",
    price: 4,
    category: categories.grappe,
  },
  {
    id: "cff-01",
    name: "CAFFÈ ESPRESSO",
    price: 1.5,
    category: categories.caffee,
  },
  {
    id: "cff-01",
    name: "CAFFÈ MACCHIATO",
    allergen: [7],
    price: 1.6,
    category: categories.caffee,
  },
  {
    id: "cff-03",
    name: "CAFFÈ DECAFFEINATO",
    price: 1.6,
    category: categories.caffee,
  },
  {
    id: "cff-04",
    name: "MACCHIATONE",
    price: 1.7,
    category: categories.caffee,
  },
  {
    id: "cff-05",
    name: "CAPPUCCINO",
    allergen: [7],
    price: 2.0,
    category: categories.caffee,
  },
  {
    id: "cff-06",
    name: "LATTE MACCHIATO",
    allergen: [7],
    price: 2.5,
    category: categories.caffee,
  },
  {
    id: "cff-07",
    name: "CAFFÈ ORZO",
    price: 2.9,
    category: categories.caffee,
  },
  {
    id: "cff-08",
    name: "GINSENG",
    price: 1.5,
    category: categories.caffee,
  },
  {
    id: "cff-09",
    name: "CAFFÈ CORRETTO",
    price: 2.5,
    category: categories.caffee,
  },
  {
    id: "cff-10",
    name: "CAFFÈ TURCO",
    price: 2.5,
    category: categories.caffee,
  },
  {
    id: "cff-11",
    name: "QAJ (TÈ BALCANICO)",
    price: 2.0,
    category: categories.caffee,
  },

  {
    id: "vsdc-01",
    name: "CALICE",
    price: 2.0,
    category: categories.vinoSDC,
  },
  {
    id: "vsdc-02",
    name: "CARAFFA 1/4L",
    price: 3.5,
    category: categories.vinoSDC,
  },
  {
    id: "vsdc-03",
    name: "CARAFFA 1/2L",
    price: 6.0,
    category: categories.vinoSDC,
  },
  {
    id: "vsdc-04",
    name: "CARAFFA 1L",
    price: 10.0,
    category: categories.vinoSDC,
  },

  {
    id: "vr-01",
    name: "SAGRANTINO (TUDERNUM)",
    price: 55.0,
    category: categories.vinoRossi,
  },
  {
    id: "vr-02",
    name: "CHIANTI RISERVA (UGGIANO)",
    price: 35.0,
    category: categories.vinoRossi,
  },
  {
    id: "vr-03",
    name: "VALPOLICELLA (NICOLIS)",

    category: categories.vinoRossi,
    size: {
      id: "sz-01",
      sizes: [
        { label: "BOTTIGLIA", price: 24 },
        { label: "CALICE", price: 6 },
      ],
    },
  },
  {
    id: "vr-04",
    name: "ROSA ROSSA (PASSIONE SENTIMENTO)",
    category: categories.vinoRossi,
    size: {
      id: "sz-02",
      sizes: [
        { label: "BOTTIGLIA", price: 22.0 },
        { label: "CALICE", price: 5.5 },
      ],
    },
  },
  {
    id: "vr-05",
    name: "LAMBRUSCO (CHIARLI)",
    category: categories.vinoRossi,
    size: {
      id: "sz-03",
      sizes: [
        { label: "BOTTIGLIA", price: 20.0 },
        { label: "CALICE", price: 5.0 },
      ],
    },
  },
  {
    id: "vr-06",
    name: "PINOT / MERLOT (SOTTOVOCE BIO)",
    category: categories.vinoRossi,
    size: {
      id: "sz-04",
      sizes: [
        { label: "BOTTIGLIA", price: 18.0 },
        { label: "CALICE", price: 4.5 },
      ],
    },
  },
  {
    id: "vr-07",
    name: "CABERNET (SALMASO)",
    category: categories.vinoRossi,
    size: {
      id: "sz-05",
      sizes: [
        { label: "BOTTIGLIA", price: 18.0 },
        { label: "CALICE", price: 4.5 },
      ],
    },
  },
  {
    id: "vb-01",
    name: "LUGANA ROVEGLIA (LOMBARDIA)",
    category: categories.vinoBianchi,
    size: {
      id: "sz-06",
      sizes: [
        { label: "BOTTIGLIA", price: 24.0 },
        { label: "CALICE", price: 6.0 },
      ],
    },
  },
  {
    id: "vb-02",
    name: "PASSIONESENTIMENTO (BIANCO VENETO)",
    category: categories.vinoBianchi,
    size: {
      id: "sz-07",
      sizes: [
        { label: "BOTTIGLIA", price: 20.0 },
        { label: "CALICE", price: 5.0 },
      ],
    },
  },
  {
    id: "vb-03",
    name: "SAUVIGNON SOTTOVOCE (VENETO BIO)",
    category: categories.vinoBianchi,
    size: {
      id: "sz-08",
      sizes: [
        { label: "BOTTIGLIA", price: 18.0 },
        { label: "CALICE", price: 4.5 },
      ],
    },
  },
];
