import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  card: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },

    shadowRadius: 20,
    elevation: 22,
    backgroundColor: 'white',
  },
  cardHeader: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '900',
  },
  cardValue: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '900',
  },
  cardHeaderComp: {
    display: 'flex',
  },
  measure: {
    width: '100%',
    height: 25,
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
  },
  measureBlock: {
    width: '20%',
    height: 30,
    backgroundColor: 'green',
    borderColor: 'white',
    borderWidth: 1,
  },
});
