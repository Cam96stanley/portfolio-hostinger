import { projects } from "../../data/projectData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center pb-24"
    >
      <h2 className="text-3xl font-medium text-center py-8">Projects</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project) => (
          <div key={project.id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
