export const metadata = {
  title: "Osiedle Dobranowice – Nowoczesne domy pod Krakowem i Wieliczką",
  description:
    "Nowoczesne osiedle domów jednorodzinnych w Dobranowicach, w sąsiedztwie Wieliczki i Krakowa. Komfort, prywatność, ogrzewanie podłogowe, pompa ciepła, ekologiczne technologie i szybki dojazd do miasta.",
  keywords: [
    "Dobranowice",
    "osiedle Dobranowice",
    "domy Dobranowice",
    "domy Wieliczka",
    "domy pod Krakowem",
    "nowoczesne domy jednorodzinne",
    "osiedle domów pod Krakowem",
    "dom z ogrodem Dobranowice",
    "dom w stanie deweloperskim",
    "dom energooszczędny Kraków",
  ],
  openGraph: {
    title: "Osiedle Dobranowice – Twój azyl spokoju blisko Krakowa",
    description:
      "Nowoczesne osiedle domów w spokojnej, zielonej okolicy Dobranowic. Komfortowe wnętrza, ogród, nowoczesne technologie, szybki dojazd do Krakowa i Wieliczki.",
    url: "https://master.d1fs79a1gyb0iu.amplifyapp.com/",
    siteName: "Osiedle Dobranowice",
    images: [
      {
        url: "/dron_nowy2.webp",
        width: 1200,
        height: 630,
        alt: "Osiedle Dobranowice – nowoczesne domy w pobliżu Wieliczki",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Osiedle Dobranowice – Nowoczesne domy pod Krakowem",
    description:
      "Domy jednorodzinne w spokojnej okolicy Dobranowic. Wysoki standard, pompy ciepła, ogrzewanie podłogowe, szybki dojazd do Krakowa i Wieliczki.",
    images: ["/dron_nowy2.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Head() {
  return (
    <head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords.join(", ")} />
      <meta name="robots" content="index, follow" />
      {/* Open Graph */}
      <meta property="og:title" content={metadata.openGraph.title} />
      <meta
        property="og:description"
        content={metadata.openGraph.description}
      />
      <meta property="og:type" content={metadata.openGraph.type} />
      <meta property="og:url" content={metadata.openGraph.url} />
      <meta property="og:site_name" content={metadata.openGraph.siteName} />
      <meta property="og:image" content={metadata.openGraph.images[0].url} />
      {/* Twitter */}
      <meta name="twitter:card" content={metadata.twitter.card} />
      <meta name="twitter:title" content={metadata.twitter.title} />
      <meta name="twitter:description" content={metadata.twitter.description} />
      <meta name="twitter:image" content={metadata.twitter.images[0]} />
      {/* Canonical */}
      <link
        rel="canonical"
        href="https://master.d1fs79a1gyb0iu.amplifyapp.com/"
      />
      <link rel="icon" href="/favicon.ico" />
    </head>
  );
}
