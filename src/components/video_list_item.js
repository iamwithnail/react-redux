/**
 * Created by chris on 04/03/2017.
 */
import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    // that {video} means that the first props has a property called video
    // equivalent to const video = props.video;
    const imageUrl = video.snippet.thumbnails.default.url;

    return  (
        <li onClick={ () => onVideoSelect(video)} className="list-group-item">
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={imageUrl}/>

                    </div>
                    <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>
    </div>
            </li>
    );
};

export default VideoListItem;
