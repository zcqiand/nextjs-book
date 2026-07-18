// packages/marketing/next.config.js
const NextFederationPlugin = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'marketing',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          shell: `shell@http://localhost:3000/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        exposes: {
          './nav': './components/nav.tsx',
          './footer': './components/footer.tsx',
        },
        shared: {
          react: { singleton: true, eager: true, requiredVersion: false },
          'react-dom': { singleton: true, eager: true, requiredVersion: false },
        },
      })
    );
    return config;
  },
};

module.exports = nextConfig;