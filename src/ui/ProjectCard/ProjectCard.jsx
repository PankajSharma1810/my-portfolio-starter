import "./ProjectCard.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, category, image, description, stacks, demoLink, githubLink }) => {
  return (
    <div className="project__card">
      <div className="project__card-top">
        <img src={image} alt={title} className="project__image" />
      </div>

      <div className="project__card-content">
        <h3 className="project__title">{title}</h3>
        <p className="project__category">{category}</p>
        <p className="project__description">{description}</p>

        <div className="project__stacks">
          {stacks.map((stack, index) => (
            <span className="stack" key={index}>{stack.name}</span>
          ))}
        </div>

        <div className="project__buttons">
          <a href={demoLink} className="button" target="_blank" rel="noopener noreferrer">
            <span className="text">Live Demo</span>
            <FaExternalLinkAlt className="icon" />
          </a>

          <a href={githubLink} className="button" target="_blank" rel="noopener noreferrer">
            <span className="text">GitHub</span>
            <FaGithub className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
