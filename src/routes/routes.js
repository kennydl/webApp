import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// eslint-disable-next-lines

import {
  // foodBlogPath,
  // analyticsPath,
  // otherPath,
  reactStartPath,
  aboutMePath
  // loginPath
} from './routePaths';

// import Header from '../components/pageLayout/header/header';
import routeWrapper from './routeComponent';
import { createGlobalStyle } from 'styled-components';
import globalCss from '../util/globalStyle';
import ReactStart from '../App';

const GlobalStyle = createGlobalStyle`
  ${globalCss}
`;

class NoMatch extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push(reactStartPath);
    }, 500);
  }

  render() {
    return <h2>400 Bad Request</h2>;
  }
}

class AboutMe extends Component {
  render() {
    return <div>This is a start!</div>
  }
}

export const routes = (
  <BrowserRouter>
    <div className="container">
      <GlobalStyle />
      {/* <Header /> */}
      <Switch>
        <Route exact path={reactStartPath} component={routeWrapper(ReactStart)} />
        <Route exact path={aboutMePath} component={routeWrapper(AboutMe)} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </BrowserRouter>
);
