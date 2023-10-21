import React from 'react';
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View } from 'react-native';

const Map = () => {
  let myCoordinate = { latitude: 41.068038, longitude: 29.061824}
  return (
    <MapView style = {styles.map}>
        <Marker coordinate = { myCoordinate } />
    </MapView>
 );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
        width: "100%",
        height: "100%",
    },
});


export default Map;

