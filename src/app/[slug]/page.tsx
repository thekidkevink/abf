import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";

const content: Record<
  string,
  { label: string; title: string; intro: string; detail: string }
> = {
  about: {
    label: "Our company",
    title: "A deeper commitment to the sea.",
    intro:
      "ABF Fisheries is a Namibian company with an international perspective.",
    detail:
      "From Walvis Bay, our people bring care, technical skill and a respect for the marine environment to every part of the journey.",
  },
  products: {
    label: "Our products",
    title: "Pure, cold-water quality.",
    intro:
      "Our seafood is selected and processed to meet the exacting expectations of global customers.",
    detail:
      "A future product catalogue can live here, complete with specifications, certifications and availability.",
  },
  fleet: {
    label: "Our fleet",
    title: "Capability beyond the horizon.",
    intro:
      "Our operational foundation is a modern fleet engineered for consistency and safety.",
    detail:
      "Meet the vessels and teams that carry ABF’s standards into the Atlantic.",
  },
  sustainability: {
    label: "Sustainability",
    title: "Protecting what provides.",
    intro: "Long-term value means doing the right thing for the ocean today.",
    detail:
      "This area is ready for reporting, certifications and the measurable progress behind our commitments.",
  },
  gallery: {
    label: "Gallery",
    title: "The Atlantic, in focus.",
    intro: "A visual record of our people, waters and working life.",
    detail:
      "A dedicated media library will make the ABF story tangible for partners and customers.",
  },
  news: {
    label: "Latest news",
    title: "Notes from the coast.",
    intro:
      "Company news, industry insight and stories from the people behind ABF.",
    detail:
      "This page is structured for a future Sanity-powered editorial feed.",
  },
  careers: {
    label: "Careers",
    title: "Build your future with ABF.",
    intro:
      "We value skilled, thoughtful people with an appetite for meaningful work.",
    detail: "Future vacancies and application flows will be managed here.",
  },
  contact: {
    label: "Contact us",
    title: "Let’s start a conversation.",
    intro:
      "Whether you are sourcing seafood or exploring a partnership, we would like to hear from you.",
    detail:
      "Walvis Bay Harbour, Namibia · info@abffisheries.com · +264 00 000 0000",
  },
};
export function generateStaticParams() {
  return Object.keys(content).map((slug) => ({ slug }));
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = content[slug];
  if (!page) notFound();
  return (
    <SiteShell>
      <main>
        <section className="hero page-hero">
          <div className="hero-content">
            <p className="eyebrow">{page.label}</p>
            <h1>{page.title}</h1>
            <p>{page.intro}</p>
          </div>
        </section>
        <section className="section">
          <div className="split">
            <div>
              <p className="statement">{page.detail}</p>
            </div>
            <div className="image-block" />
          </div>
        </section>
        <section className="section section-ice">
          <div className="section-heading">
            <p className="eyebrow">ABF Fisheries</p>
            <h2>Designed for today. Ready for what’s next.</h2>
            <p>
              Thoughtful placeholder content makes this foundation ready to
              evolve with your company’s real story, content and systems.
            </p>
            <Link className="button" href="/contact">
              Get in touch <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
