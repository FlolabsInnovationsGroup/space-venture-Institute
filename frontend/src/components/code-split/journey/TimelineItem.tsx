export default function TimelineItem({
  phase,
  title,
  desc,
  align,
  highlight,
}: any) {
  const isLeft = align === "left";
  return (
    <div
      className={`relative flex flex-col md:flex-row items-center ${isLeft ? "" : "md:flex-row-reverse"}`}>
      <div
        className={`absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full  border-gray-100 dark:border-black ${highlight ? "bg-[#F2784B] scale-125" : "bg-white"}`}
      />
      <div className="hidden md:block w-1/2" />
      <div
        className={`w-full md:w-1/2 pl-8 md:pl-0 ${isLeft ? "md:pr-16" : "md:pl-16"}`}>
        <div
          className={`p-6 rounded-xl border transition-all bg-white dark:bg-white/5 shadow-md ${highlight ? "bg-[#F2784B]/5 border-[#F2784B]" : "border-gray-200 dark:border-white/10"}`}>
          <span
            className={`text-xs font-bold uppercase tracking-widest mb-2 block ${highlight ? "text-[#F2784B]" : "text-gray-400"}`}>
            Phase {phase}
          </span>
          <h3 className="text-xl font-bold mb-2 text-[#1a1a1a] dark:text-white">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-md">{desc}</p>
        </div>
      </div>
    </div>
  );
}
