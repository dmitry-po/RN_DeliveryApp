import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  windowview: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    borderRadius: 5,
    opacity: 0.95,
    margin: 5,
    padding: 5
  }
})
export default styles

/*export default function getStyles() {
  const style = (StyleSheet.create({
    windowview: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      alignContent: 'flex-start',
      borderRadius: 5,
      opacity: 0.95,
      margin: 5,
      padding: 5
    }
  }))
  return style
}
*/
