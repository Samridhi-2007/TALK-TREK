type Props = {
  active: boolean;
};

export default function VoiceWave({ active }: Props) {
  if (!active) return null;

  return (
    <div className="flex gap-1 mt-3">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className="w-2 bg-purple-600 rounded-full animate-wave"
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
    </div>
  );
}
