export const metadata = {
  title: "Dobranowice",
  description: "Dobranowice",
  //   image: "/favicon-brzozowa.ico",
};

export default function Head() {
  return (
    <head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      {/* <link rel="icon" href={metadata.image} /> */}
    </head>
  );
}
