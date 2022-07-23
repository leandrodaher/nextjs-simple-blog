/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone', /** necessário para o Dockerfile funcionar (make build) */
  /** https://nextjs.org/docs/advanced-features/output-file-tracing */
}

module.exports = nextConfig
