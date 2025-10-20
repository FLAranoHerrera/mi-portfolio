import { Helmet } from 'react-helmet-async';
import { SEO_CONFIG } from '@/config/seo';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = SEO_CONFIG.siteName,
  description = SEO_CONFIG.siteDescription,
  image = SEO_CONFIG.openGraph.image,
  url = SEO_CONFIG.siteUrl,
  type = 'website'
}) => {
  const fullTitle = title === SEO_CONFIG.siteName ? title : `${title} | ${SEO_CONFIG.siteName}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={SEO_CONFIG.keywords.join(', ')} />
      <meta name="author" content={SEO_CONFIG.author} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SEO_CONFIG.openGraph.siteName} />
      <meta property="og:locale" content={SEO_CONFIG.openGraph.locale} />
      <meta property="og:image:width" content={SEO_CONFIG.openGraph.imageWidth.toString()} />
      <meta property="og:image:height" content={SEO_CONFIG.openGraph.imageHeight.toString()} />
      <meta property="og:image:alt" content={SEO_CONFIG.openGraph.imageAlt} />

      {/* Twitter */}
      <meta name="twitter:card" content={SEO_CONFIG.twitter.card} />
      <meta name="twitter:site" content={SEO_CONFIG.twitter.site} />
      <meta name="twitter:creator" content={SEO_CONFIG.twitter.creator} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#1f2937" />
      <meta name="msapplication-TileColor" content="#1f2937" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Francisco Arano" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(SEO_CONFIG.structuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
