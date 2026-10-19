import * as React from "react";

export function Marquee({
  children,
  direction = "left",
  speed = 10,
  className = "",
  ...props
}) {
  const animationClass =
    direction === "right" ? "animate-marquee-reverse" : "animate-marquee";

  return (
    <div className={`w-full overflow-hidden ${className}`} {...props}>
      <div
        className={`flex w-max shrink-0 ${animationClass} `}
        style={{
          "--duration": `${speed}s`,
        }}
      >
        {/* First copy */}
        <div className="flex w-max shrink-0 items-center">{children}</div>

        {/* Duplicate copy for the infinite loop */}
        <div className="flex w-max shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
