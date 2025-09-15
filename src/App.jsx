export default function App() {
  const projetos = [
    { t: "Legende-se", d: "Legendas automáticas para Reels/TikTok com IA.", l: "#" },
    { t: "Análise de Discursos", d: "Coleta, PLN e dashboards para insights linguísticos.", l: "#" },
    { t: "JP FM Web Rádio", d: "Identidade visual, playlists e automação da rádio.", l: "#" },
  ];

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-zinc-900 via-zinc-950 to-black text-zinc-100">
      {/* FUNDO ANIMADO */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Camada 1: blobs de luz (agora com animação registrada) */}
        <div className="absolute -top-20 -left-10 h-[42rem] w-[42rem] rounded-full bg-emerald-500/20 blur-3xl mix-blend-screen animate-blob" />
        <div className="absolute top-1/3 -right-20 h-[36rem] w-[36rem] rounded-full bg-cyan-500/20 blur-3xl mix-blend-screen animate-blob" />
        <div className="absolute bottom-0 left-1/4 h-[32rem] w-[32rem] rounded-full bg-emerald-400/10 blur-3xl mix-blend-screen animate-blob" />

        {/* Suave escurecimento para contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60" />

        {/* Camada 2: grid tech deslizando */}
        <div
          className="absolute inset-0 opacity-60 bg-tech-grid [background-size:40px_40px,40px_40px] animate-gridmove"
          style={{ maskImage: 'radial-gradient(80% 60% at 50% 40%, black 60%, transparent 100%)' }}
        />

        {/* Camada 3: partículas simples flutuando */}
        <div className="absolute inset-0">
          {Array.from({ length: 24 }).map((_, i) => {
            const top = (37 * i * 3) % 100;
            const left = (53 * i * 5) % 100;
            const delay = (i % 8) * 0.4;
            const size = 2 + (i % 3);
            return (
              <span
                key={i}
                className="absolute rounded-full bg-emerald-400/60 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-float"
                style={{ top: `${top}%`, left: `${left}%`, width: size, height: size, animationDelay: `${delay}s` }}
              />
            );
          })}
          <div className="absolute inset-0 animate-pulseGlow" />
        </div>
      </div>

      {/* Header compacto */}
      <header className="sticky top-0 z-50 bg-zinc-950/70 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <img
              src="/public/ChatGPT Image 7 de set. de 2025, 13_34_33.png"
              alt="Logo Voa Paloma"
              className="h-7 w-7 object-contain"
            />
            <span><span className="text-emerald-400">Voa</span> Paloma</span>
          </a>
          <nav className="hidden sm:flex gap-6 text-sm text-zinc-300">
            <a href="#projetos" className="hover:text-emerald-400">Projetos</a>
            <a href="#sobre" className="hover:text-emerald-400">Sobre</a>
            <a href="#contato" className="hover:text-emerald-400">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="grid place-items-center px-6 py-16">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-400 drop-shadow-lg">Paloma Sá</h1>
          <div className="flex flex-wrap gap-2 justify-center text-xs">
            <span className="px-3 py-1 rounded-full bg-white/5 text-zinc-300 ring-1 ring-white/10">Linguista • PLN • IA aplicada</span>
            <span className="px-3 py-1 rounded-full bg-white/5 text-zinc-300 ring-1 ring-white/10">Análise de Discurso</span>
            <span className="px-3 py-1 rounded-full bg-white/5 text-zinc-300 ring-1 ring-white/10">Automação & Conteúdo</span>
          </div>
          <p className="text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Soluções criativas unindo <span className="text-emerald-400">análise de discurso</span>,{" "}
            <span className="text-emerald-400">processamento de linguagem natural</span> e{" "}
            <span className="text-emerald-400">automação</span> para transformar comunicação, negócios e educação.
          </p>
          <div className="flex items-center justify-center gap-3">
            <a className="inline-block px-6 py-3 rounded-xl bg-emerald-500/10 text-emerald-400 font-medium hover:bg-emerald-500/20 transition" href="#projetos">Ver Projetos →</a>
            <a className="inline-block px-6 py-3 rounded-xl bg-white/5 text-white font-medium hover:bg-white/10 transition" href="#contato">Falar Comigo</a>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="max-w-6xl mx-auto px-6 pb-8">
        <h2 className="text-2xl font-semibold mb-4">Projetos em destaque</h2>
        <p className="text-zinc-400 mb-6">Uma amostra do que venho criando. Cada projeto nasce de um problema real, método claro e execução prática.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projetos.map((p) => (
            <article key={p.t} className="group rounded-2xl bg-zinc-900/50 ring-1 ring-white/10 p-6 hover:translate-y-[-3px] hover:ring-emerald-400/30 transition">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-lg">{p.t}</h3>
                <span className="text-xs px-2 py-1 rounded bg-white/5 text-zinc-400">em andamento</span>
              </div>
              <p className="text-zinc-400 mt-2">{p.d}</p>
              <a href={p.l} className="mt-4 inline-block text-sm px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10">Ver detalhes</a>
            </article>
          ))}
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="max-w-3xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-3">Sobre mim</h2>
        <p className="text-zinc-300">
          Sou Paloma, linguista apaixonada por tecnologia. Atuo na interseção entre linguagem e IA, explorando como o PLN pode gerar impacto concreto.
          Meu foco é transformar ideias em protótipos e protótipos em resultados reais — sempre com didática, método e estética.
        </p>
      </section>

      {/* Contato */}
      <section id="contato" className="max-w-6xl mx-auto px-6 py-12 text-center">
        <div className="rounded-2xl bg-zinc-900/50 ring-1 ring-white/10 p-8">
          <h2 className="text-2xl font-semibold">Vamos conversar?</h2>
          <p className="text-zinc-400 mt-2">Projetos, parcerias e ideias que misturam linguagem, dados e criatividade.</p>
          <div className="mt-5 flex gap-3 justify-center">
            <a href="mailto:paloma@email.com" className="px-6 py-3 rounded-xl bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition">paloma@email.com</a>
            <a href="#" className="px-6 py-3 rounded-xl bg-white/5 text-white hover:bg-white/10 transition">Calendário 📅</a>
          </div>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-6 py-10 text-sm text-zinc-400 text-center">
        © {new Date().getFullYear()} Paloma • Voa alto, sempre 🧠💚
      </footer>
    </div>
  );
}

