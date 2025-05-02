/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        domains : ['storage.googleapis.com'],
        remotePatterns : [
            {
                protocol : 'http',
                hostname : 'storage.googleapis.com',
            },
        ]
    }
};

export default nextConfig;
