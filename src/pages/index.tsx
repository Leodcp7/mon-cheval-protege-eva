import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Workflows from "@/components/Workflows";
import Analytics from "@/components/Analytics";
import Integrations from "@/components/Integrations";
import Comparison from "@/components/Comparison";
import Steps from "@/components/Steps";
import DemoForm from "@/components/DemoForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Flowline — Effortless Efficiency</title>
        <meta name="description" content="Framer-like premium landing: automated workflows, realtime analytics, seamless integrations."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="relative min-h-screen">
        {/* subtle radial page bg */}
        <div className="pointer-events-none fixed inset-0">
          <div className="absolute top-[-20%] right-[-10%] h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[-10%] h-[36rem] w-[36rem] rounded-full bg-primary2/20 blur-3xl"></div>
        </div>

        <Navbar />
        <Hero />
        <Workflows />
        <Analytics />
        <Integrations />
        <Comparison />
        <Steps />
        <DemoForm />
        <Footer />
      </main>
    </>
  );
}
