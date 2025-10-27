import React from "react";

// Import the provided logo from the repository root attached_assets folder.
// Vite will include this when the asset is imported from source files.
// The logo image lives at the repository root in `attached_assets/`.
// From this file (`client/src/components/ui`) we need to go up four levels to reach the repo root.
import logoSrc from "../../../../attached_assets/logo.png";

type LogoProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  /** small variant (useful for nav) */
  small?: boolean;
};

export function Logo({ small, alt = "Malama logo", className = "", ...rest }: LogoProps) {
  const imgClass = small ? "h-8 w-auto" : "h-12 w-auto";

  // Wrapper gives the logo a subtle, bold, and polished look:
  // - rounded card background
  // - light shadow and ring for contrast on pale backgrounds
  // - small vs regular padding
  const wrapperClass = small
    ? "inline-flex items-center justify-center p-1 rounded-md bg-white/95 shadow-sm ring-1 ring-gray-100"
    : "inline-flex items-center justify-center p-2 rounded-lg bg-white shadow-md ring-1 ring-gray-100";

  return (
    <span className={[wrapperClass, className].filter(Boolean).join(" ")} aria-label={alt}>
      <img src={logoSrc} alt={alt} className={imgClass} {...rest} />
    </span>
  );
}

export default Logo;
