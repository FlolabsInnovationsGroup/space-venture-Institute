export default function Stat({ number, label, desc }: any) {
  return (
    <div className="flex flex-col items-center p-4">
      <span className="text-5xl md:text-6xl font-extrabold text-[#1a1a1a] dark:text-white mb-2">
        {number}
      </span>
      <span className="text-xs font-bold text-levi-red uppercase tracking-widest mb-2">
        {label}
      </span>
      <span className="text-sm text-gray-500">{desc}</span>
    </div>
  );
}
