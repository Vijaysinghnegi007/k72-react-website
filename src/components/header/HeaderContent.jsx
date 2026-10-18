import { Link } from "react-router-dom";
import Video from "../home/Video";
const menuItems = [
  { title: "Projects", subtitle: "to see everything", link: "/projects" },
  { title: "Agency", subtitle: "to see our work", link: "/agence" },
  { title: "Contact", subtitle: "to get in touch", link: "/contact" },
  { title: "Blog", subtitle: "to read our thoughts", link: "/blog" },
];

const menubottomItems = [
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
    <nav className="flex flex-col h-dvh w-full items-center justify-center bg-black text-white">
      <div className="w-full">
        {menuItems.map((item) => (
          <Link
            key={item.title}
            to={item.link}
            className="group relative block overflow-hidden border-b border-white/20 py-3"
          >
            {/* Original menu title */}
            <div className="relative z-10 flex items-center justify-center px-6 transition-colors duration-300 group-hover:text-black ">
              <span className="text-5xl font-medium uppercase tracking-tight md:text-8xl  block">
                {item.title}
              </span>
            </div>

            {/* Hover background */}
            <div className="absolute inset-0 origin-top scale-y-0 bg-[#d3fd50] transition-transform duration-500 ease-in-out group-hover:scale-y-100" />

            {/* Moving marquee */}
            {/* Moving marquee */}
            <div className="pointer-events-none absolute inset-0 z-20 flex items-center overflow-hidden bg-[#d3fd50] text-black opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              <div className="flex justify-evenly w-max shrink-0 animate-marquee items-center whitespace-nowrap">
                {Array.from({ length: 10 }).map((_, index) => (
                  <div
                    key={index}
                    className="mx-6 flex shrink-0 items-center gap-6"
                  >
                    <span className="text-5xl font-medium uppercase tracking-tight md:text-7xl">
                      {item.subtitle}
                    </span>

                    <div className="h-10 w-20 shrink-0 overflow-hidden rounded-full md:h-[7vw] md:w-[16vw]">
                      <Video />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Link>
        ))}

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-6 font-bold">
          <span className="text-xs font-medium uppercase tracking-tight pt-8 flex justify-center">
            © 2026 K27. All rights reserved.
          </span>
          <div className="flex justify-between items-center gap-2 md:gap-6 font-bold pt-8">
            {menubottomItems.map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="hover:text-[#d3fd50]"
              >
                <span className="text-xs font-medium uppercase tracking-tight ">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
          <div className="flex justify-between items-center gap-6 font-bold pt-8">
            {socialLinks.map((link) => (
              <Link
                key={link.title}
                to={link.link}
                className=" text-2xl md:text-3xl font-medium uppercase tracking-tight border-2 border-white rounded-full px-3 -py-4 hover:text-[#d3fd50] hover:border-[#d3fd50]"
              >
                <span className="">{link.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderContent;
