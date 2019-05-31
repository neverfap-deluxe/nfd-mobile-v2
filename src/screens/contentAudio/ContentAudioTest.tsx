import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
} from 'react-native';
// import { Header } from './components/Header';
import { AlbumArt } from './components/AlbumArt';
// import TrackDetails from './TrackDetails';
import { SeekBar } from './components/SeekBar';
import { ControlsSingle } from './components/ControlsSingle';
import Video from 'react-native-video';

export class ContentAudioScreen extends Component {
  constructor(props: any) {
    super(props);

    this.state = {
      paused: true,
      totalLength: 1,
      currentPosition: 0,
      selectedTrack: 0,
      repeatOn: false,
      shuffleOn: false,
    };
  }

  setDuration(data: any) {
    // console.log(totalLength);
    this.setState({totalLength: Math.floor(data.duration)});
  }

  setTime(data: any) {
    //console.log(data);
    this.setState({currentPosition: Math.floor(data.currentTime)});
  }

  seek(time: any) {
    time = Math.round(time);
    this.refs.audioElement && this.refs.audioElement.seek(time);
    this.setState({
      currentPosition: time,
      paused: false,
    });
  }

  render() {
    const { paused, totalLength, isChanging, currentPosition, selectedTrack, repeatOn, shuffleOn } = this.state;
    const { track } = this.props;

    const video = isChanging ? null : (
      <Video source={{uri: track.audioUrl}} // Can be a URL or a local file.
        ref="audioElement"
        paused={paused}               // Pauses playback entirely.
        resizeMode="cover"           // Fill the whole screen at aspect ratio.
        repeat={true}                // Repeat forever.
        // onLoadStart={this.loadStart} // Callback when video starts to load
        onLoad={this.setDuration.bind(this)}    // Callback when video loads
        onProgress={this.setTime.bind(this)}    // Callback every ~250ms with currentTime
        // onEnd={this.onEnd}           // Callback when playback finishes
        // onError={this.videoError}    // Callback when video cannot be loaded
        style={styles.audioElement} />
    );

    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {/* <Header message="Playing From Charts" /> */}
        <AlbumArt url={track.albumArtUrl} />
        {/* <TrackDetails title={track.title} artist={track.artist} /> */}
        <SeekBar
          onSeek={this.seek.bind(this)}
          trackLength={totalLength}
          onSlidingStart={() => this.setState({paused: true})}
          currentPosition={currentPosition} />
        <ControlsSingle
          onPressRepeat={() => this.setState({repeatOn : !repeatOn})}
          repeatOn={repeatOn}
          // shuffleOn={shuffleOn}
          // forwardDisabled={selectedTrack === tracks.length - 1}
          // onPressShuffle={() => this.setState({shuffleOn: !shuffleOn})}
          onPressPlay={() => this.setState({paused: false})}
          onPressPause={() => this.setState({paused: true})}
          // onBack={this.onBack.bind(this)}
          // onForward={this.onForward.bind(this)}
          paused={paused}/>
        {video}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'rgb(4,4,4)',
  },
  audioElement: {
    height: 0,
    width: 0,
  }
};
