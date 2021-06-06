import styles from "../../styles/Project.module.css";
import Link from "next/link";
import Image from "next/image";

const ProjectCrd = () => {
  return (
    <div className={styles.card}>
      <header className={styles.card_header}>
        <h2>Project Name</h2>
      </header>
      <div className={styles.project_info}>
        <p className={styles.project_info_para}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio deserunt
          eum voluptas sed similique corporis accusantium sapiente corrupti iure
          fuga.
        </p>
      </div>
      <div className={styles.project_action}>
        <div className={styles.link}>
          <Link href="https://github.com/vardhan35" className={styles.img}>
            <Image
              src="/gitHub.png"
              width={70}
              height={70}
              alt="vardhan's github"
            />
          </Link>
        </div>
        <div className={styles.link}>
          <Link href="https://github.com/vardhan35">
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
