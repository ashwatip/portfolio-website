import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryBasePath = "/portfolio-website";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  basePath: isGitHubPages ? repositoryBasePath : undefined,
  assetPrefix: isGitHubPages ? repositoryBasePath : undefined,
  images: {
    unoptimized: true,
  },
  typescript: {
    // The Pages build does not include the starter's optional Cloudflare-only
    // database helper, whose runtime types are unavailable to plain Next.js.
    ignoreBuildErrors: isGitHubPages,
  },
};

export default nextConfig;
