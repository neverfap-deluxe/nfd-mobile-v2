const fse = require('fs-extra');
const { generateProperTitle } = require('./generateUtil');

const generateFinalExportStatement = allContentNamesExport =>
  `export default { ${allContentNamesExport} }`;

const generateContentHeader = () =>
  `
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
`;

const generateContent = (item, properTitle, type) =>
  `
export class ${properTitle} extends Component {
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
      title: "${item.title}",
      artist: 'Julius Reade',
      albumArtUrl: "https://neverfapdeluxe.com/images/logo.png",
      audioUrl: "${item.mp3Url}",

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
`;

const generateAudioFilesAll = (items, type) => {
  let allContent = '';
  let allContentNamesExport = '';

  for (const item of items) {
    const properTitle = generateProperTitle(item.title);
    allContentNamesExport += `${properTitle},`;
    allContent += generateContent(item, properTitle, 'all');
  }

  const template = `${generateContentHeader()}\n${allContent}\n${generateFinalExportStatement(
    allContentNamesExport
  )}\n`;
  fse.outputFileSync(`src/content/${type}/index.tsx`, template, [{}]);
};

module.exports = {
  generateAudioFilesAll,
  // generatePodcastFiles,
};

// const generateFiles = (items, type) => {
//   for (const item of items) {
//     const properTitle = generateProperTitle(item.title);
//     const template = `${generateContentHeader()}\n ${generateContent(
//       item,
//       properTitle,
//       'single'
//     )}`;
//     fse.outputFileSync(`src/content/${type}/${properTitle}.tsx`, template, [
//       {},
//     ]);
//   }
// };
