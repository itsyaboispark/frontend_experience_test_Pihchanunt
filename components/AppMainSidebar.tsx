"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Bell, LayoutGrid, Menu } from "lucide-react";
import { UserMenuPopover } from "@/components/UserMenuPopover";

type Props = {
  userName: string;
};

function isActive(pathname: string, href: string) {
  if (href === "/experience-hub") {
    return pathname.startsWith("/experience-hub");
  }
  return pathname === href;
}

export function AppMainSidebar({ userName }: Props) {
  const pathname = usePathname();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setShowMobileMenu(false);
      }
    };

    if (showMobileMenu) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showMobileMenu]);

  return (
    <aside className="mb-4 relative z-[10000] flex w-full flex-row items-center justify-between rounded-b-2xl border-b border-slate-200 bg-white px-2 py-4 shadow-sm lg:w-[86px] lg:flex-col lg:items-center lg:justify-start lg:rounded-r-2xl lg:border-b-0 lg:border-r">
      <div className="flex items-center gap-2">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
          <Image
            src="/app/assets/logos/medalverse-logo.svg"
            alt="Medalverse Logo"
            width={26}
            height={26}
          />
        </div>
        <span className="lg:hidden text-lg font-semibold">Medalverse</span>
      </div>

      <div className="hidden w-full flex-1 flex-col items-center gap-3 lg:flex">
        <div className="flex flex-1 items-center justify-center w-full">
          <nav className="flex w-full flex-col items-center gap-3">
            <SidebarItem
              href="/experience-hub"
              icon={LayoutGrid}
              label="Experience Hub"
              active={isActive(pathname, "/experience-hub")}
            />
          </nav>
        </div>

        <div className="flex flex-col items-center gap-4">
          <button
            className="text-slate-500 transition hover:text-slate-700"
            type="button"
            aria-label="Notifications"
          >
            <Bell size={20} />
          </button>
          <UserMenuPopover name={userName} />
        </div>
      </div>

      <div className="relative lg:hidden" ref={menuRef}>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors duration-200 hover:border-slate-300 hover:bg-slate-50"
          aria-label="Open menu"
          onClick={() => setShowMobileMenu((prev) => !prev)}
        >
          <Menu size={18} />
        </button>

        {showMobileMenu ? (
          <div className="absolute right-0 top-full z-20 mt-2 w-[240px] rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
            <nav className="flex flex-col gap-2">
              <Link
                href="/experience-hub"
                className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition-colors duration-200 ${
                  isActive(pathname, "/experience-hub")
                    ? "bg-background-bg-brand-primary text-text-brand-primary"
                    : "text-text-tertiary hover:bg-background-bg-active hover:text-text-secondary-hover"
                }`}
                onClick={() => setShowMobileMenu(false)}
              >
                <LayoutGrid size={16} />
                <span>Experience Hub</span>
              </Link>
            </nav>
            <div className="mt-3 border-t border-slate-200 pt-3">
              <button
                className="flex w-full items-center justify-start gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-600 transition-colors duration-200 hover:bg-slate-50"
                type="button"
                aria-label="Notifications"
              >
                <Bell size={16} />
                Notifications
              </button>
              <div className="mt-2 rounded-xl border border-slate-200 bg-slate-50 p-2">
                <UserMenuPopover name={userName} />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </aside>
  );
}

function SidebarItem({
  href,
  icon: Icon,
  label,
  active = false,
}: {
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group flex w-full flex-col items-center gap-1 rounded-xl px-1 py-2 text-center text-caption-caption-sm transition-colors duration-200 ${
        active
          ? "bg-background-bg-brand-primary text-text-brand-primary"
          : "text-text-tertiary hover:bg-background-bg-active hover:text-text-secondary-hover"
      }`}
    >
      <Icon
        size={18}
        className={`transition-colors duration-200 ${
          active
            ? "text-foreground-fg-brand-primary"
            : "text-foreground-fg-secondary group-hover:text-foreground-fg-secondary-hover"
        }`}
      />
      <span>{label}</span>
    </Link>
  );
}
