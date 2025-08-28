import { redirect } from "next/navigation";

export default function SubmittedPage({ searchParams }: { searchParams: { name?: string; email?: string; query?: string } }) {
  const name = searchParams?.name ?? "";
  const email = searchParams?.email ?? "";
  const query = searchParams?.query ?? "";

  if (!name || !email || !query) {
    redirect("/contact");
  }

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Thank you, {name}!</h1>
      <p className="text-white/80">We received your message and will get back to you at <span className="font-medium">{email}</span>.</p>
      <div className="rounded-lg border border-white/10 p-4">
        <h2 className="font-semibold mb-2">Your Query</h2>
        <p className="whitespace-pre-wrap text-white/80">{query}</p>
      </div>
    </section>
  );
}


