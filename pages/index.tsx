import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto min-h-screen">
      <section className="px-6 fixed top-0 left-0 right-0">
        <Navigation />
      </section>
      <section className="pt-16">
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-6xl font-bold">퍼플아이오</h1>
        </div>
      </section>
    </main>
  );
}
