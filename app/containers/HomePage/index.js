/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { Component } from 'react';
import NavigationContainer from '../../containers/NavigationContainer';
import LinkListContainer from '../../containers/LinkListContainer';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <NavigationContainer />
        <LinkListContainer />
      </div>
    );
  }
}
