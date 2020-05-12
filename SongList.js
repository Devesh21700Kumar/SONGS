import React,{Component} from 'react';
//same as React.Component if we don't 
//use {Component}\
import {connect} from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component{
renderList(){
    //this.props==={songs:state.songs}
    //console.log(this.props.songs);
    return this.props.songs.map(song=>{
       return(
        <div className='item' key={song.title}>
            <div className='right floated content'>
              <button 
              className='ui button primary'
                  onClick={()=>this.props.selectSong(song)}>
                  SELECT
                  </button>  
            </div>
            <div className='content'>{song.title}</div>
        </div>
       );
    });
}
render(){
    return<div className ='ui divided list'>{this.renderList()}</div>;
}
}

const mapStateToProps =state=>{
    console.log(state);

return {songs: state.songs};
}

//object in {} has a key of selectSong and an action creator
export default connect(mapStateToProps,{selectSong})(SongList);