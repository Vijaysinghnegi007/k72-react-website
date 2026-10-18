import Video from "../../../public/video.mp4";

const MenuMarquee = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-20 overflow-hidden bg-[#d3fd50] text-black opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
    >
      <div className="menu-marquee-track flex h-full w-max items-center">
        {/* First copy */}
        <div className="flex shrink-0 items-center gap-6 pr-6">
          <span className="whitespace-nowrap text-5xl font-medium uppercase md:text-7xl">
            {subtitle}
          </span>

          <div className="h-10 w-20 shrink-0 overflow-hidden rounded-full md:h-[7vw] md:w-[16vw]">
            <Video />
          </div>

          <span className="whitespace-nowrap text-5xl font-medium uppercase md:text-7xl">
            {subtitle}
          </span>
        </div>

        {/* Second copy for the infinite loop */}
        <div className="flex shrink-0 items-center gap-6 pr-6">
          <span className="whitespace-nowrap text-5xl font-medium uppercase md:text-7xl">
            {subtitle}
          </span>

          <div className="h-10 w-20 shrink-0 overflow-hidden rounded-full md:h-[7vw] md:w-[16vw]">
            <Video />
          </div>

          <span className="whitespace-nowrap text-5xl font-medium uppercase md:text-7xl">
            {subtitle}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuMarquee;
