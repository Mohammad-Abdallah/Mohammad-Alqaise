import type { IconName, SocialIconName } from "@/data/portfolio";

type IconProps = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className = "size-5" }: IconProps) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  const paths: Record<IconName, React.ReactNode> = {
    brain: (
      <>
        <path d="M9.5 4.5A3 3 0 0 0 4 6.2a3.2 3.2 0 0 0 .5 6.3A3.5 3.5 0 0 0 9.8 17" />
        <path d="M14.5 4.5A3 3 0 0 1 20 6.2a3.2 3.2 0 0 1-.5 6.3 3.5 3.5 0 0 1-5.3 4.5M12 3v18M7.5 9.5c1.5 0 2.5.9 2.5 2.2M16.5 9.5c-1.5 0-2.5.9-2.5 2.2" />
      </>
    ),
    code: (
      <>
        <path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3 1.25 4.15L17 9l-3.75 1.85L12 15l-1.25-4.15L7 9l3.75-1.85L12 3Z" />
        <path d="m5 15 .75 2.25L8 18l-2.25.75L5 21l-.75-2.25L2 18l2.25-.75L5 15ZM19 13l.5 1.5 1.5.5-1.5.5L19 17l-.5-1.5L17 15l1.5-.5L19 13Z" />
      </>
    ),
    people: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19c.4-3.2 2.2-5 5.5-5s5.1 1.8 5.5 5M15 5.3a3 3 0 0 1 0 5.4M16 14c2.7.3 4.1 2 4.5 4.5" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.3 2.5 3.5 5.5 3.5 9S14.3 18.5 12 21c-2.3-2.5-3.5-5.5-3.5-9S9.7 5.5 12 3Z" />
      </>
    ),
    eye: (
      <>
        <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
        <circle cx="12" cy="12" r="2.5" />
      </>
    ),
    stage: (
      <>
        <path d="M4 20V4h16v16M4 7c3 0 5.5 1.4 8 4 2.5-2.6 5-4 8-4M12 11v9M3 20h18" />
      </>
    ),
    heart: (
      <path d="M20.8 5.8a5 5 0 0 0-7.1 0L12 7.5l-1.7-1.7a5 5 0 0 0-7.1 7.1L12 21l8.8-8.1a5 5 0 0 0 0-7.1Z" />
    ),
  };

  return <svg {...common}>{paths[name]}</svg>;
}

export function ArrowIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function DownloadIcon() {
  return (
    <svg
      className="size-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 20h16" />
    </svg>
  );
}

export function SocialIcon({
  name,
  className = "size-4",
}: {
  name: SocialIconName;
  className?: string;
}) {
  if (name === "instagram") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.25" />
        <circle cx="17.4" cy="6.7" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M5.3 3.8A2.3 2.3 0 1 1 5.3 8.4a2.3 2.3 0 0 1 0-4.6ZM3.4 9.9h3.8V21H3.4V9.9Zm6.1 0h3.6v1.5h.1c.5-.9 1.7-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.8V21h-3.8v-5c0-1.2 0-2.8-1.8-2.8s-2 1.3-2 2.7V21H9.5V9.9Z" />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-3.9c.04-1-.35-1.96-1.1-2.65 3.6-.4 7.38-1.77 7.38-8A6.25 6.25 0 0 0 19.62 3c.16-.4.7-2.04-.16-4 0 0-1.36-.44-4.46 1.7a15.4 15.4 0 0 0-8 0C3.9-1.44 2.54-1 2.54-1c-.86 1.96-.32 3.6-.16 4A6.25 6.25 0 0 0 .72 7.45c0 6.22 3.78 7.6 7.38 8-.74.68-1.14 1.64-1.1 2.65V22" transform="translate(1 1)" />
      <path d="M7 19c-3 .9-3-1.5-4.2-2" />
    </svg>
  );
}
