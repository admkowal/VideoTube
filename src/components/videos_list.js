import React from 'react';
import VideosListItem from '../containers/videos_list_item';

const VideoList = ({videoList}) => {

	return (
		<div className="col-md-4 list-group">
      		{videoList.map( video => 
      			<VideosListItem
      				key={video.etag}
      				video={video}
      			/>
      		)}
    	</div>
	);
}

export default VideoList;