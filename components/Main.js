import styles from "../styles/Main.module.css";
import Link from "next/link";

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h3>Namaste, I Am</h3>
        <h1 className={styles.title}>Harshvardhan</h1>
        <div className={styles.main_actions}>
          <Link href="/projects">
            <button className={styles.main_project_btn}>PROJECTS</button>
          </Link>
          <button className={styles.main_resume_btn}>RESUME</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
