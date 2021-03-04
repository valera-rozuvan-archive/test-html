(function () {
  requirejs.config({
    baseUrl: 'scripts/',
    paths: {},
  });

  requirejs(['ready', 'initApp', 'stopLoader'], function (ready, initApp, stopLoader) {
    ready(function () {
      initApp();
      stopLoader();
    })
  })
})()
