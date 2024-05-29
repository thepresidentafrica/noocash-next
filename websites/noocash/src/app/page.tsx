import { KeyFeatures } from "@/components";
import { HeroComponent } from "@/components/HeroComponent";
export default async function Home() {
  return (
    <main className="space-y-6">
      <HeroComponent />
      <KeyFeatures/>
    </main>
  );
}
