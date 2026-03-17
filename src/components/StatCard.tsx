import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  delay?: number;
}

const StatCard = ({ label, value, change, changeType = "neutral", icon: Icon, delay = 0 }: StatCardProps) => {
  return (
    <div
      className="syntra-card p-5 opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="syntra-label mb-2">{label}</p>
          <p className="text-[28px] font-bold tracking-tight text-foreground leading-none">
            {value}
          </p>
          {change && (
            <p
              className={cn(
                "text-[13px] font-medium mt-2",
                changeType === "positive" && "text-emerald-600",
                changeType === "negative" && "text-red-500",
                changeType === "neutral" && "text-muted-foreground"
              )}
            >
              {change}
            </p>
          )}
        </div>
        <div className="h-10 w-10 rounded-[10px] bg-surface flex items-center justify-center">
          <Icon className="h-5 w-5 text-syntra-purple-600" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
