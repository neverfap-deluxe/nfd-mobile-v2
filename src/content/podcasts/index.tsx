
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


export class EP1MyPersonalNoFapPornRecoveryJourney extends Component {
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
      title: "EP1 - My Personal NoFap Porn Recovery Journey",
      artist: 'Julius Reade',
      albumArtUrl: "https://neverfapdeluxe.com/images/logo.png",
      audioUrl: "https://s3.castbox.fm/66/20/68/ec65604b629039a70032004ae5.mp3",

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

export class EP2WhatExactlyConstitutesAsRelapse extends Component {
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
      title: "EP2 - What Exactly Constitutes As Relapse?",
      artist: 'Julius Reade',
      albumArtUrl: "https://neverfapdeluxe.com/images/logo.png",
      audioUrl: "https://s3.castbox.fm/c5/4a/a3/279daf47498636f85ccbc0cbff.mp3",

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

export class E03HowToBecomeComfortableWithYourEmotions extends Component {
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
      title: "E03 - How To Become Comfortable With Your Emotions",
      artist: 'Julius Reade',
      albumArtUrl: "https://neverfapdeluxe.com/images/logo.png",
      audioUrl: "https://s3.castbox.fm/38/31/f8/2162f94cd6938b6ed3452269b9.mp3",

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

export class EP4HowAwarenessHelpsUsRemainInControl extends Component {
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
      title: "EP4 - How Awareness Helps Us Remain In Control",
      artist: 'Julius Reade',
      albumArtUrl: "https://neverfapdeluxe.com/images/logo.png",
      audioUrl: "https://s3.castbox.fm/5c/04/b7/e8388c4fd49d1159db3725ad5b.mp3",

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

export class E05TheImportanceOfMaintainingBalance extends Component {
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
      title: "E05 - The Importance Of Maintaining Balance",
      artist: 'Julius Reade',
      albumArtUrl: "https://neverfapdeluxe.com/images/logo.png",
      audioUrl: "https://s3.castbox.fm/4a/a4/56/f9c28a4389abae2c31ba0ee61d.mp3",

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

export class EP6TheFallacyOfJudgementAndSelfCriticism extends Component {
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
      title: "EP6 - The Fallacy Of Judgement And Self-Criticism",
      artist: 'Julius Reade',
      albumArtUrl: "https://neverfapdeluxe.com/images/logo.png",
      audioUrl: "https://s3.castbox.fm/66/20/68/ec65604b629039a70032004ae5.mp3",

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

export default { EP1MyPersonalNoFapPornRecoveryJourney,EP2WhatExactlyConstitutesAsRelapse,E03HowToBecomeComfortableWithYourEmotions,EP4HowAwarenessHelpsUsRemainInControl,E05TheImportanceOfMaintainingBalance,EP6TheFallacyOfJudgementAndSelfCriticism, }
