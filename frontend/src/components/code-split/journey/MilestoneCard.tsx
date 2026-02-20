import { CheckCircle } from "lucide-react";

export default function MilestoneCard({ title, desc }: any) {
  return (
    <div className="p-8 bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5 hover:border-levi-red shadow-sm transition-colors">
      <div className="flex items-center gap-3 mb-4">
        <CheckCircle className="w-6 h-6 " />
        <h3 className="text-xl font-bold text-[#1a1a1a] dark:text-white">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
}
