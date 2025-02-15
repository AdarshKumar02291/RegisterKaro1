import Image from "next/image";
import Offer from "./components/Offer";
import Hero from "./components/Hero";
import Download from "./components/Download";
import Steps from "./components/Steps";
import Advantage from "./components/Advantage";
import Guidance from "./components/Guidance";
import Logo from "./components/Logo";
import Testimonial from "./components/Testimonial";
import Questions from "./components/Questions";
import Footer from "./components/Footer";
import "./globals.css"
import {Montserrat} from "@next/font/google"

const mont = Montserrat({
  subsets :['latin']
})

export default function Home() {
  return (
    <>
    <main className={mont.className}>
    <div className=" bg-[#FAFAFA] overflow-x-hidden w-screen">
    <Offer></Offer>
    <Hero></Hero>
    <Download/>
    <Steps></Steps>
    <Advantage></Advantage>
    <Guidance></Guidance>
    <Logo></Logo>
    <Testimonial></Testimonial>
    <Questions></Questions>
    <Footer></Footer>
    </div>
    </main>
    </>
  );
}
