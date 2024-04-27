import Header from "@/components/header";
import Card from "@components/card";

export default function Home() {
  return (
    <section className="grid w-full max-w-[33.75rem] gap-4 md:gap-6">
      <Header className="bg-clr-soft-red w-full rounded-xl md:rounded-3xl" />
      <Card className="bg-clr-orange-200 h-full w-full rounded-xl px-5 pb-6 pt-6 shadow-lg md:rounded-3xl md:px-10 md:pb-10 md:pt-8" />
    </section>
  );
}
