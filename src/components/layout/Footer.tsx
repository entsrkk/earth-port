import { getTranslations } from "next-intl/server";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLine,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "@/i18n/navigation";

const socialLinks = [
  {
    href: "https://www.facebook.com/niti.surakongka",
    label: "Facebook",
    icon: FaFacebook,
  },
  {
    href: "https://www.instagram.com/eearth_nt/",
    label: "Instagram",
    icon: FaInstagram,
  },
  {
    href: "https://line.me/ti/p/8XgcLYn8Cg",
    label: "LINE",
    icon: FaLine,
  },
  {
    href: "https://github.com/entsrkk",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://www.linkedin.com/in/nitisurakongka/",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
] as const;

const Footer = async () => {
  const [navigation, footer, common] = await Promise.all([
    getTranslations("Navigation"),
    getTranslations("Footer"),
    getTranslations("Common"),
  ]);
  const year = new Date().getFullYear();
  const quickLinks = [
    { href: "/", label: navigation("home") },
    {
      href: "/projects",
      label: navigation("projects"),
    },
    {
      href: "/contact",
      label: navigation("contact"),
    },
  ];

  return (
    <footer className="mt-auto border-t border-base-300 bg-base-100">
      <div className="h-1 bg-linear-to-r from-primary to-secondary" />
      <div className="mx-auto w-full max-w-(--container-page) px-4 pt-10 pb-6 sm:px-6 sm:pt-12 lg:px-8">
        <div className="footer footer-vertical gap-8 sm:footer-horizontal sm:grid-cols-2 lg:grid-cols-3">
          <aside className="space-y-2">
            <p className="text-gradient font-display text-lg font-semibold">
              Niti Surakongka
            </p>
            <p className="font-thai text-sm font-normal text-base-content/70">
              {footer("description")}
            </p>
          </aside>

          <nav aria-label={footer("navigationLabel")}>
            <h2 className="footer-title mb-1 text-base-content/80">
              {footer("quickLinks")}
            </h2>
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link link-hover content-center py-1 text-sm font-medium text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <nav aria-label={footer("socialLabel")}>
            <h2 className="footer-title mb-1 text-base-content/80">
              {footer("connect")}
            </h2>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} (${common("opensNewTab")})`}
                  className="btn btn-ghost btn-square text-primary transition-colors duration-fast hover:bg-primary/10"
                >
                  <Icon aria-hidden="true" className="size-6" />
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
      <div className="border-t border-base-300">
        <p className="mx-auto w-full max-w-(--container-page) px-4 pt-6 pb-6 text-center text-xs text-base-content/60 sm:px-6 lg:px-8">
          © {year} Niti Surakongka. {footer("rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
