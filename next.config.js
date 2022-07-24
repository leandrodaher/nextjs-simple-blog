/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone', /* necessário para o Dockerfile funcionar (make build) */
  /* https://nextjs.org/docs/advanced-features/output-file-tracing */

  /* https://jameschambers.co.uk/nextjs-hot-reload-docker-development */
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
}

module.exports = nextConfig
