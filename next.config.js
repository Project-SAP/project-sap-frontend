/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        PORT: 3000,
        API_BASE_PATH: 'http://localhost:8080'
    }
}

module.exports = nextConfig
