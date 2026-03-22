import Banner from '../components/Banner';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white px-6 py-10">
      <Banner />

      <section className="max-w-5xl mx-auto text-center mt-12">
        <h1 className="text-5xl font-bold mb-6">
          AI‑OS
        </h1>
        <p className="text-xl text-gray-300">
          下一代智能操作系统，为 AI 时代构建。
        </p>
      </section>
    </main>
  );
}
