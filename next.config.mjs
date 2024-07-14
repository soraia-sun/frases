/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/frases",
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
