"use client";

import { HelpCircle, Star } from "lucide-react";

const ReviewsRatings = () => {
  const ratings = [
    { stars: 5, count: 1500 },
    { stars: 4, count: 1200 },
    { stars: 3, count: 800 },
    { stars: 2, count: 400 },
    { stars: 1, count: 200 },
  ];

  const totalRatings = ratings.reduce((sum, r) => sum + r.count, 0);
  const averageRating = (4.9).toFixed(1);

  const reviews = [
    {
      name: "Awlad Hossain",
      time: "20 min ago",
      rating: 4.9,
      review:
        "This would be very useful for large codebases in which old code needed to be removed/changed but was not... having to reference a line and/or link to the code in a comment is very inconvenient.",
    },
    {
      name: "Awlad Hossain",
      time: "20 min ago",
      rating: 4.9,
      review:
        "This would be very useful for large codebases in which old code needed to be removed/changed but was not... having to reference a line and/or link to the code in a comment is very inconvenient.",
    },
  ];

  return (
    <div className=" p-4">
      <div className=" bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold">Reviews & Ratings</h2>

        <div className="mt-4 flex items-center gap-2">
          <span className="text-3xl font-bold">{averageRating}</span>
          <span className="text-gray-500">/ 5.0</span>
        </div>
        <p className="text-gray-600 text-sm">
          ⭐ {averageRating} Ratings • (720+ Reviews) • 1092+ Sold
        </p>

        <div className="mt-4">
          {ratings.map((rating) => (
            <div
              key={rating.stars}
              className="flex items-center gap-2 text-sm mb-2"
            >
              <div className="flex gap-1 text-yellow-500">
                {[...Array(rating.stars)].map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-lg overflow-hidden">
                <div
                  className="bg-green-500 h-2"
                  style={{ width: `${(rating.count / totalRatings) * 100}%` }}
                ></div>
              </div>
              <span className="text-gray-500">{rating.count}</span>
            </div>
          ))}
        </div>

        <h3 className="mt-6 text-lg font-semibold">Top Reviews</h3>
        <p className="text-gray-500 text-sm">Showing 3 of 3.2k+ reviews</p>

        <div className="mt-4">
          {reviews.map((review, index) => (
            <div key={index} className="border-b py-4">
              <p className="font-semibold">{review.name}</p>
              <p className="text-gray-500 text-sm">{review.time}</p>
              <p className="text-gray-700 mt-2">{review.review}</p>
              <div className="flex items-center gap-2 mt-2 text-gray-600 text-sm">
                <Star className="text-yellow-500" /> {review.rating} Ratings
                <HelpCircle /> Helpful
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsRatings;
