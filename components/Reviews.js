export default function Reviews() {
  const reviews = [
    {
      author: "Adnan A", rating: 5, date: "2025-09-01",
      text: "Brilliant service. Clean minibus, friendly driver and smooth airport transfer. Highly recommend."
    },
    {
      author: "Lee Male", rating: 5, date: "2025-09-01",
      text: "Good value and good service — will be booking again next time we need a minibus."
    },
    {
      author: "Ibrahim Dhalech", rating: 5, date: "2025-09-02",
      text: "Fantastic communication and professionalism 10/10. Great guy too."
    },
    {
      author: "Ayesha Athar", rating: 5, date: "2025-09-02",
      text: "Used for airport runs a few times — always punctual and helpful with luggage. Friendly drivers."
    },
    {
      author: "Fatima A", rating: 5, date: "2025-09-03",
      text: "On time for our airport drop-off and really helpful with luggage despite motorway diversions."
    },
    {
      author: "Zayed Amla", rating: 5, date: "2025-09-01",
      text: "Always on time, friendly drivers and very reliable. Highly recommend."
    }
  ];

  const avg = (reviews.reduce((t, r) => t + r.rating, 0) / reviews.length).toFixed(1);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Oakdale Travel",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": avg,
      "reviewCount": reviews.length
    },
    "review": reviews.map(r => ({
      "@type": "Review",
      "author": r.author,
      "reviewRating": { "@type": "Rating", "ratingValue": r.rating, "bestRating": 5 },
      "reviewBody": r.text,
      "datePublished": r.date
    }))
  };

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold">Recent Google reviews</h2>
      <div className="mt-4 grid md:grid-cols-3 gap-4">
        {reviews.map((r, i) => (
          <div key={i} className="border border-black/10 rounded-xl p-4">
            <div className="font-medium">{r.author}</div>
            <div className="text-sm" aria-label={`${r.rating} out of 5 stars`}>
              {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
            </div>
            <p className="mt-2 text-black/80">{r.text}</p>
          </div>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="mt-3 text-sm">
        Read more on our <a className="underline" href="https://maps.app.goo.gl/zZgCfUuqJ4UVChF78" target="_blank" rel="noreferrer">Google Business Profile</a>.
      </p>
    </section>
  );
}

