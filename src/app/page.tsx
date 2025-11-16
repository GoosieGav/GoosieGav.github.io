"use client";

import Image from "next/image";
import Hero from "@/components/ui/animated-shader-hero";
import { Rocket, Sparkles, Star } from "lucide-react";

export default function Home() {
  const trustIcons = [
    <Sparkles key="sparkles" className="h-4 w-4" />,
    <Rocket key="rocket" className="h-4 w-4" />,
    <Star key="star" className="h-4 w-4" />,
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero
        trustBadge={{
          text: "Trusted by founders shipping ambitious, AI-native products.",
          icons: trustIcons,
        }}
        headline={{
          line1: "Launch Your Vision",
          line2: "Into The Web Frontier",
        }}
        subtitle="I craft cinematic web experiences that blend advanced shaders, responsive design systems, and conversion-focused storytelling—so your product feels as alive as your roadmap."
        buttons={{
          primary: {
            text: "Plan a Build Sprint",
            onClick: () => console.log("Plan a Build Sprint"),
          },
          secondary: {
            text: "See Case Studies",
            onClick: () => console.log("See Case Studies"),
          },
        }}
      />

      <section className="bg-white text-slate-900">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 md:flex-row">
          <div className="flex-1 space-y-6">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
              2025 Portfolio Preview
            </p>
            <h2 className="text-4xl font-semibold leading-tight text-slate-900">
              Shader-driven hero, thoughtful copy, and production-ready CTA flows packaged as a reusable component.
            </h2>
            <p className="text-lg text-slate-600">
              Drop the <code>Hero</code> directly into any page, pass your product messaging, and
              you&apos;ll instantly get an immersive landing experience that performs on both desktop
              and mobile.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Reactive canvas core",
                  body: "WebGL2 shader responds to pointer input for a tactile feel.",
                },
                {
                  title: "Tailwind + shadcn ready",
                  body: "Fits right into the /components/ui structure with typings included.",
                },
                {
                  title: "CTA analytics hooks",
                  body: "Buttons accept callbacks so you can wire metrics immediately.",
                },
                {
                  title: "Story-first copy",
                  body: "Swap in your narrative and the layout keeps things cinematic.",
                },
              ].map((feature) => (
                <div key={feature.title} className="rounded-2xl border border-slate-200/80 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                  <p className="mt-2 text-slate-600">{feature.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <div className="relative h-96 overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&w=1600&q=80"
                alt="Futuristic workspace with neon glow"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Imagery courtesy of Unsplash. Shot by a Neonbrand photographer, perfect for tech-forward storytelling.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl rounded-3xl bg-slate-50 p-10 shadow-inner">
          <h3 className="text-2xl font-semibold text-slate-900">
            How to drop this hero into any project
          </h3>
          <p className="mt-2 text-slate-600">
            Pass in your copy, trust badges, and CTA callbacks. Everything else—the shader canvas,
            animations, and layout—is handled for you.
          </p>
          <pre className="mt-6 overflow-x-auto rounded-2xl bg-white p-6 text-sm text-slate-800">
{`<Hero
  trustBadge={{
    text: "Loved by product-led teams.",
    icons: [<Sparkles />, <Rocket />, <Star />],
  }}
  headline={{
    line1: "Ship Bold Launches",
    line2: "With Cinematic Energy",
  }}
  subtitle="Pair expressive motion with enterprise-ready code."
  buttons={{
    primary: { text: "Book a Session", onClick: onPrimary },
    secondary: { text: "View Highlights", onClick: onSecondary },
  }}
/>`}
          </pre>
        </div>
      </section>
    </div>
  );
}
