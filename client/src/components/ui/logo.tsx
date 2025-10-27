import React from "react";

// Import the provided logo from the repository root attached_assets folder.
// Vite will include this when the asset is imported from source files.
// The logo image lives at the repository root in `attached_assets/`.
// From this file (`client/src/components/ui`) we need to go up four levels to reach the repo root.
import logoSrc from "../../../../attached_assets/logo.png";

type LogoProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  /** small variant (useful for nav) */
  small?: boolean;
  /** visual treatment: 'plain' (just the image) or 'card' (rounded white card around it) */
  variant?: "plain" | "card";
};

export function Logo({ small, alt = "Malama logo", className = "", variant = "card", ...rest }: LogoProps) {
  const sizeClass = small ? "h-8 w-auto" : "h-12 w-auto";
  const imgEmphasis = "drop-shadow-md contrast-[1.05] brightness-105 saturate-110";

  if (variant === "plain") {
    return (
      <img
        src={logoSrc}
        alt={alt}
        className={[sizeClass, imgEmphasis, className].filter(Boolean).join(" ")}
        {...rest}
      />
    );
  }

  // Card variant: rounded white background with soft shadow and subtle ring
  const wrapperClass = small
    ? "inline-flex items-center justify-center p-1.5 rounded-xl bg-white shadow-md ring-1 ring-black/5"
    : "inline-flex items-center justify-center p-3 rounded-2xl bg-white shadow-lg ring-1 ring-black/5";

  return (
    <span className={[wrapperClass, className].filter(Boolean).join(" ")} aria-label={alt}>
      <img src={logoSrc} alt={alt} className={[sizeClass, imgEmphasis].join(" ")} {...rest} />
    </span>
  );
}

export default Logo;
