export default function TeamPoint({
  text,
  headWord,
}: {
  text: string;
  headWord: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-2 h-2 bg-[#2962FF] rounded-full flex-shrink-0" />

      <div className="text-gray-600 dark:text-gray-300">
        <span className="text-[#2962FF]">{headWord}</span>
        {text}
      </div>
    </div>
  );
}
