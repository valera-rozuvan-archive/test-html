(function (createClass, preact, h, render) {
  // function app() {
  //   const app = h('h1', null, 'Hello World!');
  //   render(app, document.getElementById('a'));
  // }

  function initApp() {
    /** Example classful component */
    var App = createClass({
      componentDidMount: function () {
        this.setState({ message: 'Hello!' });
      },
      render: function (props, state) {
        return (
          h('div', { id: 'app' },
            h(Header, { message: state.message }),
            h(Main)
          )
        );
      }
    });

    /** Components can just be pure functions */
    var Header = function (props) {
      return h('header', null,
        h('h1', null, 'App'),
        props.message ? h('h2', null, props.message) : null
      );
    }

    /** Instead of JSX, use: h(type, props, ...children) */
    var Main = createClass({
      render: function () {
        var items = [1, 2, 3, 4, 5].map(function (item) {
          return h('li', { id: item }, 'Item ' + item);
        });
        return (
          h('main', null,
            h('ul', null, items)
          )
        );
      }
    });

    render(h(App), document.getElementById('a'));
  }

  define(['preact', 'createClass'], function (_preact, _createClass) {
    createClass = _createClass
    preact = _preact
    h = _preact.h
    render = _preact.render

    return initApp
  })
})()
