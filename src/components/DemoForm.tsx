export default function DemoForm() {
  return (
    <section id="demo" className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="gradient-border glass rounded-3xl p-8">
          <h3 className="text-2xl font-bold mb-6">Request your demo</h3>
          <form className="grid md:grid-cols-2 gap-5">
            <div className="col-span-2 md:col-span-1">
              <label className="block text-sm text-body mb-2">Name</label>
              <input required className="w-full rounded-xl border border-primary/20 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-primary/40" />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label className="block text-sm text-body mb-2">Email</label>
              <input type="email" required className="w-full rounded-xl border border-primary/20 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-primary/40" />
            </div>
            <div>
              <label className="block text-sm text-body mb-2">Company</label>
              <input className="w-full rounded-xl border border-primary/20 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-primary/40" />
            </div>
            <div>
              <label className="block text-sm text-body mb-2">Preferred date</label>
              <input type="date" className="w-full rounded-xl border border-primary/20 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-primary/40" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-body mb-2">Message</label>
              <textarea rows={4} className="w-full rounded-xl border border-primary/20 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-primary/40"></textarea>
            </div>
            <div className="md:col-span-2 flex items-center gap-3">
              <input id="pp" type="checkbox" className="h-4 w-4 rounded border-primary/30"/>
              <label htmlFor="pp" className="text-sm text-body">You agree to our privacy policy.</label>
            </div>
            <div className="md:col-span-2">
              <button className="btn-primary w-full md:w-auto">Submit request</button>
            </div>
          </form>
          <div className="flex flex-wrap gap-3 mt-6 text-sm text-muted">
            <span className="glass px-3 py-1 rounded-full">⚡ Quick setup</span>
            <span className="glass px-3 py-1 rounded-full">🛡 GDPR</span>
            <span className="glass px-3 py-1 rounded-full">✅ ISO27001</span>
          </div>
        </div>
      </div>
    </section>
  );
}
