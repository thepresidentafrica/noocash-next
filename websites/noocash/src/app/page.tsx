import { TrpcPage } from "@/components/Hello/TrpcPage";
import { HeroComponent } from "@/components/HeroComponent";
import { appName } from "@/types/general";
export default async function Home() {
  return (
    <main className=" ">
       <div className="">
        <h1 data-aos="fade-up">Welcome to {appName}</h1>
       <HeroComponent  />
        </div>
        <h1 data-aos="fade-up">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum ipsum quaerat possimus doloribus sed rem harum explicabo eos, quae id dolore ea in. Amet sunt deleniti totam. Aliquam, debitis veritatis architecto, sint praesentium maxime voluptatum, officiis quo magni voluptates iusto?
        </h1>
    </main>
  );
}
