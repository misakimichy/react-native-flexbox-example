import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// class FlexboxExamples extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//       <View style={styles.box}/>
//       <View style={styles.box}/>
//       <View style={styles.box}/>
//     </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,

//     // The default is flexDirection: 'column' (vertical).
//     flexDirection: 'row',

//     // Uncomment one of the below items and see how the justifyContent works 
//     // justifyContent: 'flex-start',
//     justifyContent: 'center',
//     // justifyContent: 'flex-end',
//     // justifyContent: 'space-between',
//     // justifyContent: 'space-around',

//     // or uncomment one of the below items and see how the alignItems work
//     // alignItems: 'flex-start',
//     alignItems: 'center',
//     // alignItems: 'flex-end',
//     // alignItems: 'stretch', // kill the width for flexDirection: column or kill the height for flexDirection: row

//   },
//   box: {
//     height: 50,
//     width: 50,
//     backgroundColor: '#e76e63',
//     margin: 10,
//   }
// })

// Check flex property
// const FlexProperty = props => (
//   <View style={styles.container}>
//     <View style={[styles.box, {flex: 1}]}/>
//     <View style={[styles.box, {flex: 2}]}/>
//     <View style={[styles.box, {flex: 1}]}/>
//   </View>
// )

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   box: {
//     width: 50,
//     height: 50,
//     backgroundColor: '#e76e63',
//     margin: 10,
//   }
// })

// Check individual align items
// const IndividualAlign = props => (
//     <View style={styles.container}>
//       <View style={styles.box}/>
//       <View style={[styles.box, {alignSelf: 'flex-start'}]}/>
//       <View style={styles.box}/>
//     </View>
// )

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   box: {
//     width: 50,
//     height: 50,
//     backgroundColor: '#e76e63',
//     margin: 10,
//   }
// })

// Check flex demo
const FlexDemo = props => (
  <View style={{flex: 1}}>
    <View style={{flex: 2, backgroundColor: 'red'}} />
    <View style={{flex: 1, backgroundColor: 'green'}} />
    <View style={{flex: 3, backgroundColor: 'blue'}} />
  </View>
);

// export default FlexboxExamples;
// export default FlexProperty;
// export default IndividualAlign;
export default FlexDemo;