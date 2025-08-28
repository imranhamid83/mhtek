export default function ServicesPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">Services</h1>
      <ul className="grid gap-4 sm:grid-cols-2">
        <li className="rounded-lg border border-slate-200 p-5 bg-white">
          <h3 className="font-semibold text-slate-900">IT Strategy & Architecture</h3>
          <p className="text-sm text-slate-600">Roadmaps, platform choices, security posture, and governance.</p>
        </li>
        <li className="rounded-lg border border-slate-200 p-5 bg-white">
          <h3 className="font-semibold text-slate-900">Cloud & DevOps Enablement</h3>
          <p className="text-sm text-slate-600">CI/CD, infrastructure as code, observability, SRE practices.</p>
        </li>
        <li className="rounded-lg border border-slate-200 p-5 bg-white">
          <h3 className="font-semibold text-slate-900">Application Development</h3>
          <p className="text-sm text-slate-600">Modern web apps, APIs, integrations, and data flows.</p>
        </li>
        <li className="rounded-lg border border-slate-200 p-5 bg-white">
          <h3 className="font-semibold text-slate-900">Security Reviews</h3>
          <p className="text-sm text-slate-600">Threat modeling, controls, and compliance guidance.</p>
        </li>
      </ul>
      <div>
        <h2 className="text-2xl font-semibold mb-2 text-slate-900">Add your service descriptions</h2>
        <p className="text-slate-600">Describe deliverables, packages, or engagement models.</p>
      </div>
    </section>
  );
}


