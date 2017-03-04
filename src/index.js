import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';

const API_KEY = 'AIzaSyDtVa7xP1YFhge1ApGoR0JWVENKd3wvLCw';


//Create a new component.  Should produce some HTML.

const App = () => {
    return <div>
        <SearchBar />
    </div>;
}

//Take the component's generated H TML and put it on the page.


ReactDOM.render(<App />, document.querySelector('.container')) ;


