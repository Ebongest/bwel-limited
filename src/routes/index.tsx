import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ExternalLink,
  MapPin,
  Menu,
  Phone,
  ShoppingBag,
} from "lucide-react";

import bwelHero from "@/assets/bwel-lagos-commerce.jpg";
import { BrandMark } from "@/components/bwel/brand-mark";
import { EbongestWidget } from "@/components/bwel/ebongest-widget";
import { VoiceCallButton } from "@/components/bwel/voice-call-button";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { company, navigation, pillars, workSteps } from "@/data/company";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BWEL LIMITED — Trade with confidence" },
      {
        name: "description",
        content:
          "BWEL LIMITED is a Lagos trading company bringing care, clarity and dependable service to everyday commerce.",
      },
      { property: "og:title", content: "BWEL LIMITED — Be Rest Assured" },
      {
        property: "og:description",
        content:
          "Trade with the confidence to move forward. Dependable commerce from Lagos, Nigeria.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-40 border-b border-primary-foreground/20">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <BrandMark inverse />
        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-primary-foreground/85 transition-colors hover:text-primary-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 sm:flex">
          <Button asChild variant="heroLight" size="lg">
            <a href={company.shopUrl} target="_blank" rel="noreferrer">
              Visit Our Shop <ExternalLink />
            </a>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="heroGhost" size="icon" className="sm:hidden" aria-label="Open menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[86vw] bg-background p-7">
            <div className="mt-12 flex flex-col gap-2">
              {navigation.map((item) => (
                <SheetClose asChild key={item.href}>
                  <a
                    href={item.href}
                    className="border-b border-border py-4 text-lg font-bold text-foreground"
                  >
                    {item.label}
                  </a>
                </SheetClose>
              ))}
              <Button asChild size="lg" className="mt-6">
                <a href={company.shopUrl} target="_blank" rel="noreferrer">
                  Visit Our Shop <ExternalLink />
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function SectionHeading({
  eyebrow,
  title,
  intro,
  inverse = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  inverse?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p
        className={
          inverse
            ? "mb-5 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-gold"
            : "mb-5 text-xs font-extrabold uppercase tracking-[0.2em] text-primary"
        }
      >
        {eyebrow}
      </p>
      <h2
        className={
          inverse
            ? "font-display text-3xl font-extrabold leading-tight text-primary-foreground sm:text-5xl"
            : "font-display text-3xl font-extrabold leading-tight text-foreground sm:text-5xl"
        }
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={
            inverse
              ? "mt-6 max-w-2xl text-base leading-7 text-footer-muted sm:text-lg"
              : "mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg"
          }
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}

function Hero() {
  return (
    <section
      className="relative min-h-[760px] overflow-hidden bg-footer sm:min-h-[820px]"
      aria-labelledby="hero-title"
    >
      <img
        src={bwelHero}
        alt="BWEL trading operations in a bright Lagos distribution warehouse"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[62%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--footer)_0%,color-mix(in_oklab,var(--footer)_94%,transparent)_38%,color-mix(in_oklab,var(--footer)_32%,transparent)_72%,color-mix(in_oklab,var(--footer)_18%,transparent)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(0deg,var(--footer),transparent)]" />
      <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-end px-5 pb-16 pt-32 sm:min-h-[820px] sm:items-center sm:px-8 sm:pb-20 lg:px-10">
        <div className="max-w-3xl">
          <div className="mb-7 flex items-center gap-3 text-primary-foreground/85">
            <span className="h-px w-10 bg-brand-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">
              Lagos · Est. 2019 · {company.registration}
            </span>
          </div>
          <h1
            id="hero-title"
            className="font-display text-5xl font-extrabold leading-[0.98] text-primary-foreground sm:text-7xl lg:text-8xl"
          >
            BWEL <span className="text-primary">LIMITED</span>
          </h1>
          <p className="mt-7 max-w-2xl font-display text-2xl font-semibold leading-tight text-primary-foreground sm:text-4xl">
            Trade with the confidence to move forward.
          </p>
          <p className="mt-6 max-w-xl text-base leading-7 text-primary-foreground/80 sm:text-lg">
            A trading company bringing care, clarity and dependable service to everyday commerce.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="heroLight" size="xl">
              <a href={company.shopUrl} target="_blank" rel="noreferrer">
                Visit Our Shop <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="heroGhost" size="xl">
              <a href="#about">
                Discover BWEL <ArrowDown />
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 hidden w-80 bg-primary px-8 py-6 text-primary-foreground lg:block">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground/70">
          Our promise
        </p>
        <p className="mt-2 font-display text-2xl font-extrabold">{company.tagline}.</p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <SectionHeading
            eyebrow="The BWEL standard"
            title="Business is better when every detail is handled with care."
            intro="We believe confidence comes from the small things done properly — clear expectations, dependable follow-through and a genuine regard for the people we serve."
          />
          <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="bg-background p-7 sm:min-h-72 lg:p-8">
                <div className="grid size-12 place-items-center rounded-sm bg-brand-sky text-primary">
                  <pillar.icon />
                </div>
                <h3 className="mt-12 font-display text-xl font-extrabold text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HowWeWork() {
  return (
    <section id="approach" className="scroll-mt-20 bg-brand-sky py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="How we work" title="A steady approach to every transaction." />
          <p className="max-w-md text-base leading-7 text-muted-foreground">
            Good trade should feel clear from the first conversation to the final handover.
          </p>
        </div>
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {workSteps.map((step) => (
            <article key={step.number} className="group border-t-2 border-primary pt-7">
              <div className="flex items-start justify-between">
                <span className="grid size-14 place-items-center rounded-sm bg-primary text-primary-foreground">
                  <step.icon />
                </span>
                <span className="font-display text-4xl font-extrabold text-primary/20">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-10 font-display text-2xl font-extrabold text-foreground">
                {step.title}
              </h3>
              <p className="mt-4 max-w-sm leading-7 text-muted-foreground">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Shop() {
  return (
    <section className="overflow-hidden bg-primary py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:px-10">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary-foreground/70">
            BWEL Online Shop
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-3xl font-extrabold leading-tight text-primary-foreground sm:text-5xl">
            The same steady approach, now online.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-primary-foreground/80">
            Browse and buy with the reassurance of a business built on clear standards and
            dependable service.
          </p>
        </div>
        <Button asChild variant="heroLight" size="xl">
          <a href={company.shopUrl} target="_blank" rel="noreferrer">
            <ShoppingBag /> Shop with BWEL <ExternalLink />
          </a>
        </Button>
      </div>
    </section>
  );
}

function CompanyProfile() {
  const facts = [
    ["Registered name", company.name],
    ["Business sector", company.sector],
    ["Registration", company.registration],
    ["Commenced", company.commenced],
    ["Head office", company.location],
  ];
  return (
    <section id="company" className="scroll-mt-20 bg-background py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-10">
        <div>
          <SectionHeading
            eyebrow="Company profile"
            title="Established, registered and ready to serve."
            intro="BWEL LIMITED is a duly registered Nigerian company operating from Lagos with a clear focus on responsible trade."
          />
          <div className="mt-8 inline-flex items-center gap-3 rounded-sm bg-brand-aqua px-4 py-3 text-sm font-bold text-foreground">
            <Check className="text-primary" /> Verified company details
          </div>
        </div>
        <dl className="border-t border-border">
          {facts.map(([label, value]) => (
            <div
              key={label}
              className="grid gap-2 border-b border-border py-6 sm:grid-cols-[0.75fr_1.25fr] sm:items-center"
            >
              <dt className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                {label}
              </dt>
              <dd className="font-display text-lg font-extrabold text-foreground sm:text-xl">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-footer py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading
              inverse
              eyebrow="Contact BWEL"
              title="Let’s move business forward."
              intro="Have a trading enquiry or need help with an order? Speak directly with our Lagos team."
            />
            <div className="mt-10 space-y-7">
              <a
                href={`tel:${company.phoneHref}`}
                className="group flex items-center gap-4 text-primary-foreground"
              >
                <span className="grid size-11 place-items-center rounded-sm bg-primary">
                  <Phone />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.14em] text-footer-muted">
                    Call us
                  </span>
                  <span className="mt-1 block text-lg font-bold group-hover:text-brand-gold">
                    {company.phoneDisplay}
                  </span>
                </span>
              </a>
              <div className="flex items-start gap-4 text-primary-foreground">
                <span className="grid size-11 shrink-0 place-items-center rounded-sm bg-primary">
                  <MapPin />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.14em] text-footer-muted">
                    Visit us
                  </span>
                  <span className="mt-1 block max-w-xs text-lg font-bold leading-7">
                    {company.address}
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="min-h-[360px] overflow-hidden rounded-md border border-primary-foreground/15 bg-muted sm:min-h-[460px]">
            <iframe
              title="BWEL Limited office location on Google Maps"
              src={company.mapUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[360px] w-full border-0 sm:min-h-[460px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-primary-foreground/10 bg-footer py-10 text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <BrandMark inverse />
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-footer-muted hover:text-primary-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href={company.shopUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-brand-gold"
          >
            Online Shop
          </a>
        </nav>
        <p className="text-xs text-footer-muted">
          © {new Date().getFullYear()} BWEL LIMITED · {company.registration}
        </p>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <HowWeWork />
        <Shop />
        <CompanyProfile />
        <Contact />
      </main>
      <Footer />
      <VoiceCallButton />
      <EbongestWidget />
    </div>
  );
}
