import {
  Globe,
  ArrowRight,
  Lock,
  Unlock,
  Zap,
  Brain,
  Shield,
  Users,
  PenTool,
  Scale,
  Trophy,
  CheckCircle2,
  X,
} from "lucide-react";
export default function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-4">
      <CheckCircle2 className="w-6 h-6 text-levi-red flex-shrink-0 mt-1" />
      <p className="text-lg text-gray-200 font-medium">{text}</p>
    </div>
  );
}
