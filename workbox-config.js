module.exports = {
  globDirectory: 'build/',
  globPatterns: [
    '**/*.{png,svg,ico,jpg,mp3,css,html}'
  ],
  globIgnores: [
    '**/node_modules/**/*',
    'sw.js',
    'workbox-*.js'
  ],
  swDest: 'build/sw.js',
};
