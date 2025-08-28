import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MHTEK | IT Consultancy",
  description: "MHTEK provides expert IT consultancy, cloud, and software services.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <div className="container-page flex items-center justify-between py-4">
            <Link href="/" className="text-xl font-semibold text-slate-900">MHTEK</Link>
            <nav className="flex gap-6 text-sm text-slate-700">
              <Link href="/" className="hover:text-brand-700">Home</Link>
              <Link href="/about" className="hover:text-brand-700">About Us</Link>
              <Link href="/services" className="hover:text-brand-700">Services</Link>
              <Link href="/contact" className="hover:text-brand-700">Contact Us</Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">
          <div className="container-page py-12">{children}</div>
        </main>

        <footer className="border-t border-slate-200 py-8 text-sm text-slate-600 bg-slate-50">
          <div className="container-page flex flex-col sm:flex-row gap-2 sm:items-center justify-between">
            <p>© {new Date().getFullYear()} MHTEK. All rights reserved.</p>
            <p className="text-slate-500">IT Consultancy • Cloud • Software Engineering</p>
          </div>
        </footer>
      </body>
    </html>
  );
}


