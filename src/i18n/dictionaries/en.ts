/**
 * English dictionary. It defines the shape every other locale must implement:
 * `Dictionary` is derived from this object, so a missing key in another locale
 * is a type error rather than a blank space in production.
 */

export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: number;
  summary: string;
  description: string[];
  facts: { label: string; value: string }[];
  cover: { src: string; alt: string };
  detail: { src: string; alt: string };
};

export type Note = {
  id: string;
  title: string;
  date: string;
  body: string;
};

const projects: Project[] = [
  {
    slug: "casa-bruma",
    title: "Casa Bruma",
    category: "Residential",
    location: "Valencia, Spain",
    year: 2025,
    summary:
      "A 1930s apartment opened to the courtyard, with lime plaster, oak and a cobalt kitchen.",
    description: [
      "The brief was simple: more light, fewer rooms, and a kitchen at the centre of family life. We removed a service corridor, widened the opening to the courtyard and rebuilt the envelope with breathable lime plaster.",
      "Oak floors and a long bench run the length of the living room. The kitchen is the only place where colour takes over: hand-glazed cobalt tiles, a honed marble top and a single brass tap.",
      "Every material was chosen to age well. Nothing is precious; everything can be repaired.",
    ],
    facts: [
      { label: "Location", value: "Valencia, Spain" },
      { label: "Year", value: "2025" },
      { label: "Scope", value: "Full renovation · 118 m²" },
      { label: "Status", value: "Completed" },
    ],
    cover: {
      src: "/images/casa-bruma-kitchen.webp",
      alt: "Cobalt blue zellige tiles, oak cabinets and a marble counter in the Casa Bruma kitchen.",
    },
    detail: {
      src: "/images/casa-bruma-living.webp",
      alt: "Living room with an oak bench, a linen sofa and an opening to the cobalt kitchen.",
    },
  },
  {
    slug: "atelier-norte",
    title: "Atelier Norte",
    category: "Workspace",
    location: "Girona, Spain",
    year: 2024,
    summary:
      "A former print shop turned ceramics studio, organised around north light and a long concrete table.",
    description: [
      "The studio needed a table big enough for six people and light that would not lie about colour. We kept the shell, opened the north wall and let the concrete do the heavy work.",
      "Steel shelves hold the work in progress; a small kitchen and a shower sit behind a single oak partition. The plaster is left raw, with the marks of previous tenants still visible.",
      "It is a place to make a mess and clean it up at the end of the day.",
    ],
    facts: [
      { label: "Location", value: "Girona, Spain" },
      { label: "Year", value: "2024" },
      { label: "Scope", value: "Adaptive reuse · 96 m²" },
      { label: "Status", value: "Completed" },
    ],
    cover: {
      src: "/images/atelier-norte-studio.webp",
      alt: "Ceramics studio with a long concrete table, steel shelves and north light.",
    },
    detail: {
      src: "/images/atelier-norte-vessel.webp",
      alt: "An unglazed stoneware vessel on a concrete plinth in the Atelier Norte studio.",
    },
  },
  {
    slug: "hotel-almadrava",
    title: "Hotel Almadrava",
    category: "Hospitality",
    location: "Costa Brava, Spain",
    year: 2023,
    summary:
      "Twelve rooms above the sea, dressed in linen, travertine and woven esparto.",
    description: [
      "A family-run hotel from the 1960s, reopened with twelve rooms, a small lobby and a terrace that belongs to the sea. We removed the carpet, widened the openings and let the horizon do the decorating.",
      "Travertine, pale oak and linen repeat in every room; the hand-woven esparto rugs were made in a nearby village. The lobby arch was rebuilt with local stone.",
      "The result is quiet rather than minimal: a place that feels lived in from the first morning.",
    ],
    facts: [
      { label: "Location", value: "Costa Brava, Spain" },
      { label: "Year", value: "2023" },
      { label: "Scope", value: "Renovation · 12 rooms" },
      { label: "Status", value: "Completed" },
    ],
    cover: {
      src: "/images/hotel-almadrava-lobby.webp",
      alt: "A travertine arch, a stone bench and a woven rug in the Hotel Almadrava lobby.",
    },
    detail: {
      src: "/images/hotel-almadrava-room.webp",
      alt: "A low oak bed with white linen facing the sea through open terrace doors.",
    },
  },
  {
    slug: "bodega-fuente",
    title: "Bodega La Fuente",
    category: "Food & drink",
    location: "Logroño, Spain",
    year: 2022,
    summary:
      "A neighbourhood bodega with brick vaults, a marble counter and room to stand.",
    description: [
      "The old cellar had good bones and bad lighting. We cleaned the brick vaults, added a long marble counter and brought the wine into the room instead of hiding it behind glass.",
      "Dark oak stools, terracotta floors and a row of pendant lights make the room work at lunch and at midnight. The kitchen is small on purpose; the menu is short on purpose.",
      "Nothing was added that could not be repaired by a local tradesperson.",
    ],
    facts: [
      { label: "Location", value: "Logroño, Spain" },
      { label: "Year", value: "2022" },
      { label: "Scope", value: "Interior renovation · 140 m²" },
      { label: "Status", value: "Completed" },
    ],
    cover: {
      src: "/images/bodega-fuente-bar.webp",
      alt: "Brick vaults, a marble counter and oak stools in Bodega La Fuente.",
    },
    detail: {
      src: "/images/bodega-fuente-detail.webp",
      alt: "A bottle of red wine and two glasses on a marble counter.",
    },
  },
];

