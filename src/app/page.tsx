import { Hero, Benefits, Quiz } from "@/Components";

export default function home() {
  return (
    <main className="">
      {/* TODO Add page transitions */}
      <Hero />
      <Benefits />
      <Quiz />
    </main>
  );
}
