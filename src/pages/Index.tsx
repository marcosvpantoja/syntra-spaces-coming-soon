import { useState } from "react";
import { cn } from "@/lib/utils";
import { Users, TrendingUp, Zap, FileText } from "lucide-react";
import AppSidebar from "@/components/AppSidebar";
import Topbar from "@/components/Topbar";
import StatCard from "@/components/StatCard";
import ActivityFeed from "@/components/ActivityFeed";
import ProjectsTable from "@/components/ProjectsTable";

const Index = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      <AppSidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />

      <div
        className={cn(
          "flex-1 flex flex-col transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
          collapsed ? "ml-[72px]" : "ml-[260px]"
        )}
      >
        <Topbar />

        <main className="flex-1 p-8 max-w-[1200px] w-full mx-auto">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            <StatCard
              label="Usuários Ativos"
              value="1.284"
              change="+12% este mês"
              changeType="positive"
              icon={Users}
              delay={0}
            />
            <StatCard
              label="Receita"
              value="R$ 48.2k"
              change="+8.3% este mês"
              changeType="positive"
              icon={TrendingUp}
              delay={100}
            />
            <StatCard
              label="Integrações"
              value="24"
              change="3 novas"
              changeType="neutral"
              icon={Zap}
              delay={200}
            />
            <StatCard
              label="Documentos"
              value="892"
              change="-2% este mês"
              changeType="negative"
              icon={FileText}
              delay={300}
            />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
            <div className="lg:col-span-3">
              <ProjectsTable />
            </div>
            <div className="lg:col-span-2">
              <ActivityFeed />
            </div>
          </div>

          {/* System status */}
          <div
            className="mt-8 syntra-card p-5 opacity-0 animate-fade-in flex items-center justify-between"
            style={{ animationDelay: "600ms" }}
          >
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-[13px] text-muted-foreground">
                Latência do sistema: <span className="font-medium text-foreground">14ms</span>
              </span>
            </div>
            <span className="text-[13px] text-muted-foreground">
              Nós ativos: <span className="font-medium text-foreground">1.284</span>
            </span>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
