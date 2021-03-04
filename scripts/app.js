function app(preact) {
  const h = preact.h
  const render = preact.render

  const app = h('h1', null, 'Hello World!');
  render(app, document.body);
}

define(function () {
  return app
})
