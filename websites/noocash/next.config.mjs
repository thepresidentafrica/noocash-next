/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";
const nextConfig = {
    output: 'standalone',
    reactStrictMode: true, 
    swcMinify: true, 
    compiler: {
        removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
      },
    experimental: {
        disableOptimizedLoading: true
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'https://play.google.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'https://www.apple.com/app-store/',
                port: '',
            }
        ]
    }
};

 const WES= withPWAInit({
    dest: "public", // Destination directory for the PWA files
    disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
    register: true, // Register the PWA service worker
    skipWaiting: true, // Skip waiting for service worker activation
  });

export default WES(nextConfig);
