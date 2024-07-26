import Image from "next/image";
import Offer from "./components/Offer";
import Hero from "./components/Hero";
import Download from "./components/Download";
import Steps from "./components/Steps";

export default function Home() {
  return (
    <>
    <div className=" bg-[#FAFAFA] overflow-x-hidden w-screen">
    <Offer></Offer>
    <Hero></Hero>
    <Download/>
    <Steps></Steps>
    </div>
    </>
  );
}
