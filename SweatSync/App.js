import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GymInfo from "./components/Gyminfo"; 

export default function App() {
  const gyms = [
    {
      name: "Gym A",
      address: "123 Main St",
      activities: ["Yoga", "Pilates"]
    },
    {
      name: "Gym B", 
      address: "456 Park Ave",
      activities: ["Basketball", "Boxing"]
    }
  ]; 

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {renderGymCards(gyms)}
    </View>
  );
}

function renderGymCards(gyms) {
  return gyms.map(gym => (
    <GymInfo 
        key={gym.name}
        name={gym.name} 
        address={gym.address}
        activities={gym.activities}
    />
  ));
}

export const getCurrentLocation = (simulator) => {
  return async (dispatch) => {
    if (!simulator) {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);

      if (status !== 'granted') {
        dispatch(gotCurrentLocationError('Permission to access location was denied'))
      }

      let location = await Location.getCurrentPositionAsync({});
      dispatch(gotCurrentLocation(location))
    } else {
      // Demo location for simulator
      dispatch(gotCurrentLocation(chicagoFSA))
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
