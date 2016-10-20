import { combineReducers } from 'redux';
import projects from './projects';
import auth from './auth';
import feedback from './feedback';

const rootReducer = combineReducers({
  projects,
  auth,
  feedback,
});

export default rootReducer;
