import {
  Boxes,
  ClipboardCheck,
  Handshake,
  MessageSquareText,
  PackageCheck,
  ShieldCheck,
} from "lucide-react";

export const company = {
  name: "BWEL LIMITED",
  tagline: "Be Rest Assured",
  registration: "RC 1635798",
  sector: "Trading",
  commenced: "25 November 2019",
  location: "Lagos, Nigeria",
  phoneDisplay: "0806 401 4256",
  phoneHref: "+2348064014256",
  address: "9 Aga Street, Iju-Ishaga, Lagos",
  shopUrl: "https://shop.bwelltd.com",
  mapUrl: "https://www.google.com/maps?q=9+Aga+Street,+Iju-Ishaga,+Lagos,+Nigeria&output=embed",
  ebongest: {
    agentId: "395c6d55-bc1e-4aa8-8289-9a621484b9c1",
    agentName: "Goodspeed",
    businessName: "BWEL LIMITED",
    // Vapi public (web) key — enables the on-page voice call button.
    vapiPublicKey: "5e5b6851-f22f-43f2-8c71-c10a5fa79751",
  },
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "How we work", href: "#approach" },
  { label: "Company", href: "#company" },
  { label: "Contact", href: "#contact" },
];

export const pillars = [
  {
    title: "Clear Standards",
    description: "Every detail is checked, understood and handled with care from the outset.",
    icon: ClipboardCheck,
  },
  {
    title: "Dependable Supply",
    description:
      "A steady trading partner focused on consistency, quality and responsible delivery.",
    icon: PackageCheck,
  },
  {
    title: "People First",
    description: "Business built around respect, practical support and relationships that last.",
    icon: Handshake,
  },
];

export const workSteps = [
  {
    number: "01",
    title: "Present & Organised",
    description:
      "We bring structure to every engagement, keeping requirements and next steps clear.",
    icon: Boxes,
  },
  {
    number: "02",
    title: "Quality Minded",
    description:
      "We pay close attention to the products, partners and processes behind every order.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Straightforward Communication",
    description:
      "Direct updates and honest answers keep business moving without unnecessary friction.",
    icon: MessageSquareText,
  },
];
