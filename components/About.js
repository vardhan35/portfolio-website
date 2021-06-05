import styles from "../styles/About.module.css";
import Link from "next/link";

const About = () => {
  return (
    <div className={styles.container_about} id="about">
      <div className={styles.about}>
        <header className={styles.header}>
          <h1>About</h1>
        </header>
        <h2 className={styles.title}>
          My name is <span className={styles.bold}>Harshvardhan</span> and I am{" "}
          <span className={styles.bold}>Frontend Developer</span>
        </h2>
        <div className={styles.card}>
          <div className={styles.card_items}>
            <h2 className={styles.card_title}>My Work</h2>
            <div className={styles.card_content}>
              <p className={styles.card_para}>
                I am Frontend Developer working with React Js, JavaScript,
                Html,Css, scss,and next-js I have Created some projects in above
                mentions You will find them <Link href="/projects">Here</Link>
              </p>
              <p className={styles.card_para}>
                I have done Bachelors study in Mechanicle Engineering but I
                found my passion in coding when started to code.It was
                struggling in the start but after some time I got hang of it and
                Here I have became a Frontend Developer.
              </p>
              <p className={styles.card_para}>
                About my Hobbies I like to watch Animes Movies, Travelling,
                Cooking Going to See different Forts around Pune, Maharashtra. I
                also like to work on Personal Projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
