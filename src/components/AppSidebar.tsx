import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  FileText,
  Bell,
  Zap,
  ChevronLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";
import syntraLogo from "@/assets/syntra-logo.png";

interface SidebarItem {
  icon: React.ElementType;
  label: string;
  active?: boolean;
}

const menuItems: SidebarItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Users, label: "Equipe" },
  { icon: BarChart3, label: "Analytics" },
  { icon: FileText, label: "Documentos" },
  { icon: Zap, label: "Integrações" },
  { icon: Bell, label: "Notificações" },
  { icon: Settings, label: "Configurações" },
];

interface AppSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const AppSidebar = ({ collapsed, onToggle }: AppSidebarProps) => {
  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen bg-card flex flex-col transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
        collapsed ? "w-[72px]" : "w-[260px]"
      )}
      style={{ boxShadow: "1px 0 0 0 rgba(20, 0, 60, 0.06)" }}
    >
      {/* Logo */}
      <div className={cn("flex items-center gap-3 px-5 h-16", collapsed && "justify-center px-0")}>
        <img src={syntraLogo} alt="Syntra" className="h-8 w-8" />
        {!collapsed && (
          <span className="text-[20px] font-semibold tracking-tight text-foreground">
            Syntra
          </span>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "flex items-center gap-3 w-full rounded-[10px] px-3 py-2.5 text-[14px] font-medium transition-all duration-150",
              item.active
                ? "bg-surface text-syntra-purple-600"
                : "text-muted-foreground hover:bg-surface hover:text-foreground",
              collapsed && "justify-center px-0"
            )}
          >
            <item.icon className="h-[18px] w-[18px] shrink-0" />
            {!collapsed && <span>{item.label}</span>}
          </button>
        ))}
      </nav>

      {/* Collapse toggle */}
      <div className="px-3 py-4">
        <button
          onClick={onToggle}
          className="flex items-center justify-center w-full rounded-[10px] py-2 text-muted-foreground hover:bg-surface hover:text-foreground transition-colors duration-150"
        >
          <ChevronLeft
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              collapsed && "rotate-180"
            )}
          />
        </button>
      </div>
    </aside>
  );
};

export default AppSidebar;
