import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  btnText: {
    textAlign: 'center',
  },
  primaryBtn: {
    backgroundColor: 'green',
  },
  primaryBtnText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  ghostBtn: {
    backgroundColor: '#80808070',
  },
  ghostBtnText: {
    color: 'black',
    fontWeight: '700',
    fontSize: 16,
  },
});
