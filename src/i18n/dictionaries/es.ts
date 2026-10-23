import type { Dictionary, Note, Project } from "./en";

const projects: Project[] = [
  {
    slug: "casa-bruma",
    title: "Casa Bruma",
    category: "Vivienda",
    location: "Valencia, España",
    year: 2025,
    summary:
      "Un piso de los años treinta abierto al patio, con cal, roble y una cocina azul cobalto.",
    description: [
      "El encargo era sencillo: más luz, menos habitaciones y una cocina en el centro de la vida familiar. Eliminamos un pasillo de servicio, ampliamos la apertura al patio y rehicimos la envolvente con cal transpirable.",
      "El roble corre a lo largo del salón, con un banco continuo. La cocina es el único lugar donde el color toma el mando: azulejos cobalto vidriados a mano, mármol mate y un único grifo de latón.",
      "Cada material se eligió para envejecer bien. Nada es precioso; todo se puede reparar.",
    ],
    facts: [
      { label: "Ubicación", value: "Valencia, España" },
      { label: "Año", value: "2025" },
      { label: "Alcance", value: "Reforma integral · 118 m²" },
      { label: "Estado", value: "Terminado" },
    ],
    cover: {
      src: "/images/casa-bruma-kitchen.webp",
      alt: "Azulejos cobalto, armarios de roble y encimera de mármol en la cocina de Casa Bruma.",
    },
    detail: {
      src: "/images/casa-bruma-living.webp",
      alt: "Salón con banco de roble, sofá de lino y una apertura a la cocina cobalto.",
    },
  },
  {
    slug: "atelier-norte",
    title: "Atelier Norte",
    category: "Espacio de trabajo",
    location: "Girona, España",
    year: 2024,
    summary:
      "Una antigua imprenta convertida en taller de cerámica, organizada alrededor de la luz norte y una larga mesa de hormigón.",
    description: [
      "El taller necesitaba una mesa para seis personas y una luz que no mintiera sobre el color. Conservamos la envolvente, abrimos el muro norte y dejamos que el hormigón hiciera el trabajo pesado.",
      "Las estanterías de acero sostienen el trabajo en curso; una pequeña cocina y una ducha se esconden tras un único tabique de roble. El yeso queda crudo, con las marcas de los inquilinos anteriores todavía visibles.",
      "Es un lugar para mancharse y limpiarlo todo al final del día.",
    ],
    facts: [
      { label: "Ubicación", value: "Girona, España" },
      { label: "Año", value: "2024" },
      { label: "Alcance", value: "Reutilización · 96 m²" },
      { label: "Estado", value: "Terminado" },
    ],
    cover: {
      src: "/images/atelier-norte-studio.webp",
      alt: "Taller de cerámica con una larga mesa de hormigón, estanterías de acero y luz norte.",
    },
    detail: {
      src: "/images/atelier-norte-vessel.webp",
      alt: "Un jarrón de gres sin esmaltar sobre un pedestal de hormigón en Atelier Norte.",
    },
  },
  {
    slug: "hotel-almadrava",
    title: "Hotel Almadrava",
    category: "Hostelería",
    location: "Costa Brava, España",
    year: 2023,
    summary:
      "Doce habitaciones sobre el mar, vestidas de lino, travertino y esparto tejido.",
    description: [
      "Un hotel familiar de los años sesenta, reabierto con doce habitaciones, un pequeño vestíbulo y una terraza que pertenece al mar. Quitamos la moqueta, ampliamos las aperturas y dejamos que el horizonte decorara.",
      "El travertino, el roble claro y el lino se repiten en cada habitación; las alfombras de esparto se tejieron a mano en un pueblo cercano. El arco del vestíbulo se reconstruyó con piedra local.",
      "El resultado es silencioso más que minimalista: un lugar que se siente habitado desde la primera mañana.",
    ],
    facts: [
      { label: "Ubicación", value: "Costa Brava, España" },
      { label: "Año", value: "2023" },
      { label: "Alcance", value: "Reforma · 12 habitaciones" },
      { label: "Estado", value: "Terminado" },
    ],
    cover: {
      src: "/images/hotel-almadrava-lobby.webp",
      alt: "Un arco de travertino, un banco de piedra y una alfombra tejida en el vestíbulo del Hotel Almadrava.",
    },
    detail: {
      src: "/images/hotel-almadrava-room.webp",
      alt: "Una cama baja de roble con lino blanco frente al mar, a través de las puertas abiertas de la terraza.",
    },
  },
  {
    slug: "bodega-fuente",
    title: "Bodega La Fuente",
    category: "Gastronomía",
    location: "Logroño, España",
    year: 2022,
    summary:
      "Una bodega de barrio con bóvedas de ladrillo, una barra de mármol y espacio para estar de pie.",
    description: [
      "La vieja bodega tenía buenos huesos y mala luz. Limpiamos las bóvedas de ladrillo, añadimos una larga barra de mármol y llevamos el vino a la sala en lugar de esconderlo tras un cristal.",
      "Taburetes de roble oscuro, suelos de terracota y una fila de lámparas colgantes hacen que la sala funcione al mediodía y a medianoche. La cocina es pequeña a propósito; la carta es corta a propósito.",
      "No se añadió nada que no pudiera reparar un gremio del barrio.",
    ],
    facts: [
      { label: "Ubicación", value: "Logroño, España" },
      { label: "Año", value: "2022" },
      { label: "Alcance", value: "Reforma interior · 140 m²" },
      { label: "Estado", value: "Terminado" },
    ],
    cover: {
      src: "/images/bodega-fuente-bar.webp",
      alt: "Bóvedas de ladrillo, barra de mármol y taburetes de roble en Bodega La Fuente.",
    },
    detail: {
      src: "/images/bodega-fuente-detail.webp",
      alt: "Una botella de vino tinto y dos copas sobre una barra de mármol.",
    },
  },
];

