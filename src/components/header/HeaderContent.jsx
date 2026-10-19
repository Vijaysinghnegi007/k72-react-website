import { Link } from "react-router-dom";
import { Marquee } from "../ui/Marquee";

const menuItems = [
  { title: "Projects", subtitle: "to see everything", link: "/projects" },
  { title: "Agency", subtitle: "to see our work", link: "/agence" },
  { title: "Contact", subtitle: "to get in touch", link: "/contact" },
  { title: "Blog", subtitle: "to read our thoughts", link: "/blog" },
];

const menuBottomItems = [
  { title: "Privacy Policy", link: "/privacy-policy" },
  { title: "Terms of Service", link: "/terms-of-service" },
  { title: "Careers", link: "/careers" },
  { title: "Newsletter", link: "/newsletter" },
];

const socialLinks = [
  { title: "FB", link: "https://www.facebook.com/yourprofile" },
  { title: "IG", link: "https://www.instagram.com/yourprofile" },
  { title: "IN", link: "https://www.linkedin.com/in/yourprofile" },
  { title: "BE", link: "https://www.behance.net/yourprofile" },
];

const HeaderContent = () => {
  return (
    <nav
      aria-label="Main navigation"
      className="flex h-dvh w-full flex-col justify-center overflow-y-auto bg-black text-white"
    >
      <div className="w-full">
        {/* Main navigation links */}
        <ul>
          {menuItems.map((item) => (
            <li key={item.title}>
              <Link
                to={item.link}
                className="group relative block overflow-hidden border-b border-white/20 py-3  focus-visible:outline-2 focus-visible:outline-[#d3fd50]"
              >
                {/* Hover background */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 origin-top scale-y-0 bg-[#d3fd50] transition-transform duration-500 ease-in-out group-hover:scale-y-100 group-focus-visible:scale-y-100 motion-reduce:transition-none"
                />

                {/* Original menu title */}
                <span className="relative z-10 flex justify-center px-6 text-5xl font-medium uppercase tracking-tight transition-colors duration-300 group-hover:text-black group-focus-visible:text-black md:text-8xl">
                  {item.title}
                </span>

                {/* Marquee visible on hover or keyboard focus */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-20 flex items-center overflow-hidden bg-[#d3fd50] text-black opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
                >
                  <Marquee speed={10} className="w-full">
                    <div className="flex shrink-0 items-center gap-6 px-6">
                      <span className="whitespace-nowrap text-5xl font-medium uppercase tracking-tight md:text-7xl">
                        {item.subtitle}
                      </span>

                      <img
                        src="/images/marquee.webp"
                        alt=""
                        width={160}
                        height={70}
                        loading="lazy"
                        decoding="async"
                        className="h-10 w-20 shrink-0 rounded-full object-cover md:h-[7vw] md:w-[16vw]"
                      />
                    </div>
                  </Marquee>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <footer className="flex flex-col items-center justify-between gap-6 px-6 pt-8 md:flex-row">
          <p className="text-center text-xs font-medium uppercase tracking-tight">
            © 2026 K27. All rights reserved.
          </p>

          {/* Footer navigation */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 md:gap-6">
            {menuBottomItems.map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="text-xs font-medium uppercase tracking-tight transition-colors hover:text-[#d3fd50] focus-visible:text-[#d3fd50]"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.title}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.title}
                className="rounded-full border-2 border-white px-3 py-1 text-xl font-medium uppercase tracking-tight transition-colors hover:border-[#d3fd50] hover:text-[#d3fd50]  focus-visible:outline-2 focus-visible:outline-[#d3fd50] md:text-2xl"
              >
                {social.title}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </nav>
  );
};

export default HeaderContent;
