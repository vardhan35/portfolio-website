import styles from "../styles/Project.module.css";
import HeadComponent from "../components/HeadComponent";
// import HeadComponent from "../components/HeadComponent";

const Projects = () => {
  return (
    <>
      <HeadComponent value={"Projects"} />
      <div className={styles.project}>
        <h1>Project</h1>
      </div>
    </>
  );
};

export default Projects;
