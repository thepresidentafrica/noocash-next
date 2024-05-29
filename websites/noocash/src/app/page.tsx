import { TrpcPage } from "@/components/Hello/TrpcPage";
import { HeroComponent } from "@/components/HeroComponent";
import { appName } from "@/types/general";
export default async function Home() {
  return (
    <main className=" ">
       <div className="">
       <HeroComponent  />
        </div>
       
    </main>
  );
}
