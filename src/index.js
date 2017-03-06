import React, { Component}from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
const API_KEY = 'AIzaSyDtVa7xP1YFhge1ApGoR0JWVENKd3wvLCw';
import VideoList from './components/video_list'
import VideoDetail from './components/vid_detail'


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

    this.videoSearch('surfboards');
    }
    videoSearch(term) {
     YTSearch({key: API_KEY, term: term},(videos) =>  {
        this.setState({
            videos: videos,
            selectedVideo: videos[0]
        });
    //in ES6 this single 'videos' resolves to this.setState({videos:videos});
    });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={term => videoSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos}/>

            </div>
        );
    }
}

//Take the component's generated H TML and put it on the page.


ReactDOM.render(<App />, document.querySelector('.container')) ;


