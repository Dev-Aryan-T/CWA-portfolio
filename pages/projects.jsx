import ProjectCard from '../components/ProjectCard';
import { getProjects } from './api/projects';
import styles from '../styles/ProjectsPage.module.css';

const ProjectsPage = ({ projects }) => {
  return (
    <>
      <h3>Projects banako xaina hau paila IIT Bombay Computer Science ma ta jana deu tes paxi banaula.</h3>
      <div className={styles.container}>
        {/* {projects.map((project) => (
         <  ProjectCard key={project.id} project={project} />   // use this code in future when you make project
        ))} */}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const projects = getProjects();

  return {
    props: { title: 'Projects', projects },
  };
}

export default ProjectsPage;
