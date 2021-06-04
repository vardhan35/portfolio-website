import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Contact from "../components/Contact";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className="home">
        <h3>Hi My Name Is,</h3>
        <h1 className="title">Harshvardhan</h1>
      </div>
      <About />
      <Contact />
    </>
  );
}
