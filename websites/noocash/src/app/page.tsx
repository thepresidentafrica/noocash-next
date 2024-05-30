import { KeyFeatures, SharedSectionGrid, Subscriptions } from "@/components";
import { HeroComponent } from "@/components/HeroComponent";
import { HowItWorks } from "@/components/HowItWorks/HowItWorks";
export default async function Home() {
  return (
    <main className="space-y-6">
      <HeroComponent />
      <KeyFeatures />
      <SharedSectionGrid descriptions={
        <div className="px-4 mx-3 space-y-6">
          <p>
            Noo Cash allows users to create virtual cards. These virtual cards can be used to pay for goods and services online. Users can create a A Local Currency virtual card ( Based on their African Country), or a Dollar virtual card (USD Card).
          </p>
          <p>
            The experience of the virtual dollar card was also improved by redesigning the confirmation screens, this is to ensure that user confirm a transaction before it goes through.
          </p>
        </div>

      } title="Multi Currency Virtual Cards "
        image="/hero/vcards.png"
      />

      <SharedSectionGrid descriptions={
        <div className="px-4 mx-3 space-y-6">
          <p>
            Users can create QR codes to receive money and also to reward other users on the platform easily. The QR code that was created will only be assigned to the specific user it was created to request money from, or to gift/reward.
          </p>
        </div>

      }
        order="order-first" bg="bg-white"
        title="Create QR Code to Receive Payments & Reward Users "
        image="/hero/qrcodes.png"
      />

      <HowItWorks />
      <Subscriptions/>
    </main>
  );
}
