"use client";

import Image from "next/image";
import { useState } from "react";

type SmartImageProps = {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
  className?: string;
  sizes: string;
  priority?: boolean;
  fallbackLabel?: string;
};

export function SmartImage({
  src,
  alt,
  fit = "cover",
  className = "",
  sizes,
  priority = false,
  fallbackLabel = "Image",
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`smart-image smart-image-${fit} ${failed ? "is-missing" : ""} ${className}`}
    >
      {failed ? (
        <div className="image-fallback" role="img" aria-label={`${alt} unavailable`}>
          <span>{fallbackLabel}</span>
          <small>{src}</small>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
