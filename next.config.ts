import type { NextConfig } from "next";

// Trigger redeploy — Jun 2026 (post major update)
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval';
  style-src 'self' 'unsafe-inline';
  img-src * blob: data:;
  connect-src *;
  font-src 'self' data:;
  frame-src 'self' https://www.google.com https://www.google.ro https://maps.google.com;
`.replace(/\n/g, '');

const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy,
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  experimental: {
    optimizePackageImports: ["framer-motion", "react-icons"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },
  async redirects() {
    return [
      {
        source: "/course-info",
        destination: "/despre-meditatii",
        permanent: true,
      },
      {
        source: "/pricing",
        destination: "/planuri",
        permanent: true,
      },
      {
        source: "/tos",
        destination: "/termeni-si-conditii",
        permanent: true,
      },
      {
        source: "/subiecte-oficiale-evaluare-nationala",
        destination: "/subiecte-oficiale-evaluarea-nationala",
        permanent: true,
      },
      {
        source: "/simulari-bacalaureat",
        destination: "/simulari-judetene-bacalaureat",
        permanent: true,
      },
      {
        source: "/simulari-evaluare-nationala",
        destination: "/simulari-judetene-evaluarea-nationala",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  /* config options here */
};

export default nextConfig;
