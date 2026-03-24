import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  assetPrefix: isProd
    ? `https://zirconium-dev.github.io/docs/`
    : "",
};

export default withMDX(config);
