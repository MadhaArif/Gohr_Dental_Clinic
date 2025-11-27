'use client';

import Script from 'next/script';

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Gohar Dental Clinic",
    "image": "https://gohardental.com/og-image.jpg",
    "description": "Premier dental and aesthetic services in Lahore. Open 24 hours with 4.6-star rating. Expert dental care including cosmetic dentistry, orthodontics, and more.",
    "@id": "https://gohardental.com",
    "url": "https://gohardental.com",
    "telephone": "+92-327-8008880",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sultan Pura Rd, opposite near masjid, Sultan Pura Sultanpura Misri Shah",
      "addressLocality": "Lahore",
      "postalCode": "54000",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 31.5204,
      "longitude": 74.3587
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.6",
      "reviewCount": "20",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://facebook.com/gohardentalaesthetics",
      "https://instagram.com/gohardentalaesthetics"
    ],
    "areaServed": {
      "@type": "City",
      "name": "Lahore"
    },
    "medicalSpecialty": [
      "Cosmetic Dentistry",
      "Dental Aesthetics",
      "Preventive Care",
      "Emergency Dental Care",
      "Restorative Dentistry",
      "Orthodontics"
    ]
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
