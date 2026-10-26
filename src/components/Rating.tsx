import { useState } from 'react';
import StarBorder from '@mui/icons-material/StarBorder';
import Star from '@mui/icons-material/Star';

type RatingProps = {
  max: number;
  initialRating?: number;
};

function Rating({ max, initialRating = 0 }: RatingProps) {
  const [rating, setRating] = useState(initialRating);

  return (
    <div className="flex w-fit m-auto">
      <div className="flex items-center gap-1 mr-2">
        {Array.from({ length: max }, (_, index) => {
          const star = index + 1;

          return (
            <button
              key={star}
              type="button"
              aria-label={`Rate ${star} out of 5`}
              onClick={() => setRating(star)}
              className="text-yellow-500 transition-colors hover:bg-yellow-50 rounded p-1 cursor-pointer"
            >
              {star <= rating ? <Star /> : <StarBorder />}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => setRating(0)}
        disabled={rating === 0}
        className="border border-gray-200 rounded-lg px-2 shadow-sm text-xs text-gray-500 transition hover:enabled:text-gray-900 disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
      >
        Clear rating
      </button>
    </div>
  );
}

export default Rating;
