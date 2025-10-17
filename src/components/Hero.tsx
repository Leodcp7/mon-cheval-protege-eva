import { motion } from "framer-motion";
import { fadeUp, stagger } from "./motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* halos */}
      <div className="halo -top-32 -right-20 h-80 w-80 bg-primary/30"></div>
      <div className="halo -bottom-24 -left-20 h-96 w-96 bg-primary2/25"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.p variants={fadeUp(0)} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/10 text-primary font-medium mb-5">FRAMER-STYLE LANDING</motion.p>
            <motion.h1 variants={fadeUp(0.05)} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-ink">
              Boost your productivity<br/> <span className="bg-gradient-to-r from-primary to-primary2 bg-clip-text text-transparent">without the overwhelm.</span>
            </motion.h1>
            <motion.p variants={fadeUp(0.1)} className="mt-6 text-lg text-body max-w-xl">
              Automate workflows, get real-time insights, et connecte tous tes outils — sans complexité. Design premium, perf, accessibilité AA.
            </motion.p>

            <motion.div variants={fadeUp(0.15)} className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <a href="#demo" className="btn-primary">Experience Effortless Efficiency →</a>
              <a href="#work" className="btn-secondary">Learn how</a>
            </motion.div>

            <motion.ul variants={fadeUp(0.2)} className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted">
              <li className="glass px-3 py-1 rounded-full">⚡ Quick setup</li>
              <li className="glass px-3 py-1 rounded-full">🛡 GDPR compliant</li>
              <li className="glass px-3 py-1 rounded-full">✅ ISO27001</li>
            </motion.ul>
          </div>

          {/* right visual */}
          <motion.div variants={fadeUp(0.08)} className="relative">
            <div className="gradient-border glass p-6 rounded-3xl">
              <div className="text-sm text-body mb-3">Résumé — estimation instantanée</div>
              <div className="h-56 rounded-2xl bg-gradient-to-br from-white to-white/40 border border-primary/10 flex items-center justify-center">
                <div className="w-full max-w-md px-6">
                  <div className="h-2 rounded-full bg-primary/20 w-3/4 mb-3"></div>
                  <div className="h-2 rounded-full bg-primary/10 w-2/3 mb-8"></div>
                  <div className="h-24 rounded-xl bg-gradient-to-r from-primary/20 to-primary2/20 shadow-inner"></div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 inset-0 translate-x-6 translate-y-6 rounded-3xl bg-primary/20 blur-3xl opacity-50"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
