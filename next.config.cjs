import nextMDX from '@next/mdx'
import rehypePrism from 'rehype-prism-plus'
import rehypeCodeTitles from 'rehype-code-titles'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  fs: false,
  path: false,

}

const withMDX = nextMDX.default({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypeCodeTitles, rehypePrism],
  },
})

export default withMDX(nextConfig)