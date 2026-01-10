import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <div className="py-8 md:py-4 px-4 shadow-2xl rounded-2xl w-[350px]">
      <img
        src={project.image}
        alt={project.title}
        className="rounded-3xl mx-auto"
      />
      <h3 className="text-2xl font-medium pt-4">{project.title}</h3>
      <div className="flex gap-2 py-4">
        {project.tech.map((Icon, i) => (
          <div key={i} className="bg-(--color-text) rounded-full p-2">
            <Icon className="w-6 h-6 text-(--color-soft)" />
          </div>
        ))}
      </div>
      <p className="h-[168px]">{project.description}</p>
      <div className="flex items-center gap-6">
        <a className="px-2 py-1 border border-(--color-accent) rounded mt-4 cursor-pointer hover:shadow-xl">
          View Site
        </a>
        <a href="#" className="mt-4">
          <FaGithub className="w-6 h-6 text-(--color-text) hover:text-(--color-accent)" />
        </a>
      </div>
    </div>
  );
}
