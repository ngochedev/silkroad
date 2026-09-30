import type { NextConfig } from "next";
import macros from 'unplugin-parcel-macros';

// Create a single instance shared between client and server builds
const macroPlugin = macros.webpack();
  

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.plugins.push(macroPlugin);

    // Group React Spectrum S2 dynamic style macros into a consolidated chunk
    config.optimization.splitChunks ||= {};
    config.optimization.splitChunks.cacheGroups ||= {};
    config.optimization.splitChunks.cacheGroups.s2 = {
      name: "s2-styles", 
      test(module: {type?: string; identifier?: () => string }) {
        const identifier = module.identifier?.() ?? '';
        return (
          module.type === "css/mini-extract" && module.identifier?.().includes("@react-spectrum/s2") ||
          /macro-(.*?)\.css/.test(identifier)
        );
      },
      chunks: 'all',
      enforce: true,
    }
    return config;
  },
};

export default nextConfig;
