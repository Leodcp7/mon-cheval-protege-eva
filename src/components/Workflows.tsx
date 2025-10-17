import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "./motion";

export default function Workflows() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset:["start end","end start"] });
  const y = useTransform(scrollYProgress, [0,1], [-8,8]);

  return (
    <section id="features" ref={ref} className="relative py-20">
      <div className="halo top-10 left-1/3 h-72 w-72 bg-primary/25"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="inline-flex px-3 py-1 rounded-full text-sm bg-primary/10 text-primary font-medium mb-4">AUTOMATED WORKFLOWS</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Save hours every day</h2>
          <p className="mt-4 text-body max-w-xl">Orchestrez vos outils (Slack, Notion, Intercom…) et laissez Flowline automatiser les étapes répétitives.</p>
          <a href="#demo" className="btn-primary mt-6 inline-flex">Request your demo</a>
        </div>

        {/* mini-flowchart */}
        <motion.div style={{ y }} className="relative">
          <div className="absolute -inset-6 -z-10 bg-primary/20 blur-3xl rounded-full"></div>
          <div className="grid grid-cols-2 gap-6">
            {["Slack","Notion","Intercom","ChatGPT"].map((name,i)=>(
              <motion.div key={name} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.08}} viewport={{once:true}}
                className="glass rounded-2xl p-4">
                <div className="h-10 w-10 rounded-xl bg-primary/15 flex items-center justify-center mb-3">
                  <span className="text-primary font-semibold">{name[0]}</span>
                </div>
                <p className="font-semibold">{name}</p>
                <p className="text-sm text-body/80">Connected node</p>
              </motion.div>
            ))}
          </div>
          {/* connectors (simple) */}
          <svg className="absolute inset-0 -z-10" viewBox="0 0 600 300">
            <path d="M60 70 C 200 60, 200 140, 320 130" stroke="rgba(139,92,246,.25)" strokeWidth="6" fill="none" strokeLinecap="round"/>
            <path d="M60 220 C 200 210, 200 150, 320 160" stroke="rgba(139,92,246,.25)" strokeWidth="6" fill="none" strokeLinecap="round"/>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
