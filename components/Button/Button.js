import React from 'react';
import { Text, VrButton } from 'react-360';

import { styles } from './styles';
export class Button extends React.Component {
  state = {
    hover: false,
  };

  render() {
    return (
      <VrButton
        style={this.state.hover ? styles.hover : styles.button}
        onEnter={() => this.setState({ hover: true })}
        onExit={() => this.setState({ hover: false })}
        onClick={this.props.onClick}
      >
        <Text style={{ textAlign: 'center' }}>
          {this.props.room.split('_').join(' ')}
        </Text>
      </VrButton>
    );
  }
}
