import HeroLines from "./HeroLines";

export default function Hero() {
  return (
    <div className="relative flex justify-center items-center">
      {/* Background animated line waves */}
      <HeroLines />

      {/* Content */}
      <div className="absolute flex flex-col justify-center items-center top-10 text-center max-w-150 mx-auto p-2">
        <h1 className="text-3xl lg:text-5xl">
          Create With Intention, <br /> Build With Purpose
        </h1>
        <p className="mt-4 text-sm lg:text-lg text-(--color-text)">
          Creating websites that are both modern and purposeful, where every
          detail enhances the user experience. Thoughtful design meets reliable,
          high-quality performance in every project.
        </p>
      </div>
    </div>
  );
}
