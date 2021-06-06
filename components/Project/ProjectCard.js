import styles from "../../styles/Project.module.css";
import Link from "next/link";
import Image from "next/image";

const ProjectCrd = ({ project }) => {
  return (
    <div key={project.id} className={styles.card}>
      <header className={styles.card_header}>
        <h2>{project.name}</h2>
      </header>
      <div className={styles.project_info}>
        <p className={styles.project_info_para}>{project.discription}</p>
      </div>
      <div className={styles.project_action}>
        <div className={styles.link}>
          <Link href={`${project.githublink}`} className={styles.img}>
            <Image
              src="/gitHub.png"
              width={70}
              height={70}
              alt="vardhan's github"
            />
          </Link>
        </div>
        <div className={styles.link}>
          <Link href={`${project.weblink}`}>
            <Image
              src="/redirect.png"
              width={70}
              height={70}
              alt="vardhan's github"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCrd;
