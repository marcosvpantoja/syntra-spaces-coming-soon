interface ActivityItem {
  initials: string;
  name: string;
  action: string;
  time: string;
}

const activities: ActivityItem[] = [
  { initials: "MC", name: "Maria Costa", action: "criou um novo projeto", time: "2 min atrás" },
  { initials: "PL", name: "Pedro Lima", action: "atualizou a integração", time: "15 min atrás" },
  { initials: "AS", name: "Ana Silva", action: "adicionou 3 membros", time: "1h atrás" },
  { initials: "RF", name: "Ricardo Ferreira", action: "exportou relatório", time: "3h atrás" },
  { initials: "JO", name: "Julia Oliveira", action: "concluiu revisão", time: "5h atrás" },
];

const ActivityFeed = () => {
  return (
    <div className="syntra-card p-6 opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
      <h3 className="text-[18px] font-semibold text-foreground mb-5">
        Atividade Recente
      </h3>
      <div className="space-y-4">
        {activities.map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full syntra-gradient-accent flex items-center justify-center text-[11px] font-bold text-primary-foreground shrink-0">
              {item.initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[14px] text-foreground truncate">
                <span className="font-medium">{item.name}</span>{" "}
                <span className="text-muted-foreground">{item.action}</span>
              </p>
            </div>
            <span className="syntra-text-sm shrink-0">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
