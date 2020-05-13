

import axios from 'axios';


const KEY = 'AIzaSyBmVUOYKNN81OAqq8X2lH6VpZLNiK_u20E';
export default axios.create({
  

  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }

});