import{combineReducers} from 'redux';


const songsReducers = () => {
  return [
    {title: 'No Scrubs', duration: '4:05'},
    {title: 'All Star', duration: '2:05'},
    {title: 'Hello', duration: '3:25'},
    {title: 'Hero', duration: '2:25'},
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
}

export default combineReducers({
  songs: songsReducers,
  selectedSong: selectedSongReducer 
})