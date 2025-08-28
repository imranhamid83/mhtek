"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ContactPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const params = new URLSearchParams({ name, email, query });
    router.push(`/contact/submitted?${params.toString()}`);
  }

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">Contact Us</h1>
      <p className="text-slate-600 max-w-2xl">
        Have a project in mind or need expert guidance? Send us a message.
      </p>
      <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm mb-1">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded-md bg-white border border-slate-300 px-3 py-2 outline-none focus:border-brand-400"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm mb-1">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-md bg-white border border-slate-300 px-3 py-2 outline-none focus:border-brand-400"
          />
        </div>
        <div>
          <label htmlFor="query" className="block text-sm mb-1">Query</label>
          <textarea
            id="query"
            rows={6}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
            className="w-full rounded-md bg-white border border-slate-300 px-3 py-2 outline-none focus:border-brand-400"
          />
        </div>
        <button type="submit" className="rounded-md bg-brand-600 hover:bg-brand-500 px-4 py-2 font-medium text-white">
          Submit
        </button>
      </form>

      <div>
        <h2 className="text-2xl font-semibold mb-2 text-slate-900">Additional details</h2>
        <p className="text-slate-600">Add location, availability, or contact channels here.</p>
      </div>
    </section>
  );
}


