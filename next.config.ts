import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    // output: 'standalone',
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.builder.io',
            },
            {
                protocol: 'https',
                hostname: 'cms.chatagent.io',
                pathname: '/assets/**',
            },
        ],
    },
};

export default nextConfig;
