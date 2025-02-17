const mix = require('laravel-mix');

mix
  .setPublicPath('dist/')
  .options({
    processCssUrls: false,
  })
  .disableNotifications()
  .js('static/js/app.js', 'dist')
  .js('static/js/admin.js', 'dist')
  .sass('static/scss/app.scss', 'dist')
  .sass('static/scss/admin.scss', 'dist')
  .js('src/Blocks/Blocks.js', 'dist/blocks.build.js')
  .sass('src/Blocks/editor.scss', 'dist/block-editor.build.css')
  .copy('src/Blocks/**/*.png', 'dist/block-editor-images/')
  .options({
    autoprefixer: {
      options: {
        browsers: ['defaults', '> .5% in US', 'last 3 iOS versions', 'ie >= 10'],
      },
    },
  })
  .extract()
  .autoload({
    jquery: ['$', 'window.jQuery'],
  })
  .browserSync({
    proxy: 'https://skela.ups.dock',
    files: ['dist/**/*.+(css|js)', '*.php', 'templates/**/*.twig'],
  });
