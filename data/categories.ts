import { Category } from "@/types/menu";

export const categories: Record<string, Category> = {
  antipasti: {
    id: "cat-01",
    title: "Antipasti: L'inizio del viaggio",
    illustration: "/illustrations/antipasti.svg",
    desc: `I nostri antipasti sono le colonne portanti della tradizione: portiamo in tavola l'autenticità della cucina balcanica, fatta per essere 
condivisa. Spezzate e immergete il nostro pane caldo nei sapori più veri, spalmate le nostre creme e assaggiate ogni strato della nostra 
storia. Godetevi questo inizio del viaggio.`,
  },
  griglia: {
    id: "gri-01",
    title: "La Griglia",
    illustration: "/illustrations/griglia.svg",
    desc: `l cuore del nostro viaggio: dove il fuoco incontra la tradizione per regalare carni succose, profumi intensi e il calore di
un’accoglienza che non finisce ma
La nostra carne 100% manzo, da due tagli selezionati macinati.`,
  },
  segreti: {
    id: "seg-01",
    title: "I Segreti del Villaggio",
    illustration: "/illustrations/segreti.svg",
    desc: `"Le radici del nostro sapore: le basi calde che profumano di casa e di tradizione.”
Trasforma la tua griglia in un'esperienza unica: lascia che la carne si unisca al calore di queste ricette
tipiche, preparate lentamente al forno proprio come facevano le nostre nonne. Tutte le basi vengono
servite nelle nostre terrecotte calde.`,
    sides: [
      { name: "Patatine fritte", price: 4.5 },
      { name: "Dippers", price: 5.0 },
      { name: "Verdure grigliate", price: 5.0 },
    ],
  },
  hamburger: {
    id: "hm-01",
    title: "I Nostri Hamburger",
    illustration: "/illustrations/hamburger.svg",
    desc: "Un viaggio tra i classici, con il tocco autentico della nostra cucina.",
  },
  pite: {
    id: "pite-01",
    title: "Il Pite (Il Cuore Della Nostra Tradizione)",
    illustration: "/illustrations/pite.svg",
    desc: `Più di una torta salata, è l'essenza stessa della nostra cucina.
Strati sovrapposti di pasta fillo, tirata a mano con pazienza infinita.`,
  },
  stufati: {
    id: "stf-01",
    illustration: "/illustrations/stufati.svg",
    title: "Stufati (I TESORI DELLA COTTURA LENTA)",
    desc: `Il tempo si ferma e il fuoco lento trasforma ingredienti semplici in capolavori di sapore. Piatti caldi e avvolgenti.`,
  },
  bambini: {
    id: "bmb-01",
    illustration: "/illustrations/bambini.svg",
    title: "Menu Bambini",
    extras: [
      { name: "Salsa Nadi", price: "1.9" },
      { name: "Salsa Ajvar", price: "1.9" },
    ],
  },
  salads: {
    id: "sld-01",
    illustration: "/illustrations/salads.svg",
    title: "LE NOSTE INSALATE: IL RESPIRO DELL'ORTO",
  },
  desserts: {
    id: "dsrt-01",
    title: "DOLCI: I TESORI DELLA DOLCEZZA",
    illustration: "/illustrations/desserts.svg",
    desc: `Per queste specialità abbiamo scelto l'eccellenza di Burek_Time, che le prepara artigianalmente per noi per garantirvi il
sapore più autentico.`,
  },

  draftBeer: {
    id: "dbeer-01",
    title: "LE NOSTRE BIRRE ALLA SPINA",
    illustration: "/illustrations/draftBeer.svg",
    desc: "Fresche, dissetanti e perfette per accompagnare i sapori decisi della nostra griglia.",
  },
  bottleBeer: {
    id: "bbeer-02",
    illustration: "/illustrations/bottleBeer.svg",
    title: "LE NOSTRE BIRRE IN BOTTIGLIA",
  },
  drinks: {
    id: "drk-01",
    illustration: "/illustrations/drinks.svg",
    title: "LE BIBITE",
  },
  aperitivi: {
    id: "appr-01",
    illustration: "/illustrations/aperitivi.svg",
    title: "APERITIVI & DRINK",
  },
  grappe: {
    id: "grpp-01",
    illustration: "/illustrations/grappe.svg",
    title: "GRAPPE & DISTILLATI",
  },
  caffe: {
    id: "cffe-01",
    illustration: "/illustrations/caffe.svg",
    title: "CAFFETTERIA",
  },
  vinoSDC: {
    id: "vsdc-01",
    title: "VINO SFUSO DELLA CASA",
    illustration: "/illustrations/vinoSDC.svg",
    desc: "Bianco o Rosso",
  },
  vinoRossi: {
    id: "vr-01",
    title: "I NOSTRI VINI ROSSI",
    illustration: "/illustrations/vinoRossi.svg",
  },
  vinoBianchi: {
    id: "vb-01",
    title: "I NOSTRI VINI BIANCHI",
    illustration: "/illustrations/vinoBianchi.svg",
  },
};
