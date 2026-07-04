import { site } from "@/content/site";
import { cn } from "@/lib/cn";

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-gold"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path
        d="M6.6 3h-2A1.6 1.6 0 0 0 3 4.7C3 13.1 10.9 21 19.3 21A1.6 1.6 0 0 0 21 19.4v-2a1.6 1.6 0 0 0-1.4-1.6l-2.6-.4a1.6 1.6 0 0 0-1.5.6l-.8 1a12 12 0 0 1-5-5l1-.8a1.6 1.6 0 0 0 .6-1.5l-.4-2.6A1.6 1.6 0 0 0 6.6 3Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-gold"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6 8.5-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ContactBlock({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-4", className)}>
      <a
        href={`tel:${site.contact.telefonHref}`}
        className="group flex items-center gap-3 text-ink transition-colors hover:text-gold"
      >
        <PhoneIcon />
        <span className="text-lg">{site.contact.telefon}</span>
      </a>
      <a
        href={`mailto:${site.contact.email}`}
        className="group flex items-center gap-3 break-all text-ink transition-colors hover:text-gold"
      >
        <MailIcon />
        <span className="text-lg">{site.contact.email}</span>
      </a>
    </div>
  );
}
