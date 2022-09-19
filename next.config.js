const withPreact = require("next-plugin-preact");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

/**
 * @type {import('next').NextConfig}
 */
module.exports = withBundleAnalyzer(
  withPreact({
    productionBrowserSourceMaps: true,
    swcMinify: true,
    poweredByHeader: false,
    reactStrictMode: false,
    env: {
      DISTRIBUTION: process.env.DISTRIBUTION
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
      // config.resolve.extensions.push(".svg");
      // config.module.rules.push({
      //   test: /\.svg$/,
      //   use: [
      //     {
      //       loader: "svg-inline-loader",
      //       options: {
      //         removeSVGTagAttrs: false
      //       }
      //     }
      //   ]
      // });
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });

      // Important: return the modified config
      return config;
    }
  })
);

// images: {
//   loader: "imgix",
//   path: "",
//   deviceSizes: [1920, 1500, 1000, 500, 300],
//   imageSizes: []
// },

// compiler: {
//   reactRemoveProperties: true
// },
// exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
//   return {
//     "/": { page: "/" },
//   };
// },

// exportPathMap: async function (
//   defaultPathMap,
//   { dev, dir, outDir, distDir, buildId }
// ) {
//   return {
//     '/': { page: '/' },
//   }
// },
