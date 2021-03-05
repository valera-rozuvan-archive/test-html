define(function () {
  let interval = null

  const tryToStopLoader = function () {
    if (window.__stop_loader) {
      window.clearInterval(interval)

      window.__stop_loader(function () {
        console.log('Done!')
      })
    }
  }

  const stopLoader = function () {
    interval = window.setInterval(tryToStopLoader, 10)
  }

  return stopLoader
})
