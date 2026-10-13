import React from "react";

const Header = () => {
  return (
    <header className="bg-transparent fixed w-full z-50">
      <nav className="flex justify-between items-center pl-2  fill-white">
        <div className="pt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="103"
            height="44"
            viewBox="0 0 103 44"
          >
            <path
              fill-rule="evenodd"
              d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
            ></path>
          </svg>
        </div>

        <button className="group relative flex h-12 w-60 flex-col items-end justify-center gap-1.5 overflow-hidden bg-black px-4 hover:cursor-pointer">
          {/* Animated background */}
          <span className="absolute inset-0 origin-top scale-y-0 bg-[#d3fd50] transition-transform duration-300 ease-in-out group-hover:scale-y-100 group-active:scale-y-100" />

          {/* Menu lines */}
          <span className="relative z-10 block h-0.5 w-12 rounded-full bg-white transition-colors duration-300 group-hover:bg-black group-active:bg-black" />
          <span className="relative z-10 block h-0.5 w-8 rounded-full bg-white transition-colors duration-300 group-hover:bg-black group-active:bg-black" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
