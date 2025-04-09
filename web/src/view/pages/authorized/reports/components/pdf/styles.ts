import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
  page: {
    fontSize: 11,
    paddingTop: 20,
    paddingLeft: 40,
    paddingRight: 40,
    lineHeight: 1.5,
    flexDirection: 'column',
  },

  spaceBetween: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#3E3E3E',
  },

  titleContainer: { flexDirection: 'row', marginTop: 24 },

  logo: { width: 40, height: 40 },

  reportTitle: { fontSize: 16, textAlign: 'center' },
  reportP: { fontSize: 12, textAlign: 'center' },

  theader: {
    marginTop: 20,
    paddingTop: 4,
    paddingLeft: 7,
    fontStyle: 'bold',
    fontSize: 10,
    flex: 1,
    backgroundColor: '#CCC',
    borderColor: 'whitesmoke',
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },

  theader2: { flex: 2 },

  tbody: {
    fontSize: 9,
    paddingTop: 4,
    paddingLeft: 7,
    flex: 1,
    borderColor: 'whitesmoke',
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },

  tbody2: { flex: 2, borderRightWidth: 1 },
});
