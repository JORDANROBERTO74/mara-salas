import type { Dictionary } from "@/i18n/get-dictionary";

export function Process({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-t border-line">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cobalt">
              {dict.process.label}
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.02] tracking-tight md:text-5xl">
              {dict.process.title}
            </h2>
          </div>
          <p className="max-w-[34ch] text-[13px] leading-6 text-muted">
            {dict.process.intro}
          </p>
        </div>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {dict.process.steps.map((step, index) => (
            <li key={step.title} className="border-t border-line pt-5">
              <span className="font-serif text-3xl leading-none text-cobalt">
                0{index + 1}
              </span>
              <h3 className="mt-4 font-serif text-2xl leading-tight tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-[12.5px] leading-6 text-muted">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
