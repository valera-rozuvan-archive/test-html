(function () {
  let interval = null

  function tryToStopLoader() {
    if (window.__stop_loader) {
      window.clearInterval(interval)

      window.__stop_loader(function () {
        console.log('Done!')
      })
    }
  }

  function stopLoader() {
    interval = window.setInterval(tryToStopLoader, 10)
  }

  define(function () {
    return stopLoader
  })
})()
