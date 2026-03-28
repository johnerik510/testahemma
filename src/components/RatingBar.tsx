interface RatingBarProps {
  label: string;
  value: number;
  maxValue?: number;
}

function RatingBar({ label, value, maxValue = 10 }: RatingBarProps) {
  const pct = (value / maxValue) * 100;
  const color = value >= 8.5 ? "bg-teal-500" : value >= 7 ? "bg-blue-500" : "bg-orange-500";

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-600 w-28 shrink-0">{label}</span>
      <div className="flex-1 bg-gray-100 rounded-full h-2">
        <div className={`${color} h-2 rounded-full transition-all`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-sm font-semibold text-gray-900 w-8 text-right">{value.toFixed(1)}</span>
    </div>
  );
}

interface RatingBarsProps {
  ratings: {
    accuracy: number;
    ease: number;
    speed: number;
    value: number;
    support: number;
  };
}

export default function RatingBars({ ratings }: RatingBarsProps) {
  return (
    <div className="space-y-3 bg-gray-50 rounded-xl p-5">
      <RatingBar label="Noggrannhet" value={ratings.accuracy} />
      <RatingBar label="Enkelhet" value={ratings.ease} />
      <RatingBar label="Svarstid" value={ratings.speed} />
      <RatingBar label="Prisvärdhet" value={ratings.value} />
      <RatingBar label="Support" value={ratings.support} />
    </div>
  );
}
