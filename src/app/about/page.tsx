export default function AboutPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">About MHTEK</h1>
      <p className="text-slate-600 max-w-3xl">
        MHTEK is an IT consultancy focused on delivering secure, scalable, and maintainable
        software solutions. We partner with startups and enterprises to accelerate delivery
        and reduce operational risk.
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-slate-200 p-5 bg-white">
          <h3 className="font-semibold mb-1 text-slate-900">Mission</h3>
          <p className="text-sm text-slate-600">Enable teams to build with confidence and speed.</p>
        </div>
        <div className="rounded-lg border border-slate-200 p-5 bg-white">
          <h3 className="font-semibold mb-1 text-slate-900">Values</h3>
          <p className="text-sm text-slate-600">Clarity, craftsmanship, and measurable impact.</p>
        </div>
        <div className="rounded-lg border border-slate-200 p-5 bg-white">
          <h3 className="font-semibold mb-1 text-slate-900">Approach</h3>
          <p className="text-sm text-slate-600">Collaborative, transparent, and outcome-driven.</p>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2 text-slate-900">Your story here</h2>
        <p className="text-slate-600">Add background, mission, and values for MHTEK.</p>
      </div>
    </section>
  );
}


