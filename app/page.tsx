import Link from "next/link";
import { appConfig } from "@/app.config";

const highlights = [
  { emoji: "🏋️", title: "Treinos", text: "Receba os treinos do seu personal." },
  { emoji: "🥗", title: "Dieta", text: "Receba a dieta do seu nutricionista." },
  { emoji: "📈", title: "Evolução", text: "Acompanhe seu progresso treino a treino." },
];

export default function Home() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 py-20 text-center">
      <span className="text-6xl" aria-hidden>
        {appConfig.emoji}
      </span>
      <h1 className="text-5xl font-bold tracking-tight">{appConfig.name}</h1>
      <p className="max-w-xl text-lg text-black/70">{appConfig.description}</p>
      <ul className="grid w-full gap-4 sm:grid-cols-3">
        {highlights.map((item) => (
          <li
            key={item.title}
            className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm"
          >
            <span className="text-2xl" aria-hidden>
              {item.emoji}
            </span>
            <h2 className="mt-1 font-semibold">{item.title}</h2>
            <p className="text-sm text-black/60">{item.text}</p>
          </li>
        ))}
      </ul>
      <Link
        href="/dashboard"
        className="rounded-full bg-accent px-6 py-3 font-medium text-white shadow-sm transition hover:opacity-90"
      >
        Quero acesso antecipado →
      </Link>
    </section>
  );
}
