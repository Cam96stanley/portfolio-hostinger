import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col items-center py-12 md:py-16 bg-background-invert-gradient"
    >
      <h2 className="text-3xl font-medium pb-8 lg:text-4xl">Skills</h2>
      <div className="flex justify-center items-center flex-wrap gap-8 md:gap-12 lg:gap-16">
        <FaHtml5 className="w-12 h-12" />
        <FaCss3Alt className="w-12 h-12" />
        <FaJs className="w-12 h-12" />
        <FaReact className="w-12 h-12" />
        <SiNextdotjs className="w-12 h-12" />
        <FaWordpress className="w-12 h-12" />
      </div>
    </section>
  );
}
