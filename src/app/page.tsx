import Carousel from "@/components/Carousel";

export default function HomePage() {
  return (
    <section className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-slate-900">MHTEK: Trusted IT Consultancy</h1>
        <p className="text-slate-600 max-w-3xl">
          We help organizations plan, build, and scale reliable digital systems. Our consultants
          specialize in cloud architecture, DevOps, security, and modern full‑stack development.
        </p>
      </div>

      <Carousel
        slides={[
          {
            title: "Deliver faster with modern DevOps",
            subtitle: "CI/CD, IaC, and observability that scale with you",
            imageUrl: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop",
          },
          {
            title: "Cloud done right",
            subtitle: "Secure, resilient architectures on AWS, Azure, and GCP",
            imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
          },
          {
            title: "Engineering excellence",
            subtitle: "TypeScript, Node.js, and React for business impact",
            imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
          },
        ]}
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-slate-200 p-5 bg-white">
          <h3 className="font-semibold mb-1 text-slate-900">Cloud & DevOps</h3>
          <p className="text-sm text-slate-600">AWS, Azure, GCP, CI/CD, observability, cost optimization.</p>
        </div>
        <div className="rounded-lg border border-slate-200 p-5 bg-white">
          <h3 className="font-semibold mb-1 text-slate-900">Software Engineering</h3>
          <p className="text-sm text-slate-600">TypeScript, Node.js, React, microservices, APIs.</p>
        </div>
        <div className="rounded-lg border border-slate-200 p-5 bg-white">
          <h3 className="font-semibold mb-1 text-slate-900">Security & Compliance</h3>
          <p className="text-sm text-slate-600">Security reviews, best practices, risk assessments.</p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2 text-slate-900">Add your own introduction</h2>
        <p className="text-slate-600">Replace this text with your company overview.</p>
      </div>
    </section>
  );
}


