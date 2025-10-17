import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Analytics() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset:["start end","end start"] });
  const y1 = useTransform(scrollYProgress, [0,1], [8,-8]);
  const y2 = useTransform(scrollYProgress, [0,1], [-6,6]);
  const y3 = useTransform(scrollYProgress, [0,1], [10,-10]);

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div ref={ref} className="relative min-h-[320px]">
          <motion.div style={{y:y1}} className="glass rounded-3xl p-5 w-72 md:w-80 lg:w-96 shadow-glow absolute top-0 left-0">
            <p className="text-sm text-body mb-2">Heatmap</p>
            <div className="grid grid-cols-6 gap-2">
              {Array.from({length:36}).map((_,i)=>(
                <div key={i} className="h-6 rounded bg-primary/20"></div>
              ))}
            </div>
          </motion.div>

          <motion.div style={{y:y2}} className="glass rounded-3xl p-5 w-64 md:w-72 shadow-glow absolute right-0 top-20">
            <p className="text-sm text-body mb-2">Bar chart</p>
            <div className="flex items-end gap-2 h-28">
              {[30,55,42,70,50,80].map((h,i)=>(
                <div key={i} className="w-6 bg-primary/30 rounded-t" style={{height:h}}></div>
              ))}
            </div>
          </motion.div>

          <motion.div style={{y:y3}} className="glass rounded-3xl p-5 w-72 md:w-80 lg:w-96 shadow-glow absolute left-10 bottom-0">
            <p className="text-sm text-body mb-2">Realtime</p>
            <svg viewBox="0 0 300 100" className="w-full">
              <path d="M0 70 C 50 50, 80 90, 130 60 S 220 30, 300 70" stroke="#C084FC" strokeWidth="3" fill="none"/>
              <circle cx="220" cy="30" r="5" fill="#F43F5E"/>
            </svg>
          </motion.div>
        </div>

        <div>
          <p className="inline-flex px-3 py-1 rounded-full text-sm bg-primary/10 text-primary font-medium mb-4">REAL-TIME ANALYTICS</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Make informed decisions instantly</h2>
          <p className="mt-4 text-body max-w-xl">Des cartes vitrées empilées et animées pour visualiser tes données en un clin d’œil. Zéro friction.</p>
          <a href="#demo" className="btn-primary mt-6 inline-flex">Request your demo</a>
        </div>
      </div>
    </section>
  );
}
