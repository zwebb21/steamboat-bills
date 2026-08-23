import { Helmet } from "react-helmet-async";

const SITE_NAME = "Steamboat Bill's";
const SITE_URL = "https://www.steamboatbills.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

/**
 * Per-page SEO tags (title, description, canonical, Open Graph/Twitter).
 * Renders into <head> via react-helmet-async so each route gets unique
 * metadata even though this is a client-rendered SPA.
 */
function Seo({ title, description, path = "/", image = DEFAULT_IMAGE }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

export default Seo;
