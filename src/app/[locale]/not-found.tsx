import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-serif text-2xl tracking-tight text-cobalt">
        Mara Salas
      </p>
      <h1 className="max-w-lg font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
        This page does not exist. / Esta página no existe.
      </h1>
      <div className="flex items-center gap-3 text-sm">
        <Link
          href="/en"
          className="bg-cobalt px-5 py-2.5 font-medium text-bone transition hover:bg-cobalt-deep"
        >
          English
        </Link>
        <Link
          href="/es"
          className="border border-line bg-paper px-5 py-2.5 font-medium text-ink transition hover:border-cobalt"
        >
          Español
        </Link>
      </div>
    </main>
  );
}
