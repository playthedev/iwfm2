import type { SVGProps } from "react";

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M14.5 8.5h2V5.4c-.35-.05-1.53-.15-2.9-.15-2.87 0-4.83 1.75-4.83 4.97v2.6H6.4v3.5h2.87V21h3.62v-4.68h2.83l.45-3.5h-3.28V10.6c0-1.01.28-1.7 1.71-1.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="2.5" y="6" width="19" height="12" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10.5 9.6v4.8l4.3-2.4-4.3-2.4Z" fill="currentColor" />
    </svg>
  );
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M5 4.5 10.4 12 5.3 19.5H7.6l3.8-5.6 3.4 5.6H19l-5.6-8L18 4.5h-2.3l-3.5 5.1-3.2-5.1H5Z"
        fill="currentColor"
      />
    </svg>
  );
}
