const menuItems = [
  { title: "Projects", subtitle: "to see everything" },
  { title: "Agency", subtitle: "to see our work" },
  { title: "Contact", subtitle: "to get in touch" },
  { title: "Blog", subtitle: "to read our thoughts" },
];

const HeaderContent = () => {
  return (
    <nav className="flex h-dvh w-full items-center bg-black">
      <div className="w-full">
        {menuItems.map((item) => (
          <a
            key={item.title}
            href="#"
            className="group relative block overflow-hidden border-b border-white/20 py-3"
          >
            {/* Original menu title */}
            <div className="relative z-10 flex items-center justify-between px-6 transition-colors duration-300 group-hover:text-black">
              <span className="text-5xl font-medium uppercase tracking-tight md:text-7xl">
                {item.title}
              </span>

              <span className="text-sm uppercase tracking-wide">
                {item.subtitle}
              </span>
            </div>

            {/* Hover background */}
            <div className="absolute inset-0 origin-top scale-y-0 bg-[#d3fd50] transition-transform duration-500 ease-in-out group-hover:scale-y-100" />

            {/* Moving marquee */}
            <div className="pointer-events-none absolute inset-0 z-20 flex items-center overflow-hidden bg-[#d3fd50] text-black opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              <div className="flex w-max shrink-0 animate-marquee items-center whitespace-nowrap">
                {Array.from({ length: 8 }).map((_, index) => (
                  <span
                    key={index}
                    className="mx-6 text-5xl font-medium uppercase tracking-tight md:text-7xl"
                  >
                    {item.title}
                    <span className="ml-12">✳</span>
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default HeaderContent;
