import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  // this inner function will be called for each video in the array
  const renderedList = videos.map((video) => {
    return <VideoItem />;
  });
  // props.videos - array of different records
  return <div>{renderedList}</div>;
};

export default VideoList;
