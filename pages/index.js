import Head from "next/head";
import { Hero } from "../components/Hero";
import { Objective } from "../components/Objective";
import { FeaturesInstitutions } from "../components/FeaturesInstitutions";
import { Team } from "../components/Team";

export default function Home() {
  return (
    <>
      <Head>
        <title>IPA FF NMK</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <Objective />

      <FeaturesInstitutions />

      <Team />
    </>
  );
}
