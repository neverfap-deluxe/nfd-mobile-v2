
  import React, { Component } from 'react';
  import {
    View,
    Text,
    StatusBar,
  } from 'react-native';
  // import { Header } from '../../screens/contentAudio/components/Header';
  import { AlbumArt } from '../../screens/contentAudio/components/AlbumArt';
  // import TrackDetails from './TrackDetails';
  import { SeekBar } from '../../screens/contentAudio/components/SeekBar';
  import { ControlsSingle } from '../../screens/contentAudio/components/ControlsSingle';
  import Video from 'react-native-video';


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


export class EP1ObserveWhatYouSee extends Component {
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
    const { paused, totalLength, isChanging, currentPosition, selectedTrack, repeatOn, shuffleOn }: any = this.state;
    const track = {
      title: "EP1 - Observe What You See",
      artist: 'Julius Reade',
      albumArtUrl: "https://neverfapdeluxe.com/images/logo.png",
      audioUrl: "https://s3.castbox.fm/1d/10/e3/9239a649bb85addc36d0754c3a.mp3",

    }

    const video = isChanging ? null : (
      <Video source={{uri: track.audioUrl}}
        ref="audioElement"
        paused={paused}
        resizeMode="cover"
        repeat={true}
        onLoad={this.setDuration.bind(this)}
        onProgress={this.setTime.bind(this)}
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

export default { EP1ObserveWhatYouSee, }
