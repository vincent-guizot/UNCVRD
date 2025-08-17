import Focusing from "@/components/Focusing";
import Galleries from "@/components/Galleries";
import Hero from "@/components/Hero";
import Information from "@/components/Information";
import OurStory from "@/components/OurStory";
import OurWorks from "@/components/OurWorks";
import Value from "@/components/Value";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <OurStory></OurStory>
      <OurWorks></OurWorks>
      <Focusing />
      <Galleries />
      <Value />
      <Information />
    </>
  );
}
