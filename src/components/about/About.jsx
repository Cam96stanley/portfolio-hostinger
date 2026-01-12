import ProfileImg from "../../assets/profile.png";
import Skills from "../skills/Skills";

export default function About() {
  return (
    <section
      id="about"
      className="px-4 pb-8 bg-accent-gradient flex justify-center"
    >
      <div className="flex flex-col items-center md:flex-row">
        <img
          src={ProfileImg}
          alt="Cameron Stanley"
          className="max-w-72 md:max-w-83 lg:max-w-96"
        />
        <div className="py-4 lg:max-w-[525px] lg:ml-24">
          <h2 className="text-3xl font-medium text-center md:text-left md:text-4xl">
            Where design meets clarity—that’s where I work.
          </h2>
          <p className="py-4">
            I build with purpose. By focusing on intention, clarity, and
            thoughtful execution, I create work that feels refined, deliberate,
            and built to last.
          </p>
          <Skills />
        </div>
      </div>
    </section>
  );
}
