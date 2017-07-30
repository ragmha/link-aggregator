/*
 *
 * LinkListContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {} from './constants';

const initialState = fromJS({
  links: [
    {
      description: 'The very library we are working with now',
      url: 'https://github.com/facebook/react',
      topicName: 'links',
      id: 'fake',
      voteCount: 0,
      voters: []
    }
  ]
});

function linkListContainerReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default linkListContainerReducer;
