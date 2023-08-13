/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  optimizeFonts: true,
  distDir: "build",
  images: {
    domains: ['localhost', 'img.freepik.com', 'gamecust.ru'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-ap-northeast-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "gamecust.ru",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "static1.cbrimages.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "assets.reedpopcdn.com",
      },
      {
        protocol: "https",
        hostname: "jw-webmagazine.com",
      },
      {
        protocol: "https",
        hostname: "i.kinja-img.com",
      },
      {
        protocol: "https",
        hostname: "assets3.thrillist.com",
      },
      {
        protocol: "https",
        hostname: "www.pixelstalk.net",
      },
      {
        protocol: "https",
        hostname: "avatars.mds.yandex.net",
      },
      {
        protocol: "https",
        hostname: "avatars.mds.yandex.net",
      },
    ],
    minimumCacheTTL: 15000000,
  },
}

module.exports = nextConfig
