import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Provider } from 'react-redux';
import Routes from './router/index'
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './styles/reset.css';
import './styles/fonts/iconfont.css';
// eslint-disable-next-line
import Loading from './components/Loading';
import store from './redux/store';

/*引用tap事件适配移动端*/
injectTapEventPlugin();

var fun = function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 50 * (clientWidth / 750) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
}
fun(document, window);


class App extends Component {

  /*material-ui 需要配置主题才可以使用*/
  getChildContext() {
      return { muiTheme: getMuiTheme(lightBaseTheme) };
  }

  render() {
    return (
        <Provider store={store}>
          <div className="App">
                <Loading />
                <Routes />
          </div>
        </Provider>
    );
  }
}

App.childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
};

export default App;