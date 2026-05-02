export type NavKey = "home" | "music" | "writing" | "research";

export const siteNav: { key: NavKey; label: string; href: string }[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "music", label: "Music room", href: "/music" },
  { key: "writing", label: "Writing desk", href: "/writing" },
  { key: "research", label: "Research shelf", href: "/research" },
];

export const socialLinks = [
  {
    href: "https://github.com/algo0419",
    label: "GitHub",
  },
  {
    href: "https://rateyourmusic.com/~jHyung",
    label: "Rate Your Music",
  },
  {
    href: "https://blog.naver.com/algo7112",
    label: "Naver Blog",
  },
  {
    href: "https://www.instagram.com/whwns_gud/",
    label: "Instagram",
  },
  {
    href: "mailto:junhyungcho@kaist.ac.kr",
    label: "Email",
  },
];

export const homePanels = [
  {
    href: "/music",
    label: "Music shows and record shelf",
    image: "/portraits/portrait-stage.jpg",
    alt: "Junhyung Cho on stage",
    tone: "cream",
    body: "Live fragments, favorite albums, and a shelf that keeps getting rearranged.",
  },
  {
    href: "/writing",
    label: "Books, essays, and notes",
    image: "/collage/borges-ficciones.jpg",
    alt: "Ficciones book cover",
    tone: "pink",
    body: "Short pieces, book notes, strange sentences, and links back to the blog.",
  },
  {
    href: "/research",
    label: "Diamond photonics and BTO",
    image: "/collage/loncar-diamond-circuit.jpg",
    alt: "Diamond photonic circuit figure",
    tone: "cyan",
    body: "Figures, keywords, device sketches, and references from the lab notebook.",
  },
];

export const bulletinItems = [
  "Now playing: Off the Wall, Loveless, and Kind of Blue still refuse to leave the desk.",
  "Current lab shelf: diamond photonic crystals, BTO phase shifters, hybrid modulators.",
  "Reading pile: Borges, Calvino, Kafka, Camus, and notes that become essays later.",
  "Site rule: keep the images actual, the boxes loud, and the links obvious.",
];

export const portraitStrip = [
  {
    src: "/portraits/portrait-night.jpg",
    alt: "Portrait of Junhyung at night",
    label: "Night archive",
  },
  {
    src: "/portraits/portrait-city.jpg",
    alt: "Portrait in the city",
    label: "City square",
  },
  {
    src: "/portraits/portrait-archive-7.jpg",
    alt: "Archive portrait",
    label: "Photo fragment",
  },
];

export const musicRecords = [
  {
    artist: "Michael Jackson",
    title: "Off the Wall",
    year: "1979",
    image: "/collage/off-the-wall.jpg",
    href: "https://open.spotify.com/album/2ZytN2cY4Zjrr9ukb2rqTP",
    note: "A record that makes precision feel effortless.",
  },
  {
    artist: "My Bloody Valentine",
    title: "Loveless",
    year: "1991",
    image: "/collage/loveless.jpg",
    href: "https://open.spotify.com/album/3USQKOw0se5pBNEndu82Rb",
    note: "Density, blur, pressure, and melody welded together.",
  },
  {
    artist: "Miles Davis",
    title: "Kind of Blue",
    year: "1959",
    image: "/collage/kind-of-blue.jpg",
    href: "https://open.spotify.com/album/1weenld61qoidwYuZ1GESA",
    note: "Calm space that still feels newly arranged.",
  },
  {
    artist: "Kanye West",
    title: "Yeezus",
    year: "2013",
    image: "/collage/yeezus.jpg",
    href: "https://open.spotify.com/album/7D2NdGvBHIavgLhmcwhluK",
    note: "Abrasion as structure, rhythm as architecture.",
  },
  {
    artist: "Lamp",
    title: "For Lovers",
    year: "2004",
    image: "/collage/for-lovers.jpg",
    href: "https://open.spotify.com/album/0gwS2D9sukMLXNvleEnYr2",
    note: "Soft arrangements with sharp edges hidden inside.",
  },
  {
    artist: "Daft Punk",
    title: "Discovery",
    year: "2001",
    image: "/collage/discovery.jpg",
    href: "https://open.spotify.com/album/2noRn2Aes5aoNVsU6iWThc",
    note: "A bright machine that learned to sing.",
  },
];

export const writingNotes = [
  {
    year: "2026",
    kind: "Essay",
    title: "You See More by Knowing Less",
    image: "/collage/wittgenstein-investigations.jpg",
    href: "https://blog.naver.com/algo7112/224232537490",
    note: "Expertise opens a room and quietly closes a few windows.",
  },
  {
    year: "2026",
    kind: "Review",
    title: "Ficciones and the postmodern maze",
    image: "/collage/borges-ficciones.jpg",
    href: "https://blog.naver.com/algo7112/224151247766",
    note: "Borges as a small machine for mirrors, libraries, and doubt.",
  },
  {
    year: "2025",
    kind: "Essay",
    title: "One good joke after a long time",
    image: "/collage/calvino-winter.jpg",
    href: "https://blog.naver.com/algo7112/224070120051",
    note: "A note on writing, timing, intuition, and patience.",
  },
  {
    year: "2025",
    kind: "Language",
    title: "Morning, tomorrow, and borrowed time",
    image: "/collage/camus-sisyphus.jpg",
    href: "https://blog.naver.com/algo7112/223786938523",
    note: "A linguistic detour through words that carry daylight forward.",
  },
  {
    year: "2025",
    kind: "Fiction",
    title: "A sketch on art and obscenity",
    image: "/collage/kafka-trial.jpg",
    href: "https://blog.naver.com/algo7112/223722566599",
    note: "Museum talk, bad categories, and the trouble with interpretation.",
  },
];

export const researchFigures = [
  {
    title: "Diamond photonic circuit",
    image: "/collage/loncar-diamond-circuit.jpg",
    href: "https://opg.optica.org/optica/fulltext.cfm?uri=optica-7-2-144&id=426789",
    note: "A compact reference for how device geometry, coupling, and optical routing meet.",
  },
  {
    title: "Diamond structures",
    image: "/collage/diamond-structures.jpg",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7823554/",
    note: "Nanophotonic forms, fabrication constraints, and the charm of repeated holes.",
  },
  {
    title: "BTO phase map",
    image: "/collage/bto-phase.jpg",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8230192/",
    note: "Hybrid modulation as a negotiation between materials, fields, and loss.",
  },
  {
    title: "Fabrication figure",
    image: "/collage/fab-fig2.jpg",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7823554/",
    note: "Process images that explain more quickly than a paragraph can.",
  },
  {
    title: "Nature 2025 board",
    image: "/collage/nat25-fig1.jpg",
    href: "https://www.nature.com/",
    note: "A saved figure for keeping recent device ideas close at hand.",
  },
];
