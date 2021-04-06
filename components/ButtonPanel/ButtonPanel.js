import React from 'react';
import { Text, View } from 'react-360';

import { changeRoom } from '../../store';
import { AudioPanel } from '../Audio/AudioPanel';
import { Button } from '../Button/Button';
import { styles } from './styles';

export class ButtonPanel extends React.Component {
  onClick(roomSelection) {
    changeRoom(roomSelection);
  }

  createRoomButtons(adjacentRooms) {
    let rooms = adjacentRooms;
    let buttons = [];

    rooms.forEach((room) =>
      buttons.push(
        <Button
          key={`${room}-button`}
          room={room}
          onClick={() => this.onClick(room)}
        />
      )
    );

    return buttons;
  }
  render() {
    return (
      <View>
        <View style={styles.buttonPanel}>
          <Text style={styles.header}>Room Selection</Text>
          {this.createRoomButtons(this.props.adjacentRooms)}
          <AudioPanel source="audio/ambient.wav" />
        </View>
      </View>
    );
  }
}
