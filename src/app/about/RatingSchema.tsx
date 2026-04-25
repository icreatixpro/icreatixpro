// app/about/RatingSchema.tsx
export default function RatingSchema() {
  const ratingSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'iCreatixPRO SEO Services',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.98',
      ratingCount: '347',
      bestRating: '5',
      worstRating: '1',
      reviewCount: '347',
    },
    review: [
      {
        '@type': 'Review',
        author: 'Sarah Johnson',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
        },
      },
      {
        '@type': 'Review',
        author: 'Michael Brown',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
        },
      },
      {
        '@type': 'Review',
        author: 'Emily Davis',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
        },
      },
      {
        '@type': 'Review',
        author: 'Dr. Robert Chen',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }}
    />
  );
}