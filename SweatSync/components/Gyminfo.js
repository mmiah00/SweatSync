import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const GymInfo = ({name, address, activities}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.address}>{address}</Text>
      <View style={styles.activities}>
        {activities.map(activity => (
          <Text key={activity} style={styles.activity}>{activity}</Text>  
        ))}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  address: {
    marginVertical: 10
  },
  activities: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  activity: {
    fontSize: 16,
    marginRight: 10,
    marginBottom: 5
  }
});


export default GymInfo;


























// import React from 'react';
// import {Text} from 'react-native';
// import {View} from 'react-native';
// import {FlatList} from 'react-native';


// const GymInfo = () => {
//     return (
//         <Container>
//             <Text> Central Rock Gym </Text>
//             <Text> 20 Brattle St, Cambridge, MA 02138 </Text>
//             <Text> Offers: </Text>
//             <FlatList
//                 data={[
//                 {key: 'Devin'},
//                 {key: 'Dan'},
//                 {key: 'Dominic'},
//                 {key: 'Jackson'},
//                 {key: 'James'},
//                 {key: 'Joel'},
//                 {key: 'John'},
//                 {key: 'Jillian'},
//                 {key: 'Jimmy'},
//                 {key: 'Julie'},
//                 ]}
//                 renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
//             />
//         </Container>
//     );
// };


// export default GymInfo;


// // export default function Gyminfo () {
// //     return (
// //         <div>
// //             <Text> Central Rock Gym </Text>
// //             <Text> 20 Brattle St, Cambridge, MA 02138 </Text>
// //             <Text> Offers: </Text>
// //             <View style={styles.container}>
// //                 <FlatList
// //                     data={[
// //                     {key: 'Devin'},
// //                     {key: 'Dan'},
// //                     {key: 'Dominic'},
// //                     {key: 'Jackson'},
// //                     {key: 'James'},
// //                     {key: 'Joel'},
// //                     {key: 'John'},
// //                     {key: 'Jillian'},
// //                     {key: 'Jimmy'},
// //                     {key: 'Julie'},
// //                     ]}
// //                     renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
// //                 />
// //             </View>
// //         </div>
// //     );
// // };



