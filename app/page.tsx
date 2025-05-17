import JuiceCup from "./components/JuiceCup";
import { Chau_Philomene_One } from "next/font/google";

const chauPhilomeneOne = Chau_Philomene_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1
        className={`text-[70px] font-bold text-center text-black ${chauPhilomeneOne.className}`}
      >
        Ribethena Fresh Juice Drink
      </h1>
      <p className="text-center max-w-2xl z-10 mb-10">
        Ribethena is a vibrant, reddish fruit juice blend made from a secret mix
        of tangy forest berries and a hint of wild valters. Its bold flavor and
        refreshing zing make it the perfect pick-me-up for any time of day..
      </p>
      <div className="relative w-full h-full">
        <JuiceCup />
      </div>
    </div>
  );
}
