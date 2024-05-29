import { KeyFeatures, SharedSectionGrid } from "@/components";
import { HeroComponent } from "@/components/HeroComponent";
export default async function Home() {
  return (
    <main className="space-y-6">
      <HeroComponent />
      <KeyFeatures />
      <SharedSectionGrid  descriptions={
        <div className="px-4 mx-3 space-y-6">
          <p>
            Noo Cash allows users to create virtual cards. These virtual cards can be used to pay for goods and services online. Users can create a A Local Currency virtual card ( Based on their African Country), or a Dollar virtual card (USD Card).
          </p>
          <p>
            The experience of the virtual dollar card was also improved by redesigning the confirmation screens, this is to ensure that user confirm a transaction before it goes through.
          </p>
        </div>

      } title="Multi Currency Virtual Cards " image="/hero/vcards.png" />
    </main>
  );
}
