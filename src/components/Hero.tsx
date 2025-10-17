import { FadeUp } from "./animations";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Halo en fond */}
      <div className="absolute -top-24 right-0 w-[40vw] h-[40vw] pointer-events-none bg-gradient-to-tr from-primary/30 via-transparent to-transparent blur-3xl rounded-full" />
      <div className="absolute -bottom-40 -left-20 w-[50vw] h-[50vw] pointer-events-none bg-gradient-to-tr from-primaryLight/25 via-transparent to-transparent blur-3xl rounded-full" />

      <div className="max-w-4xl mx-auto px-6 text-center md:text-left">
        <FadeUp>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Protégez votre cheval<br />sans vous compliquer la vie
          </h1>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="mt-6 text-lg md:text-xl text-muted">
            Cavaliers et assureurs, nous mettons notre passion et notre expérience à votre service.
          </p>
        </FadeUp>
        <FadeUp delay={0.4}>
          <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 gap-4 justify-center md:justify-start">
            <button className="rounded-full border border-primary/12 bg-white/50 backdrop-blur-md px-5 py-2.5 text-textDark shadow-sm hover:bg-white/70 transition">
              En savoir plus
            </button>
            <button className="relative rounded-full px-6 py-3 font-medium text-white bg-gradient-to-r from-primary to-primaryLight shadow-[0_8px_20px_rgba(139,92,246,0.35)] hover:brightness-105 transition">
              <span>Obtenir un devis</span>
              <span className="ml-2">→</span>
              <span className="absolute -inset-0.5 -z-10 rounded-full bg-gradient-to-r from-primary/30 to-primaryLight/20 blur-xl" />
            </button>
          </div>
        </FadeUp>
        <FadeUp delay={0.6}>
          <div className="mt-10 flex justify-center md:justify-start space-x-4 text-xs text-muted">
            {["Quick setup", "GDPR compliant", "ISO27001"].map((badge) => (
              <span key={badge} className="px-3 py-1 bg-white/60 rounded-full">{badge}</span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
