const steps = [
  { n: "1", t:"Sign up", d:"Create your workspace in minutes." },
  { n: "2", t:"Integrate your tools", d:"Connect Slack, Notion, Intercom, etc." },
  { n: "3", t:"Automate & Optimize", d:"Refine, measure and scale your flows." },
];

export default function Steps() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="inline-flex px-3 py-1 rounded-full text-sm bg-primary/10 text-primary font-medium mb-4">HOW IT WORKS</p>
        <h2 className="text-3xl sm:text-4xl font-bold">3 simple steps to effortless efficiency</h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map(s=>(
            <div key={s.n} className="glass rounded-3xl p-6 text-left hover:shadow-glow transition">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl"
                style={{background:"linear-gradient(90deg,#8B5CF6,#A78BFA)"}}>
                <span className="text-white font-bold">{s.n}</span>
              </div>
              <h3 className="mt-4 font-semibold text-xl">{s.t}</h3>
              <p className="text-body mt-1">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
