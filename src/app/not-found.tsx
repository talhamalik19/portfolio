import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function NotFound() {
  return (
    <div id="top">
      <Navbar />
      <main className="shell not-found">
        <p className="eyebrow">404 / PAGE NOT FOUND</p>
        <h1>Let’s get you<br /><em>back on track.</em></h1>
        <p>This page isn’t available. Explore my selected work instead.</p>
        <Link href="/#projects" className="button button-dark">View projects <ArrowUpRight size={18} aria-hidden="true" /></Link>
      </main>
      <Footer />
    </div>
  );
}
