export function getSiteUrl(): string | undefined {
  const url = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL;
  if (url) return new URL(url).origin;
  const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  return vercelUrl ? new URL(`https://${vercelUrl}`).origin : undefined;
}
