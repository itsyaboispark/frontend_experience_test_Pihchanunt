"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, LayoutGrid } from "lucide-react";
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

  return (
    <aside className="relative z-[10000] flex w-[86px] shrink-0 flex-col items-center rounded-r-2xl border-r border-slate-200 bg-white px-2 py-4 shadow-sm">
      <div className="flex w-full justify-center">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
          <Image
            src="/app/assets/logos/medalverse-logo.svg"
            alt="Medalverse Logo"
            width={26}
            height={26}
          />
        </div>
      </div>

      <div className="flex w-full flex-1 items-center justify-center">
        <nav className="flex w-full flex-col gap-3">
          <SidebarItem
            href="/experience-hub"
            icon={LayoutGrid}
            label="Experience Hub"
            active={isActive(pathname, "/experience-hub")}
          />
        </nav>
      </div>

      <div className="mt-auto flex flex-col items-center gap-4 pb-1">
        <button
          className="text-slate-500 transition hover:text-slate-700"
          type="button"
          aria-label="Notifications"
        >
          <Bell size={20} />
        </button>
        <UserMenuPopover name={userName} />
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
