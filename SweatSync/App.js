import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Sidebar from './components/Sidebar';
import GymInfo from "./components/Gyminfo"; 
import React from "react";
import "./style.css";
import Map from "./components/Map";

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
    // <View style="styles.container">
    //   <Map />
    // <View />
    //<React.Fragment>
      <Sidebar />
      //{renderGymCards(gyms)}
    //</React.Fragment>
  )
};

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

export const HomeScreen = () => {
    return (
        <div className="home-screen">
            <div className="overlap-group-wrapper">
                <div className="overlap-group">
                    <div className="streamline-interface" />
                    <img className="screenshot" alt="Screenshot" src="screenshot-2023-10-21-121613-1.png" />
                    <img className="vector" alt="Vector" src="vector.svg" />
                    <p className="any-plans-for-the">
                        <span className="text-wrapper">Any plans for the day?</span>
                        <span className="span">&nbsp;</span>
                    </p>
                    <img className="subway-up" alt="Subway up" src="subway-up-2.svg" />
                    <img className="ph-map-pin-fill" alt="Ph map pin fill" src="ph-map-pin-fill.svg" />
                    <img className="img" alt="Ph map pin fill" src="image.svg" />
                </div>
            </div>
        </div>
    );
};
