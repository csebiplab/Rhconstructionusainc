/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        domains: ["laz-img-cdn.alicdn.com"]
    }
}

module.exports = nextConfig