const notes: Note[] = [
  {
    id: "what-a-room-asks-for",
    title: "What a room asks for",
    date: "2026-09-12",
    body: "Before drawing, I ask three things: where the light comes from, what the room is for at eight in the morning and at ten at night, and which object you would rescue first. The answers usually describe the plan better than a mood board.",
  },
  {
    id: "materials-that-improve",
    title: "Materials that improve with use",
    date: "2026-05-04",
    body: "Lime plaster, oak, travertine and brass do not stay new. They take on the marks of the people who live with them. That is the point: choose materials whose second year is better than their first.",
  },
  {
    id: "small-projects",
    title: "Small projects, long conversations",
    date: "2025-11-18",
    body: "A single room can change how a whole house feels. Most of the work happens before the drawings: in the conversations about how you actually live, not how you think you should.",
  },
];

export const en = {
  meta: {
    title: "Mara Salas — Interior architecture in Valencia",
    description:
      "An independent interior architecture studio in Valencia, shaping calm, durable spaces for homes, hospitality and workspaces.",
  },
  common: {
    brand: "Mara Salas",
    discipline: "Interior architecture",
    skip: "Skip to content",
    close: "Close",
    menu: "Menu",
    language: "Language",
    backToTop: "Back to top",
  },
  nav: {
    label: "Main navigation",
    work: "Work",
    studio: "Studio",
    contact: "Contact",
    start: "Start a project",
  },
  hero: {
    eyebrow: "Interior architecture · Valencia",
    title: {
      lead: "Spaces that hold",
      accent: "the light.",
    },
    intro:
      "Mara Salas is an independent interior architecture studio in Valencia, shaping calm, durable rooms for homes, hospitality and workspaces.",
    workCta: "See selected work",
    contactCta: "Start a project",
    imageCaption: "Casa Bruma, Valencia — 2025",
    imageAlt:
      "Sunlit hallway with a stone arch, cobalt tiles in the courtyard and a linen bench.",
    facts: [
      { term: "Practice", detail: "Est. 2019" },
      { term: "Base", detail: "Valencia, Spain" },
      { term: "Availability", detail: "Spring 2027" },
    ],
  },
  work: {
    label: "01 — Selected work",
    title: "Rooms with a long life.",
    intro:
      "Four projects between 2022 and 2025: a home, a ceramics studio, a small hotel and a neighbourhood bodega.",
    view: "View project",
    dialog: {
      close: "Close project",
      details: "Project details",
      cta: "Start a similar project",
      next: "Next project",
    },
  },
  studio: {
    label: "02 — Studio",
    title: {
      lead: "A slower kind of",
      accent: "architecture.",
    },
    paragraphs: [
      "Mara Salas founded the studio in 2019 after eight years with architecture practices in Barcelona and Copenhagen. The work begins with listening: how a room is used, where the light falls, what should stay.",
      "The studio takes on a small number of projects each year, from a full renovation to a single room. It works with trusted builders, joiners and ceramicists, and stays involved until the last handle is fitted.",
      "Mara studied architecture at the Universitat Politècnica de València and at the Royal Danish Academy. She lives in Valencia with her family.",
    ],
    imageCaption: "Material samples on the studio table — oak, travertine, linen, cobalt tile.",
    servicesLabel: "What the studio does",
    services: [
      {
        title: "Interior architecture",
        text: "Spatial planning, light and the sequence of rooms.",
      },
      {
        title: "Renovation and restoration",
        text: "Old buildings brought back without erasing their history.",
      },
      {
        title: "Furniture and joinery",
        text: "Built-in pieces drawn for the room they live in.",
      },
      {
        title: "Material research",
        text: "Lime, stone, oak and tile, chosen to age well.",
      },
    ],
  },
  process: {
    label: "03 — Process",
    title: "Four steps, no surprises.",
    intro:
      "A small studio, a clear sequence, and no surprises about cost or timing.",
    steps: [
      {
        title: "Listen",
        text: "A first conversation, a visit, and a short brief that names what matters.",
      },
      {
        title: "Draw",
        text: "Plans, materials and a budget, tested against the light and the way you live.",
      },
      {
        title: "Make",
        text: "We work with builders and makers we know, and visit the site often.",
      },
      {
        title: "Hand over",
        text: "The last handle, the final clean, and a folder with everything you need.",
      },
    ],
  },
  testimonials: {
    label: "Kind words",
    items: [
      {
        quote:
          "Mara turned a dark apartment into a place we actually live in. She listened to how we wanted to feel, not just what we wanted to keep.",
        name: "Clara & Nil",
        role: "Casa Bruma",
      },
      {
        quote:
          "She has an unusual ability to make a room feel inevitable. The hotel is calmer and warmer than we imagined, and it still works two years later.",
        name: "Jordi Vidal",
        role: "Hotel Almadrava",
      },
    ],
  },
  notes: {
    label: "04 — Notes",
    title: "Notes from the studio",
    intro: "Short observations on rooms, materials and the work between drawings.",
  },
  contact: {
    label: "05 — Contact",
    title: {
      lead: "Let's make",
      accent: "room for it.",
    },
    intro:
      "Tell me about the place, the people who use it and what you would like to change. I answer every enquiry within two working days.",
    emailLabel: "Email",
    copy: "Copy email",
    copied: "Copied",
    availability: "Booking projects for spring 2027.",
    location: "Valencia, Spain",
    fees: "Fees are quoted in {currency}, excluding VAT and travel.",
  },
  footer: {
    rights: "© 2026 Mara Salas. All rights reserved.",
    tagline: "Independent interior architecture studio",
  },
  projects,
  notesItems: notes,
};

export type Dictionary = typeof en;
