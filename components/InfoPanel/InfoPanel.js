import React from 'react';
import { Text, View } from 'react-360';

import { changeRoom } from '../../store';

import { styles } from './styles';

export class InfoPanel extends React.Component {
  onClick(roomSelection) {
    changeRoom(roomSelection);
  }
  render() {
    return (
      <View>
        <View style={styles.infoPanel}>
          <Text style={styles.header}>Room Info</Text>
          <Text style={styles.infoContent}>{this.props.info}</Text>
        </View>
      </View>
    );
  }
}
