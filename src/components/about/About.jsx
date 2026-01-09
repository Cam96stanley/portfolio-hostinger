import ProfileImg from "../../assets/profile.png";

export default function About() {
  return (
    <section
      id="about"
      className="px-2 flex justify-center md:pt-12 bg-accent-gradient"
    >
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <img
          src={ProfileImg}
          alt="Cameron Stanley"
          className="max-w-72 lg:max-w-full"
        />
        <div className="text-center md:text-left py-2 md:py-0 max-w-[400px]">
          <h2 className="text-3xl pb-2 font-medium lg:text-4xl">
            Where design meets clarity—that’s where I work.
          </h2>
          <p>
            I build with purpose. By focusing on intention, clarity, and
            thoughtful execution, I create work that feels refined, deliberate,
            and built to last.
          </p>
        </div>
      </div>
    </section>
  );
}
