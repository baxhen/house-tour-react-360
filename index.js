import { AppRegistry } from 'react-360';

import { connect } from './store';

import { ButtonPanel } from './components/ButtonPanel/ButtonPanel';
import { InfoPanel } from './components/InfoPanel/InfoPanel';

const ConnectedButtonPanel = connect(ButtonPanel);
const ConnectedInfoPanel = connect(InfoPanel);

AppRegistry.registerComponent('Buttons', () => ConnectedButtonPanel);
AppRegistry.registerComponent('InfoPanel', () => ConnectedInfoPanel);
