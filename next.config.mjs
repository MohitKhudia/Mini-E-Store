/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        domains : ['images.pexels.com'],
        remotePatterns : [
            {
                protocol : 'http',
                hostname : 'images.pexels.com',
            },
        ]
    }
};

export default nextConfig;
