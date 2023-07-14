/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "elon26.github.io",
                port: "",
                pathname: "/sotka-study/**",
            },
        ],
    },
};

module.exports = nextConfig;
