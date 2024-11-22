import { Parties } from "@/components/container partys";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold text-center py-6">Party Lists</h1>
      <Parties />
    </main>
  );
}
