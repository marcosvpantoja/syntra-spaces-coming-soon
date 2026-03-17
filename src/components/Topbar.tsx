import { Search, Bell } from "lucide-react";

const Topbar = () => {
  return (
    <header
      className="sticky top-0 z-30 h-16 flex items-center justify-between px-8 bg-background/80 backdrop-blur-md"
      style={{ boxShadow: "0 1px 0 0 rgba(20, 0, 60, 0.06)" }}
    >
      <div>
        <h2 className="text-[20px] font-semibold leading-none" style={{ color: "#14003C" }}>
          Dashboard
        </h2>
        <p className="text-[13px] text-muted-foreground mt-0.5">
          Bem-vindo de volta, Alexandre
        </p>
      </div>

      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar..."
            className="h-9 w-[220px] rounded-[10px] bg-surface pl-9 pr-4 text-[14px] text-foreground placeholder:text-muted-foreground outline-none transition-all duration-200 focus:ring-2 focus:ring-accent/20 focus:bg-background"
            style={{ border: "1px solid rgba(20, 0, 60, 0.08)" }}
          />
        </div>

        {/* Notifications */}
        <button className="relative h-9 w-9 rounded-[10px] flex items-center justify-center text-muted-foreground hover:bg-surface transition-colors duration-150">
          <Bell className="h-[18px] w-[18px]" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-accent" />
        </button>

        {/* Avatar */}
        <div className="h-8 w-8 rounded-full syntra-gradient flex items-center justify-center text-[13px] font-semibold text-primary-foreground">
          A
        </div>
      </div>
    </header>
  );
};

export default Topbar;
