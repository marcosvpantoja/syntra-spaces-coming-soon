import { useState } from "react";
import { CheckCircle } from "lucide-react";
import syntraLogo from "@/assets/syntra-logo.png";

const ComingSoonPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Por favor, insira um email válido.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden font-sans"
      style={{
        background: "linear-gradient(135deg, #0F003C 0%, #2D1E69 40%, #4B2D78 70%, #693C96 100%)",
      }}
    >
      {/* Central glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(105,60,150,0.20) 0%, rgba(0,60,225,0.08) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg w-full animate-fade-in">
        {/* Logo icon */}
        <img
          src={syntraLogo}
          alt="Syntra Logo"
          className="w-16 h-16 mb-8"
          style={{ filter: "drop-shadow(0 0 24px rgba(105,60,150,0.4))" }}
        />

        {/* Title */}
        <h1 className="text-white font-bold mb-4 text-[32px] md:text-[44px] leading-tight">
          Syntra Spaces
        </h1>

        {/* Subtitle */}
        <p className="text-white/80 text-lg mb-3 max-w-md">
          A nova forma inteligente de gerenciar e reservar espaços corporativos.
        </p>

        {/* Explanation */}
        <p className="text-white/70 text-[15px] mb-8 max-w-sm">
          Estamos finalizando os últimos detalhes.<br />
          Deixe seu email e seja o primeiro a saber quando lançarmos.
        </p>

        {/* Glassmorphism card */}
        <div
          className="w-full max-w-md rounded-2xl p-6 md:p-8"
          style={{
            background: "rgba(255, 255, 255, 0.07)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.30)",
          }}
        >
          {submitted ? (
            <div className="flex flex-col items-center gap-3 py-2">
              <CheckCircle className="w-8 h-8 text-emerald-400" />
              <p className="text-white/90 text-[15px]">
                Ótimo! Você será avisado no lançamento.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(""); }}
                className="flex-1 text-white placeholder:text-white/50 text-[15px] rounded-[10px] px-4 py-3.5 outline-none transition-all duration-200"
                style={{
                  background: "rgba(255, 255, 255, 0.10)",
                  border: "1px solid rgba(255, 255, 255, 0.20)",
                  fontFamily: "'Jost', sans-serif",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#693C96";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(105, 60, 150, 0.30)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.20)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
              <button
                type="submit"
                className="whitespace-nowrap text-white font-semibold text-[15px] rounded-[10px] px-6 py-3.5 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #3C1E78 0%, #693C87 100%)",
                  border: "none",
                  fontFamily: "'Jost', sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(105, 60, 150, 0.45)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Quero ser avisado
              </button>
            </form>
          )}
          {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        </div>
      </div>

      {/* Footer */}
      <p className="absolute bottom-6 text-white/40 text-[13px]">
        © Syntra — Todos os direitos reservados.
      </p>
    </div>
  );
};

export default ComingSoonPage;
