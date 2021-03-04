function stopLoader() {
  let interval = null

  const tryToStopLoader = function () {
    if (window.__stop_loader) {
      window.clearInterval(interval)

      window.__stop_loader(function () {
        console.log('Done!')
      })
    }
  }

  interval = window.setInterval(tryToStopLoader, 10)
}

define(function () {
  return stopLoader
})
