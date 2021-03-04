requirejs.config({
  baseUrl: 'scripts/',
  paths: {},
});

requirejs(['ready'], function (ready) {
  ready(function () {
    console.log('Hello, world!')

    if (window.__stop_loader) {
      window.__stop_loader()
    }
  })
})