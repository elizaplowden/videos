import React from 'react';

const VideoList = props => {
  // props.videos - array of different records
  return <div>{props.videos.length}</div>;
};

export default VideoList;
