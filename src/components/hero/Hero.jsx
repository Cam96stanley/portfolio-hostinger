import HeroLines from "./HeroLines";

export default function Hero() {
  return (
    <section id="hero" className="relative flex justify-center items-center">
      {/* Background animated line waves */}
      <HeroLines />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center max-w-md lg:max-w-2xl mx-auto p-4 z-10">
        <h1 className="text-3xl lg:text-5xl">
          Create With Intention, <br /> Build With Purpose
        </h1>
        <p className="mt-4 text-sm lg:text-lg text-(--color-text)">
          Creating websites that are both modern and purposeful, where every
          detail enhances the user experience. Thoughtful design meets reliable,
          high-quality performance in every project.
        </p>
      </div>
    </section>
  );
}
