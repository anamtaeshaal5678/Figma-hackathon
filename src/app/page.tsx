import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import  Index from './components/Index';
import page from "./components/page";

export default function Home() {
  return (
    <div >
      < Navbar />
      <Header /> 
      <Hero/>
    <Index/>
    <page/>
    </div>
  );
}
