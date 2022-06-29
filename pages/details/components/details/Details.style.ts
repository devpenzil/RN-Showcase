import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  cardView: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  card: {
    borderRadius: 14,
    paddingVertical: 15,
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.1,
    shadowRadius: 16.0,

    elevation: 24,
  },
  cardHead: {
    fontSize: 14,
    marginTop: 6,
    textAlign: 'center',
    fontWeight: '800',
  },
  cardPercent: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '800',
  },
  measure: {
    width: '80%',
    height: 30,
    borderRadius: 10,
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  measureBlock: {
    width: '20%',
    backgroundColor: '#f0f0f0',
    height: '100%',
    overflow: 'hidden',
    borderRightColor: 'white',
    borderRightWidth: 1,
  },
  active: {
    backgroundColor: 'green',
  },
});
