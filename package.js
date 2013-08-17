Package.describe({
  summary: "jQuery Cycle - slideshow plugin that supports many different types of transition effects"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files([
    'lib/jquery.cycle.all.js'
  ], 'client'
  );
});
