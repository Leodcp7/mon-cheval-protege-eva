export default function Integrations() {
  const logos = ["Slack","Notion","Linear","HubSpot","Intercom","Figma","Asana","Jira","Drive","Sheets","Zapier","Amplitude","Stripe","Salesforce","Zendesk","GitHub"];
  return (
    <section className="relative py-24">
      <div className="halo right-10 top-0 h-96 w-96 bg-primary/25"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="inline-flex px-3 py-1 rounded-full text-sm bg-primary/10 text-primary font-medium mb-4">SEAMLESS INTEGRATIONS</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Connect all your tools in one place</h2>
        <p className="mt-4 text-body max-w-2xl mx-auto">Une grille de 16 intégrations courantes dans des tuiles en verre, avec un halo lilas subtil.</p>

        <div className="relative mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {logos.map((l) => (
            <div key={l} className="glass rounded-2xl py-6 px-4 flex items-center justify-center text-ink/80 hover:shadow-glow transition">
              <span className="font-semibold">{l}</span>
            </div>
          ))}
          <div className="pointer-events-none absolute inset-0 rounded-[40rem] mx-10 my-6 bg-gradient-to-tr from-primary/25 via-transparent to-transparent blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
