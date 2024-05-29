/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
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

export default nextConfig;
