import Layout from '../components/Layout';
import Reviews from '../components/Reviews';
import MapBlock from '../components/MapBlock';
import { AREAS, GMB_DESC, phone, email, siteUrl, gmbUrl } from '../components/utils';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": siteUrl,
  "name": "Oakdale Travel",
  "url": siteUrl,
  "logo": `${siteUrl}/logo.png`,
  "image": `${siteUrl}/og-image.webp`,
  "description": GMB_DESC,
  "telephone": phone,
  "email": email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Cambrian Business Park",
    "addressLocality": "Bolton",
    "postalCode": "BL3 6JF",
    "addressCountry": "GB"
  },
  "hasMap": gmbUrl,
  "sameAs": [gmbUrl],
  "areaServed": AREAS,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "6"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Adnan A" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "Brilliant experience. Minibus was clean, comfortable, and driver was on time and friendly."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Lee Male" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "Good value, good service. Will be booking again."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Ibrahim Dhalech" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "Fantastic communication, professionalism 10/10."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Ayesha Athar" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "Always punctual, very helpful with luggage, and friendly drivers."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Fatima A" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "On time, very helpful with luggage, made the journey stress-free."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Zayed Amla" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "Great service! Always on time, reliable and friendly drivers."
    }
  ]
};

