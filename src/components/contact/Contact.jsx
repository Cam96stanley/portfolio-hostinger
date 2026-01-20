import { MdOutlineEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import map from "../../assets/map.jpg";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-4 bg-accent-gradient flex justify-center items-center gap-8 lg:gap-24"
    >
      <div>
        <h2 className="text-3xl font-medium py-4">Get in touch</h2>
        <p className="w-[300px]">
          Have a project in mind? I'd love to hear about it.
        </p>
        <div className="py-4">
          <div className="flex items-center gap-2">
            <MdOutlineEmail />
            <p className="font-bold">Email</p>
          </div>
          <a
            href="mailto:cam96stanley@gmail.com"
            className="hover:underline text-(--color-accent)"
          >
            cam96stanley@gmail.com
          </a>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <IoLocationSharp />
            <p className="font-bold">Location</p>
          </div>
          <p>Charleston SC, USA</p>
        </div>
        <div className="flex gap-2 mt-4">
          <a
            href="https://www.linkedin.com/in/cameron-stanley-007908339/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 hover:text-(--color-accent)"
          >
            <CiLinkedin size={32} aria-label="Linkedin" />
          </a>
          <a
            href="https://github.com/Cam96stanley"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 hover:text-(--color-accent)"
          >
            <FaGithub size={32} aria-label="GitHub" />
          </a>
        </div>
      </div>
      <div className="hidden md:block">
        <img
          src={map}
          alt="Map of Charleston"
          className="rounded-3xl shadow-2xl"
        />
      </div>
    </section>
  );
}
