export default function Comparison() {
  const rows = [
    ["Task Completion","✕ Manual & slow","✓ Automated & consistent"],
    ["Error Rate","✕ Frequent human errors","✓ Reduced by automation"],
    ["Data Visibility","✕ Fragmented","✓ Unified dashboard"],
    ["Handoffs","✕ Chaotic","✓ Structured workflows"],
    ["Time to insight","✕ Days/Weeks","✓ Minutes"],
  ];

  return (
    <section className="relative py-24 bg-dark text-white" id="work">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold">Your competitors are automating for a reason!</h2>
        <p className="text-muted mt-3 max-w-2xl">Tableau comparatif sombre, avec bordures glass dark et colonne “With Flowline” mise en avant.</p>

        <div className="mt-10 overflow-hidden rounded-3xl border border-[#A78BFA1F]">
          <table className="w-full text-left">
            <thead className="bg-white/5">
              <tr>
                <th className="px-6 py-4 text-muted font-medium">Dimension</th>
                <th className="px-6 py-4 text-muted font-medium">Without Flowline</th>
                <th className="px-6 py-4 text-muted font-medium">With Flowline</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {rows.map(([k,a,b])=>(
                <tr key={k} className="bg-white/5 hover:bg-white/10">
                  <td className="px-6 py-5 text-white/90">{k}</td>
                  <td className="px-6 py-5 text-white/80">{a}</td>
                  <td className="px-6 py-5 text-white rounded-md border border-primary/30">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#demo" className="btn-primary">Get started</a>
          <span className="glass px-3 py-1 rounded-full text-sm text-white/80">🛡 GDPR</span>
          <span className="glass px-3 py-1 rounded-full text-sm text-white/80">✅ ISO27001</span>
        </div>
      </div>
    </section>
  );
}
