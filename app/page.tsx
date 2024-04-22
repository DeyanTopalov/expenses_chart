import Image from "next/image";
import Header from "@/components/header";
import Card from "@components/card";

export default function Home() {
  return (
    <section className="grid w-full max-w-[33.75rem] gap-6">
      <Header className="bg-clr-soft-red w-full rounded-xl" />
      <Card className=" h-[421px] w-full rounded-xl bg-white px-5 pt-6 shadow-lg" />
    </section>
  );
}
