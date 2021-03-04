requirejs.config({
  baseUrl: 'scripts/',
  paths: {},
});

requirejs(['ready', 'preact', 'app', 'stopLoader'], function (ready, preact, app, stopLoader) {
  ready(function () {
    app(preact);
    stopLoader();
  })
})
