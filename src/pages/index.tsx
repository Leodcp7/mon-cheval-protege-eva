import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mon Cheval Protégé</title>
      </Head>
      <div className="relative bg-pageBg text-textDark overflow-x-hidden">
        <Navbar />
        <main className="relative">
          <Hero />
        </main>
      </div>
    </>
  );
}
