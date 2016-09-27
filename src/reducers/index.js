import { combineReducers } from 'redux';
import videoList from './video_list_reducer';
import selectedVideo from './selected_video_reducer';

const rootReducer = combineReducers({
  	videoList,
  	selectedVideo
});

export default rootReducer;
