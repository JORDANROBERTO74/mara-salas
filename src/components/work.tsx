"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, X } from "lucide-react";
import { site } from "@/config/site";
import type { Dictionary, Project } from "@/i18n/dictionaries/en";

function ProjectCard({
  project,
  dict,
  onOpen,
  priority,
  sizes,
}: {
  project: Project;
  dict: Dictionary;
  onOpen: () => void;
  priority?: boolean;
  sizes: string;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group block w-full text-left"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-sand">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        <span className="absolute right-3 top-3 flex size-9 items-center justify-center bg-bone/90 text-cobalt opacity-0 transition-opacity group-hover:opacity-100">
          <ArrowUpRight className="size-4" />
        </span>
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-[9px] uppercase tracking-[0.16em] text-muted">
            {project.year} · {project.location}
          </p>
          <h3 className="mt-1.5 font-serif text-[26px] leading-tight tracking-tight md:text-[30px]">
            {project.title}
          </h3>
        </div>
        <span className="mt-1 shrink-0 text-[9px] uppercase tracking-[0.16em] text-cobalt">
          {project.category}
        </span>
      </div>

      <p className="mt-2 max-w-[52ch] text-[13px] leading-6 text-muted">
        {project.summary}
      </p>

      <span className="mt-3 inline-flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.16em] text-ink">
        {dict.work.view}
        <span className="h-px w-5 bg-cobalt transition-all group-hover:w-8" />
      </span>
    </button>
  );
}

export function Work({ dict }: { dict: Dictionary }) {
  const [active, setActive] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    if (active && !dialog.open) {
      dialog.showModal();
    }

    if (!active && dialog.open) {
      dialog.close();
    }
  }, [active]);

  const projects = dict.projects;
  const activeIndex = active
    ? projects.findIndex((project) => project.slug === active.slug)
    : -1;
  const nextProject =
    activeIndex >= 0
      ? projects[(activeIndex + 1) % projects.length]
      : projects[0];

  const handleNext = () => {
    setActive(nextProject);
    dialogRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="work" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cobalt">
              {dict.work.label}
            </p>
            <h2 className="mt-4 max-w-[16ch] font-serif text-4xl leading-[1.02] tracking-tight md:text-5xl">
              {dict.work.title}
            </h2>
          </div>
          <p className="max-w-[38ch] text-[13px] leading-6 text-muted">
            {dict.work.intro}
          </p>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <ProjectCard
              project={projects[0]}
              dict={dict}
              onOpen={() => setActive(projects[0])}
              priority
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </div>
          <div className="md:col-span-5 md:mt-24">
            <ProjectCard
              project={projects[1]}
              dict={dict}
              onOpen={() => setActive(projects[1])}
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <div className="md:col-span-5">
            <ProjectCard
              project={projects[2]}
              dict={dict}
              onOpen={() => setActive(projects[2])}
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <div className="md:col-span-7 md:mt-16">
            <ProjectCard
              project={projects[3]}
              dict={dict}
              onOpen={() => setActive(projects[3])}
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </div>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="project-title"
        onClose={() => setActive(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) {
            dialogRef.current?.close();
          }
        }}
        className="m-auto max-h-[90dvh] w-[calc(100%-1.5rem)] max-w-[1080px] overflow-y-auto border border-line bg-bone p-0 text-ink shadow-2xl"
      >
        {active && (
          <article>
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-bone/95 px-5 py-4 backdrop-blur md:px-8">
              <p className="text-[9px] font-medium uppercase tracking-[0.16em] text-cobalt">
                {dict.work.dialog.details}
              </p>
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                aria-label={dict.work.dialog.close}
                className="flex size-8 items-center justify-center border border-line text-ink transition hover:border-cobalt hover:text-cobalt"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="px-5 pb-7 pt-7 md:px-10 md:pt-10">
              <p className="text-[9px] uppercase tracking-[0.16em] text-muted">
                {active.category} · {active.year} · {active.location}
              </p>
              <h2
                id="project-title"
                className="mt-3 font-serif text-4xl leading-none tracking-tight md:text-6xl"
              >
                {active.title}
              </h2>
              <p className="mt-4 max-w-[58ch] text-[15px] leading-7 text-muted">
                {active.summary}
              </p>
            </div>

            <div className="relative aspect-[16/9] w-full bg-sand">
              <Image
                src={active.cover.src}
                alt={active.cover.alt}
                fill
                sizes="(max-width: 1080px) 100vw, 1080px"
                className="object-cover"
              />
            </div>

            <div className="px-5 py-8 md:px-10 md:py-10">
              <div className="grid gap-10 md:grid-cols-12">
                <div className="space-y-5 text-[14px] leading-7 md:col-span-7">
                  {active.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <aside className="md:col-span-4 md:col-start-9">
                  <dl className="border-y border-line">
                    {active.facts.map((fact) => (
                      <div
                        key={fact.label}
                        className="flex justify-between gap-4 border-b border-line py-3 last:border-b-0"
                      >
                        <dt className="text-[9px] uppercase tracking-[0.14em] text-muted">
                          {fact.label}
                        </dt>
                        <dd className="text-right text-[11.5px] font-medium">
                          {fact.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="relative mt-6 aspect-[4/3] overflow-hidden bg-sand">
                    <Image
                      src={active.detail.src}
                      alt={active.detail.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 30vw"
                      className="object-cover"
                    />
                  </div>

                  <a
                    href={`mailto:${site.email}?subject=${encodeURIComponent(
                      `${dict.work.dialog.cta} — ${active.title}`,
                    )}`}
                    className="mt-6 inline-flex items-center gap-2 bg-cobalt px-5 py-3 text-[10px] font-medium uppercase tracking-[0.14em] text-bone transition hover:bg-cobalt-deep"
                  >
                    {dict.work.dialog.cta}
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </aside>
              </div>
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="flex w-full items-center justify-between border-t border-line px-5 py-5 text-left transition hover:bg-sand md:px-10"
            >
              <span>
                <span className="block text-[9px] uppercase tracking-[0.16em] text-muted">
                  {dict.work.dialog.next}
                </span>
                <span className="mt-1 block font-serif text-2xl tracking-tight">
                  {nextProject.title}
                </span>
              </span>
              <ArrowRight className="size-5 text-cobalt" />
            </button>
          </article>
        )}
      </dialog>
    </section>
  );
}
