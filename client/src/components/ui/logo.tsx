import React from "react";

// Import the provided logo from the repository root attached_assets folder.
// Vite will include this when the asset is imported from source files.
import logoSrc from "../../../attached_assets/logo.png";

type LogoProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  /** small variant (useful for nav) */
  small?: boolean;
};

export function Logo({ small, alt = "Malama logo", className = "", ...rest }: LogoProps) {
  const baseClass = small ? "h-8 w-auto" : "h-12 w-auto";
  return (
    <img
      src={logoSrc}
      alt={alt}
      className={[baseClass, className].filter(Boolean).join(" ")}
      {...rest}
    />
  );
}

export default Logo;
