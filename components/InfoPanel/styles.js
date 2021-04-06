import { StyleSheet } from 'react-360';

export const styles = StyleSheet.create({
  audioImage: {
    height: 50,
    width: 50,
  },
  infoContent: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  audioPanel: {
    flexDirection: 'row',
  },
  infoPanel: {
    width: 400,
    height: 400,
    opacity: 0.8,
    backgroundColor: 'rgb(255, 200, 50)',
    borderColor: 'rgb(255, 255, 255)',
    borderWidth: 5,
    borderRadius: 20,
  },
  buttonPanel: {
    width: 400,
    height: 400,
    opacity: 0.8,
    backgroundColor: 'rgb(255, 200, 50)',
    borderColor: 'rgb(255, 255, 255)',
    borderWidth: 5,
    borderRadius: 20,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    width: 200,
    backgroundColor: 'rgb(0, 0, 0)',
    borderColor: 'rgb(255, 255, 255)',
    borderWidth: 5,
  },
  hover: {
    width: 200,
    backgroundColor: 'rgb(0, 45, 72)',
    borderColor: 'rgb(255, 255, 255)',
    borderWidth: 5,
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
