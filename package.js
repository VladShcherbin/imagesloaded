Package.describe({
  name: 'shcherbin:imagesloaded',
  version: '3.1.8',
  summary: 'Images loaded js wrapper for meteor. Detect when images have been loaded! With no cache support.',
  git: 'https://github.com/VladShcherbin/imagesloaded',
  documentation: 'readme.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.use('jquery', 'client');
  api.addFiles('vendor/imagesloaded.pkgd.js', 'client');
});