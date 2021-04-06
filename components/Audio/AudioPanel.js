import React from 'react';
import { View, VrButton, NativeModules, Image, asset } from 'react-360';

const { AudioModule } = NativeModules;

import { styles } from './styles';

export class AudioPanel extends React.Component {
  state = {
    on: true,
  };
  playAmbientMusic() {
    AudioModule.playEnvironmental({
      source: asset(this.props.source),
      volume: 0.3,
    });
  }
  stopAmbientMusic() {
    AudioModule.stopEnvironmental();
  }

  componentDidMount() {
    this.playAmbientMusic();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.on && !prevState.on) {
      this.playAmbientMusic();
    }
    if (!this.state.on && prevState.on) {
      this.stopAmbientMusic();
    }
  }
  render() {
    return (
      <View style={styles.audioPanel}>
        <VrButton onClick={() => this.setState({ on: !this.state.on })}>
          {this.state.on ? (
            <Image style={styles.audioImage} source={asset('audioOn.png')} />
          ) : (
            <Image style={styles.audioImage} source={asset('audioOff.png')} />
          )}
        </VrButton>
      </View>
    );
  }
}
