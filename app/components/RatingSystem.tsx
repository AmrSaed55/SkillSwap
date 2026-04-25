import { useState } from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface RatingSystemProps {
  value?: number;
  onChange?: (rating: number) => void;
  readOnly?: boolean;
  size?: number;
}

export default function RatingSystem({
  value = 0,
  onChange,
  readOnly = false,
  size = 20,
}: RatingSystemProps) {
  const [rating, setRating] = useState(value);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <motion.button
          key={star}
          whileTap={{ scale: 0.85 }}
          onClick={() => {
            if (readOnly) return;
            setRating(star);
            if (onChange) onChange(star);
          }}
          onMouseEnter={() => {
            if (readOnly) return;
            setHover(star);
          }}
          onMouseLeave={() => {
            if (readOnly) return;
            setHover(0);
          }}
          className={`focus:outline-none ${readOnly ? 'cursor-default' : 'cursor-pointer'}`}
        >
          <Star
            size={size}
            className={`transition-colors duration-200 ${
              star <= (hover || rating)
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        </motion.button>
      ))}
    </div>
  );
}
