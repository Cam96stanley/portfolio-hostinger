import { FaHtml5 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { TbBrandThreejs } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col items-center pt-8 lg:w-[500px]"
    >
      <div className="flex justify-center items-center flex-wrap gap-4 text-(--color-accent) lg:gap-10">
        <FaHtml5
          className="w-12 md:w-14 h-12 md:h-14 hover:text-(--color-alt)"
          aria-label="HTML5"
          title="HTML"
        />
        <FaSass
          className="w-12 md:w-14 h-12 md:h-14 hover:text-(--color-alt)"
          aria-label="Sass"
          title="Sass"
        />
        <RiTailwindCssFill
          className="w-12 md:w-14 h-12 md:h-14 hover:text-(--color-alt)"
          aria-label="Tailwind"
          title="Tailwind"
        />
        <FaJs
          className="w-12 h-12 hover:text-(--color-alt)"
          aria-label="JavaScript"
          title="JavaScript"
        />
        <SiTypescript
          className="w-12 h-12 hover:text-(--color-alt)"
          aria-label="TypeScript"
          title="TypeScript"
        />
        <FaReact
          className="w-12 md:w-14 h-12 md:h-14 hover:text-(--color-alt)"
          aria-label="ReactJS"
          title="ReactJS"
        />
        <SiNextdotjs
          className="w-12 md:w-14 h-12 md:h-14 hover:text-(--color-alt)"
          aria-label="NextJS"
          title="NextJS"
        />
        <TbBrandThreejs
          className="w-12 md:w-14 h-12 md:h-14 hover:text-(--color-alt)"
          aria-label="ThreeJS"
          title="ThreeJS"
        />
        <FaWordpress
          className="w-12 md:w-14 h-12 md:h-14 hover:text-(--color-alt)"
          aria-label="WordPress"
          title="WordPress"
        />
      </div>
    </section>
  );
}