const notes: Note[] = [
  {
    id: "what-a-room-asks-for",
    title: "Lo que pide una habitación",
    date: "2026-09-12",
    body: "Antes de dibujar pregunto tres cosas: de dónde viene la luz, para qué sirve la habitación a las ocho de la mañana y a las diez de la noche, y qué objeto salvarías primero. Las respuestas suelen describir la planta mejor que un mood board.",
  },
  {
    id: "materials-that-improve",
    title: "Materiales que mejoran con el uso",
    date: "2026-05-04",
    body: "La cal, el roble, el travertino y el latón no se quedan nuevos. Acumulan las marcas de quien vive con ellos. Esa es la idea: elegir materiales cuyo segundo año sea mejor que el primero.",
  },
  {
    id: "small-projects",
    title: "Proyectos pequeños, conversaciones largas",
    date: "2025-11-18",
    body: "Una sola habitación puede cambiar cómo se siente una casa entera. Casi todo el trabajo ocurre antes de los planos: en las conversaciones sobre cómo vives de verdad, no sobre cómo crees que deberías vivir.",
  },
];

export const es: Dictionary = {
  meta: {
    title: "Mara Salas — Arquitectura interior en Valencia",
    description:
      "Estudio independiente de arquitectura interior en Valencia. Espacios serenos y duraderos para viviendas, hoteles y lugares de trabajo.",
  },
  common: {
    brand: "Mara Salas",
    discipline: "Arquitectura interior",
    skip: "Saltar al contenido",
    close: "Cerrar",
    menu: "Menú",
    language: "Idioma",
    backToTop: "Volver arriba",
  },
  nav: {
    label: "Navegación principal",
    work: "Proyectos",
    studio: "Estudio",
    contact: "Contacto",
    start: "Cuéntame tu proyecto",
  },
  hero: {
    eyebrow: "Arquitectura interior · Valencia",
    title: {
      lead: "Espacios que guardan",
      accent: "la luz.",
    },
    intro:
      "Mara Salas es un estudio independiente de arquitectura interior en Valencia. Diseña espacios serenos y duraderos para viviendas, hoteles y lugares de trabajo.",
    workCta: "Ver proyectos",
    contactCta: "Cuéntame tu proyecto",
    imageCaption: "Casa Bruma, Valencia — 2025",
    imageAlt:
      "Pasillo iluminado con un arco de piedra, azulejos cobalto en el patio y un banco de lino.",
    facts: [
      { term: "Estudio", detail: "Desde 2019" },
      { term: "Base", detail: "Valencia, España" },
      { term: "Agenda", detail: "Primavera 2027" },
    ],
  },
  work: {
    label: "01 — Proyectos",
    title: "Espacios con una vida larga.",
    intro:
      "Cuatro proyectos entre 2022 y 2025: una vivienda, un taller de cerámica, un pequeño hotel y una bodega de barrio.",
    view: "Ver proyecto",
    dialog: {
      close: "Cerrar proyecto",
      details: "Datos del proyecto",
      cta: "Quiero algo así",
      next: "Siguiente proyecto",
    },
  },
  studio: {
    label: "02 — Estudio",
    title: {
      lead: "Una arquitectura",
      accent: "más lenta.",
    },
    paragraphs: [
      "Mara Salas fundó el estudio en 2019 después de ocho años en despachos de arquitectura de Barcelona y Copenhague. El trabajo empieza por escuchar: cómo se usa una habitación, dónde cae la luz, qué debe quedarse.",
      "El estudio asume un número reducido de proyectos al año, desde una reforma integral hasta una sola habitación. Trabaja con constructores, carpinteros y ceramistas de confianza, y sigue implicado hasta que se coloca el último tirador.",
      "Mara estudió arquitectura en la Universitat Politècnica de València y en la Royal Danish Academy. Vive en Valencia con su familia.",
    ],
    imageCaption:
      "Muestras de materiales sobre la mesa del estudio: roble, travertino, lino y azulejo cobalto.",
    servicesLabel: "Lo que hace el estudio",
    services: [
      {
        title: "Arquitectura interior",
        text: "Distribución, luz y la secuencia de las habitaciones.",
      },
      {
        title: "Reforma y restauración",
        text: "Edificios antiguos recuperados sin borrar su historia.",
      },
      {
        title: "Mobiliario y carpintería",
        text: "Piezas a medida dibujadas para el lugar que ocupan.",
      },
      {
        title: "Investigación de materiales",
        text: "Cal, piedra, roble y cerámica, elegidos para envejecer bien.",
      },
    ],
  },
  process: {
    label: "03 — Proceso",
    title: "Cuatro pasos, sin sorpresas.",
    intro:
      "Un estudio pequeño, una secuencia clara y ninguna sorpresa con el coste o los plazos.",
    steps: [
      {
        title: "Escuchar",
        text: "Una primera conversación, una visita y un brief breve que nombra lo importante.",
      },
      {
        title: "Dibujar",
        text: "Planos, materiales y presupuesto, contrastados con la luz y con tu forma de vivir.",
      },
      {
        title: "Hacer",
        text: "Trabajamos con constructores y artesanos de confianza y visitamos la obra a menudo.",
      },
      {
        title: "Entregar",
        text: "El último tirador, la limpieza final y una carpeta con todo lo que necesitas.",
      },
    ],
  },
  testimonials: {
    label: "Lo que dicen",
    items: [
      {
        quote:
          "Mara convirtió un piso oscuro en un lugar donde de verdad vivimos. Escuchó cómo queríamos sentirnos, no solo qué queríamos conservar.",
        name: "Clara y Nil",
        role: "Casa Bruma",
      },
      {
        quote:
          "Tiene una capacidad poco común para que una habitación parezca inevitable. El hotel es más sereno y cálido de lo que imaginamos, y dos años después sigue funcionando.",
        name: "Jordi Vidal",
        role: "Hotel Almadrava",
      },
    ],
  },
  notes: {
    label: "04 — Notas",
    title: "Notas desde el estudio",
    intro:
      "Observaciones breves sobre habitaciones, materiales y el trabajo entre planos.",
  },
  contact: {
    label: "05 — Contacto",
    title: {
      lead: "Hagamos sitio",
      accent: "para tu proyecto.",
    },
    intro:
      "Cuéntame el lugar, quiénes lo usan y qué te gustaría cambiar. Respondo a cada consulta en un plazo de dos días laborables.",
    emailLabel: "Correo",
    copy: "Copiar correo",
    copied: "Copiado",
    availability: "Agenda abierta para primavera de 2027.",
    location: "Valencia, España",
    fees: "Los honorarios se cotizan en {currency}, sin IVA ni desplazamientos.",
  },
  footer: {
    rights: "© 2026 Mara Salas. Todos los derechos reservados.",
    tagline: "Estudio independiente de arquitectura interior",
  },
  projects,
  notesItems: notes,
};
