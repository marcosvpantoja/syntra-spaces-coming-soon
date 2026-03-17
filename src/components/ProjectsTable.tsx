import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface Project {
  name: string;
  status: "active" | "review" | "paused";
  progress: number;
}

const projects: Project[] = [
  { name: "Plataforma Core v2", status: "active", progress: 78 },
  { name: "API Gateway", status: "active", progress: 92 },
  { name: "Dashboard Analytics", status: "review", progress: 45 },
  { name: "Mobile App", status: "paused", progress: 23 },
];

const statusConfig = {
  active: { label: "Ativo", className: "bg-emerald-100 text-emerald-700" },
  review: { label: "Revisão", className: "bg-amber-100 text-amber-700" },
  paused: { label: "Pausado", className: "bg-muted text-muted-foreground" },
};

const ProjectsTable = () => {
  return (
    <div className="syntra-card p-6 opacity-0 animate-fade-in" style={{ animationDelay: "500ms" }}>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-[18px] font-semibold text-foreground">Projetos</h3>
        <Button size="sm" className="gap-1.5">
          <Plus className="h-3.5 w-3.5" />
          Novo
        </Button>
      </div>

      <div className="space-y-3">
        {projects.map((project) => {
          const status = statusConfig[project.status];
          return (
            <div
              key={project.name}
              className="flex items-center gap-4 rounded-[10px] p-3 hover:bg-surface transition-colors duration-150 cursor-pointer"
            >
              <div className="flex-1 min-w-0">
                <p className="text-[14px] font-medium text-foreground truncate">
                  {project.name}
                </p>
              </div>

              <span
                className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${status.className}`}
              >
                {status.label}
              </span>

              <div className="w-24 hidden sm:block">
                <div className="h-1.5 rounded-full bg-surface overflow-hidden">
                  <div
                    className="h-full rounded-full syntra-gradient-accent transition-all duration-500"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              <span className="text-[13px] font-medium text-muted-foreground w-10 text-right">
                {project.progress}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsTable;
