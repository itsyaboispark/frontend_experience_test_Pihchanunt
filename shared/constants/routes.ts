/** Must match `basePath` in next.config.ts */
export const APP_BASE_PATH = "/app" as const;

/** Prefix Next.js route handlers when `basePath` is set (fetch does not add it automatically). */
export function apiPath(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${APP_BASE_PATH}${normalized}`;
}

export const ROUTES = {
  home: "/",
  login: "/login",
  onboarding: "/onboarding",
  dashboard: "/experience-hub",
  apiLogin: apiPath("/api/auth/login"),
  apiCheckEmail: apiPath("/api/auth/check-email"),
  apiSignup: apiPath("/api/auth/signup"),
  apiLogout: apiPath("/api/auth/logout"),
} as const;
