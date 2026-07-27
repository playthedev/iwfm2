import { Mail, Phone } from "lucide-react";
import { company, socialLinks } from "@/lib/content";
import {
  FacebookIcon,
  InstagramIcon,
  XIcon,
  YoutubeIcon,
} from "@/components/icons/SocialIcons";

const SOCIAL_ICONS = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  youtube: YoutubeIcon,
  x: XIcon,
};

export function TopBar() {
  return (
    <div className="hidden bg-brand-600 text-white sm:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2 text-sm sm:px-8">
        <a
          href={company.phoneHref}
          className="flex items-center gap-2 font-medium transition-opacity hover:opacity-80"
        >
          <Phone className="h-3.5 w-3.5" />
          {company.phone}
        </a>

        <a
          href={`mailto:${company.email}`}
          className="hidden items-center gap-2 font-medium transition-opacity hover:opacity-80 md:flex"
        >
          <Mail className="h-3.5 w-3.5" />
          {company.email}
        </a>

        <div className="flex items-center gap-3.5">
          {socialLinks.map((social) => {
            const Icon = SOCIAL_ICONS[social.key as keyof typeof SOCIAL_ICONS];
            return (
              <a
                key={social.key}
                href={social.href}
                aria-label={social.label}
                className="transition-opacity hover:opacity-80"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
