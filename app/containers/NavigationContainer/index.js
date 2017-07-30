/*
 *
 * NavigationContainer
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectNavigationContainer from './selectors';
import Navigation from '../../components/Navigation';
import { requestTopics } from './actions';

export class NavigationContainer extends Component {
  static propTypes = {
    requestTopics: React.PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.requestTopics();
  }

  render() {
    return <Navigation {...this.props} />;
  }
}

const mapStateToProps = selectNavigationContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestTopics: () => dispatch(requestTopics()),
    selectTopic: topic => console.log('SELECTED TOPIC:', topic)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  NavigationContainer
);
