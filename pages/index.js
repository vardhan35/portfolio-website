import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Contact from "../components/Contact";
import HeadComponent from "../components/HeadComponent";
import Main from "../components/Main";

export default function Home() {
  return (
    <>
      <HeadComponent value={"Home"} />
      <Main />
      <About />
      <Contact />
    </>
  );
}
