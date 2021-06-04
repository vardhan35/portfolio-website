import styles from "../styles/Project.module.css";
import Head from "next/head";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Projects</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <div className={styles.project}>
        <h1>Project</h1>
      </div>
    </>
  );
};

export default Projects;
