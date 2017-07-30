/**
*
* Navigation
*
*/

import React from 'react';

import styles from './styles.css';
import AppBar from '../AppBar';

function Navigation({ topics, selectTopic, toggleDrawer }) {
  const topicNodes = topics.map(topic =>
    <div key={topic.name} onClick={() => selectTopic(topic)}>
      {topic.name}
    </div>
  );
  return (
    <div className={styles.navigation}>
      <AppBar toggleDrawer={toggleDrawer} />
      {topicNodes}
    </div>
  );
}

Navigation.propTypes = {
  toggleDrawer: React.PropTypes.func.isRequired,
  topics: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      description: React.PropTypes.string.isRequired
    })
  ).isRequired,
  selectTopic: React.PropTypes.func.isRequired
};

export default Navigation;
