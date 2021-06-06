import ProjectCrd from "./ProjectCard";
import styles from "../../styles/Project.module.css";
const ProjectList = () => {
  return (
    <div className={styles.project_list}>
      <ProjectCrd />
      <ProjectCrd />
      <ProjectCrd />
      <ProjectCrd />
    </div>
  );
};

export default ProjectList;
