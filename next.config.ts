import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "**.werlabs.se" },
      { protocol: "https", hostname: "werlabs.se" },
      { protocol: "https", hostname: "**.cerascreen.se" },
      { protocol: "https", hostname: "**.cerascreen.com" },
      { protocol: "https", hostname: "**.testmottagningen.se" },
      { protocol: "https", hostname: "**.diagnostikdirekt.se" },
      { protocol: "https", hostname: "**.biovis.se" },
      { protocol: "https", hostname: "**.verisana.se" },
      { protocol: "https", hostname: "**.verisana.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "**.apotekhjartat.se" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/werlabs-recension/",
        destination: "/recension/werlabs/",
        permanent: true,
      },
      {
        source: "/cerascreen-recension/",
        destination: "/recension/cerascreen/",
        permanent: true,
      },
      {
        source: "/testmottagningen-recension/",
        destination: "/recension/testmottagningen/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
