import Video from "./Video";

const HEADING_LINE =
  "flex items-center justify-center text-[12vw] leading-[10vw] uppercase lg:text-[9.5vw] lg:leading-[8vw]";

const VIDEO_CLASS =
  "relative -mt-3 h-[7vw] w-[16vw] shrink-0 overflow-hidden rounded-full";

export default function HomeHeroText() {
  return (
    <section
      aria-labelledby="home-hero-heading"
      className="mt-72 pt-5 text-center font-[font1] text-white lg:mt-0"
    >
      <h1 id="home-hero-heading" className="m-0 font-inherit font-normal">
        <span className={`${HEADING_LINE} block`}>L&apos;étincelle</span>

        <span className={`${HEADING_LINE} items-start`}>
          <span>qui</span>

          <span className={VIDEO_CLASS} aria-hidden="true">
            <Video />
          </span>

          <span>génère</span>
        </span>

        <span className={`${HEADING_LINE} block`}>la créativité</span>
      </h1>
    </section>
  );
}
