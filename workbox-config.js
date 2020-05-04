module.exports = {
  globDirectory: 'build/',
  globPatterns: [
    '**/*.{png,svg,ico,jpg,mp3,css,html}'
  ],
  swDest: 'build/sw.js',

  // Define runtime caching rules.
  runtimeCaching: [{
    // Match any request that ends with .png, .jpg, .jpeg or .svg.
    urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

    // Apply a cache-first strategy.
    handler: 'CacheFirst',

    options: {
      // Use a custom cache name.
      cacheName: 'images',

      // Only cache 10 images.
      expiration: {
        maxEntries: 10,
      },
    },
  }],
};
