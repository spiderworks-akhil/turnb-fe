/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/, // Handle font files
      use: {
        loader: 'file-loader',
        options: {
          outputPath: 'static/fonts', // Output fonts to the /static/fonts folder
          publicPath: '/_next/static/fonts', // Public path to access fonts
          name: '[name].[ext]', // Keep original font names
        },
      },
    });

    return config;
  },
};

export default nextConfig;
