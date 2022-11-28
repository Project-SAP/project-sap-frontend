/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    // webpack: (config) => {
    //     config.node = {
    //         fs: 'empty'
    //     }
    // }
}

module.exports = nextConfig
