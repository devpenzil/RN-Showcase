import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#00000090',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  card: {
    backgroundColor: 'white',
    width: '100%',
    padding: 30,
    borderRadius: 14,
    alignItems: 'center',
  },
  heading: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '800',
    marginVertical: 20,
  },
  content: {
    textAlign: 'center',
    lineHeight: 20,
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 6,
    borderWidth: 1,
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  buttonText: {
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});
